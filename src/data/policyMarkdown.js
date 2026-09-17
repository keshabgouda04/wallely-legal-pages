export const RAW_MARKDOWN_POLICY = `# Privacy Policy for Wallely

**Effective Date:** September 17, 2026  
**Last Updated:** September 17, 2026  
**Version:** 1.0.0  
**Official Website:** https://wallely.com  
**Support Email:** support@wallely.com  
**Privacy Contact / DPO:** privacy@wallely.com  

---

## 1. Introduction & Scope
Welcome to **Wallely** ("we", "our", or "us"). We are committed to maintaining the trust and confidence of our users. This Privacy Policy applies to the Wallely mobile application (available on iOS and Android) and our official website at [https://wallely.com](https://wallely.com).

Wallely is a smart bill management, receipt scanning, expense tracking, and digital visiting card application with family vault sharing. This document transparently describes the categories of personal and financial information we collect, how that information is processed, our technical safeguards, third-party infrastructure providers, and the comprehensive rights you hold over your data.

This policy is designed to comply with the **General Data Protection Regulation (GDPR)**, the **California Consumer Privacy Act (CCPA / CPRA)**, Google Play Developer Policies (including User Data & Account Deletion Requirements), and Apple App Store Review Guidelines (Guideline 5.1.1).

---

## 2. Information We Collect & Process

### A. Account & Profile Information
- **Basic Identity:** User's full name and primary email address (managed securely via Supabase Auth).
- **Profile Attributes:** Country of residence, preferred currency (e.g., USD, EUR, INR), app display language, timezone, gender (optional), and onboarding completion state.
- **Mobile Number (Optional):** Used for two-factor authentication or family vault invitation verification.
- **Authentication Tokens:** Managed through Supabase session JWTs stored using native hardware encryption on your device.

### B. Bills, Expenses & Financial Metadata
- **Bill Information:** Merchant/payee name, bill amount, currency code, expense category (e.g., Utilities, Rent, Subscriptions, Insurance, Groceries), and payment status.
- **Schedules & Reminders:** Due dates, billing cycles (one-time, monthly, annual), custom reminder lead times, and product warranty expiration dates.
- **Payment Method References:** User-selected payment method labels (e.g., Credit Card, Bank Transfer, UPI, Cash) and custom notes.
- *Notice:* Wallely does NOT collect, store, or process raw credit card numbers, CVVs, PINs, or bank account login passwords.

### C. Uploaded Receipt Images, Documents & Invoices
- **Receipt Photos & Invoices:** Images of paper receipts captured via device camera or selected from your photo gallery.
- **PDF Attachments:** Electronic invoices, purchase contracts, and warranty certificates attached to individual bill entries.
- **Storage Infrastructure:** All media assets are encrypted and stored in private **Cloudflare R2** buckets.

### D. OCR & AI Receipt Processing
- When you scan or upload a receipt, our Optical Character Recognition (OCR) and AI parsing engine extracts relevant text (merchant name, transaction date, line items, taxes, and total amounts) to pre-fill bill fields.
- **AI Privacy Guarantee:** Receipt images and extracted text are processed strictly to populate your bill records. Your data is **NEVER** sold, rented, or used to train public third-party foundation AI models.

### E. Digital Visiting Cards
- Information you voluntarily configure for your digital business card: Name, job title, company name, professional email, phone number, website URL, and social links (e.g., LinkedIn, Twitter/X, GitHub).

### F. Device, Notification & Diagnostic Data
- **Push Notification Tokens:** Firebase Cloud Messaging (FCM) device tokens used exclusively to send scheduled bill reminders, warranty alerts, and family invite notices.
- **Diagnostic Logs:** Anonymized crash logs and device operating system versions to identify and resolve application errors.

---

## 3. How We Use Personal Information
We use your information exclusively for legitimate, user-consented operational purposes:
- Enabling expense tracking, bill categorizations, receipt attachments, search, and warranty tracking.
- Extracting text and transaction totals from receipt snapshots using OCR.
- Delivering timely push alerts via Firebase Cloud Messaging so you avoid late fees and track expiring product warranties.
- Allowing authorized family members to view and manage shared household bills when you invite them.
- Generating shareable digital visiting cards and interactive QR codes.
- Providing customer support and resolving crash reports sent to support@wallely.com.
- Securing user accounts and preventing fraudulent access.

---

## 4. Device Permissions Used

| Permission | Purpose | Justification & Safeguards |
|---|---|---|
| **Camera** | Receipt & QR Scanning | Used solely for capturing physical receipts, paper invoices, and digital card QR codes. Never accessed in the background. |
| **Photos / Media Library** | Attaching Receipts & PDFs | Used solely for selecting receipt images and document attachments from your gallery. We never index your media library. |
| **Notifications** | Bill & Warranty Alerts | Used to deliver timely reminders for upcoming bills and warranty expirations. Can be adjusted in device settings. |

---

## 5. Third-Party Service Providers

1. **Supabase Inc. (User Authentication & Database Storage)**
   - *Role:* Manages encrypted user authentication, JWT sessions, and relational database storage.
   - *Privacy Policy:* https://supabase.com/privacy

2. **Cloudflare, Inc. (Media & Document Storage - Cloudflare R2)**
   - *Role:* Provides secure, encrypted storage for receipt photos, invoice PDFs, and profile avatars.
   - *Privacy Policy:* https://cloudflare.com/privacypolicy

3. **Google Firebase (Google LLC - Push Notifications & Diagnostics)**
   - *Role:* Delivers push notification alerts via FCM and collects anonymous crash telemetry.
   - *Privacy Policy:* https://firebase.google.com/support/privacy

4. **Secure OCR & AI Extraction Pipeline**
   - *Role:* Extracts text and totals from receipt snapshots. Data is processed statelessly and never used to train public third-party AI models.

---

## 6. Data Security Architecture
- **In-Transit Encryption:** All network traffic between your device and our servers is encrypted using HTTPS / TLS 1.3.
- **Hardware-Level Encryption:** Sensitive credentials and session tokens on your device are encrypted using hardware-backed storage (iOS Keychain, Android Keystore / SecureStore).
- **Row-Level Security (RLS):** Supabase database enforces Row-Level Security, ensuring that only authenticated users can access their own data.
- **Zero Data Commercialization:** We do **NOT** sell, rent, lease, monetize, or trade user personal or financial data to third-party advertisers or data brokers.

---

## 7. Data Retention & Lifecycle Schedule

| Data Category | Retention Period | Deletion & Purge Mechanism |
|---|---|---|
| **User Profile & Account Data** | Duration of active account | Deleted from active database immediately upon in-app account deletion. |
| **Bills, Categories & Financial Logs** | Duration of active account | Erased from active database immediately upon in-app account deletion or individual bill deletion. |
| **Receipt Photos & PDF Invoices** | Duration of active account | Purged from Cloudflare R2 object storage immediately upon in-app account deletion or bill deletion. |
| **Digital Visiting Cards** | Duration of active account | Removed from database and public card sharing endpoints immediately upon in-app card or account deletion. |
| **FCM Push Notification Tokens** | Active session duration | De-registered and invalidated upon account logout or in-app account deletion. |
| **Encrypted Disaster Backups** | Up to 30 days (rotation cycle) | Overwritten automatically as backup cycles expire. Not accessible for operational use. |

---

## 8. Family Vault Sharing & Privacy Model
- Bills placed in a shared Family Vault are only visible to members you have explicitly invited and approved.
- Private personal bills remain hidden from other vault members.
- You can leave a vault or remove members at any time.

---

## 9. In-App Account & Data Deletion
In full compliance with Google Play Developer Policy and Apple App Store Review Guideline 5.1.1(v), Wallely provides a direct in-app account deletion feature:

### Step-by-Step In-App Deletion
1. Open the **Wallely** application on your device.
2. Navigate to the **Profile** tab on the navigation bar.
3. Scroll down and select **"Delete Account"**.
4. Confirm your decision.
5. **Immediate Result:** Your user account, authentication records, bills, financial logs, uploaded receipt images, digital visiting cards, and family vault memberships are immediately and permanently erased from our active databases and storage clusters.

---

## 10. Your Rights & Data Portability
- **Right to Access & Review:** View all profile data, bill records, uploaded media, and visiting cards within the app at any time.
- **Right to Rectification:** Update or correct any inaccurate personal or financial entry directly through the app interface.
- **Right to Erasure:** Permanently delete your account and all associated records directly in-app under Profile → Delete Account.
- **Right to Data Portability:** Request an export of your structured bill and profile data in machine-readable format.
- **Right to Withdraw Consent:** Revoke device permissions (Camera, Media, Notifications) anytime in device system settings.

---

## 11. GDPR Compliance (EEA & UK Users)
If you reside in the European Economic Area or the United Kingdom:
- We process your data based on Contractual Necessity, Legitimate Interests, and Consent.
- You have the right to lodge a complaint with your supervisory Data Protection Authority (DPA).
- Cross-border data transfers are protected under Standard Contractual Clauses (SCCs).

---

## 12. California Privacy Notice (CCPA / CPRA)
Under the California Consumer Privacy Act (CCPA) and CPRA:
- You have the Right to Know, Right to Delete, and Right to Correct your personal information.
- **No Sale of Personal Data:** We do not sell or share personal information for cross-context behavioral advertising.
- Delete your account and associated records directly within the mobile application under Profile → Delete Account.

---

## 13. Children's Privacy
Wallely is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided personal data, we immediately delete that account and all related records. If you believe a child has registered, please contact **support@wallely.com**.

---

## 14. Changes to this Privacy Policy
We may update this Privacy Policy from time to time. When changes are made, we will update the "Last Updated" timestamp at the top of this policy and notify users via in-app banner or email for significant revisions.

---

## 15. Contact Us
For any questions, concerns, or requests regarding this Privacy Policy, please contact us:

- **General Support:** support@wallely.com
- **Privacy Officer / DPO:** privacy@wallely.com
- **Official Website:** https://wallely.com
- **Dedicated Account Deletion Page:** https://wallely.com/delete-account
`;
