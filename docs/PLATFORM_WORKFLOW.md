neXa PLATFORM WORKFLOW

Version: 1.0
Status: Official
Brand: neXa
Tagline: Build Faster. Create Smarter.

---

1. PURPOSE

This document defines how neXa uses its technology, AI, development, deployment, backend, communication, and content platforms as one connected ecosystem.

The purpose is to prevent duplicated work, inconsistent branding, unnecessary tools, and uncontrolled platform growth.

---

2. CORE ECOSYSTEM

The primary neXa ecosystem consists of:

AI
│
├── ChatGPT
├── Gemini
├── Claude
└── DeepSeek
        │
        ▼
Development
│
├── Termux
├── TrebEdit
└── GitHub
        │
        ▼
Application / Website
│
├── Vercel
├── Cloudflare
└── Supabase
        │
        ▼
Distribution
│
├── Facebook
├── Telegram
├── TikTok
├── Viber Business
└── Viber Community

Additional platforms may be added when required.

---

3. PLATFORM PRINCIPLE

Every platform must have a defined purpose.

Before adding a new platform, determine:

- What problem does it solve?
- Is it necessary?
- Is there an existing tool that already solves it?
- Is it free or affordable?
- Is it available in Myanmar?
- Does it support mobile use?
- Does it have API access when needed?
- Can the project be moved away from it later?
- Does it introduce security risks?

---

4. CHATGPT

Primary Role

ChatGPT is the main neXa coordination and planning assistant.

Use ChatGPT for:

- project architecture
- master prompts
- master rules
- documentation
- research
- technical planning
- debugging
- code review
- workflow design
- platform planning
- content strategy
- decision support

ChatGPT should maintain awareness of the neXa system when working within the project.

---

5. GEMINI

Primary Role

Gemini may be used as a secondary AI system.

Useful areas include:

- Google ecosystem
- AI Studio
- multimodal tasks
- alternative technical approaches
- research
- coding
- content assistance

Important outputs should be checked against the neXa Master System.

---

6. CLAUDE

Primary Role

Claude may be used for:

- large codebases
- code review
- refactoring
- architecture analysis
- documentation
- long-form reasoning

Claude output must preserve neXa rules.

---

7. DEEPSEEK

Primary Role

DeepSeek may be used for:

- coding
- debugging
- algorithms
- technical reasoning
- alternative implementations

Outputs must be reviewed before production.

---

8. MULTI-AI WORKFLOW

For complex tasks:

Requirement
↓
ChatGPT
↓
Claude / Gemini / DeepSeek
↓
Compare solutions
↓
Verify
↓
Select safest solution
↓
Implement
↓
Test

Do not blindly merge multiple AI outputs.

---

9. TERMUX

Termux is the preferred mobile development environment for command-line work.

Possible uses:

- Git
- Node.js
- npm
- scripts
- file management
- API testing
- automation
- development tools

---

10. TERMUX RULE

Commands must be:

- accurate
- ordered
- minimal
- understandable

Before destructive commands, explain the consequence.

Avoid unnecessary commands such as:

rm -rf

unless the user explicitly understands and confirms the operation.

---

11. TREBEDIT

TrebEdit may be used for:

- HTML editing
- CSS editing
- JavaScript editing
- quick mobile development
- file inspection
- lightweight frontend work

It should be treated as an editor, not as the central source-control system.

GitHub remains the source of truth.

---

12. GITHUB

GitHub is the primary source-control platform.

Use GitHub for:

- source code
- documentation
- version history
- issues
- project collaboration
- deployment integration

---

13. GITHUB STRUCTURE

Recommended:

neXa/
│
├── README.md
├── docs/
├── assets/
├── components/
├── css/
├── js/
└── project files

The structure may evolve as the project grows.

---

14. GIT WORKFLOW

Recommended:

Edit
↓
Test
↓
Review
↓
Commit
↓
Push
↓
Preview
↓
Verify

Use meaningful commit messages.

Examples:

feat: add service section
fix: repair mobile navigation
docs: update neXa master system
style: improve mobile UI

---

15. VERCEL

Vercel may be used for:

- frontend hosting
- preview deployments
- production deployment
- serverless functionality

Preferred workflow:

GitHub
↓
Vercel
↓
Preview
↓
Test
↓
Production

---

16. VERCEL PREVIEW RULE

Every significant UI change should ideally be checked in preview before production.

Check:

- mobile
- desktop
- navigation
- links
- forms
- console
- loading
- assets

