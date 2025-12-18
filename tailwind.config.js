/** @type {import('tailwindcss').Config} */
const rawContent = [
  "./index.html",
  // include all app sources under `src` but explicitly exclude any nested node_modules
  "./src/**/*.{js,ts,jsx,tsx,html}", // added html just in case
  "!./src/**/node_modules/**",
  // include the Next app sources explicitly if present
  "./src/my-app/**/*.{js,ts,jsx,tsx,html}",
  "!./src/my-app/**/node_modules/**",
];

// normalize any accidental Windows backslashes to POSIX-style forward slashes
 const content = rawContent.map((p) => p.replace(/\\/g, "/"));

export default {
  content,
  theme: {
    extend: {},
  },
  plugins: [],
};

