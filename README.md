# 🧑‍💻 FreelancerTask — Task Management for Freelancers

A modern and intuitive task management web application tailored for freelancers. Built using **React** and **Firebase**, this app enables authenticated users to manage tasks with full CRUD functionality. It also features animated UI components, theme toggling, and responsive design for an optimal user experience.

🔗 **Live Site:** [https://calm-panda-ba7ba9.netlify.app/](https://calm-panda-ba7ba9.netlify.app/)  
🗂️ **GitHub Repository:** [github.com/Repon-Hasan/FreelancerTask](https://github.com/Repon-Hasan/FreelancerTask)

---

## 🚀 Features

- 🔐 **Authentication**
  - Email & Password login
  - Google Sign-In via Firebase Authentication

- 🏠 **Dynamic Home Page**
  - Animated hero slider
  - Featured tasks & info sections

- ✅ **Task Management**
  - Full CRUD operations (Create, Read, Update, Delete)
  - Manage personal task list
  - Data stored in Firebase Firestore

- 🔒 **Protected Routes**
  - Access control for authenticated users
  - Route protection with React Router

- 🌓 **Dark/Light Theme Toggle**
  - Accessible theme switching using React Context

- ✨ **Animated UI**
  - Lottie animations for interaction feedback
  - Scroll-based entrance animations via React Awesome Reveal

---

## 🛠 Tech Stack

| Layer         | Technology                            |
|---------------|----------------------------------------|
| Frontend      | React, React Router DOM               |
| Backend       | Firebase Firestore                    |
| Auth          | Firebase Authentication               |
| Animations    | Lottie, React Awesome Reveal          |
| Styling       | Tailwind CSS                          |
| Hosting       | Netlify                               |

---

## 📁 Project Structure
FreelancerTask/
├── public/
├── src/
│ ├── assets/ # Images, Lottie JSONs
│ ├── components/ # Reusable components
│ ├── contexts/ # Auth and theme providers
│ ├── hooks/ # Custom hooks like useAuth
│ ├── pages/ # Route-based views
│ ├── services/ # Firebase configuration
│ ├── App.jsx # Root app component
│ └── main.jsx # React DOM render entry
├── .env.local # Environment config (not committed)
├── package.json
└── README.md


---

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Steps

1. **Clone the Repository**

```bash
git clone https://github.com/Repon-Hasan/FreelancerTask.git
cd FreelancerTask


Install Dependencies

bash
npm install
# or
yarn install



Setup Firebase

Go to Firebase Console

Create a new project

Enable:

Authentication → Email/Password & Google

Cloud Firestore

Add .env.local File

Create a .env.local file in the root and add:

env
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id


Run Locally
bash
npm run dev
# or
yarn dev

🌐 Deployment
This app is deployed using Firebase Hosting.

Deploying
bash
npm run build
firebase login
firebase init
firebase deploy

👤 **Author**

**Repon Hasan**  
GitHub: [@Repon-Hasan](https://github.com/Repon-Hasan)


