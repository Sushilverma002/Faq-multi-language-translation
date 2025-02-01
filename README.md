# Faq-multi-language-translation

# FAQ Backend Application

This is a Node.js-based backend application for managing FAQs with multilingual support, WYSIWYG editor integration, and caching using Redis. The application provides a REST API to fetch and create FAQs in multiple languages.

## **Features**

- **Multilingual FAQs**: Supports FAQs in multiple languages (e.g., English, Hindi, Bengali).
- **Caching**: Uses Redis to cache FAQ translations for improved performance.
- **REST API**: Provides endpoints to fetch and create FAQs.
- **Automated Translations**: Uses Google Translate API to automatically translate FAQs during creation.
- **Docker Support**: Easily deployable using Docker and Docker Compose.

---

## **Technologies Used**

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building the REST API.
- **MongoDB**: Database for storing FAQs.
- **Redis**: Caching layer for storing translations.
- **Google Translate API**: For automated translations.
- **Docker**: added compose.yml for docker support..

---

---

## **Middleware**

- **Redis**: redis config.

---

## **Installation**

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Redis
- Docker (optional)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Sushilverma002/Faq-multi-language-translation.git
   cd Faq-multi-language-translation





   # VRV-BackendDeveloper-InternTask
   ```

This repo contain implementation of RBAC Service.

# **User Management API**

This project implements a user management system with authentication and **Role-Based Access Control (RBAC)**. It allows user registration, login, logout, and CRUD operations. The API is built using **Node.js**, **Express.js**, and **MongoDB**.

---

## **Features**

- **User Authentication**:
  - Secure login/logout using JWT tokens.
  - Password hashing for enhanced security.
- **Role-Based Access Control (RBAC)**:

  - Admin, Moderator, and User roles with specific access permissions.
  - Access control middleware to restrict routes based on roles.

- **CRUD Operations**:

  - Create, Read, Update, and Delete user data.
  - Prevent password exposure in API responses.

- **Token Validation**:
  - Endpoint to validate active JWT tokens.

---

## **Technologies Used**

- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.
- **JWT (JSON Web Token)**: For secure authentication and token-based session management.

---

## **Installation**

To set up this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sushilverma002/VRV-BackendDeveloper-InternTask
   cd VRV-BackendDeveloper-InternTask
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project with the following content:

   ```
   DB_URL="mongodb://localhost:27017/vrv-RBAC-microservice"

   PORT=4001
   JWT_SECRET=user-management
   ADMIN_API_KEY= admin-only-access

   # for mail sending
   MAILER_USER=
   MAILER_PASS=
   HOST=
   ```

4. **Run the project**:
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:4001`.

---

## **API Endpoints**

### **User Routes**

- **POST /signUp**: Registers a new user.
- **POST /login**: Logs in a user and returns a JWT token.
- **POST /logout**: Logs out the user by invalidating the JWT token.
- **PUT /update/:id**: Updates user information (Admin-only access).
- **DELETE /delete/:id**: Deletes a user (Admin-only access).
- **GET /:id**: Fetches data for a single user (Admin-only access).
- **GET /usersvalues**: Retrieves a list of user data (Admin and Moderator access).
- **GET /validateToken**: Validates a JWT token.

## **Example Request/Response**

### **POST /login**

**Request**:

```json
{
  "email": "user@example.com",
  "password": "userpassword"
  "role":"Admin"
}
```
