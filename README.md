# 🚗 AutoCare – Vehicle Service Booking Platform

AutoCare is a **vehicle service booking platform** built with **React, Firebase, and Firestore**.
It connects **vehicle owners and service providers** through a modern web application that allows users to book services, track appointments, and manage vehicle maintenance efficiently.

The platform also includes a powerful **Admin Dashboard** for managing appointments, mechanics, users, and service products.

---

# 🌐 Overview

AutoCare simplifies the vehicle servicing workflow by providing:

* Online booking for vehicle service appointments
* Real-time service status tracking
* Automated email notifications
* Integrated service product store
* Administrative control panel for managing system operations

---

# ✨ Key Features

## 👤 User Features

* Secure authentication using **Firebase Authentication**
* Book vehicle service appointments
* Track appointment status
* Cancel appointments
* Manage personal profile
* Browse vehicle service products
* Add products to cart

---

## 🛠 Admin Features

* Complete **Admin Dashboard**
* Manage users and mechanics
* Accept / Reject service requests
* Mark service as completed
* Manage service products
* Handle customer contact queries

---

## 📩 Notification System

Email notifications using **EmailJS** when:

* Appointment is accepted
* Appointment is rejected
* Service is completed

---

# ⚙️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS

## Backend / Cloud

* Firebase Authentication
* Firestore Database
* Firebase Hosting

## Tools

* GitHub
* Git (Version Control)

---

# 📁 Project Structure

```text
AutoCare
│
├── .github
│   └── workflows
│       └── firebase-hosting-pull-request.yml
│
├── public
│
├── src
│   │
│   ├── assets
│   │   └── assets_frontend
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Banner.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── SearchBar.jsx
│   │   └── StoreHeader.jsx
│   │
│   ├── context
│   │   ├── AuthContext.jsx
│   │   ├── AppointmentContext.jsx
│   │   └── CartContext.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Services.jsx
│   │   ├── Store.jsx
│   │   ├── Appointment.jsx
│   │   ├── MyAppointments.jsx
│   │   ├── MyProfile.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminAppointments.jsx
│   │   ├── AdminUsers.jsx
│   │   ├── AdminMechanics.jsx
│   │   ├── AdminProducts.jsx
│   │   └── AdminContact.jsx
│   │
│   ├── utils
│   │   ├── firebase.jsx
│   │   └── uploadProducts.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── firestore.rules
├── firestore.indexes.json
├── package.json
├── vite.config.js
└── .gitignore






