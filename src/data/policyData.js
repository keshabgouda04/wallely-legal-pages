export const POLICY_META = {
  appName: "Wallely",
  effectiveDate: "September 17, 2026",
  lastUpdated: "September 17, 2026",
  version: "1.0.0",
  supportEmail: "bill.management.pairalabs@gmail.com",
  dpoEmail: "bill.management.pairalabs@gmail.com",
  appPurpose: "A smart bill management, receipt scanning, expense tracking, and digital visiting card mobile application with collaborative family vault sharing."
};

export const QUICK_HIGHLIGHTS = [
  {
    icon: "ShieldCheck",
    title: "Zero Data Commercialization",
    description: "We do NOT sell, rent, or trade your personal, profile, or financial records to third-party ad networks or data brokers.",
    badge: "100% Private",
    color: "emerald"
  },
  {
    icon: "Cpu",
    title: "AI & OCR Receipt Extraction",
    description: "Receipt images and invoices are processed via secure OCR/AI pipelines solely to parse bill totals, merchants, and due dates.",
    badge: "Purpose-Bound",
    color: "cyan"
  },
  {
    icon: "Lock",
    title: "Encrypted Cloud & Hardware",
    description: "Data in transit is protected via TLS 1.3. Local device keys and tokens use native hardware Keychain / Keystore encryption.",
    badge: "Protected",
    color: "indigo"
  },
  {
    icon: "Trash2",
    title: "In-App Account Deletion",
    description: "Self-service deletion directly in the app under Profile → Delete Account, removing active database records immediately.",
    badge: "User Control",
    color: "rose"
  }
];

export const THIRD_PARTY_PROVIDERS = [
  {
    name: "Supabase Inc.",
    service: "Authentication & PostgreSQL Database",
    purpose: "Manages encrypted user authentication, JWT sessions, and relational database storage for user profiles, bills, categories, and visiting cards.",
    dataShared: "Email address, name, country, currency, language, timezone, gender, onboarding state, structured bill records.",
    privacyUrl: "https://supabase.com/privacy",
    securityTier: "SOC2 Type II compliant, Row-Level Security (RLS) isolation, AES-256 encryption at rest."
  },
  {
    name: "Cloudflare, Inc.",
    service: "Media Storage (Cloudflare R2) & CDN",
    purpose: "Encrypted object storage for user-uploaded receipt photos, PDF invoice documents, warranty slips, and digital card avatars.",
    dataShared: "User-uploaded receipt images, invoice PDFs, and card profile images.",
    privacyUrl: "https://cloudflare.com/privacypolicy",
    securityTier: "Enterprise TLS 1.3 transit encryption, AES-256 at-rest encryption, private authenticated URL access."
  },
  {
    name: "Google Firebase (Google LLC)",
    service: "Cloud Messaging (FCM) & Crash Diagnostics",
    purpose: "Delivering timely push alerts for upcoming bill deadlines, warranty expirations, and family vault invitations, plus crash logs.",
    dataShared: "Firebase Cloud Messaging (FCM) device registration tokens, anonymized crash reports, device OS model.",
    privacyUrl: "https://firebase.google.com/support/privacy",
    securityTier: "ISO 27001, SOC 1/2/3 certified, token lifecycle rotation."
  },
  {
    name: "Secure OCR & AI Extraction Pipeline",
    service: "Optical Character Recognition (OCR) & Parsing",
    purpose: "Extracts text, totals, currency, merchant name, and transaction dates from uploaded receipt photos to automate bill entry.",
    dataShared: "Scanned receipt image snippets strictly for text extraction. Images are never used to train public third-party AI models.",
    privacyUrl: "",
    securityTier: "Stateless processing over encrypted HTTPS connections; parsed data stored only in user's private database."
  }
];

export const PERMISSIONS_DATA = [
  {
    permission: "Camera (CAMERA)",
    purpose: "Receipt & Invoice Scanning, QR Scanning",
    justification: "Allows you to point your phone camera to capture paper receipts, invoices, and QR codes for digital card exchange.",
    isOptional: true,
    policyCompliance: "No background capture. Camera is active strictly when you tap the camera or scan button inside the app."
  },
  {
    permission: "Photos / Media Library (READ_MEDIA_IMAGES)",
    purpose: "Selecting Existing Receipts & Document Attachments",
    justification: "Enables you to pick stored receipt images, screenshots, or PDF invoice documents from your device gallery to attach to bills.",
    isOptional: true,
    policyCompliance: "Access is limited strictly to files you select through the system document/photo picker. We never index your media library."
  },
  {
    permission: "Push Notifications (POST_NOTIFICATIONS)",
    purpose: "Bill Due Dates, Warranty Alerts & Family Sharing",
    justification: "Sends timely alerts before bill payment deadlines, expiring warranties, and shared vault activity.",
    isOptional: true,
    policyCompliance: "Can be customized or fully revoked anytime in device settings or in-app notification preferences."
  }
];

