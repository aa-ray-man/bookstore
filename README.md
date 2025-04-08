# 📚 Bookstore RESTful API

## 🚀 Features
A simple Node.js + Express.js + MongoDB REST API for managing a bookstore with authentication, filtering, search, and error handling.

- JWT-based user authentication (Signup/Login)
- CRUD operations on books (Create, Read, Update, Delete)
- Filtering and searching by author, category, rating, and title
- Input validation and centralized error handling

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/bookstore-api.git
cd bookstore-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create .env file
```bash
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
```

### 4. Start the server
```bash
npm run start
```



---

## Endpoints

### 🔐 Authentication Routes

#### Signup  
**POST** `/api/auth/signup`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepass"
}
```
#### Login  
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepass"
}
```

###  Book Routes (Protected)

#### Create a new book  
**POST** `/api/books`

**Request Body:**
```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "category": "Self-help",
  "price": 19.99,
  "rating": 4.8,
  "publishedDate": "2018-10-16"
}
```

#### Get All Books  
**GET** `/api/books`

**Filter Example:**
```pgsql
GET /api/books?author=James Clear&search=habit
```
#### Get Book by ID  
**GET** `/api/books/:id`

#### Update book by ID  
**PUT** `/api/books/:id`

**Request Body:**
```json
{
  "price": 15.99,
  "rating": 4.9
}
```

#### Delete Book by ID
**DELETE** `/api/books/:id`





