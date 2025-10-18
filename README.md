

# HomeHunt

A modern full-stack real-estate application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🚀 What it does

HomeHunt allows users to register, sign in, and create property listings. Key features include:

* Secure authentication using JWT & bcrypt.
* Uploading property images via Firebase.
* Full CRUD operations for property listings (create, read, update, delete).
* Search and filtering of listings.
* Protected routes to ensure only authorized actions.
* Fully responsive front-end UI for desktop & mobile.

## 🧰 Tech Stack

**Frontend:**

* React.js
* React Router
* Tailwind CSS

**Backend:**

* Node.js & Express.js
* MongoDB with Mongoose
* JWT (JSON Web Tokens) for auth
* bcryptjs for password hashing

**Other Tools:**

* Firebase (image uploads)
* dotenv for environment variables
* Axios for HTTP requests

## 🎯 Why it’s useful

In today’s fast-paced property market, HomeHunt provides a streamlined platform for users to list and browse properties in one place. The combination of a modern UI with powerful backend services makes it a practical, scalable solution for real estate applications.

## 🔧 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Harshthakur22/HomeHunt.git  
   ```
2. Install dependencies for both client and server:

   ```bash
   cd HomeHunt/client && npm install  
   cd ../api && npm install  
   ```
3. Create a `.env` file in the API folder with your environment variables (e.g., MongoDB URI, JWT secret, Firebase config).
4. Run both servers:

   ```bash
   // from project root  
   npm run dev  
   ```
5. Open `http://localhost:3000` (or whichever port you configured) in your browser.

## 📂 Project Structure

```
HomeHunt/
├── api/        # backend: Express, MongoDB, Mongoose
├── client/     # frontend: React + Tailwind
└── socket/     # (if applicable) any real-time or socket-based features
```

## ✅ How you can contribute

* Report bugs or suggest new features via GitHub Issues.
* Fork the repo, create a branch (e.g., `feature-name`), commit your changes, and open a Pull Request.
* Ensure your code is clean, readable, and includes relevant documentation.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

## 📞 Contact

Created by [Harsh Thakur](https://github.com/Harshthakur22). Feel free to connect via GitHub for any questions or suggestions.

---




