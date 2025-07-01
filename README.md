# Signature App Server

This is the backend API for the Signature App built using:

- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer file upload

## Setup

npm install
npm run dev

```sql
Create a `.env` file with:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/signatureapp
JWT_SECRET=your_secret
```

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/docs/upload`
- `GET /api/docs`

