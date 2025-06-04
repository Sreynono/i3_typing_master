# i3_typing_master

!3 Typing master (Midterm)

    Available Scripts

npm run start - Start development server
npm run build - Build for production
npm run dev - Development mode (if configured)
Git Workflow
Making Changes and Committing
Check current status:

git status
Add files to staging area:

# Add specific files

git add filename.js

# Add all changes

git add .
Commit your changes:

git commit -m "Add descriptive commit message"
Pushing Changes
Push to the main branch:

git push origin main
Push to a specific branch:

git push origin your-branch-name
Working with Branches
Create a new branch:

git checkout -b feature/your-feature-name
Switch between branches:

git checkout branch-name
List all branches:

git branch
Best Practices for Commits
Use clear, descriptive commit messages
Make small, focused commits
Follow the format: type: description
feat: add new typing exercise
fix: resolve timer bug
style: update button styling
docs: update README
Example Workflow

# 1. Clone the repository

git clone <repository-url>
cd I3_typing_master

# 2. Install dependencies

npm install

# 3. Create a new feature branch

git checkout -b feature/add-new-exercise

# 4. Make your changes

# ... edit files ...

# 5. Check what changed

git status
git diff

# 6. Stage and commit changes

git add .
git commit -m "feat: add new typing exercise with timer"

# 7. Push the branch

git push origin feature/add-new-exercise

# 8. Create a pull request (via GitHub/GitLab interface)

    Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'feat: add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
License
This project is licensed under the terms specified in LICENSE.txt.

    Troubleshooting

Common Issues
Port already in use:

# Kill process using port 8080

npx kill-port 8080
Dependencies issues:
