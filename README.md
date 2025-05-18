Backend
URL
https://arnifi-blog-backend-3s0g.onrender.com/

Tech Stack
Node.js

Express.js

MongoDB (Atlas or local)

Mongoose ODM

JWT Authentication

Bcrypt for password hashing

CORS enabled

Features
User registration and login with JWT-based auth

CRUD operations for blogs

Filtering blogs by category and author (case-insensitive search for author)

Protected routes for blog creation, editing, and deletion

Error handling with proper status codes

Setup & Run Locally
Clone the backend repository:

bash
Copy
Edit
git clone <backend-repo-url>
cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root folder and add the following variables:

ini
Copy
Edit
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
Start the server:

bash
Copy
Edit
npm run dev
The backend server will run on http://localhost:5000 (or the port you set).

Common
Environment Variables Summary
Variable	Description
REACT_APP_API_URL	Frontend: Base URL for backend API
PORT	Backend: Server listening port
MONGODB_URI	Backend: MongoDB connection string
JWT_SECRET	Backend: JWT secret key for auth

Deployment
Frontend deployed on Netlify: https://arnifiblog.netlify.app/

Backend deployed on Render: https://arnifi-blog-backend-3s0g.onrender.com/

Make sure to update your frontend .env with the backend URL after deployment.

Usage
Visit the frontend URL, sign up or log in.

Browse blogs or filter by category or author.

Create, edit, or delete blogs if logged in.

Enjoy a responsive and smooth user experience.

