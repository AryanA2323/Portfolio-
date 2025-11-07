# 🩺 MediSense AI - Intelligent Healthcare Web Application

## Project Overview

**MediSense AI** is a full-stack AI-powered healthcare platform that provides instant symptom analysis, medicine identification, an intelligent health chatbot, and medical facility discovery. Built with modern web technologies and a custom machine learning model, it offers 100% free healthcare information access without API limitations.

**Live Repository:** [github.com/AryanA2323/MediSense-AI](https://github.com/AryanA2323/MediSense-AI)

---

## 🎯 Problem & Solution

**Challenge:** Healthcare information is often inaccessible, scattered across multiple sources, and difficult to understand for the average person.

**Solution:** A unified platform providing:
- AI-powered symptom analysis with disease predictions
- Medicine identification through image scanning (OCR)
- 24/7 intelligent health chatbot with 13+ medical categories
- Quick access to nearby medical facilities with geolocation

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** + **Vite 5** - Modern UI with lightning-fast builds
- **Tailwind CSS 3.3** - Responsive, mobile-first design
- **React Router v6** - Client-side navigation
- **Firebase SDK** - Authentication & real-time database

### **Backend**
- **Node.js 22** + **Express 4.18** - RESTful API server
- **Firebase Admin** - Server-side authentication
- **Tesseract.js 5** - OCR for medicine scanning
- **Multer** - File upload handling

### **AI & Machine Learning**
- **Python 3.13** + **FastAPI** - ML microservice
- **scikit-learn** - Random Forest Classifier (99% accuracy)
- **pandas** & **NumPy** - Data processing
- Trained on 500+ samples covering 25 symptoms and 10 diseases

### **Database & APIs**
- **Firebase Firestore** - NoSQL cloud database
- **OpenFDA API** - Official drug information (free)
- **OpenStreetMap API** - Medical facility search (free)

---

## ✨ Key Features

### 1. **Custom ML Disease Prediction**
- Self-trained Random Forest model achieving 99% accuracy
- FastAPI microservice serving real-time predictions
- Analyzes 25 different symptoms to predict 10 common diseases
- **Advantage:** No API costs, no rate limits, fully offline-capable

### 2. **User Authentication & Profiles**
- Firebase Authentication (Email/Password + Google OAuth)
- Personalized health profiles (age, allergies, medical history)
- JWT token security with protected routes

### 3. **AI Symptom Diagnosis**
- Text and voice input support
- ML-powered analysis with disease likelihood scores
- Personalized OTC medicine recommendations
- Home remedy suggestions and safety warnings

### 4. **Medicine Scanner**
- Upload medicine packaging images
- OCR text extraction with intelligent name recognition
- Local database (19 medicines) + OpenFDA integration
- Comprehensive info: uses, dosage, side effects, generics

### 5. **Intelligent Health Chatbot**
- 1700+ lines of medical knowledge covering:
  - Emergency triage, Fever, Headache, Cold/Flu
  - Digestive issues, Diabetes, Blood pressure
  - Weight loss, Allergies, Pain management
  - Pregnancy, Children's health, Medication safety, Skin conditions
- Chat history and quick question suggestions

### 6. **Nearby Medical Facilities**
- OpenStreetMap integration for hospital/clinic/pharmacy search
- Auto-detect or manual location input
- Distance calculation with Haversine formula
- Direct navigation links and contact information

### 7. **Modern UI/UX**
- Dark/light theme toggle
- Fully responsive (320px to 1920px+)
- Medical-themed color scheme
- Smooth animations and loading states

---

## 🏗️ System Architecture

```
Frontend (React - Port 3000)
    ↓
Backend API (Express - Port 5000)
    ↓
├── ML Service (FastAPI - Port 8000) → Random Forest Model
├── Tesseract OCR → OpenFDA API → Local Medicine DB
├── OpenStreetMap API → Geolocation Services
└── Firebase Firestore → User Data & Auth
```

**Microservices Architecture:** Three independent services communicating via REST APIs for scalability and maintainability.

---

## 📊 Technical Achievements

- **61 files** with ~10,500 lines of code
- **8 pages** + 2 reusable components
- **15 RESTful API endpoints**
- **99% ML model accuracy** on test dataset
- **100% free architecture** - no API cost limitations
- **Full CRUD operations** with Firebase Firestore
- **JWT authentication** with role-based access
- **Responsive design** tested across all devices

---

## 🎓 Skills Demonstrated

✅ **Full-Stack Development** - React frontend + Node.js backend  
✅ **AI/ML Integration** - Custom model training and deployment  
✅ **Cloud Services** - Firebase Auth, Firestore, Admin SDK  
✅ **API Integration** - OpenFDA, OpenStreetMap, Google Maps  
✅ **Security** - JWT tokens, input validation, CORS, environment variables  
✅ **Modern Tooling** - Vite, Tailwind CSS, ES6+ modules  
✅ **Version Control** - Git workflow with GitHub  
✅ **Documentation** - Comprehensive technical writing (7 docs)  

---

## 🌟 Future Applications

### **Healthcare Sector**
- Telemedicine platform integration
- Hospital/clinic white-label solution
- Corporate wellness programs
- Emergency response systems

### **Technical Enhancements**
- Progressive Web App (PWA) for offline access
- Mobile apps (React Native)
- Advanced AI models (GPT-4, specialized medical LLMs)
- Wearable device integration (Fitbit, Apple Watch)
- Multi-language support for global reach

### **Business Model**
- Subscription tiers for advanced features
- B2B sales to healthcare providers
- API licensing for third-party integration
- Insurance company partnerships

---

## 🏆 Why This Project Stands Out

**Innovation:**
- Self-trained ML model eliminates API dependencies
- Comprehensive solution combining multiple health services
- Production-ready with professional code quality

**Technical Excellence:**
- Microservices architecture for scalability
- Modern tech stack with best practices
- Multiple security layers
- Clean, maintainable, documented code

**Real-World Impact:**
- Addresses healthcare accessibility problems
- Reduces unnecessary doctor visits
- Empowers users with medical knowledge
- Available 24/7 with instant responses

---

## 📈 Project Metrics

| Metric | Value |
|--------|-------|
| Development Time | ~40 hours |
| Technologies Used | 10+ integrated |
| Code Lines | ~10,500+ |
| API Integrations | 4 external services |
| ML Model Accuracy | 99% |
| Browser Support | Chrome, Firefox, Safari, Edge |
| Responsive Range | 320px - 1920px+ |
| Documentation Files | 7 comprehensive guides |

---

## 🔒 Security & Compliance

- Firebase Authentication with JWT verification
- Environment variables for API key protection
- CORS configuration and input sanitization
- File upload restrictions and validation
- GDPR-ready with user data control
- HIPAA considerations for healthcare data
- Medical disclaimer for legal protection

---

## 📚 Documentation

Complete documentation includes:
- **README.md** - Project overview
- **QUICK_START.md** - 5-minute setup guide
- **API_DOCUMENTATION.md** - Full API reference
- **DEPLOYMENT.md** - Production deployment
- **FIREBASE_SETUP_GUIDE.md** - Configuration steps
- **CHANGELOG.md** - Version history
- **CONTRIBUTING.md** - Contribution guidelines

---

## 💼 Portfolio Value

This project demonstrates:
- End-to-end full-stack development capabilities
- AI/ML model training and deployment expertise
- Cloud service integration proficiency
- Security-first development approach
- Production-quality code and architecture
- Problem-solving with real-world impact
- Professional documentation skills

**Perfect for:** Job applications, startup MVPs, healthcare hackathons, technical interviews

---

## ⚠️ Medical Disclaimer

MediSense AI is for **informational purposes only** and does not provide medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for medical concerns.

---

## 🤝 Contact & Collaboration

**GitHub:** [@AryanA2323](https://github.com/AryanA2323)  
**Repository:** [MediSense-AI](https://github.com/AryanA2323/MediSense-AI)  
**License:** MIT - Open source and free to use

**Open for:** Code reviews, collaboration opportunities, technical discussions

---

**MediSense AI - Empowering Health Through Technology** 🩺

*A production-ready healthcare platform combining AI, machine learning, and modern web technologies to make medical information accessible to everyone.*
