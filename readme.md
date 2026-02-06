# Enterprise Usage Monitoring & Admin Platform

A full-stack Enterprise Usage Monitoring & Admin Dashboard built using the MERN stack.
The platform provides visibility into user activity, application usage, and department-wise trends through analytics and visual dashboards.
This project simulates a real-world enterprise IT/admin monitoring system used to track SaaS usage across teams.

###  🏗 Overall System Design
The application follows a client–server architecture with clear separation of concerns.
```sh
Frontend (React + Parcel)
        |
        | REST APIs
        v
Backend (Node.js + Express)
        |
        | Mongoose ODM
        v
MongoDB
```

### Design Highlights

- REST-based communication between frontend and backend
- Backend handles all analytics using MongoDB aggregation pipelines
- Frontend consumes only APIs (no hardcoded UI data)
- Modular, scalable folder structure on both frontend and backend

### 🧩 Tech Stack
#### Front-End
    React 18
    Parcel Bundler
    Recharts (charts & visualizations)
    Plain CSS (dashboard styling)

#### Backend
    Node.js (ES Modules)
    Express.js
    MongoDB
    Mongoose
    dotenv

### 📡 API Structure
#### Base URL
    http://localhost:5000/api

#### Available Endpoints


| Method | Endpoint | Description |
| ------ | ------ | ------ |
| GET |	/users | Fetch all users |
| GET |/applications | Fetch all applications
| GET |	/usage/recent | Recent activity logs
| GET |/usage/daily | Daily usage trend
| GET | /usage/top-apps | Top used applications
| GET |/usage/by-department | Usage by department
| GET | /usage/kpis | KPI summary for dashboard

All analytics endpoints are computed using MongoDB aggregation pipelines to reflect real enterprise workloads.

### 🗄 Data Modeling Approach
####  User Model

```sh
name
email
department
role (ADMIN | USER | EMPLOYEE)
```

#### Application Model

```sh
appName
category
ownerTeam
```

#### UsageLog Model

```sh
user (ObjectId → User)
application (ObjectId → Application)
durationMinutes
actionsCount
date
```

#### Relationships

```sh
One User → Many UsageLogs
One Application → Many UsageLogs
```
 This model supports:
- Efficient analytics
- Scalable usage tracking
- Department and app-level aggregation
 
### 📊 How Dummy Data Is Used
- No dummy or static data is used in the frontend
- All data is seeded into MongoDB using a seed script
 - Seed script generates: 
    - Users
    - Applications
    - 30 days of usage logs
    - Frontend fetches all data via REST APIs
>Seed file location:
> ```backend/src/seed/seedData.js ```


### ⚠ Assumptions Made
 - Authentication is out of scope (single admin user assumed)
 - Usage duration is simulated in minutes
 - Timezone handling is simplified
 - Single-tenant system (one organization)
 - Medium data volume suitable for demo/testing

### 🚀 Future Improvements
 - Authentication & role-based access control
 - Real-time tracking using WebSockets
 - CSV / Excel export
 - Alerting for abnormal usage
 - Cost attribution per application
 - Multi-tenant organization support
 - Dark mode UI
 - Pagination and advanced filtering

### ▶ How to Run the Application
 ##### 1️⃣ Clone the Repository
#
```
git clone <repository-url>
cd enterprise-usage-monitor
```
#### 

#####  Backend Setup
####
```
cd backend
npm install
```
####
##### Create .env file
####
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/enterprise_usage
``` 
####

##### Seed Database
####
```
npm run seed
```
##### Start Backend Server
####
```
npm run dev
```
##### Backend will run on:
```
http://localhost:5000
```
####

##### 🎨 Frontend Setup
####
```
cd frontend
npm install
npm run dev
```
####

##### Frontend will run on:
####
```
http://localhost:1234
```
####

### Project Structure
####
```
enterprise-usage-monitor/
├── frontend/
│   ├── src/
│   ├── .gitignore
│   └── package.json
├── backend/
│   ├── src/
│   ├── .gitignore
│   └── package.json
└── README.md
``` 