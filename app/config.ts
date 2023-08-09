export const SCROLLING_PAGINATION_NUMBER = 3;
export const NEWPOST_CONTEXT_ERROR =
  'Unable to retrieve data from NewPostContext. Please check if the context is properly set up and provided.';

/* ROUTES */
export const ROUTES = {
  feed: '/feed/',
} as const;

/* API ROUTES */

export const ROUTES_API = {
  newPost: '/api/post/newpost',
  getSession: '/api/account/me',
} as const;

/* GLOBAL ERRORS */
export const REQUIREMENT_NOTFOUND =
  'Requirement Not Found: The requested resource or requirement could not be located. Double-check your input and try again.';

/* ROUTE ERRORS */
export const REQUEST_BODY_ERROR = 'Error getting request body';
export const SERVER_ERROR = 'Internal Server Error Occurred';
export const UNAUTHORIZED_ERROR =
  'Access Denied. Please authenticate to proceed.';

/* ROUTE ERROR MESSAGES */
export const REQUEST_BODY_ERROR_MESSAGE =
  'Invalid request body. Please ensure the provided data is correctly formatted and meets the required specifications.';
export const SERVER_POST_ERROR_MESSAGE =
  'An unhandled exception occurred while processing the request. Details have been logged for further analysis.';
export const UNAUTHORIZED_ERROR_MESSAGE =
  'Unauthorized: You do not have permission to access this resource. Please make sure you are authenticated and have the necessary credentials to proceed.';

/* FETCH ERRORS */
export const FETCH_ERROR =
  'Request Error: Unable to retrieve data at the moment. Please try again later.';

export const FETCH_ERROR_MESSAGE =
  'Network Error: The fetch request encountered a problem. Check the console for detailed error logs and review the request configuration.';
