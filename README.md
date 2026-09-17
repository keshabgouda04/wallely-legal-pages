# Wallely - Privacy Policy & Account Deletion Portal

Official legal web application for **Wallely** (smart bill management, receipt scanning, expense tracking, and digital visiting cards with family vault sharing).

Built with **React 19**, **Vite**, and vanilla responsive CSS. Compliant with Google Play Store User Data & Account Deletion policies, Apple App Store Guideline 5.1.1(v), GDPR, and CCPA/CPRA.

---

## 🚀 Live Routes

- **`/` or `/privacy-policy`**: Complete, transparent, and interactive Privacy Policy document.
- **`/delete-account`**: Dedicated public page explaining in-app and email-based Account & Data Deletion (required by Google Play Console & Apple App Store Connect).

---

## 🛠️ Local Development

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Start Local Dev Server
\`\`\`bash
npm run dev
\`\`\`
Visit \`http://localhost:5173\` in your browser.

### 3. Production Build
\`\`\`bash
npm run build
\`\`\`
Outputs optimized production assets to \`dist/\`.

---

## 🌐 Deployment Instructions

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will automatically detect Vite and use `vercel.json` for SPA rewrites.
4. Set your custom domain: `https://wallely.com/privacy-policy` and `https://wallely.com/delete-account`.

### Option 2: Cloudflare Pages
1. Connect your GitHub repository to Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. The included `public/_redirects` file handles client-side routing.

### Option 3: GitHub Pages
1. Build the production bundle: `npm run build`
2. Deploy the `dist/` directory to your `gh-pages` branch.

---

## 📋 App Store Submission Checklist

- **Google Play Console:**
  - *Privacy Policy URL:* `https://wallely.com/privacy-policy` (or `https://your-domain/privacy-policy`)
  - *Account Deletion URL:* `https://wallely.com/delete-account`
  - *Data Safety Form:* Complete disclosures for User Accounts (Supabase), Media Storage (Cloudflare R2), and Notifications (Firebase FCM).
- **Apple App Store Connect:**
  - *Privacy Policy URL:* `https://wallely.com/privacy-policy`
  - *In-App Deletion Verification:* Ensure the mobile app has the matching `Profile → Delete Account` button visible to Apple App Reviewers.
