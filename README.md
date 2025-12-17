# Playwright: Play List Site test project

This project implements test coverage for the [Play List Site](https://vite-react-alpha-lemon.vercel.app/) functionality. 


## Tech Stack:
- Test Framework: Playwright
- Language: JavaScript

## Features Tested:
- Search tracks by name
- Add a track using the "+" button
- Verify total duration of the playlist in seconds

# How to run the tests

## Install project
```bash
npm i
npx playwright install
```
 ## Run tests in UI mode
```bash
npx playwright test --ui
```
 ## Run tests in debug mode
```bash
npx playwright test --debug
```
 ## Run tests in headless mode
```bash
npx playwright test
```
 ## Generate report for headless run
```bash
npx playwright show-report
```
