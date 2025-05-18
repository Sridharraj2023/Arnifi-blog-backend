## Backend

### URL  
[https://arnifi-blog-backend-3s0g.onrender.com/](https://arnifi-blog-backend-3s0g.onrender.com/)

### Tech Stack  
- Node.js  
- Express.js  
- MongoDB (Atlas or local)  
- Mongoose ODM  
- JWT Authentication  
- Bcrypt for password hashing  
- CORS enabled  

### Features  
- User registration and login with JWT-based auth  
- CRUD operations for blogs  
- Filtering blogs by category and author (case-insensitive search for author)  
- Protected routes for blog creation, editing, and deletion  
- Error handling with proper status codes  

### Setup & Run Locally

1. Clone the backend repository:

   ```bash
   git clone <backend-repo-url>
   cd backend
2. Install dependencies:

npm install

3. Create a .env file in the root folder and add the following variables:

4. .env
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>

5. Start the server:


npm run dev
The backend server will run on http://localhost:5000 (or the port you set).


---

### Explanation

- Use `##` or `###` for headers (with a space after the hashes).  
- Use triple backticks with language identifiers for syntax highlighting:  
  - ```bash for shell commands  
  - ```env for environment variable files  
  - ```js or ```javascript for JavaScript code (if you add code snippets)  

This way your README renders clean, with **highlighted commands and config** sections, and visually distinct headers.

---

If you want me to prepare the **full backend section** with these highlights integrated or any code snippet with syntax highlight, just ask!


