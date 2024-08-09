# Simple File Explorer

## Overview
This project is a simple file explorer built using React and TypeScript. The application is designed to simulate basic file system navigation, displaying folders and files in a hierarchy, and allowing users to view the contents of text and image files. The project is optimized for both desktop and mobile devices, providing an intuitive and responsive user interface.

## Functionality
### Clickable Hierarchy
Folder Navigation: The left-hand panel displays a clickable hierarchy of folders and files. Users can expand and collapse folders by clicking on them, allowing easy navigation through the file structure.
File Selection: Users can select a file to view its contents by either double-clicking (desktop) or long-pressing (mobile) on the file.

### Folder Views
Table View (Desktop): On desktop devices, folders are displayed in a table format, showing details like the file name, type, size, path, and creation/modification dates.
List View (Mobile): On mobile devices, folders are displayed in a list format, with a vertical layout optimized for smaller screens.

### File Parsing
Text Files: The application can parse and display the contents of .txt files. The content is shown in a scrollable text view, preserving the original formatting (line breaks, spaces).
Image Files: The application can parse and display .png images. The image is rendered within the document view, optimized for performance on both desktop and mobile.

## Design Patterns and Techniques
### Code Splitting
Component-based Architecture: The project is organized using a component-based architecture, ensuring that each piece of functionality is encapsulated within its own component. This promotes reusability and maintainability.
### Type Guards
Runtime Type Safety: TypeScript type guards are used extensively to ensure that the application handles different file types (e.g., folders, text files, image files) correctly at runtime.
### Strategy Pattern
Rendering Strategy: The EntityView component uses a strategy pattern to determine how to render different types of entities (folders, text files, image files). This allows the application to be easily extended with new file types.
### Factory Pattern
Icon Factory: The IconFactory component implements a factory pattern to generate the appropriate icon for different file types. This approach centralizes icon management, making it easier to add or update icons.
### Memoization in Hierarchy View
Performance Optimization: React's memo is used to optimize the rendering performance of the folder hierarchy, preventing unnecessary re-renders when the hierarchy's state changes.

## Responsiveness
### Desktop and Mobile Solutions
Adaptive UI: The application adapts its layout based on the screen size. Media queries are used to switch between desktop and mobile views, ensuring an optimal user experience on all devices.

### Mobile-Specific Views
Folder List View: On mobile devices, folders are displayed in a simplified list view, with a vertical layout that is easy to navigate on smaller screens.
Long Press Handling: A custom useLongPress hook is implemented to allow users to open files via a long press on mobile devices, replacing the double-click functionality used on desktops.

## Ways to Improve
### SASS Integration
Enhanced Styling: Integrating SASS (Syntactically Awesome Style Sheets) would allow for more flexible and maintainable styling, enabling the use of variables, nesting, and mixins.
### Testing
Unit and Integration Tests: Adding tests, especially for critical components like EntityView, FolderHierarchy, and the custom useLongPress hook, would improve the reliability of the application and catch potential bugs early.
### Handling Large JSON Structures
Performance Optimization: For very large JSON trees, lazy loading or virtualization techniques could be implemented to improve performance and reduce memory usage. This would involve loading parts of the hierarchy only as needed, rather than all at once.
