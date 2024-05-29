# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app/backend

# Install git
RUN apt-get update && apt-get install -y git

# Copy requirements.txt
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Start the server
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver"]