# AI Project Generation Prompt

You are an expert web developer specializing in traffic generating blog websites. I need you to create traffic generating web application for a parquet shop blog: parkeshop.com. Here's the exact specification:

## 1. Project Requirements

### Business Context
```markdown
Business Type: Parquet Shop
Location: No location, as this is just a blog to generate traffic
Target Audience: People talking Turkish
Languages: Turkish
Budget: $1,000 ceiling
Primary Goal: Reduce reliance on paid ads through organic traffic
```

### Core Objectives
- Generate organic traffic through SEO and blog content
- Capture high-quality leads through forms and intelligent chatbot
- Support easy content expansion using AI tools
- Maintain strict budget constraints

## 2. Technical Specifications

### Frontend Stack
- Framework: Next.js 14+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- State Management: React Context
- Form Handling: React Hook Form
- Image Optimization: Next.js Image Component

### Backend & Content
- Content Management: Markdown-based system
- Blog Generation: OpenAI GPT-4
- Image Generation: DALL-E 3
- File System: Local file-based storage
- API Routes: Next.js API routes

### Deployment
- Platform: Vercel
- CI/CD: GitHub Actions
- Environment: Node.js 20+
- Cache: Vercel Edge Cache
- CDN: Vercel Edge Network

## 3. Required Features

### 1. No Multilingual System
- URL Structure: `[page]`
- SEO: `hreflang` tags implementation
- Content: Turkish

### 2. Page Structure
Required Pages:
- Homepage (hero CTA, trust badges, clinic intro)
- Service Pages (Hair Transplant, FUE/DHI methods)
- About Clinic (team, certifications)
- Before/After Gallery
- Testimonials
- Contact/Consultation
- Blog (AI-generated, SEO-focused)

### 3. Blog System
- Content Generation: Daily automated posts
- Languages: Turkish
- Word Count: 1500-2300 words
- Image Generation: 1792x1024 DALL-E images
- Categories: Predefined medical categories
- Tags: SEO-optimized tags
- Internal Linking: Automatic within content
- Frontmatter Structure:
```yaml
---
title: "Post Title"
slug: "post-title"
excerpt: "160 character description"
date: "YYYY-MM-DD"
category: "Category Name"
imageUrl: "/img/blog/image.png"
tags: ["tag1", "tag2"]
---
```

### 4. Lead Generation
- Consultation Form: Name, country, contact, question
- WhatsApp Integration: Direct chat link
- Lead Storage: Local JSON or database
- Email Integration: Optional Mailchimp/HubSpot

### 5. SEO Implementation
- Meta Tags: Editable per language
- Schema Markup: FAQ, reviews, business info
- Sitemap: Dynamic generation
- Robots.txt: Custom configuration
- Performance: 90+ Lighthouse scores

## 4. Project Structure
```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   ├── services/
│   ├── about/
│   └── contact/
├── components/
│   ├── blog/
│   ├── forms/
│   ├── layout/
│   └── ui/
├── content/
│   ├── blog/
│   └── pages/
├── lib/
│   ├── blog.ts
│   ├── forms.ts
│   └── sitemap.ts
├── styles/
└── types/
```

## 5. Content Generation System

### Blog Generation Script
- Daily execution via GitHub Actions
- OpenAI GPT-4 for content
- DALL-E 3 for images
- Title management system
- Content sanitization
- SEO optimization

### Image Generation
- Size: 1792x1024
- Style: Clean, medical aesthetic
- Format: PNG
- Storage: Public directory
- Optimization: Next.js Image

## 6. Performance Requirements
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms

## 7. Security Measures
- Environment Variables: All sensitive data
- Input Sanitization: All forms and content
- XSS Prevention: Content escaping
- CSRF Protection: Form submissions
- Rate Limiting: API routes

## Expected Output
Generate a complete, production-ready implementation including all necessary files and configurations:

1. **Project Setup**
   - `package.json` with all dependencies
   - `tsconfig.json` configuration
   - `tailwind.config.js` setup
   - `.env.example` with required environment variables
   - `.gitignore` configuration
   - GitHub Actions workflow files

2. **Core Implementation**
   - Complete `src/` directory structure with all components
   - All page implementations in `app/` directory
   - Component implementations in `components/` directory
   - Utility functions in `lib/` directory
   - Type definitions in `types/` directory
   - Style configurations in `styles/` directory

3. **Content System**
   - Blog generation script (`scripts/generate_blog.js`)
   - Content templates and structures
   - Image generation and optimization setup
   - Title management system
   - Content sanitization utilities

4. **Configuration Files**
   - Next.js configuration (`next.config.js`)
   - ESLint and Prettier configurations
   - Vercel deployment configuration
   - Sitemap generation setup
   - Robots.txt configuration

5. **Documentation**
   - README.md with setup instructions
   - API documentation
   - Content generation guidelines
   - Deployment procedures
   - Maintenance guidelines

6. **Example Content**
   - Sample blog posts
   - Example images
   - Test data for forms
   - Sample configurations

The implementation must:
- Be production-ready
- Include all necessary dependencies
- Have proper TypeScript types
- Include error handling
- Follow best practices for performance and security
- Be ready for immediate deployment
- Include all necessary environment variables
- Have proper documentation

Provide the complete codebase as a series of files that can be directly used to create a new project. 