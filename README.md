# 🚗 Mechano – Vehicle Service Booking Platform

Mechano is a **vehicle service booking platform** built with **React, Firebase, and Firestore**.
It connects **vehicle owners and service providers** through a modern web application that allows users to book services, track appointments, and manage vehicle maintenance efficiently.

The platform also includes a powerful **Admin Dashboard** for managing appointments, mechanics, users, and service products.

---

# 🌐 Overview

Mechano simplifies the vehicle servicing workflow by providing:

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

* EmailJS
* Git (Version Control)

---

# 📁 Project Structure

```text
mechano
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
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/62jhaanuj-dotcom/mechano.git
```

Navigate to project folder

```bash
cd mechano
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

# 🔐 Environment Setup

Create a `.env` file in the root directory and add your Firebase configuration.

Example:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

---

# 📦 Build Project

```bash
npm run build
```

---

# ☁ Deployment

You can deploy the project using:

### Firebase Hosting

```bash
firebase deploy
```

---