---

17. CLOUDFLARE

Cloudflare may provide:

- DNS
- SSL
- CDN
- caching
- security
- Workers
- edge services

Use Cloudflare carefully because DNS and production configuration changes can affect availability.

---

18. CLOUDFLARE WORKERS

Workers may be used for:

- API endpoints
- middleware
- proxying
- lightweight backend logic
- AI API integrations
- edge processing

Never expose secrets in frontend JavaScript.

Use secure secret/environment mechanisms.

---

19. SUPABASE

Supabase may provide:

- PostgreSQL
- authentication
- database
- storage
- realtime
- APIs

Use Supabase only when persistent backend functionality is required.

---

20. SUPABASE SECURITY

Never expose privileged database credentials.

Use:

- Row Level Security
- appropriate policies
- least privilege
- secure authentication
- server-side secrets

Review database permissions before production.

---

21. FRONTEND ARCHITECTURE

Default foundation:

HTML
CSS
JavaScript

Recommended separation:

HTML
↓
Structure

CSS
↓
Presentation

JavaScript
↓
Behavior

Do not unnecessarily combine all responsibilities into one file.

---

22. WEB APPLICATION WORKFLOW

Idea
↓
Requirements
↓
UI/UX
↓
Architecture
↓
Implementation
↓
Testing
↓
GitHub
↓
Vercel Preview
↓
Production

---

23. BACKEND WORKFLOW

When backend functionality is required:

Frontend
↓
API
↓
Authentication
↓
Backend Logic
↓
Database
↓
Response
↓
Frontend

Do not expose database credentials to the browser.

---

24. AI API WORKFLOW

Recommended:

User
↓
Frontend
↓
Secure API
↓
AI Provider
↓
Response Validation
↓
Frontend

API keys should remain server-side.

---

25. SECRET MANAGEMENT

Never store secrets inside:

- HTML
- CSS
- public JavaScript
- GitHub
- screenshots
- social media posts
- public documentation

Use environment variables or secure secret storage.

---

26. ENVIRONMENT SEPARATION

Where applicable, maintain:

Development
↓
Preview
↓
Production

Do not casually use production credentials for development.

---

27. DATABASE BACKUP

When a project contains important user or business data:

- maintain backups
- understand recovery
- test recovery when practical
- avoid destructive migrations

---

28. DEPLOYMENT CHECKLIST

Before production:

- [ ] Build succeeds
- [ ] No critical console errors
- [ ] Mobile checked
- [ ] Desktop checked
- [ ] Links checked
- [ ] Forms checked
- [ ] Authentication checked
- [ ] API checked
- [ ] Database checked
- [ ] Secrets protected
- [ ] HTTPS verified
- [ ] Production environment verified

---

29. CONTENT WORKFLOW

Recommended:

Idea
↓
Research
↓
Master Content
↓
AI Assistance
↓
Human Review
↓
Platform Adaptation
↓
Publish
↓
Analyze
↓
Improve

---

30. SOCIAL PLATFORM WORKFLOW

One core idea can become multiple formats.

Example:

One Topic
│
├── Website Article
├── Facebook Post
├── Telegram Post
├── TikTok Video
├── Viber Announcement
└── YouTube Video

Each version should be adapted to the platform.

---

31. CONTENT SOURCE OF TRUTH

The original factual information should be maintained separately from platform-specific captions.

This prevents different platforms from accidentally publishing conflicting information.

---

32. CUSTOMER COMMUNICATION

Customer communication may use:

- Viber
- Telegram
- Facebook
- email
- website forms

Each channel must maintain:

- consistent information
- professional tone
- privacy
- clear next steps

---

33. EMAIL

When an official neXa email system is used:

Use professional addresses such as:

support@
hello@
info@
business@

Do not expose private credentials.

---

34. DOMAIN

Official domains should be treated as important brand assets.

Before changing DNS or domain configuration:

1. verify ownership
2. inspect existing records
3. identify dependencies
4. make minimal changes
5. verify propagation

---

35. PLATFORM FAILURE RULE

If one platform becomes unavailable:

Do not panic or rebuild everything immediately.

Identify:

- what failed
- whether it is temporary
- whether data is safe
- whether another platform can temporarily replace it

---

36. PLATFORM LOCK-IN

Avoid unnecessary dependence on one provider.

Where practical:

- maintain source code in GitHub
- document APIs
- document environment variables
- maintain database export/recovery options
- avoid proprietary features unless justified

---

