## **Features V3**

- **Custom Cards in `FeedBar` Component**: Added custom cards within the `FeedBar` component, allowing to personalize content and interactions.
- **Enhanced Reusability of `FeedBar` Cards**: The `FeedBar` cards have been made reusable, now accepting a title, a description, and an image as inputs, providing greater flexibility and customization (for now).
- **Improved Type Safety and Error Reduction**: Implemented measures to improve type safety and minimize the occurrence of errors on the home page, enhancing overall user experience and application stability.

## **Major Bug Fix**

- **Fixed Likes in Initial Posts of Infinite Query Handler**: Resolved a significant issue related to likes in the initial posts of the infinite query handler. Users can now interact smoothly with the initial data received from the server without encountering any bugs. The issue was related to server caching, which has been resolved by changing the initial posts to be a server action instead of a fetch and a route on the server. This ensures that data interactions work as expected and provides a more reliable user experience.

## **Screenshots**



https://github.com/alopez-2018459/the-field-app/assets/108323739/14740ac2-f1c9-49e9-b29e-f672f78695c4



##

##

##

## **Features V2**

### **Fixed Input Placeholder**

- Improved the input placeholder for sponsors, ensuring a more professional and polished appearance.

### **Zod Type Schema for Athlete Form**

- Implemented Zod type schema for the athlete form, enhancing data validation and accuracy, reducing potential form submission errors.

### **Athlete Signup Info Page**

- Added a dedicated page for athlete signup information, simplifying the signup process and making it more user-friendly.

### **Athlete Information Submission Form**

- Introduced a user-friendly form for submitting athlete information, streamlining the data collection process and improving user experience.

### **Secure "finishAtl" Data Fetch Function**

- Developed the "finishAtl" function with a focus on type safety and efficiency, ensuring secure retrieval of athlete data and preventing data inconsistencies.

### **Enhanced Type Safety with Type Conditionals**

- Implemented type conditionals to improve type safety throughout the application, minimizing type-related issues and enhancing overall application robustness.


## **Screenshots**

https://github.com/alopez-2018459/the-field-app/assets/108323739/364c331e-7d56-4a11-b9d0-222cd4597949

##

##

##

## **FeaturesV1**

### Code Improvements

- Integrated `prettier` into `eslintrc` for better code formatting and consistency.
- Added `prettierc` config file to the root project for easy configuration of code formatting rules.

### Backend Functionality

- Implemented the `finishUser` function with a promise return type "FinishUserRequest" on the Golang server, ensuring type safety.
- Added a fetch function to retrieve all the countries used in the combobox for the athlete and organization signup form, with a focus on type safety.
- Included a fetch function to submit the org form to the Golang server, maintaining type safety.

### Frontend Improvements

- Developed organization pages and a signup form for organizations.
- Introduced a popover button that displays a combobox to fetch and show the countries used in the combobox.
- Added an initial message for the athlete signup form.
- Enhanced performance and addressed various bug fixes.

### Form Behavior

- Updated the selects form behavior to automatically close the form when an option is clicked. (Fix for the issue where clicking an option did not close the form)

### Form Validation

- Incorporated `zod` schemas and resolvers for validating form data.

### Dependency Update

- Updated the version of "react-icons" to version "4.10.1."

## **Known Errors**

- The athlete form remains unfinished and requires fixing to be ready for production.

## **Screenshots**

https://github.com/alopez-2018459/the-field-app/assets/108323739/9f3b3206-1a89-439f-8daf-8bc7be16a62e
