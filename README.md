# Testing-Automation-FrameWork
🤖 AI-Enabled Test Automation Framework for E-Commerce
An advanced, self-healing Quality Assurance (QA) ecosystem built with Next.js 16 and Google Gemini AI. This framework bridges the gap between live user behavior and automated test generation.

🚀 Project Overview
Traditional testing is static and often fails to cover real-world user friction. This project introduces a Self-Healing QA Pipeline that:

Captures real-time user telemetry (clicks, errors, navigation).

Analyzes friction points using the Gemini 1.5 Flash LLM.

Prioritizes and Generates dynamic test cases based on actual usage.

Suggests AI-powered code remediations (Auto-Fixer) for detected defects.

🛠️ Key Modules
1. Live Telemetry Monitor
A real-time dashboard that streams user actions from the e-commerce storefront. It categorizes logs into CLICK, INPUT, and ERROR events to provide a high-fidelity view of the system's state.

2. AI Defect Prediction & Prioritization
Utilizes Large Language Models (LLMs) to assign risk scores to specific modules (Cart, Checkout, Auth). If a module exhibits high friction, the AI automatically generates a suite of regression tests tailored to that specific context.

3. AI Auto-Fixer (Remediation Copilot)
When a test failure is confirmed, the framework invokes the Remediation Engine. It analyzes the telemetry to generate copy-pasteable React/Next.js code patches to resolve the bug.

4. QA Engineering Copilot
A context-aware AI assistant integrated into the dashboard. It allows engineers to query the state of the pipeline and ask complex questions like "What is regression testing?" or "Why did the payment module fail?"

💻 Tech Stack
Frontend: Next.js 16 (App Router), Tailwind CSS, Lucide Icons.

Backend: Node.js Serverless Functions (Next.js API Routes).

AI Engine: Google Generative AI SDK (Gemini 1.5 Flash).

Version Control: Git & GitHub.

⚙️ Installation & Setup
Clone the repository:

Bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
Install dependencies:

Bash
npm install
Configure Environment Variables:
Create a .env.local file in the root directory and add your API Key:

Plaintext
GEMINI_API_KEY=your_google_gemini_api_key_here
Run the Development Server:

Bash
npm run dev
Open http://localhost:3000/admin/monitor to view the AI Dashboard.
