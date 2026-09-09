# E-Commerce Web Application Testing

## Project Overview

This project demonstrates Manual Testing and UI Automation Testing of an E-Commerce web application using the OpenCart application from Naveen Automation Labs.

The project covers functional testing of key E-Commerce features through manually created test scenarios and test cases. Selected critical user workflows have also been automated using Playwright with TypeScript.

The project was developed and executed using Visual Studio Code.

---

## Application Under Test

- Application: OpenCart
- Domain: E-Commerce
- Application Reference: Naveen Automation Labs
- Application URL: https://naveenautomationlabs.com/opencart/index.php?route=common/home
- Testing Approach: Manual Testing & UI Automation Testing

---

## Testing Scope

The following E-Commerce modules were covered in this project:

- User Registration
- User Login
- User Logout
- Product Search
- Product Display Page
- Add to Cart
- Shopping Cart
- change password

---

# Manual Testing

Manual test scenarios and test cases were created and executed for the following modules:

| Module | Coverage |
|---|---|
| Register | Registration functionality and validations |
| Login | Valid and invalid login scenarios |
| Logout | Logout functionality |
| Product Search | Product search functionality |
| Product Display Page | Product information and display validation |
| Add to Cart | Adding products to the shopping cart |
| Shopping Cart | Cart product and information validation |
| change password | Validating password update and confirmation functionality |

### Manual Testing Activities

- Identified functional test scenarios
- Designed positive and negative test cases
- Defined test steps and expected results
- Executed test cases
- Recorded actual results
- Assigned test case priority
- Documented test execution results
- Documented identified defects

---

# Automation Testing

Selected critical E-Commerce workflows were automated using Playwright with TypeScript.

### Automated Modules

| Module | Status |
|---|---|
| Login | ✅ Automated |
| Logout | ✅ Automated |
| Add to Cart | ✅ Automated |
| product search | ✅ Automated |

The automation tests focus on important end-to-end user workflows and validate the expected behavior of the application.

---

## Automation Framework

The automation framework is organized using the **Page Object Model (POM)** to improve code reusability and maintainability.

### Technologies Used

- Playwright
- TypeScript
- Playwright Test
- Page Object Model (POM)
- Visual Studio Code
- Git
- GitHub

---

## Project Structure

```text
E-Commerce-QA-Project/
│
├── Manual-Testing/
│   ├── Bug-Report.xlsx
│   └── ECommerce-Manual-Testing.xlsx
│
├── pages/
│   └── Page Object files
│
├── testdata/
│   └── Test data files
│
├── tests/
│   └── Playwright test files
│
├── utils/
│   └── Utility files
│
├── .gitignore
├── login.setup
├── package.json
├── package-lock.json
├── playwright.config
└── README.md
