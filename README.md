# 🌸 Romantic Date Invitation Website

A lightweight, mobile-first romantic date invitation website designed to be sent to your partner. Features smooth glassmorphism design, floating hearts, interactive date selection, and a celebratory confetti modal.

---

## 🚀 How to Set Up & Deploy to GitHub Pages

### Step 1: Create a GitHub Repository
1. Log in to your [GitHub account](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Name your repository (e.g., `date-invitation` or `for-you`).
4. Keep it **Public** (GitHub Pages requires a Public repository on free accounts).
5. Leave "Add a README file" unchecked.
6. Click **Create repository**.

---

### Step 2: Push Files to GitHub

Open your terminal or command prompt in the `date-invitation` project folder and run the following commands:

```bash
git init
git add .
git commit -m "Initial commit - Date Invitation Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

*(Be sure to replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name).*

---

### Step 3: Enable GitHub Pages with GitHub Actions
1. Go to your repository on GitHub.
2. Click on **Settings** (top navigation tab).
3. In the left sidebar, click on **Pages** (under Code and automation).
4. Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu.
5. The deployment workflow will automatically run. Go to the **Actions** tab at the top of your repository to view the progress.
6. Once completed, your live site URL will appear at the top of the **Pages** section!

---

## 🔗 Final Website URL Format

Your published website URL will be:
```
https://<YOUR_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/
```

---

## 🎨 How to Customize

All primary customization options are located right at the top of `script.js`.

Open `script.js` and edit the configuration values:

```javascript
const GIRLFRIEND_NAME = "Sophia"; // Enter her name here or leave "" for generic text
const DATE = "21 August 2026";
const DEFAULT_TIME = "Evening 🌅";
const DEFAULT_ACTIVITY = "Surprise 🎁";
```

### Additional Customizations:
- **Change Greeting/Message:** Edit the innerHTML text inside `applyPersonalization()` in `script.js` or directly inside `index.html`.
- **Change Date Cards:** Update the values and dates inside `<fieldset class="options-grid date-grid">` in `index.html`.
- **Change Activities/Times:** Edit the radio button options in `index.html`.

---

## 🛠️ Tech Stack
- **HTML5** (Semantic & Accessible)
- **CSS3** (Glassmorphism, Flexbox, CSS Grid, Custom Variables, Animations)
- **Vanilla JavaScript** (ES6+)
- **Canvas Confetti** (via CDN for celebration animations)
- **Google Fonts** (DM Sans & Pacifico)
