# Use base image with Python 3.11
FROM python:3.11

# Add steps to install GPU driver and Nvidia Container Toolkit
# Update system and install dependencies
RUN apt-get update && \
    apt-get install -y \
        sudo \
        apt-transport-https \
        ca-certificates \
        gnupg \
        curl \
        wget \
        && \
    rm -rf /var/lib/apt/lists/*

# Install GPU driver
RUN sudo apt-key adv --fetch-keys http://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/7fa2af80.pub && \
    wget http://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin && \
    sudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600 && \
    wget http://developer.download.nvidia.com/compute/cuda/11.5.0/local_installers/cuda-repo-ubuntu2004-11-5-local_11.5.0-495.29.05-1_amd64.deb && \
    sudo dpkg -i cuda-repo-ubuntu2004-11-5-local_11.5.0-495.29.05-1_amd64.deb && \
    sudo apt-get update && \
    sudo apt-get -y install cuda-drivers cuda

# Install Nvidia Container Toolkit
RUN distribution=$(. /etc/os-release;echo $ID$VERSION_ID) && \
    curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - && \
    curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list && \
    sudo apt-get update && \
    sudo apt-get install -y nvidia-container-toolkit && \
    sudo systemctl restart docker

# Add steps to install PyTorch and dependencies
# Install PyTorch dependencies
RUN pip install torch torchvision torchaudio

# Copy necessary files from backend into the container
COPY . /app

# Set working directory
WORKDIR /app

# Install required Python libraries
RUN pip install -r requirements.txt

# Declare entrypoint or default command
CMD ["python", "app.py"]
