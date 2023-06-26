# Specify the base image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the server code, requirements, and Dockerfile to the container
COPY code_executer.py /app/code_executer.py
COPY requirements.txt /app/requirements.txt
COPY Dockerfile /app/Dockerfile

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the required port
EXPOSE 5000

# Define the command to start the server
CMD [ "python", "code_executer.py" ]