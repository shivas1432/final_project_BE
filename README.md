# Vapeshop_reat_Backend
This is the backend for the Vapeshop application built using Node.js and Express. It integrates with a MySQL database and offers features such as user authentication via Google OAuth, various API routes for the frontend to communicate with, and more.

## **Features**
User Authentication: OAuth-based login using Google.
User Routes: Includes routes for login, registration, and user profile management.
Database Integration: Uses MySQL for storing user data and session information.
Chat API: API for handling chat-related functionalities.
File Uploads: Allows file uploads via API for projects, etc.
Reference and Contact Management: API routes to manage references and contacts.
UK Cities Data: API route for managing UK city data.
Session Management: Handles user sessions using express-session.

## **Technologies Used**
Backend: Node.js, Express
Authentication: Google OAuth
Database: MySQL (using mysql2 library)
Session Management: Express-Session
API Routes: Custom routes for managing user, project actions, contact, chat, and references
Other: Passport.js (for authentication), CORS (for enabling cross-origin requests)
## **Setup Instructions**
Prerequisites
Node.js: You must have Node.js installed on your local machine.
MySQL: A running instance of MySQL is required, and you must configure the database connection.
Step 1: Clone the Repository
Clone this repository to your local machine:

git clone https://github.com/shivas1432/final_project_BE.git
cd resume
Step 2: Install Dependencies
Install the necessary dependencies using npm:

npm install
Step 3: Create a ## **.env**File
Create a .env file in the root directory of your project and include the following variables:

DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=your_password
DB_DATABASE=social

JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

EMAIL=your_email
EMAIL_PASSWORD=your_email_password
SESSION_SECRET=your_session_secret_key
GEMINI_API_KEY=your_gemini_api_key
[Use your deatails for successful functionality]

Step 4: Start the Server
Run the server:

npm start
The server should now be running on port 8081 or any other port specified in the .env file.

Step 5: Test the Server
To test if everything is working, you can navigate to http://localhost:8081/ in your browser. You should see the message: "Server is up and running!".

You can also check the database connection with:

http://localhost:8081/db-status
## **Available Routes**
POST /api/register: Register a new user.
POST /api/login: Login with credentials.
GET /api/guests: Get guest-related data.
GET /api/contact: Get contact details.
GET /api/references: Manage references.
GET /api/chat: Chat-related actions.
GET /api/projects: Manage project actions.
Google OAuth Routes:
/auth/google — Redirects to Google login.
/auth/google/callback — Handles Google OAuth callback.