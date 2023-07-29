## **FeaturesV1**

### Code Improvements

-   Integrated `prettier` into `eslintrc` for better code formatting and consistency.
-   Added `prettierc` config file to the root project for easy configuration of code formatting rules.

### Backend Functionality

-   Implemented the `finishUser` function with a promise return type "FinishUserRequest" on the Golang server, ensuring type safety.
-   Added a fetch function to retrieve all the countries used in the combobox for the athlete and organization signup form, with a focus on type safety.
-   Included a fetch function to submit the org form to the Golang server, maintaining type safety.

### Frontend Improvements

-   Developed organization pages and a signup form for organizations.
-   Introduced a popover button that displays a combobox to fetch and show the countries used in the combobox.
-   Added an initial message for the athlete signup form.
-   Enhanced performance and addressed various bug fixes.

### Form Behavior

-   Updated the selects form behavior to automatically close the form when an option is clicked. (Fix for the issue where clicking an option did not close the form)

### Form Validation

-   Incorporated `zod` schemas and resolvers for validating form data.

### Dependency Update

-   Updated the version of "react-icons" to version "4.10.1."

## **Known Errors**

-   The athlete form remains unfinished and requires fixing to be ready for production.
  

## **ScrennShots**

https://github.com/alopez-2018459/the-field-app/assets/108323739/9f3b3206-1a89-439f-8daf-8bc7be16a62e

