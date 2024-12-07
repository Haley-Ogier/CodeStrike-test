# Stage 1: Node.js Environment
FROM node:14 as node-backend

# Set working directory for the Node.js app
WORKDIR /app

# Copy and install dependencies for the backend
COPY backend/package.json ./package.json
RUN npm install

# Copy the backend source code
COPY backend/ .

# Expose the port for the Node.js app
EXPOSE 3001

# Command to run the Node.js app
CMD ["node", "app.js"]

# Stage 2: Python Environment
FROM python:3.10-slim as python-sandbox

# Set the working directory for Python
WORKDIR /sandbox/temp

# Copy any necessary Python dependencies
# If requirements.txt exists, uncomment the next two lines
# COPY requirements.txt .
# RUN pip install -r requirements.txt

# Default command for Python
CMD ["python3"]
