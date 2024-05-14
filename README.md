# Auditorium Request Application

The Auditorium Request Application simplifies the process of booking auditoriums for college events. Faculty members can easily submit requests, specifying details like their name, department, event date, and required auditorium. Administrators can then efficiently manage these requests, approving, rejecting, or canceling them as needed. Built on modern technologies like React.js for the frontend and AWS Lambda functions, DynamoDB, API Gateway, IAM, and CloudWatch for the backend, the architecture ensures seamless performance and efficient management of auditorium requests.

![Auditorium-Request-Architecture-Diagram](https://github.com/santhoshprabhuV2003/auditorium-booking-app/assets/138225962/c147ee90-d2ea-4805-9e62-37b8158c5a5f)

## Getting Started

To get started with the Auditorium Request Application, follow these steps:

### Prerequisites

- Node.js installed on your machine
- AWS account with necessary permissions

### Installation

1. Clone or download the repository from GitHub.

    ```bash
    git clone https://github.com/your-username/auditorium-request.git
    ```

2. Navigate to the project directory.

    ```bash
    cd auditorium-booking-app
    ```

3. Install dependencies.

    ```bash
    npm install
    ```

## AWS Setup

Before deploying the application, you need to set up the required AWS services.

### Lambda Functions

1. Create Lambda functions for handling request submission, approval, rejection, and cancellation.

### DynamoDB

1. Create a DynamoDB table to store auditorium requests.

### API Gateway

1. Set up an API Gateway to expose endpoints for the frontend to communicate with Lambda functions.

2. Configure CORS settings to allow requests from the frontend domain.

### IAM Roles

1. Create IAM roles with appropriate permissions for Lambda functions to interact with other AWS services.

### CloudWatch

1. Set up CloudWatch alarms and logs for monitoring the application's performance and error handling.

## Usage

Once the AWS setup is complete, you can deploy the frontend and start using the Auditorium Request Application. Ensure that the necessary permissions are granted to access the application from the frontend.

## Application Images

![updated-requests](https://github.com/santhoshprabhuV2003/auditorium-booking-app/assets/138225962/7758e773-5883-44ad-8112-711802e82016)

![new-auditorium-request](https://github.com/santhoshprabhuV2003/auditorium-booking-app/assets/138225962/b72eba55-a203-473a-bd24-84de83fcd9fb)

![updating-request](https://github.com/santhoshprabhuV2003/auditorium-booking-app/assets/138225962/07725014-24e6-421a-bb72-26974e01dd42)

![responsive-home-page](https://github.com/santhoshprabhuV2003/auditorium-booking-app/assets/138225962/7c7df32a-91a2-4f40-8293-11dc2532cafa)

![responsive-new-request-page](https://github.com/santhoshprabhuV2003/auditorium-booking-app/assets/138225962/f3e9a32c-7088-4747-9325-4da65d6fd37b)
