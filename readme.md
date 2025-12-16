# NextJS Artifcat Based CI/CD Deployment to Azure VM

## Overview

This project demonstrates a **production-aligned CI/CD pipeline** for deploying a **Next.js application to an Azure Virtual Machine** using **GitHub Actions**.

The pipeline follows an **artifact-based deployment model**, similar to enterprise deployments used for:
- .NET (DLLs)
- Java (JAR/WAR)
- Node.js / Next.js (build bundles)

The goal is to showcase **correct CI/CD design**, not just a working demo.

---

## Architecture

### High-Level Flow
- **CI** builds the application and produces a deployable artifact
- **CD** deploys the artifact to an Azure VM
- **PM2** runs and manages the Next.js process

---

## Why Artifact-Based Deployment?

Instead of copying the entire repository or building on the VM, this pipeline:

- Builds **once** in CI
- Deploys a **deterministic build output**
- Avoids environment drift
- Mirrors enterprise CI/CD practices

This approach is preferred in production environments.

---

## Project Structure

NEXTJS SAMPLE PROJECT
├── .github/workflows/
│ └── nextjs-cicd.yml
├── pages/
│ ├── api/
│ │ └── messages.js
│ ├── _app.js
│ └── index.js
├── lib/
│ └── db.js
├── data/
│ └── messages.json
├── public/
│ └── favicon.ico
├── package.json
├── package-lock.json
└── README.md

---

