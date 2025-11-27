/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neo-pink': '#FF00FF',
                'neo-cyan': '#00FFFF',
                'neo-yellow': '#FFFF00',
                'neo-orange': '#FF4500',
            },
            boxShadow: {
                'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
                'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
                'neo-xl': '12px 12px 0px 0px rgba(0,0,0,1)',
            }
        },
    },
    plugins: [],
}
