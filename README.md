🚀 Next.js + TypeScript Project Template
This repository provides a pre-configured Next.js project template with TypeScript, ESLint, Prettier, Husky, and Lint-Staged to ensure a clean, consistent, and production-ready codebase. It’s designed to streamline your development workflow and enforce coding standards across your team..

🌟 Why Use This Template?

✅ Maintain consistent code formatting across all team members
✅ Enforce coding standards and best practices automatically
✅ Prevent broken builds in CI/CD pipelines
✅ Catch errors early with comprehensive linting
✅ Save time by running checks only on changed files
✅ Standardize file naming conventions
✨ Features
🏗️ Core Stack
Next.js 15.5+ - React framework for production
TypeScript - Type safety and better developer experience
Tailwind CSS - Utility-first CSS framework
🔧 Development Tools
ESLint - Code linting with Next.js-specific rules
Prettier - Consistent code formatting
Husky - Git hooks automation
Lint-Staged - Run scripts only on staged files
📋 Custom Rules & Configurations
File Naming: Enforces kebab-case naming convention
Code Quality: Prevents console.log and debugger in production
React Best Practices: Disallows array index as keys
Formatting: Consistent quotes, spacing, and line endings
🚀 Quick Start
Prerequisites
Node.js (>= 18.x)
npm, yarn, or pnpm
Git
Installation
Clone the repository

git clone https://github.com/kkeshavv18/NextJs-Husky.git
cd NextJs-Husky
Install dependencies

npm install

# or

yarn install

# or

pnpm install
Initialize Git (if starting fresh)

git init
git add .
git commit -m "Initial commit"
Start development server

npm run dev
Open your browser Navigate to http://localhost:3000

🛠️ Available Scripts
Script Description
npm run dev Starts development server with Turbopack
npm run build Creates production build
npm run start Starts production server
npm run lint Runs ESLint on all files
📁 Project Structure
├── .husky/ # Git hooks configuration
│ ├── pre-commit # Runs lint-staged before commit
│ └── pre-push # Runs build before push
├── .next/ # Next.js build output (auto-generated)
├── public/ # Static assets
├── src/ # Source code
│ ├── app/ # Next.js 13+ app directory
│ └── ...
├── .eslintrc.config.mjs # ESLint configuration
├── .prettierrc # Prettier configuration
├── .prettierignore # Prettier ignore rules
├── next.config.ts # Next.js configuration
├── package.json # Dependencies and scripts
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
⚙️ Configuration Details
ESLint Configuration
The ESLint setup extends Next.js defaults with custom rules:

// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';
import checkFile from 'eslint-plugin-check-file';

const eslintConfig = [
...compat.extends(
'next/core-web-vitals', // Next.js performance rules
'next/typescript', // TypeScript support
'prettier' // Prettier integration
),
{
rules: {
'no-console': 'error', // Block console logs
'react/no-array-index-key': 'error', // Prevent index as key
'no-debugger': 'error', // Disallow debugger
'check-file/filename-naming-convention': [
'error',
{ '**/*.{js,jsx,ts,tsx}': 'KEBAB_CASE' }
],
},
},
];
Prettier Configuration
{
"singleQuote": true,
"trailingComma": "all",
"printWidth": 80,
"tabWidth": 2,
"useTabs": false,
"bracketSpacing": true,
"semi": true
}
Husky Hooks
Pre-commit: Runs lint-staged to format and lint staged files
Pre-push: Runs npm run build to ensure project builds successfully
Lint-Staged Configuration
{
"lint-staged": {
"\*.{js,jsx,ts,tsx}": [
"prettier --write",
"eslint",
]
}
}
🔍 How It Works
Pre-commit Process
You stage files with git add
You run git commit
Husky triggers the pre-commit hook
Lint-staged runs on staged files only:
Prettier formats the code
ESLint checks for errors and enforces rules
Tests run (if configured)
If all checks pass, commit proceeds
If any check fails, commit is blocked
Pre-push Process
You run git push
Husky triggers the pre-push hook
npm run build runs to ensure project builds
If build succeeds, push proceeds
If build fails, push is blocked
🎯 Benefits
For Individual Developers
Consistent formatting without manual effort
Early error detection before code reaches CI/CD
Enforced best practices automatically
Faster feedback loop on code quality issues
For Teams
Uniform code style across all contributors
Reduced code review time on formatting issues
Prevented broken builds in shared repositories
Standardized naming conventions for better maintainability
🛠️ Customization
Adding New ESLint Rules
Edit eslint.config.mjs:

rules: {
'no-console': 'error',
// Add your custom rules here
'prefer-const': 'error',
'no-unused-vars': 'warn',
}
Modifying Prettier Settings
Edit .prettierrc:

{
"singleQuote": false, // Use double quotes
"printWidth": 120, // Longer lines
// Add other preferences
}
Customizing Git Hooks
Edit files in .husky/ directory:

# .husky/pre-commit

npx lint-staged

# Add additional commands here
