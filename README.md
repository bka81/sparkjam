# <img src="https://cdn-icons-png.flaticon.com/512/6402/6402744.png"  width="40" alt="Penguin Icon" /><br> PenguinSteps

**PenguinSteps** is a senior-friendly web assistant designed to help older adults navigate everyday questions with ease. Built with simplicity, accessibility, and clarity in mind, it offers AI-powered guidance through step-by-step explanations in plain language.

**Live Demo:** [https://penguinsteps.netlify.app](https://penguinsteps.netlify.app)

---

## <img src="https://cdn-icons-png.flaticon.com/512/2913/2913136.png" alt="Star Icon" style="filter: invert(100%);" width="35"/> <br>Features

### <img src="https://cdn-icons-png.flaticon.com/512/134/134808.png" width="30" style="filter: invert(100%);" alt="Chat Icon" /> Conversational Interface


- A welcoming homepage with the prompt: **“What can I help you with today?”**
- Users can type in questions and receive simplified, step-by-step answers.
- Integrated with an AI backend to provide natural, intelligent responses.

### <img src="https://cdn-icons-png.flaticon.com/512/3550/3550036.png" width="30" style="filter: invert(100%);" alt="Accessibility Icon" /> Accessibility Controls

- Adjustable **font size** and **brightness** to suit visual preferences.
- (Planned) **Text-to-speech support** to read answers aloud.

---
## <img src="https://cdn-icons-png.flaticon.com/512/495/495499.png" width="35" style="filter: invert(100%);" alt="Start Icon" /><br>Getting Started

Follow the instructions below to run **PenguinSteps** on your computer.

---

### <img src="https://cdn-icons-png.flaticon.com/512/16448/16448784.png" width="26" style="filter: invert(100%);" alt="Prerequisites Icon" /> Prerequisites

Before you begin, make sure the following tools are installed on your system:

#### 1. Code Editor

- Download and install [Visual Studio Code](https://code.visualstudio.com/) (recommended)
- Open it once installed — you'll use this to edit and run the project

---

### <img src="https://cdn-icons-png.flaticon.com/512/3474/3474360.png" width="24" style="filter: invert(100%);" alt="Monitor Icon" /> System Requirements by OS

#### **Windows**

**1. Install Node.js**

- Go to: [https://nodejs.org](https://nodejs.org)
- Download and install the **LTS** version

**2. Install Git**

- Go to: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Download and install Git

**3. Verify Installations**

Open Command Prompt and run:

```bash
node -v
npm -v
git --version
```

#### **macOS**

**1. Install Node.js**

- Go to: [https://nodejs.org](https://nodejs.org)
- Download and install the **LTS** version

**2. Install Git**

- Download from: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Or install via Homebrew:
  ```bash
  brew install git
  ```
**3. Verify Installations**

Open terminal and run:
  ```bash
  node -v
  npm -v
  git --version
  ```
#### **Linux (Ubuntu/Debian)**

Open **Terminal** and run:

```bash
sudo apt update
sudo apt install -y nodejs npm git
```
Verify installations:
  ```bash
  node -v
  npm -v
  git --version
  ```
### Installation Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/penguinsteps.git
cd penguinsteps
```

---

#### 2. Install Project Dependencies
```bash
npm install
```

---

#### 3. Create Environment Variables
Create a file named `.env` in the root folder and add the following:
```env
OPENAI_API_KEY=given-openai-key-here
```
> **Note**: This key is required to connect to OpenAI. Do **not** share them publicly.

---

#### 4. Run the Development Server

```bash
npm run dev
```
> This command uses `netlify dev` to serve both the React frontend and backend functions locally.
> Note: The app uses Netlify Functions and won’t work properly with `npm start`. Please use `npm run dev`.

If successful, Netlify CLI will show:
```bash
Server now ready on http://localhost:8888
```
---
## <img src="https://cdn-icons-png.flaticon.com/512/2581/2581928.png" width="35" style="filter: invert(100%);" alt="Tech Stack Icon" /> Tech Stack
- React.js – Front-end JavaScript library for building UI<br>
- OpenAI API – AI backend for generating helpful, natural-sounding answers<br>
- WebSpeech API- To translate voice into text <br>
- CSS – Styling and responsive design<br>
- Netlify – Hosting and deployment

## <img src="https://cdn-icons-png.flaticon.com/512/2314/2314547.png" width="35" style="filter: invert(100%);" alt="Future Icon" /> Future Enhancements
- Implement speak-aloud functionality<br>
- Expand support for more complex question patterns<br>
- Improve mobile experience and accessibility<br>
- Support multiple languages for diverse users

## <img src="https://cdn-icons-png.flaticon.com/512/2618/2618576.png" width="35" style="filter: invert(100%);" alt="Acknowledgements Icon" /> Acknowledgements
- Created with the goal of helping seniors use technology with confidence.<br>
- Thanks to all testers, users, and contributors who provided feedback<br>
- Icons and UI elements by Font Awesome

