# 🚀 Deploy Oakwood Profile to GitHub Pages

## Step 1: Update package.json with your GitHub username

Open `package.json` and replace `YOUR-GITHUB-USERNAME` with your actual GitHub username in the homepage field:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/oakwood-profile"
```

For example, if your username is `john-doe`, it should be:
```json
"homepage": "https://john-doe.github.io/oakwood-profile"
```

## Step 2: Initialize Git Repository (if not already done)

```bash
cd /Users/mrfjm/Desktop/OAKWOOD/oakwood-profile
git init
git add .
git commit -m "Initial commit - Oakwood Group website"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right and select **"New repository"**
3. Name it: `oakwood-profile`
4. **Don't** initialize with README (we already have one)
5. Click **"Create repository"**

## Step 4: Connect and Push to GitHub

```bash
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/oakwood-profile.git
git branch -M main
git push -u origin main
```

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your React app for production
- Create a `gh-pages` branch
- Deploy the built files to GitHub Pages

## Step 6: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select branch: `gh-pages` and folder: `/ (root)`
4. Click **Save**

## 🎉 Your site will be live at:
```
https://YOUR-GITHUB-USERNAME.github.io/oakwood-profile
```

It may take a few minutes for the site to become available.

---

## 📝 Making Updates

Whenever you make changes to your website:

```bash
# Make your changes, then:
git add .
git commit -m "Description of your changes"
git push

# Deploy the updated version:
npm run deploy
```

---

## 🌐 Custom Domain (Optional)

If you want to use a custom domain like `www.theoakwood.net`:

1. Add a file named `CNAME` in the `public` folder with your domain:
   ```
   www.theoakwood.net
   ```

2. In your domain registrar (where you bought the domain), add these DNS records:
   - **A Record**: `185.199.108.153`
   - **A Record**: `185.199.109.153`
   - **A Record**: `185.199.110.153`
   - **A Record**: `185.199.111.153`
   - **CNAME Record**: `www` → `YOUR-GITHUB-USERNAME.github.io`

3. In GitHub repository settings → Pages → Custom domain, enter your domain

---

## 🔧 Troubleshooting

**Issue**: Blank page after deployment
- **Fix**: Make sure the `homepage` in `package.json` is correct

**Issue**: 404 errors
- **Fix**: Wait a few minutes, GitHub Pages can take 5-10 minutes to deploy

**Issue**: Changes not showing
- **Fix**: Clear browser cache or open in incognito mode
