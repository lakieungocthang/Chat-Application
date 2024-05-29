# chat/views.py
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from unsloth import FastLanguageModel
import json

# # Load the model and tokenizer
# max_seq_length = 2048
# dtype = None
# load_in_4bit = True

# model, tokenizer = FastLanguageModel.from_pretrained(
#     model_name="lakieungocthang/Meta-Llama-3-8B-Fine-tuning",
#     max_seq_length=max_seq_length,
#     dtype=dtype,
#     device_map="auto",
#     load_in_4bit=load_in_4bit,
# )

# FastLanguageModel.for_inference(model)

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username', '')
        password = data.get('password', '')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'Invalid credentials'}, status=401)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username', '')
        password = data.get('password', '')
        if User.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'error': 'Username already exists'}, status=400)
        else:
            user = User.objects.create_user(username=username, password=password)
            return JsonResponse({'success': True})
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def chat(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        instruction = data.get('instruction', '')
        
        if(instruction == "Hello"):
            response = "Hi"
        if(instruction == "How are you?"):
            response = "I am fine"
        if(instruction == "What is your name?"):
            response = "My name is Meta Llama"
        if(instruction == "Who is Newton?"):
            response = "He is the creator of the universe"
        # # Generate response based on user input
        # response = generate_response_with_question(instruction, max_tokens=100)
        
        return JsonResponse({'response': response})
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

# # Function to generate response
# def generate_response_with_question(question, max_tokens=100):
#     prompt = "### Question: {}\n ### Answer: {}"
#     inputs = tokenizer(
#         [prompt.format(question, "")],
#         return_tensors="pt"
#     ).to("cuda")

#     outputs = model.generate(**inputs, max_new_tokens=max_tokens, use_cache=True)
#     decoded_output = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
#     answer_index = decoded_output.rfind("### Answer:")
    
#     extracted_text = decoded_output[answer_index + len("### Answer:"):].strip() if answer_index != -1 else decoded_output
    
#     return extracted_text