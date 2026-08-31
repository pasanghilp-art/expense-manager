# Expense Manager

This project manages expenses — it produces a list of expenses the user adds through a form, and summarizes the total along with a breakdown by category.

The category breakdown is shown visually with a pie chart and bar diagram to show the diversity of expenses.

**Live Demo:** https://expense-manager-sofd.onrender.com

![App Screenshot](./assets/image.png)

## Tech Stack

React (JSX), JavaScript, Recharts, Vite, ESLint

## Key Feature

This project uses the Context API instead of prop drilling, along with methods like `.reduce()` on objects and arrays to calculate totals.

## What I Learned

I learned how to use the Context API for managing shared state — useful for larger projects where passing the same props through many components becomes repetitive and hard to maintain.

## Running Locally

```bash
git clone https://github.com/pasanghilp-art/expense-manager.git
cd expense-manager
npm install
npm run dev
```
