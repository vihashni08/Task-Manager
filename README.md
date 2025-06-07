# 📌 Permalist - Personal Task Manager

A sleek, full-stack to-do list app built with **Node.js**, **Express**, and **PostgreSQL**.  
Add, edit, and delete your daily tasks — with a clean UI and persistent storage.

---

## 🚀 Features

- 📝 Add tasks to your daily to-do list  
- ✏️ Edit existing tasks seamlessly  
- ✅ Delete completed or unwanted tasks  
- 💾 PostgreSQL backend for data persistence  
- 🌐 EJS for server-side rendering  
- 🎨 Customizable frontend with full CSS control  

---

## 🛠 Tech Stack

- **Backend**: Node.js + Express  
- **Frontend**: EJS Templates + CSS  
- **Database**: PostgreSQL  
- **Middleware**: body-parser  
- **Environment**: Localhost  

---

## 📁 Project Structure

```
Permalist/
│
├── public/
│   └── styles.css             # All styling (you can customize it!)
│
├── views/
│   ├── index.ejs              # Main UI page
│   ├── partials/
│       ├── header.ejs         # Header layout
│       └── footer.ejs         # Footer layout
│
├── app.js                     # Express server + routes
├── package.json               # Dependencies
└── README.md                  # You're reading it
```

---

## 🧑‍💻 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/permalist.git
   cd permalist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up PostgreSQL**

   Create a database named `Permalist` and a table:

   ```sql
   CREATE TABLE list (
     id SERIAL PRIMARY KEY,
     title TEXT NOT NULL
   );
   ```

4. **Run the app**
   ```bash
   node app.js
   ```

5. Open in browser:
   ```
   http://localhost:3000
   ```

---

## 🌈 Example Usage

- Type your task → Click ➕ to add  
- Click ✏️ to edit a task → ✔️ to confirm  
- Tick ✅ the box to delete the task  

---

## 📦 Dependencies

```json
"dependencies": {
  "express": "^4.x",
  "body-parser": "^1.x",
  "pg": "^8.x",
  "ejs": "^3.x"
}
```

---

## 🧠 Ideas for Improvement

- ✅ Mark tasks as complete/incomplete  
- 📆 Add due dates or categories  
- 🌓 Add dark mode toggle  
- ☁️ Host online using Render, Railway, or Heroku  

---

## 👤 Author

**Vihashni R**  
🌐 GitHub: vihashni08(https://github.com/vihashni08)  
