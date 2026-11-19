feature ke liye
============================================================================================================================

abhi mere mein career ai mein teen role hai user, admin, superadmin, itne hi role aur add karu
CareerAI ke production/industrial-standard project ke liye meri recommendation hai ki abhi 3 roles hi rakho: user, admin, superadmin. Abhi unnecessary roles add karne ki zaroorat nahi hai.

Recommended roles
Role

Responsibilities

user

Apna profile, resumes, AI Chat, ATS analysis, interview preparation aur career tools manage karna

admin

Users aur reports moderate karna, content manage karna, support requests handle karna

superadmin

Admin management, global configurations, roles/permissions aur critical system operations

Kya future mein aur roles chahiye?
Role

Recommendation

recruiter

Baad mein, agar job posting aur candidate hiring features add karoge

employer

Baad mein, agar companies ke liye dedicated dashboard chahiye

moderator

Jab community aur content moderation ka workload badhe

support

Jab dedicated customer-support team ho

Industrial-standard approach
Abhi existing 3 roles rakho.

Har role ke liye backend par authorization enforce karo; sirf frontend par buttons hide karna security nahi hai.

superadmin ko protected rakho. Public signup se koi bhi admin ya superadmin nahi ban sake.

Agar future mein fine-grained permissions chahiye, to role-based access control (RBAC) ke saath permissions layer add karo.

Final decision: abhi user, admin, superadmin enough hain. Recruiter/employer roles tab add karna jab CareerAI mein actual hiring workflow implement karoge.

=================================================================================================================================

# CareerAI – Google Cloud Account & OAuth 2.0 Setup Guide

## 1. Purpose

CareerAI project mein Google OAuth 2.0 authentication integrate karne ke liye Google account, Google Cloud project aur OAuth credentials configure karna.

Is documentation mein account creation se lekar backend integration tak ke steps hain.

---

# PART 1: Google Account Creation

## Step 1: Create Google Account

1. Open: https://accounts.google.com/signup
2. First Name aur Last Name enter karein.
3. Date of Birth aur other required details fill karein.
4. Gmail username choose karein.
5. Strong password create karein.
6. Mobile number verification agar maangi jaaye to complete karein.
7. Terms and Conditions accept karein.
8. Google account create karein.

**Account used for CareerAI setup:**

```text
annu377525@gmail.com
```

**Security:** Google account password aur recovery details GitHub ya README mein save nahi karni hain.

---

# PART 2: Google Cloud Account Setup

## Step 2: Open Google Cloud Console

Open:

https://console.cloud.google.com/

1. Apne Google account se sign in karein.
2. Google Cloud terms accept karein, agar prompt aaye.
3. Billing/profile verification agar required ho to complete karein.
4. Google Cloud Console dashboard open karein.

Note: Google Cloud account setup ke dauran billing details maangi ja sakti hain. Google OAuth configuration ke liye billing enable karna har case mein zaroori nahi hota.

---

## Step 3: Create a New Project

Google Cloud Console dashboard par:

1. Top navigation mein project selector par click karein.
2. New Project select karein.
3. Project details enter karein.

| Field | Value |
|---|---|
| Project Name | CareerAI |
| Organisation | No organisation |
| Parent Resource | No organisation |

4. Create button par click karein.
5. Project create hone ke baad CareerAI project select karein.

### Created Project Details

| Field | Value |
|---|---|
| Project Name | CareerAI |
| Project ID | careerai-513309 |
| Project Number | 232139577163 |

**Status: Completed**

---

# PART 3: Google OAuth Configuration

## Step 4: Open Google Auth Platform

Open:

https://console.cloud.google.com/auth/overview?project=careerai-513309

Google Auth Platform mein OAuth configuration start karein.

## Step 5: Configure Audience

Audience section mein:

- Internal: Organisation ke users ke liye.
- External: General Google account users ke liye.

Select:

```text
External
```

Testing mode mein sirf added test users application use kar sakte hain.

**Status: Completed**

## Step 6: Configure Contact Information

Contact Information section:

```text
Email Address: annu377525@gmail.com
```

Google project aur OAuth updates ke notifications is email par bhejega.

