# Zerodha Full-Stack Web Application 📈

A full-stack fintech web application inspired by Zerodha's trading ecosystem (Kite & Marketing). Built using a micro-frontend structure featuring a dedicated marketing application, a protected trading dashboard, a Node.js/Express REST API, and MongoDB Atlas persistence.

---

## 🚀 Tech Stack

### **Frontend & Dashboard**
* **React.js** (Component-Based UI Architecture)
* **HTML5 / CSS3 / JavaScript (ES6+)**
* **Chart.js & React-Chartjs-2** (Data Visualization: Doughnut & Bar Graphs)
* **React Router DOM** (Client-side Routing)
* **Axios** (HTTP Client)
* **React Toastify** (Action Notifications)

### **Backend & Database**
* **Node.js & Express.js** (RESTful API Server)
* **MongoDB Atlas & Mongoose** (Cloud Database & Object Data Modeling)
* **JSON Web Tokens (JWT) & bcrypt.js** (Authentication & Password Hashing)
* **CORS & Body-Parser** (Middleware Configuration)

### **Version Control**
* **Git / GitHub** (Repository & Branch Management)

---

## ✨ Key Features & Highlights

* 🏗️ **Micro-Frontend Architecture:** Separate React client apps operating across different ports to decouple public marketing pages from the active trading dashboard.
* 💼 **Dynamic Portfolio Holdings & Positions:** Real-time rendering of user investment records fetched directly from MongoDB collections.
* 📊 **Interactive Data Visualizations:** Integrated `Chart.js` for visual breakdowns of stock prices, holding distributions, and asset allocations.
* 🛒 **Order Execution & Holdings Sync:** Placing BUY or SELL market orders dynamically updates stock quantities in the MongoDB Atlas database.
* 🔐 **Authentication Flow:** User signup and login processing with password hashing (`bcrypt`) and JWT token emission.

---

## 📁 Repository Structure

```text
Zerodha_fullstack_project/
├── backend/          # Express REST API server, schemas, Mongoose models, & DB connection
├── dashboard/        # React trading dashboard app (Holdings, Orders, Positions, Charts)
├── frontend/         # React marketing landing pages (Home, About, Signup, Login)
└── README.md

## ▶️ How to Run the Project (Basic)

# clone the repository
git clone https://github.com/Tiyatiwari/Zerodha_fullstack_project.git

# go to project directory
cd Zerodha_fullstack_project

# install dependencies
npm install

# start the project
npm start

Test PAT setup
