```javascript
// Ensure Tailwind directives are correctly configured in your main app file (e.g., app.js) and postcss.config.js.
// Double-check that the component is properly imported and rendered.
// Inspect the browser's developer tools to check for conflicting styles or CSS specificity issues. 
// Try adding !important to the conflicting classes (this is a last resort and not best practice).  Use the developer tools to identify the source of the conflict.
// Make sure you are using the correct version of Tailwind and all its peer dependencies
// Clean and rebuild your project.

<div className="bg-red-500 p-4">
  <p>This text should be red and have padding.</p>
</div>
```