**Status: Completed**

## Step 7: Configure Branding

Open:

https://console.cloud.google.com/auth/branding?project=careerai-513309

Configure:

| Field | Value |
|---|---|
| App Name | CareerAI |
| User Support Email | annu377525@gmail.com |
| Audience | External |
| Developer Contact Email | annu377525@gmail.com |

App Logo, Home Page, Privacy Policy aur Terms of Service abhi configure nahi kiye gaye hain.

**Status: Branding configuration created**

---

# PART 4: Create OAuth Client

## Step 8: Open Clients

Open:

https://console.cloud.google.com/auth/clients?project=careerai-513309

1. Create Client par click karein.
2. Application Type select karein: Web application.
3. Client Name enter karein:

```text
CareerAI Backend
```

## Step 9: Authorised JavaScript Origins

Local Next.js frontend:

```text
http://localhost:3000
```

Add URI par click karke save karein.

## Step 10: Authorised Redirect URIs

Local backend callback:

```text
http://localhost:5000/api/auth/google/callback
```

Add URI par click karke save karein.

**Important:** Frontend port aur backend callback route actual project configuration se verify karna zaroori hai.

## Step 11: Create OAuth Client

Create button par click karein.

Google aapko ye credentials dega:

- Client ID
- Client Secret

Dono credentials ko securely save karein.

**Never share Client Secret publicly.**

---

# PART 5: Backend Environment Configuration

## Step 12: Create Backend .env File

Backend project ke root folder mein `.env` file create/update karein.

Example:

```text
CareerAI/
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
└── frontend/
```

Add:

```env
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
```

Actual Google credentials se placeholders replace karein.

### Security

- `.env` ko `.gitignore` mein add karein.
- `.env` ko GitHub par commit na karein.
- Client Secret sirf backend mein rakhein.
- Production mein HTTPS callback URL use karein.

---

# PART 6: CareerAI Backend Integration

## Step 13: Required OAuth Routes

```text
GET /api/auth/google
GET /api/auth/google/callback
```

## Step 14: Authentication Flow

1. User Continue with Google par click karega.
2. Backend Google authorization URL generate karega.
3. User Google account select karega.
4. Google consent complete hone ke baad callback par redirect karega.
5. Backend OAuth state validate karega.
6. Google identity aur verified email validate honge.
7. Existing account find hoga ya new account create hoga.
8. CareerAI ka existing JWT/session authentication system user ko authenticate karega.
9. User frontend dashboard par redirect hoga.

## Step 15: Production Security Checklist

- OAuth state validation.
- ID token signature and audience verification.
- Issuer and expiry validation.
- Verified email validation.
- Duplicate identity prevention.
- Secure account linking.
- HttpOnly cookies.
- Refresh-token rotation and revocation.
- Error handling.
- Automated tests.

---

# PART 7: Current Progress

| Task | Status |
|---|---|
| Google Account | Existing account used |
| Google Cloud Console opened | Completed |
| Google Cloud project created | Completed |
| Project ID recorded | Completed |
| Audience External selected | Completed |
| Contact Information configured | Completed |
| Branding configuration created | Completed |
| OAuth Web Client | In progress |
| Client ID and Secret | Pending confirmation |
| Backend `.env` | Pending |
| Backend OAuth integration | Pending |
| Google login testing | Pending |
| Production deployment | Pending |

---

# PART 8: Resume Setup Later

Agar setup beech mein ruk jaaye, to ye steps follow karein:

1. https://console.cloud.google.com/ open karein.
2. Same Google account se login karein.
3. CareerAI project select karein.
4. Google Auth Platform → Clients open karein.
5. OAuth Client creation complete karein.
6. Backend `.env` configure karein.
7. CareerAI backend integration continue karein.

**Project ID:** `careerai-513309`

**Current stopping point:** Google Cloud project, External audience aur Branding configuration complete hain. OAuth Web Client aur credentials ko complete/confirm karna next step hai.

---

**Documentation:** CareerAI Google OAuth Setup  
**Purpose:** Account creation, Cloud project setup, OAuth configuration and backend integration tracking.