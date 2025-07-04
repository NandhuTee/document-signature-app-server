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

**1\. User Authentication**

*   **JWT-based login & registration**
*   **bcrypt** is used to securely hash passwords
*   Middleware ensures protected routes can only be accessed by authenticated users  
    🔒 _Secure session management for each user_

**2\. PDF Upload & Storage**

*   Uses **Multer** to handle PDF file uploads
*   Stores file metadata in MongoDB (file name, size, upload date, user ID)
*   Uploaded PDFs are stored locally or in cloud storage

**3\. Signature Metadata API**

*   Stores signature coordinates, size, type (typed, drawn, or image), page number, and font/color if applicable
*   Allows multiple signatures per PDF, uniquely identified and editable

json

CopyEdit

{

"documentId": "abc123",

"userId": "xyz456",

"type": "typed",

"text": "Nandhini",

"x": 120,

"y": 350,

"width": 150,

"height": 40,

"page": 1,

"font": "Pacifico",

"color": "#000000"

}

**4\. PDF Processing & Finalization**

*   Uses **pdf-lib** to embed typed text, image, or drawn signatures into the actual PDF
*   Coordinates are adjusted based on **A4 page scaling**
*   Final signed PDF is generated and streamed back to the client for download

**5\. Audit Trail (Optional Feature)**

*   Logs signature status updates (e.g., "signed", "pending", "rejected")
*   Tracks timestamps and user activity for document access

**📑 Backend Routes Summary**

| Method | Route | Purpose |
| --- | --- | --- |
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and receive a JWT token |
| POST | /api/docs/upload | Upload a PDF file |
| GET | /api/docs/ | List all uploaded PDFs for a user |
| GET | /api/docs/:id | View a specific document |
| POST | /api/signatures | Save signature data |
| GET | /api/signatures/:docId | Retrieve signature data for a PDF |
| POST | /api/signatures/finalize | Embed signatures and return signed PDF |
| GET | /api/audit/:docId (opt) | Audit log for document actions |

**🚀 Tools & Libraries Used in Backend**

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
