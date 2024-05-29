# Chat-Application
[Meta](https://www.meta.com/) has developed and launched the Meta Llama 3 family of Large Language Models (LLMs), comprising pretrained and instruction-tuned generative text models in 8 and 70 billion sizes. For details please refer to [Meta Llama 3](https://llama.meta.com/llama3/). 

In this project, I built a chat website with AI Text Generation using the Meta-Llama-3-8B model provided by Meta and fine-tuned by myself. Complete instructions for creating my fine tune version of Meta-Llama-3-8B are available from me at [lakieungocthang/Meta-Llama-3-8B-Fine-tuning](https://huggingface.co/lakieungocthang/Meta-Llama-3-8B-Fine-tuning).

All the terms and conditions for using Llama 3 models list provided by Meta including of the [License](https://llama.meta.com/llama3/license/?fbclid=IwZXh0bgNhZW0CMTAAAR1pJ5EPm-GMgFhfFPMKcXxQ7nUBzElDoxkeXqBER-qiAu1hEva_S8tnagY_aem_AYQHpGrQvIH7FuRunDU0qBGNLZrdQfPrBEx5hyWu2UYcf0d5M4-EljlTkxnDCNXdtFcS4hgDmSCfvXdbzZA65bwv) and [Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/?fbclid=IwZXh0bgNhZW0CMTAAAR1POL5AgbdEydJMSXgNp-wS3cZ3wzPwjvHPWmjZ5qhDuDwjFoxOTZQ0Ing_aem_AYRYpm8ASvcnyKx6DH7HSID11XCMGu9JC-gyogADMC3whzqBqMKJhJtYl-MmeuYSHaSyPH1LEeq3ZRurRsTtRvMN) and Meta's [privacy policy](https://www.facebook.com/privacy/policy/).

## How to run this project

Basically if you need to install Python 3.11, and NPM 10.7 (download details [here](https://nodejs.org/en/download/package-manager)). Besides, using a Unix family operating system such as Linux (including some distributions such as [Ubuntu](https://ubuntu.com/) or [Debian](https://www.debian.org/)) is recommended. And the key thing is to make sure your computer has some NVIDIA drivers installed.

### I. For those not equipped with Docker

#### Step 1: Clone this repository.

```bash
git clone https://github.com/lakieungocthang/Chat-Application
```



#### Step 2: Run server.

##### Install necessary packages

```bash
cd chat_backend
pip install -r requirements.txt
```

##### Run server

```bash
python manage.py migrate
python manage.py runserver
```

#### Step 3: Run client-side.


```bash
cd chat_frontend
npm install
npm start
```

#### Step 4: Just use the product.

Visit http://localhost:3000/ to experience the product.

### II. For Docker equipped

I'm really not sure if it will run well on your computer because I've tried it on a few computers and some of them work, I need to check this again, but you can try. The work is extremely simple, you just need to clone my repository and in the main directory, execute the following command:

```bash
sudo docker-compose up --build
```

However, you need to install NVIDIA Container Toolkit, detailed installation instructions [here](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#)

### And finally, thanks for visiting my warehouse, I never claim my product is the best and I will always improve it every day.