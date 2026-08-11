# cPanel FTP Deployment Guide via GitHub Actions

This repository is configured with an automated CI/CD pipeline using **GitHub Actions** (`.github/workflows/deploy.yml`). Whenever code is pushed to the `main` branch, GitHub automatically installs dependencies, builds the Vite React application, and uploads the production bundle in `dist/` directly to your cPanel hosting server via FTP.

---

## 1. Required GitHub Repository Secrets

To activate automatic deployment, navigate to your GitHub repository:
`https://github.com/laxmirimal/anilpoudel` > **Settings** > **Secrets and variables** > **Actions** > **New repository secret**.

You can name your secrets using any of the supported naming options below:

| Secret Purpose | Supported Secret Names in GitHub | Description | Example Value |
| :--- | :--- | :--- | :--- |
| **FTP Host / Server** | `FTP_SERVER` or `SERVER` | Hostname or IP of your cPanel server | `ftp.anilpoudel.info.np` or `123.45.67.89` |
| **FTP Username** | `FRONTEND_USERNAME` or `FTP_USERNAME` or `USERNAME` | cPanel FTP Username | `anilpoudel@anilpoudel.info.np` |
| **FTP Password** | `FRONTEND_PASSWORD` or `FTP_PASSWORD` or `PASSWORD` | cPanel FTP Password | `YourSecurePassword123!` |
| **Target Folder** *(Optional)* | `REMOTE_DIR` | Target folder on cPanel server | `/public_html/` or `/` |
| **Port** *(Optional)* | `FTP_PORT` | FTP Port (Default `21`) | `21` |

---

## 2. cPanel Setup & Deployment

1. Log into your **cPanel Account**.
2. Go to **FTP Accounts** under Files.
3. Use the FTP Host, Username, and Password to set up the repository secrets listed above.
4. Push your code to GitHub:

```bash
git add .
git commit -m "Deploy React application to cPanel"
git push origin main
```

The GitHub Action will automatically run, compile the Vite app (`dist/`), and upload it to your cPanel server.
