# Resume Builder Module

This folder contains all the core logic, pages, components, and templates required to build and preview a dynamic resume in real time.
The module is fully powered by **Next.js**, **Redux Toolkit**, and **TailwindCSS**, offering smooth navigation and real-time updates while filling the resume form.

---

## Folder Structure

resume/
│
├── pages/
│ ├── Personal.js
│ ├── Education.js
│ ├── Experience.js
│ ├── Skills.js
│ └── Preview.js
│
├── components/
│ └── FormNavigate.js
│
├── templates/
│ ├── TemplateOne.js
│ ├── TemplateTwo.js
│ └── TemplateThree.js
│
├── redux/
│ ├── resumeSlice.js
│ ├── templateSlice.js
│ └── store.js
│
└── README.md


---

##  Overview

The **Resume Builder** allows users to fill out different sections of a resume:
- Personal Information  
- Education  
- Work Experience  
- Skills  

All data is stored in **Redux**, allowing seamless navigation between form sections without losing progress.

The user can also **choose a resume template** and preview the final result in real time.

---

##  Key Components

### **1. FormNavigate.js**
- Controls navigation between form sections.
- Uses `router.push()` with shallow routing to avoid page refresh.
- Loads the correct form component based on the selected tab.
  
---

##  Form Pages

### **Personal.js**
Collects user details like name, email, phone, DOB, and summary.

### **Education.js**
Handles fields like degree, institution, and passing year.

### **Experience.js**
Captures work experience such as position, company, duration, and description.

### **Skills.js**
Allows users to input skills with validation and stores them via Redux.

---

##  Resume Templates

Located inside `templates/` folder:

### **TemplateOne.js**
- Yellow accent theme  
- Minimal and clean layout  

### **TemplateTwo.js**
- Cyan header design  
- Rounded and modern visual style  

### **TemplateThree.js**
- Pink premium theme  
- Great for creative resumes  

All templates receive real-time data from Redux and display fallback dummy data when fields are empty.

---

## 🗄 Redux Structure

### **resumeSlice.js**
Stores all form data:
- personal  
- education  
- experience  
- skills  

### **templateSlice.js**
Stores `selectedTemplate` for resume preview.

### **store.js**
The central Redux store combining all slices.

---

## ▶️ How It Works

1. User fills each form section.  
2. Data is stored in Redux using `dispatch`.  
3. `FormNavigate.js` lets the user switch between sections easily.  
4. Preview page displays final resume using the selected template.  
5. User can download resume after completion (if download feature added).

---

##  Tech Stack

- **Next.js**
- **React Redux / Redux Toolkit**
- **TailwindCSS**
- **Material UI (Buttons)**

---

##  Features

- Real-time form updates
- Easy navigation between form sections
- Fully dynamic templates
- Validation included in all forms
- Scalable and readable code with comments