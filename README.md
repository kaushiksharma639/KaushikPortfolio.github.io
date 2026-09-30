# Kaushik Sharma — Full-Stack Developer Portfolio

[![Java](https://img.shields.io/badge/Java-25-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-4.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, high-performance personal developer portfolio website built for **Kaushik Sharma**, a Computer Science Engineer specializing in full-stack application development with **Java**, **Spring Boot**, and **React**.

---

## ✨ Features

- 🖥️ **Interactive API Console**: A simulated interactive REST API console with animated typing, JSON response formatting, and endpoint switching (`/kaushik`, `/skills`, `/projects`, `/education`, `/contact`).
- 🌓 **Dynamic Theme Switching**: Seamless toggle between light and dark themes with system preference auto-detection and persistence in `localStorage`.
- 📷 **Editable Profile Photo**: Profile picture with interactive quick-upload support directly from the browser (saved locally) or swappable via `static/images/profile.jpg`.
- 💫 **Interactive UI & Animations**: Floating card components with subtle drift animations, hover pop elevation, and reduced-motion accessibility support.
- 📱 **Fully Responsive**: Optimized for high-density mobile displays, tablets, laptops, and ultra-wide desktops.
- 📋 **One-Click Contact**: Interactive direct email copy button and mailto form integration.

---

## 🛠️ Tech Stack

- **Backend:** Java 25, Spring Boot 4.x, Gradle 9.x
- **Frontend:** Semantic HTML5, Modern CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+)
- **Server / Deployment:** Embedded Tomcat, GitHub Actions CI/CD ready

---

## 📁 Project Structure

```text
Portfolio/
├── src/
│   ├── main/
│   │   ├── java/com/kaushik/portfolio/
│   │   │   └── PortfolioApplication.java   # Spring Boot entry point
│   │   └── resources/
│   │       ├── application.properties      # Application configuration
│   │       └── static/                     # Static web assets
│   │           ├── css/
│   │           │   └── style.css           # Styling, themes, animations
│   │           ├── js/
│   │           │   └── script.js           # API console, theme toggle, photo handler
│   │           ├── images/
│   │           │   └── profile.jpg         # Profile picture
│   │           └── index.html              # Main HTML markup
│   └── test/                               # Unit & integration tests
├── build.gradle                            # Gradle dependencies & toolchain
├── gradle.properties                       # JDK configuration
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **JDK 17 or later** (JDK 25 recommended)
- **Git**

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/Portfolio.git
   cd Portfolio
   ```

2. **Run with Gradle:**
   ```bash
   # On Windows:
   .\gradlew bootRun

   # On macOS/Linux:
   ./gradlew bootRun
   ```

3. **Open in your browser:**
   ```text
   http://localhost:8080
   ```

*(Alternatively, you can open `src/main/resources/static/index.html` directly in any web browser without running the server).*

---

## 📬 Contact & Connect

- **Name:** Kaushik Sharma
- **Email:** [kaushiksharma4444@gmail.com](mailto:kaushiksharma4444@gmail.com)
- **Phone:** +91 98005 20897
- **Location:** Bhopal, India