export const DATA_RETENTION_TABLE = [
  {
    category: "User Profile & Account Data",
    retentionPeriod: "Duration of active account",
    deletionMechanism: "Deleted from active database immediately upon in-app account deletion."
  },
  {
    category: "Bills, Categories & Financial Logs",
    retentionPeriod: "Duration of active account",
    deletionMechanism: "Erased from active database immediately upon in-app account deletion or individual bill deletion."
  },
  {
    category: "Receipt Photos & PDF Invoices",
    retentionPeriod: "Duration of active account",
    deletionMechanism: "Purged from Cloudflare R2 object storage immediately upon in-app account deletion or bill deletion."
  },
  {
    category: "Digital Visiting Cards",
    retentionPeriod: "Duration of active account",
    deletionMechanism: "Removed from database and public card sharing endpoints immediately upon in-app card or account deletion."
  },
  {
    category: "FCM Push Notification Tokens",
    retentionPeriod: "Active session duration",
    deletionMechanism: "De-registered and invalidated upon account logout or in-app account deletion."
  },
  {
    category: "Automated Encrypted Backups",
    retentionPeriod: "Up to 30 days (standard rotation cycle)",
    deletionMechanism: "Overwritten automatically as backup cycles expire. Not accessible for operational use."
  }
];

export const SECTIONS = [
  {
    id: "introduction",
    number: "1",
    title: "Introduction & Scope",
    icon: "Compass",
    content: `
Welcome to **Wallely** ("we", "our", or "us"). We are committed to maintaining the trust and confidence of our users. This Privacy Policy governs your use of the Wallely mobile application available on Android (APK / Google Play Store) and iOS (Apple App Store).

Wallely is a smart bill management, receipt scanning, expense tracking, and digital visiting card application with family vault sharing. This document transparently describes the categories of personal and financial information we collect, how that information is processed, our technical safeguards, third-party infrastructure providers, and the comprehensive rights you hold over your data.

This policy is designed to comply with the **General Data Protection Regulation (GDPR)**, the **California Consumer Privacy Act (CCPA / CPRA)**, Google Play Developer Policies (including User Data & Account Deletion Requirements), and Apple App Store Review Guidelines (Guideline 5.1.1).

By creating an account or using the Wallely mobile application, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please discontinue use of the application.
    `
  },
  {
    id: "information-collected",
    number: "2",
    title: "Information We Collect & Process",
    icon: "Layers",
    content: `
We collect only information that is necessary to provide, maintain, secure, and improve Wallely's core financial management and digital card services.
    `,
    subsections: [
      {
        title: "A. Account & Profile Information",
        description: "Collected when you register, complete onboarding, or customize your profile:",
        items: [
          "**Basic Identity:** User's full name and primary email address (managed securely via Supabase Auth).",
          "**Profile Attributes:** Country of residence, preferred currency (e.g., USD, EUR, INR), app display language, timezone, gender (optional), and onboarding completion state.",
          "**Mobile Number (Optional):** Used for two-factor authentication or family vault invitation verification.",
          "**Authentication Tokens:** Managed through Supabase session JWTs stored using native hardware encryption on your device."
        ]
      },
      {
        title: "B. Bills, Expenses & Financial Metadata",
        description: "Information you enter or import into Wallely to manage your personal finances:",
        items: [
          "**Bill Details:** Merchant/payee name, bill amount, currency code, expense category (e.g., Utilities, Rent, Subscriptions, Insurance, Groceries), and payment status.",
          "**Schedules & Reminders:** Due dates, billing cycles (one-time, monthly, annual), custom reminder lead times, and product warranty expiration dates.",
          "**Payment Method References:** User-selected payment method labels (e.g., Credit Card, Bank Transfer, UPI, Cash) and custom notes.",
          "*Important Notice:* Wallely does NOT collect, store, or process raw credit card numbers, CVVs, PINs, or bank account login passwords. We are an expense tracker and bill organizer, not a payment processor or banking entity."
        ]
      },
      {
        title: "C. Uploaded Receipt Images, Documents & Invoices",
        description: "Media files you capture or upload:",
        items: [
          "**Receipt Photos & Invoices:** Images of paper receipts captured via device camera or selected from your photo gallery.",
          "**PDF Attachments:** Electronic invoices, purchase contracts, and warranty certificates attached to individual bill entries.",
          "**Storage Infrastructure:** All media assets are encrypted and stored in private **Cloudflare R2** buckets."
        ]
      },
      {
        title: "D. OCR & AI Receipt Processing",
        description: "Automated extraction technology:",
        items: [
          "When you scan or upload a receipt, our Optical Character Recognition (OCR) and AI parsing engine extracts relevant text (merchant name, transaction date, line items, taxes, and total amounts) to pre-fill bill fields.",
          "**AI Privacy Guarantee:** Receipt images and extracted text are processed strictly to populate your bill records. Your data is **NEVER** sold, rented, or used to train public third-party foundation AI models."
        ]
      },
      {
        title: "E. Digital Visiting Cards",
        description: "Information you voluntarily configure for your digital business card:",
        items: [
          "Name, job title, company name, professional email, phone number, website URL, and social links (e.g., LinkedIn, Twitter/X, GitHub).",
          "This data is used solely to generate your shareable digital card profile and interactive QR code."
        ]
      },
      {
        title: "F. Device, Notification & Diagnostic Data",
        description: "Technical telemetry for service delivery and stability:",
        items: [
          "**Push Notification Tokens:** Firebase Cloud Messaging (FCM) device tokens used exclusively to send scheduled bill reminders, warranty alerts, and family invite notices.",
          "**Diagnostic Logs:** Anonymized crash logs and device operating system versions to identify and resolve application errors."
        ]
      }
    ]
  },
  {
    id: "how-we-use",
    number: "3",
    title: "How We Use Personal Information",
    icon: "Activity",
    content: `
We process your personal information based on lawful grounds (contractual necessity, legitimate interest, and explicit user consent). Specifically, we use data for:
    `,
    bullets: [
      "**Delivering Core App Services:** Enabling expense tracking, bill categorizations, receipt attachments, search, and warranty tracking.",
      "**OCR & Automated Parsing:** Extracting text and transaction totals from receipt snapshots to save manual entry time.",
      "**Delivering Timely Alerts:** Sending push notifications via Firebase Cloud Messaging so you avoid late fees and track expiring product warranties.",
      "**Family Vault Collaboration:** Allowing authorized family members to view and manage shared household bills when you invite them.",
      "**Digital Visiting Card Exchange:** Generating your personal QR card for seamless professional networking.",
      "**Customer Support & Bug Resolution:** Investigating user inquiries sent to bill.management.pairalabs@gmail.com and diagnosing app issues.",
      "**Security & Fraud Mitigation:** Protecting our systems, preventing unauthorized access, and validating authenticated sessions."
    ]
  },
  {
    id: "device-permissions",
    number: "4",
    title: "Device Permissions & Privacy Controls",
    icon: "Smartphone",
    content: `
Wallely requests runtime permissions on iOS and Android only when you trigger specific features. You can grant or revoke these permissions anytime via your device's System Settings.
    `,
    tableType: "permissions"
  },
  {
    id: "third-party-services",
    number: "5",
    title: "Data Storage & Third-Party Service Providers",
    icon: "Server",
    content: `
We partner with specialized cloud infrastructure providers to provide database hosting, encrypted file storage, and push notifications. All providers are bound by strict Data Processing Agreements (DPAs) and confidentiality obligations:
    `,
    tableType: "thirdParty"
  },
  {
    id: "data-security",
    number: "6",
    title: "Data Security Architecture",
    icon: "ShieldAlert",
    content: `
We implement multi-layered technical, administrative, and physical security measures to safeguard your information:
    `,
    bullets: [
      "**In-Transit Encryption:** All communication between your mobile app, backend APIs, Supabase, and Cloudflare R2 is encrypted using industry-standard TLS 1.3 / HTTPS protocols.",
      "**On-Device Hardware Protection:** Authentication tokens and sensitive keys stored locally on your device are protected by native hardware-backed encryption modules (iOS Keychain, Android Keystore / SecureStore).",
      "**Row-Level Security (RLS):** Supabase database tables enforce granular Row-Level Security policies, ensuring that each authenticated user can only access their own records.",
      "**Zero Data Commercialization:** We strictly DO NOT sell, rent, monetize, or trade your personal or financial data to advertisers, brokers, or marketing networks.",
      "**Access Isolation:** Cloudflare R2 media files are stored in private buckets and accessed only via short-lived, authenticated tokens."
    ]
  },
  {
    id: "data-retention",
    number: "7",
    title: "Data Retention & Lifecycle Schedule",
    icon: "Clock",
    content: `
We retain personal data only for as long as your account remains active or as needed to provide you with Wallely services. The schedule below outlines our retention and automated deletion cycle:
    `,
    tableType: "retention"
  },
  {
    id: "family-vault",
    number: "8",
    title: "Family Vault Sharing & Card Privacy Model",
    icon: "Users",
    content: `
Wallely provides collaborative capabilities with clear privacy boundaries:
    `,
    bullets: [
      "**Family Vault Sharing:** Only bills and receipts explicitly added to a shared Family Vault are visible to invited vault members. Your private personal bills remain strictly confidential.",
      "**Leaving or Revoking Vaults:** You can leave a shared vault or remove members at any time, instantly cutting off their access to those shared records.",
      "**Digital Visiting Cards:** Any details added to your Digital Visiting Card are intended for public networking when you present your card QR code or share your link. You can edit or delete this card anytime."
    ]
  },
  {
    id: "account-deletion",
    number: "9",
    title: "Account & Data Deletion Rights (Store Compliant)",
    icon: "Trash2",
    content: `
In full compliance with Google Play Developer Policy and Apple App Store Review Guideline 5.1.1(v), Wallely provides a straightforward, self-service account and data deletion mechanism directly within the mobile application.
    `,
    highlightType: "deletionGuide"
  },
  {
    id: "user-rights",
    number: "10",
    title: "Your Rights & Data Portability",
    icon: "CheckCircle",
    content: `
Under global privacy standards (including GDPR, CCPA/CPRA, and applicable state laws), you possess comprehensive rights over your personal data:
    `,
    bullets: [
      "**Right to Access & Review:** View all profile data, bill records, uploaded media, and visiting cards within the app at any time.",
      "**Right to Rectification:** Update or correct any inaccurate personal or financial entry directly through the app interface.",
      "**Right to Erasure (Right to be Forgotten):** Delete your account and all associated records directly in the app under Profile → Delete Account.",
      "**Right to Data Portability:** Request an export of your structured bill and profile data by emailing our support desk at bill.management.pairalabs@gmail.com.",
      "**Right to Withdraw Consent:** Revoke device permissions (Camera, Media, Notifications) anytime in device system settings.",
      "**Right to Non-Discrimination:** We will never penalize, discriminate, or degrade service quality for exercising any of your privacy rights."
    ]
  },
  {
    id: "gdpr-compliance",
    number: "11",
    title: "GDPR & International Privacy Rights (EEA & UK)",
    icon: "Globe",
    content: `
If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland:
    `,
    bullets: [
      "**Legal Basis:** We process data based on Contractual Necessity (to deliver the bill organizer features), Legitimate Interests (to maintain security and prevent abuse), and Consent (for push notifications and camera permissions).",
      "**International Transfers:** Where personal data is transferred outside the EEA/UK, transfers are safeguarded under standard contractual clauses (SCCs) and GDPR-compliant processing agreements.",
      "**Supervisory Authority:** You have the right to lodge a complaint with your local Data Protection Authority (DPA) if you believe your rights have been violated."
    ]
  },
  {
    id: "ccpa-compliance",
    number: "12",
    title: "California Privacy Notice (CCPA / CPRA)",
    icon: "Award",
    content: `
For residents of California under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
    `,
    bullets: [
      "**Categories Collected:** Identifiers (name, email, device ID), financial records (user-entered bill amounts, receipt images), commercial information, and internet activity.",
      "**No Sale or Sharing:** We have NOT sold or shared consumer personal information for cross-context behavioral advertising in the preceding 12 months, and we will never do so.",
      "**Exercising Rights:** Delete your account and associated records directly within the mobile application under Profile → Delete Account."
    ]
  },
  {
    id: "children-privacy",
    number: "13",
    title: "Children's Privacy (Under 13 Policy)",
    icon: "Baby",
    content: `
Wallely is not directed to children under 13 years of age (or under 16 in certain jurisdictions). 

We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected personal data from a child under 13 without verified parental consent, we will promptly delete that account and all related data from our servers. Parents or guardians who believe their child has registered may contact us at **bill.management.pairalabs@gmail.com**.
    `
  },
  {
    id: "policy-updates",
    number: "14",
    title: "Changes to this Privacy Policy",
    icon: "RefreshCw",
    content: `
We may update this Privacy Policy from time to time to reflect new app capabilities, technical enhancements, or legal requirements. 

When material changes are made, we will update the **"Last Updated"** date at the top of this document and notify users through an in-app alert where appropriate. We encourage you to review this policy periodically.
    `
  },
  {
    id: "contact-us",
    number: "15",
    title: "Contact Information & Privacy Officer",
    icon: "Mail",
    content: `
If you have questions, feedback, or requests regarding this Privacy Policy or our data handling practices, please contact our team:
    `,
    contactCards: true
  }
];
