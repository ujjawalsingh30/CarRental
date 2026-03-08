

# 🚗 Car Rental Website (MERN Stack)

<p align="center">
  <img src="client/public/a1.png" alt="Prescripto Homepage Screenshot" />
</p>

A full-stack ***Car Rental** Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to browse cars, book rentals, and manage bookings, while the admin can manage cars and reservations.

🌐 **Live Website:** https://car-rental-gamma-lime.vercel.app/

📦 **Repository:** https://github.com/ujjawalsingh30/CarRental

---

## ✨ Features

### 👤 User Features
- User Registration & Login
- JWT Authentication with Cookies
- Browse available cars
-  View booking history
- Contact support
- Responsive UI with Toast Notifications

### 🛍 Product Management
- Product Listing
- Product Images Upload
- Cloudinary Media Storage
- Stock & Price Handling

### 🔐 Security & Payments
- Password Hashing with bcrypt
- JWT-based Authentication
- Secure Cookie Handling
- Stripe Checkout Integration

> GreenCart is built as a **real-world e-commerce system**, not a UI-only demo.

---

## 🛠 Tech Stack

### 🌐 Frontend

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=ffffff)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=ffffff)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=ffffff)
![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FF5722?logo=react&logoColor=ffffff)

---

### 🖥 Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=ffffff)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=ffffff)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=ffffff)
![Mongoose](https://img.shields.io/badge/Mongoose-888888?logo=mongodb&logoColor=ffffff)
![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=ffffff)


---

### 🔌 Utilities & Services


![Multer](https://img.shields.io/badge/Multer-FF6F00?logo=node.js&logoColor=ffffff)
![bcrypt](https://img.shields.io/badge/bcrypt-4285F4?logo=bcrypt&logoColor=ffffff)
![dotenv](https://img.shields.io/badge/dotenv-000000?logo=dotenv&logoColor=ffffff)
![CORS](https://img.shields.io/badge/CORS-FF6347?logo=cors&logoColor=ffffff)

---

## 📁 Project Structure

```

├── screenshots/
│   ├── home.png
│   └── checkout.png
│
└── README.md

carrental/
│
├── client/                     # Frontend (React + Vite)
│   ├── node_modules/           # Project dependencies
│   ├── public/                 # Static files
│   │
│   ├── src/                    # Main source folder
│   │   ├── assets/             # Images, icons, and static assets
│   │   ├── components/         # Reusable React components
│   │   ├── context/            # Global state management (React Context)
│   │   ├── pages/              # Application pages
│   │   │
│   │   ├── App.jsx             # Main App component
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   │
│   ├── .env                    # Frontend environment variables
│   ├── .gitignore              # Git ignored files
│   ├── eslint.config.js        # ESLint configuration
│   ├── index.html              # Root HTML file
│   ├── package.json            # Frontend dependencies
│   ├── README.md               # Frontend documentation
│   ├── vercel.json             # Vercel deployment config
│   └── vite.config.js          # Vite configuration
│
├── server/                     # Backend (Node.js + Express)
│   ├── configs/                # Database and external service configurations
│   ├── controllers/            # Business logic for APIs
│   ├── middleware/             # Authentication and custom middleware
│   ├── models/                 # MongoDB schemas (Mongoose)
│   ├── routes/                 # API route definitions
│   ├── node_modules/           # Backend dependencies
│   │
│   ├── .env                    # Backend environment variables
│   ├── .gitignore              # Git ignored files
│   ├── package.json            # Backend dependencies
│   ├── package-lock.json       # Dependency lock file
│   └── server.js               # Main backend entry point
│
└── README.md                   # Project documentation

```

---

## 🧠 How Car Rantel Works

### 🔐 Authentication
- Passwords hashed using **bcrypt**
- JWT tokens stored in **HTTP-only cookies**
- Protected routes using middleware

### Cars Data
- Product data stored in MongoDB
- Images uploaded using **Multer**
- Media hosted on **ImageKit**


---

## 👤 User APIs
These APIs handle user registration, login, and user-related operations.
| Method | Endpoint             | Description                |
| ------ | -------------------- | -------------------------- |
| POST   | `/api/user/register` | Register a new user        |
| POST   | `/api/user/login`    | Login user                 |
| GET    | `/api/user/profile`  | Get logged-in user profile |


## 🚗 Owner APIs
These APIs allow car owners/admins to manage cars in the system.

| Method | Endpoint                    | Description                 |
| ------ | --------------------------- | --------------------------- |
| POST   | `/api/owner/add-car`        | Add a new car               |
| GET    | `/api/owner/cars`           | Get all cars added by owner |
| PUT    | `/api/owner/update-car/:id` | Update car details          |
| DELETE | `/api/owner/delete-car/:id` | Delete a car                |

---

## ⚙️ Environment Variables

Create a `.env` file inside **server/**:

```

##################################
# Database
##################################
MONGO_URI=your_mongodb_connection_string

##################################
# Authentication
##################################
JWT_SECRET=your_jwt_secret

##################################
# ImageKit
##################################
IMAGEKIT_PUBLIC_KEY = your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY = your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT = your_imagekit_url_endpoint
##################################


```

⚠️ Never commit `.env` files to GitHub.

---

## 🚀 Getting Started

### Backend
```
cd server
npm install
npm run server 
```

### Frontend
```
cd client
npm install
npm run dev
```

---

## 📈 Future Improvements

- Admin Dashboard
- Add new cars
- Update car details
-Delete cars
- View all bookings
- Manage cars
- Role-based Access (Admin / User)

---

## Project Screenshots

🗂 Categories Section

Displays product categories like Organic Vegetables, Fresh Fruits, Dairy Products, Bakery, and Grains with attractive visuals for easy browsing.
<p align="center">
  <img src="client/public/a2.png" alt="Prescripto Homepage Screenshot" />
</p>

🛒 All Products Page

A grid-based product listing showing item images, categories, ratings, discounted prices, and an “Add to Cart” option.
<p align="center">
  <img src="client/public/a4.png" alt="Prescripto Homepage Screenshot" />
</p>

🛍 Shopping Cart Page

Shows selected products with quantity, subtotal, and remove options along with an order summary and payment method selection.
<p align="center">
  <img src="client/public/a3.png" alt="Prescripto Homepage Screenshot" />
</p>

💳 Checkout / Payment Page

Secure checkout interface allowing users to enter contact details and complete payments using card or online payment options (test mode enabled).
<p align="center">
  <img src="client/public/a5.png" alt="Prescripto Homepage Screenshot" />
</p>

---

## 🏁 Conclusion

**CarRental** is a production-style vehicle booking platform built with the MERN stack, featuring user authentication, car management, booking functionality, and secure backend APIs.

