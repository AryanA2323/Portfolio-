# 🌾 Krushimandi Admin Panel - Agricultural Marketplace Management System

## Project Overview

**Krushimandi Admin Panel** is a comprehensive administrative dashboard built for Krushimandi Innovations Pvt Ltd during my internship. This full-stack web application enables efficient management of an agricultural marketplace platform, handling farmers, buyers, fruit listings, orders, notifications, and feedback with real-time database synchronization.

**Repository:** [github.com/AryanA2323/krushimandiadmin](https://github.com/AryanA2323/krushimandiadmin)

---

## 🎯 Problem & Solution

**Challenge:** Managing a large-scale agricultural marketplace requires centralized control over users, inventory, orders, and communications across multiple stakeholder groups.

**Solution:** A unified admin dashboard providing:
- Real-time user management (farmers & customers)
- Fruit listing creation and inventory control
- Order monitoring with status tracking
- Notification broadcasting system
- Feedback and complaint resolution
- Super admin role-based access control

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19.1.0** - Modern UI with latest React features
- **Material-UI (MUI) 7.3.2** - Professional component library
- **React Router v7** - Multi-page navigation
- **MUI X Date Pickers** - Advanced date selection

### **Backend & Database**
- **Firebase SDK 12.2.1** - Complete backend solution
- **Firestore** - Real-time NoSQL cloud database
- **Firebase Authentication** - Secure user management
- **Firebase Storage** - Image and file hosting
- **Firebase Analytics** - Usage tracking

### **Development Tools**
- **Create React App** - Project scaffolding
- **Node.js 22** - Development environment
- **npm** - Package management
- **Git** - Version control

---

## ✨ Key Features

### 1. **Dashboard Overview**
- Real-time statistics and metrics
- Quick access to all management sections
- Admin profile with role-based permissions
- Responsive sidebar navigation

### 2. **User Management System**
- **Farmers Management:**
  - View verified farmer profiles
  - Block/unblock farmer accounts
  - Track farmer statistics (total orders, KYC status)
  - Search and filter capabilities

- **Customers Management:**
  - Manage buyer profiles
  - Monitor customer activity
  - Account status control
  - Customer purchase history

- **Farmer KYC Requests:**
  - Review and approve farmer verification
  - Document validation
  - Status tracking (pending/verified/rejected)

- **Farmer Listing Requests:**
  - Approve/reject farmer product listings
  - Quality control before marketplace publication
  - Detailed product information review

### 3. **Fruit Listing Management**
- **Add New Fruits:**
  - Comprehensive fruit details (name, type, description)
  - Pricing and quantity management
  - Image upload with Firebase Storage integration
  - Location tracking (city, district, state, pincode)
  - Availability date scheduling
  - Status management (active/sold)

- **View & Edit Listings:**
  - 3-column responsive grid layout
  - Full fruit details in side drawer
  - Image gallery with navigation
  - Delete functionality
  - Real-time updates

- **Image Management:**
  - Multiple image uploads (up to 4)
  - Automatic CORS handling
  - Placeholder fallbacks
  - Cloud storage optimization

### 4. **Order Monitoring**
- Real-time order tracking
- Order status updates
- Buyer and fruit details
- 3-column card display
- Search and filter options

### 5. **Notification Manager**
- **Broadcast Notifications:**
  - Create platform-wide announcements
  - Category-based notifications
  - Date and time stamping
  - Priority levels

- **Recent Notifications:**
  - 2-column grid display
  - Notification history
  - User engagement tracking

### 6. **Feedback & Complaints**
- **Statistics Dashboard:**
  - Total complaints count
  - Pending issues tracking
  - Resolution metrics
  - Response time analytics
  - 2-column stats cards

- **Complaint Management:**
  - View all user complaints
  - Priority badges (high/medium/low)
  - Status tracking (pending/resolved/in-progress)
  - Category organization
  - 2-column complaint cards

### 7. **Super Admin Control**
- **Admin User Management:**
  - View all admin users from Firestore
  - Edit admin details (name, role, permissions)
  - Permission-based access control:
    - All Access
    - User Management
    - Fruit Listing
    - Order Management
    - Notification Manager
    - Feedback Control
  - Color-coded permission badges
  - Add/remove admin users
  - Status management (active/inactive)

- **Role Management:**
  - Super Admin privileges
  - Role assignment system
  - Access level configuration

### 8. **Modern UI/UX**
- Material Design principles
- Fully responsive layout (mobile to desktop)
- Consistent color scheme (green agricultural theme)
- Smooth animations and transitions
- Loading states and error handling
- Success/error notifications (Snackbar alerts)

---

## 🏗️ System Architecture

```
React Frontend (Port 3000)
    ↓
Firebase Services
    ↓
├── Firestore Database
│   ├── admins (Super admin management)
│   ├── users (Farmers & buyers)
│   ├── fruits (Product listings)
│   ├── farmerRequests (Approval queue)
│   ├── buyerRequests (Purchase requests)
│   ├── complaints (User feedback)
│   ├── feedback (Reviews)
│   └── notifications (Announcements)
│
├── Firebase Authentication
│   ├── Email/Password login
│   ├── Auto-signup functionality
│   └── Session management
│
└── Firebase Storage
    └── Fruit images with CORS configuration
```

**Cloud-First Architecture:** Serverless backend with real-time synchronization across all admin users.

---

## 📊 Technical Achievements

- **50+ React components** across 8 main pages
- **8 Firestore collections** with structured data models
- **Real-time CRUD operations** on all entities
- **Responsive grid layouts:**
  - 2-column: User Management, Notifications, Feedback stats
  - 3-column: Farmers, Customers, Requests, Fruits, Orders
- **Firebase Storage integration** with CORS handling
- **Role-based access control** (Super Admin, Admin)
- **Search and filter** functionality on all lists
- **Image upload** with multiple file support
- **Form validation** with Material-UI components
- **Snackbar notifications** for user feedback

---

## 🎓 Skills Demonstrated

✅ **Frontend Development** - React 19 with hooks and modern patterns  
✅ **UI/UX Design** - Material-UI implementation with custom styling  
✅ **Backend Integration** - Firebase SDK for full backend functionality  
✅ **Database Design** - Firestore collection structure and relationships  
✅ **Cloud Storage** - Firebase Storage with image optimization  
✅ **Authentication** - Secure login system with session management  
✅ **State Management** - React hooks (useState, useEffect)  
✅ **Form Handling** - Complex forms with validation  
✅ **Real-time Updates** - Live data synchronization  
✅ **Responsive Design** - Mobile-first approach with Material-UI Grid  
✅ **Error Handling** - Comprehensive try-catch with user feedback  
✅ **Version Control** - Git workflow with GitHub  

---

## 🌟 Internship Context

**Company:** Krushimandi Innovations Pvt Ltd  
**Role:** Software Development Intern  
**Duration:** [Internship Period]  
**Project Type:** Production Admin Panel for Agricultural Marketplace  

**Responsibilities:**
- Designed and implemented complete admin dashboard from scratch
- Integrated Firebase services for backend infrastructure
- Created user management system for farmers and buyers
- Built real-time notification and feedback systems
- Implemented role-based access control
- Developed responsive UI following Material Design guidelines
- Handled CORS configuration for cloud storage
- Wrote database seeding scripts for testing

**Business Impact:**
- Streamlined marketplace management operations
- Reduced manual oversight with automated systems
- Enabled real-time monitoring of platform activity
- Improved response time for user requests and complaints
- Facilitated efficient inventory management

---

## 📈 Project Metrics

| Metric | Value |
|--------|-------|
| Development Time | Internship duration |
| Technologies Used | 8+ integrated |
| React Components | 50+ custom components |
| Firestore Collections | 8 collections |
| Main Pages | 8 functional modules |
| UI Framework | Material-UI v7 |
| Responsive Breakpoints | xs, sm, md, lg, xl |
| Database Operations | Full CRUD on all entities |

---

## 🗂️ Database Structure

### Firestore Collections:

1. **admins** - Super admin user management
   - name, email, role, permissions, status, created_at, updated_at

2. **users** - Farmers and buyers
   - name, email, phone, userType, location, kycStatus, isBlocked, totalOrders

3. **fruits** - Product listings
   - name, type, description, price_per_kg, quantity, availability_date, location, image_urls, admin_name, status, likes, views

4. **farmerRequests** - Farmer product approval queue
   - farmerId, fruitDetails, requestDate, status, reviewedBy

5. **buyerRequests** - Purchase requests
   - buyerId, fruitId, quantity, requestDate, status

6. **complaints** - User feedback and issues
   - userId, subject, description, priority, status, category, createdAt

7. **feedback** - Platform reviews
   - userId, rating, comment, timestamp

8. **notifications** - Platform announcements
   - header, title, description, date, category, createdBy

---

## 🔒 Security Features

- Firebase Authentication with JWT tokens
- Protected routes requiring admin login
- Role-based permissions (Super Admin vs Admin)
- Input validation on all forms
- Secure file upload with type restrictions
- Environment variables for Firebase config
- CORS configuration for storage
- Auto-session management with localStorage
- Database rules (development mode for testing)

---

## 🚀 Setup & Deployment

### Prerequisites:
```bash
Node.js 22+
npm or yarn
Firebase project setup
```

### Installation:
```bash
# Clone repository
git clone https://github.com/AryanA2323/krushimandiadmin

# Install dependencies
cd krushimandiadmin
npm install

# Configure Firebase
# Add your Firebase config to src/firebase/config.js

# Seed database (optional)
node seedNow.js

# Start development server
npm start
```

### Firebase Setup:
1. Create Firebase project
2. Enable Firestore Database
3. Enable Firebase Authentication (Email/Password)
4. Enable Firebase Storage
5. Configure Storage CORS (see FIX_STORAGE_CORS.md)
6. Add Firebase SDK credentials

---

## 💼 Portfolio Value

This project demonstrates:
- **Real-world application** built for actual company use
- **Production-ready code** with professional standards
- **Full-stack capabilities** using modern cloud services
- **Complex state management** across multiple modules
- **Scalable architecture** ready for growth
- **UI/UX expertise** with Material Design implementation
- **Database design** skills with NoSQL structures
- **Problem-solving** with real business requirements
- **Internship experience** at a tech company

**Perfect for:** Job applications, technical portfolio, startup experience showcase, full-stack developer roles

---

## 🤝 Company Information

**Krushimandi Innovations Pvt Ltd**  
An agricultural technology company focused on connecting farmers directly with buyers through a digital marketplace platform, eliminating middlemen and ensuring fair prices for both parties.

**Mission:** Revolutionize agricultural trade through technology

---

## 📝 Acknowledgments

Developed during internship at **Krushimandi Innovations Pvt Ltd**  
Guided by the company's technical team  
Built with modern technologies and industry best practices

---

## 🤝 Contact

**Developer:** Aryan  
**GitHub:** [@AryanA2323](https://github.com/AryanA2323)  
**Repository:** [krushimandiadmin](https://github.com/AryanA2323/krushimandiadmin)  

**Open for:** Code reviews, technical discussions, collaboration opportunities

---

**Krushimandi Admin Panel - Empowering Agricultural Management Through Technology** 🌾

*A production-ready administrative dashboard built for real-world agricultural marketplace operations, combining React, Material-UI, and Firebase to streamline platform management.*
