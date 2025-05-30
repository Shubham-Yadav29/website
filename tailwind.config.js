/** @type {import('tailwindcss').Config} */
export default {
        content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ],
        darkMode:"class",
        theme: {
            extend: {
                animation: {
                    'bounce-slow': 'bounce 2s infinite ease-in-out',
                },
                
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                },
                }
        },
        plugins: [],
    }
    
    