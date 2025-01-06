# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).  
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Design Decisions, Patterns, and Optimizations

### Design Decisions:
1. **Component-Based Architecture**: 
   - The application follows a modular and component-based structure. Components like `ProductItem`, `ProductModal`, and `Filters` are reusable and designed to be independent. This promotes reusability and ease of maintenance.
   - Components are kept small and focused on a single responsibility, adhering to the single responsibility principle.

2. **State Management**: 
   - React's `useState` and `useEffect` hooks are used to manage state and side effects throughout the application. `useState` handles local state, while `useEffect` is used for managing asynchronous data fetching and side effects like scrolling.
   - State is split logically (e.g., `products`, `filters`, `page`, etc.), which ensures clear separation of concerns.

3. **Modular Fetching of Products**: 
   - The `loadProducts` function, along with lazy loading and scroll detection, ensures efficient fetching of products. Data is paginated, and new products are fetched when the user scrolls to the bottom of the page.
   - The application avoids unnecessary API calls and ensures that only unique products are fetched by checking existing products before adding new ones.

### Patterns Used:
1. **Container-Presenter Pattern**: 
   - The `ProductList` component acts as the container, managing the state and logic, while the `ProductItem`, `ProductModal`, and `Filters` components act as presentational components responsible for rendering the UI based on the provided data.

2. **Use of `useCallback` for Optimization**: 
   - The `loadProducts` function is wrapped in `useCallback` to prevent unnecessary re-creations of the function on each render. This optimizes performance by ensuring that the function is only re-created when `page` changes.
  
3. **Conditional Rendering**: 
   - Based on the loading state and error state, the application conditionally renders a loading indicator or an error message, providing the user with appropriate feedback on the application's state.

### Optimizations Applied:
  
1. **Lazy Loading and Infinite Scrolling**: 
   - The infinite scrolling mechanism ensures that additional products are fetched only when the user scrolls to the bottom of the page. This approach reduces the initial load time and provides a better user experience by loading data incrementally.
  
2. **Memoization**: 
   - By using React's `useEffect` hook with dependencies, unnecessary re-renders are avoided when no state has changed. This ensures that updates are made only when necessary, optimizing performance.

3. **Efficient Filtering and Sorting**: 
   - Filters (e.g., by category, price) and sorting (price ascending or descending) are applied efficiently by performing operations only on the relevant subset of data. Sorting is done in place to avoid unnecessary data duplication.

4. **Error Handling**: 
   - Error handling is implemented to ensure that users are informed if there's a failure in loading the product list, making the app more robust and user-friendly.

## Known Limitations:
1. **Limited Search Functionality**: 
   - Currently, the application only supports basic category and price sorting. It lacks advanced filtering options (e.g., filtering by product name, rating, etc.), which could improve the user experience.

2. **State Persistence Across Sessions**: 
   - The application does not currently persist user-selected filters or pagination state across sessions. If the user refreshes the page or revisits, the state will be reset to the initial values.

3. **Error Handling on API Failure**: 
   - While error messages are displayed when the product fetch fails, the error handling could be more robust. Currently, the app simply displays a generic error message, and there is no retry mechanism.

4. **Performance with Large Datasets**: 
   - With large datasets, filtering and sorting may become slow as the entire list of products is loaded into memory at once. Pagination or backend support for these operations would be needed for better performance with larger datasets.

## Future Enhancements:
1. **Persistent Filters and Sorting**: 
   - Implement functionality to persist filters and sorting preferences across sessions using browser storage (localStorage or sessionStorage). This would improve the user experience by remembering user preferences.

2. **Advanced Search and Filters**: 
   - Introduce more advanced filtering options such as filtering by product rating, brand, and price range. This would allow users to refine their search more effectively.
   
3. **Pagination for Performance**: 
   - Instead of loading all products at once, implement a paginated approach on the backend to fetch data in chunks. This would reduce memory usage and improve performance, especially when working with large datasets.
   
4. **Improved Error Handling and Retry Mechanism**: 
   - Add a retry mechanism for failed API calls, allowing users to attempt to reload the data after a failure. More descriptive error messages could also be shown to users.

5. **Optimized Lazy Loading with Image Preloading**: 
   - Optimize the lazy loading process by implementing image preloading to ensure images are loaded seamlessly when the user scrolls to new products.

6. **Mobile Responsiveness**: 
   - Improve the layout and UI to be fully responsive on mobile devices. Currently, the design may not scale well on smaller screen sizes, and this can be enhanced with responsive styling.

With these enhancements, the app would provide a smoother, more feature-rich experience and be better optimized for performance and scalability.

