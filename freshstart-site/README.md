# 🌱 FreshStart

**Your first step from graduation to your first job.**
A career site for fresh graduates: personalised roadmaps, fresher jobs and internships, resume builder, interview prep, skills, project ideas, certifications and a personal career tracker.

## Tech stack
| Layer | Used |
|---|---|
| Markup | HTML5 (semantic, single page, hash routing) |
| Styling | CSS3 (custom properties, grid, flexbox, light/dark theme, print styles) |
| Logic | Vanilla JavaScript (ES6), no framework, no build step |
| Storage | Browser `localStorage` (saved jobs, applications, progress) |
| Fonts | Google Fonts: Bricolage Grotesque, Figtree |
| Hosting | GitHub Pages via GitHub Actions |
| SEO | meta description, Open Graph, canonical, `robots.txt`, `sitemap.xml` |

## Folder structure
```
freshstart/
├── index.html            # all pages (Home, Jobs, Roadmaps, Resume, Interview, Skills, Projects, Opportunities, My Career)
├── 404.html              # not-found page
├── css/style.css         # design tokens, layout, dark mode, print
├── js/app.js             # data, routing, roadmap generator, resume, tracker
├── robots.txt
├── sitemap.xml
├── .github/workflows/pages.yml   # auto-deploy on push to main
├── .gitignore
├── LICENSE               # MIT
└── README.md
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```
python3 -m http.server 8000
```

## Launch on GitHub Pages
1. Create a new public repository named `freshstart` on github.com.
2. Upload this folder's contents, or run:
   ```
   git init
   git add .
   git commit -m "Launch FreshStart"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/freshstart.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. After the workflow finishes (Actions tab), the site is at `https://YOUR-USERNAME.github.io/freshstart/`.
5. Replace `YOUR-USERNAME` in `index.html`, `robots.txt` and `sitemap.xml` with your GitHub username, then commit.

## Show up on Google
1. Go to Google Search Console and add your site URL as a property.
2. Verify ownership (HTML tag method: paste the tag into `<head>` of `index.html`).
3. Submit `https://YOUR-USERNAME.github.io/freshstart/sitemap.xml` under **Sitemaps**.
4. Use **URL Inspection → Request indexing**. Indexing can take days to weeks.

## Custom domain (optional)
Buy a domain, add a `CNAME` file containing it, set DNS as described in GitHub's Pages docs, then tick **Enforce HTTPS**.

## Where to edit content
- Roles, roadmaps, skills, projects: `R` object in `js/app.js`
- Jobs: `JOBS` array (sample data now; replace with a real jobs API or backend)
- Interview questions: `QS`; certifications and scholarships: `CERTS`, `SCH`

## Roadmap
1. Design + homepage ✅  2. Career roadmaps ✅  3. Real jobs feed  4. Resume export to PDF/DOCX  5. More interview content  6. Accounts + saved jobs (backend such as Firebase or Supabase)  7. AI career recommendations
