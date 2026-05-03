# Dolph Search Backend Server

This is the backend server for Dolph Search authentication using Node.js, Express, SQLite, and JWT.

## Setup Instructions

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:3001`

## API Endpoints

### POST /api/register
Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### POST /api/login
Login an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### GET /api/verify
Verify a JWT token.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "valid": true,
  "user": {
    "userId": 1,
    "email": "john@example.com"
  }
}
```

## Database

The server uses SQLite database (`users.db`) which is automatically created on first run. The database has a `users` table with the following schema:

- `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT)
- `name` (TEXT, NOT NULL)
- `email` (TEXT, UNIQUE, NOT NULL)
- `password` (TEXT, NOT NULL, hashed)
- `created_at` (DATETIME, DEFAULT CURRENT_TIMESTAMP)

## Security Notes

- Passwords are hashed using bcrypt before storage
- JWT tokens expire after 7 days
- Change the `JWT_SECRET` in `server.js` before production deployment
- This is a basic implementation - for production, consider adding:
  - Rate limiting
  - Email verification
  - Password reset functionality
  - More secure session management