37. FREE-TIER STRATEGY

When possible, begin with free or low-cost services.

Upgrade only when:

- usage requires it
- reliability requires it
- business revenue supports it
- security requires it

Do not pay for features that are not needed.

---

38. PLATFORM ADDITION POLICY

A new platform should be added only after evaluating:

Need
↓
Benefit
↓
Cost
↓
Availability
↓
Security
↓
Integration
↓
Maintenance

---

39. FUTURE PLATFORM CATEGORIES

Potential future additions may include:

Communication

- WhatsApp
- Discord

Analytics

- Google Analytics
- Search Console

Payments

- locally supported payment providers
- international payment providers where legally and practically available

Automation

- n8n
- Make
- Zapier

Storage

- Cloudflare R2
- object storage providers

Monitoring

- uptime monitoring
- error monitoring
- analytics

Any future platform must be evaluated before adoption.

---

40. MOBILE-FIRST OPERATIONS

The workflow should remain practical from a smartphone.

Preferred mobile workflow:

Phone
↓
TrebEdit / Termux
↓
GitHub
↓
Vercel
↓
Cloudflare
↓
Production

AI assistants can be used throughout the process.

---

41. AI + DEVELOPMENT WORKFLOW

Recommended:

User Idea
↓
ChatGPT Planning
↓
AI-Assisted Design
↓
Code
↓
TrebEdit / Termux
↓
GitHub
↓
Vercel Preview
↓
Testing
↓
Cloudflare / Production

---

42. AI + CONTENT WORKFLOW

Recommended:

Topic
↓
Research
↓
ChatGPT
↓
AI Cross-check
↓
Master Content
↓
Platform Adaptation
↓
Human Review
↓
Publish

---

43. AUTOMATION WORKFLOW

Automation should be introduced gradually.

Start with:

Manual
↓
Semi-automated
↓
Tested automation
↓
Reliable automation
↓
Full automation

Do not automate a process that is not yet understood.

---

44. MONITORING

Production systems should be monitored when practical.

Monitor:

- uptime
- errors
- performance
- API failures
- database health
- user issues
- deployment failures

---

45. INCIDENT WORKFLOW

When a production problem occurs:

Detect
↓
Confirm
↓
Contain
↓
Diagnose
↓
Fix
↓
Test
↓
Deploy
↓
Monitor
↓
Document

---

46. DOCUMENTATION WORKFLOW

Whenever an important system changes:

Update relevant documentation.

Examples:

Brand change
→ BRAND_GUIDELINES.md

UI change
→ WEB_UI_RULES.md

AI workflow
→ AI_MASTER_PROMPT.md

Social change
→ SOCIAL_MEDIA_RULES.md

Platform change
→ PLATFORM_WORKFLOW.md

---

47. MASTER DOCUMENT RELATIONSHIP

NEXA_MASTER_SYSTEM.md
        │
        ├── BRAND_GUIDELINES.md
        ├── WEB_UI_RULES.md
        ├── AI_MASTER_PROMPT.md
        ├── SOCIAL_MEDIA_RULES.md
        └── PLATFORM_WORKFLOW.md
                │
                ├── FACEBOOK_MASTER_PROMPT.md
                ├── TELEGRAM_MASTER_PROMPT.md
                ├── TIKTOK_MASTER_PROMPT.md
                ├── VIBER_BUSINESS_MASTER.md
                ├── VIBER_COMMUNITY_MASTER.md
                └── FUTURE_CONTENT_MASTER.md

---

48. SOURCE OF TRUTH

When platform-specific documents conflict with the Master System:

The higher-level approved neXa rule takes priority.

The project owner has final authority.

---

49. CHANGE CONTROL

Major platform changes should be documented.

Record:

- date
- platform
- reason
- change
- impact
- rollback plan when appropriate

---

50. FINAL WORKFLOW PRINCIPLE

The neXa ecosystem should remain:

Simple enough to manage.

Powerful enough to grow.

Flexible enough to change.

Secure enough to trust.

Consistent enough to recognize.

---

OFFICIAL neXa PLATFORM IDENTITY

Brand: neXa

Tagline: Build Faster. Create Smarter.

Primary: "#0B1F3A"

Accent: "#10B981"

Text: "#FFFFFF"

Development: GitHub + Termux + TrebEdit

Deployment: Vercel + Cloudflare

Backend: Supabase when required

AI: ChatGPT + Gemini + Claude + DeepSeek

---

END OF PLATFORM WORKFLOW
