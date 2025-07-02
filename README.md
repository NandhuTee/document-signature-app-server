# Signature App Server

- This is the backend API for the Signature App built using:

- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer file upload

## Setup

- npm install
- npm run dev

``` sql
-Create a `.env` file with:

- PORT=5000
-MONGO_URI=mongodb://127.0.0.1:27017/signatureapp
-JWT_SECRET=your_secret
```

### API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/docs/upload`
- `GET /api/docs`

| Technology          | Purpose / Description                                         |
| ------------------- | ------------------------------------------------------------- |
| **Node.js**         | JavaScript runtime for building the backend server            |
| **Express.js**      | Web framework for routing and handling HTTP requests          |
| **MongoDB Atlas**   | Cloud NoSQL database for storing user and document data       |
| **Mongoose**        | ODM (Object Data Modeling) to interact with MongoDB easily    |
| **Multer**          | Middleware for handling `multipart/form-data` (file uploads)  |
| **bcryptjs**        | For hashing user passwords securely                           |
| **jsonwebtoken**    | For generating and verifying JWT tokens (user authentication) |
| **dotenv**          | For loading environment variables from `.env` file            |
| **nodemon**         | Auto-restarts server on file changes (for development)        |
| **CORS (optional)** | To enable cross-origin requests (especially for frontend)     |
