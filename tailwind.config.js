/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html',
        './src/**/*.{html,js}',
    ],
    theme: {
        extend: {
            colors: {
                emeth: '#0e9af1',
                emethdark: '#045A8F',
                redline: '#E12121',
            }
        }
    },
    plugins: [
        'tailwindcss',
        'autoprefixer',
    ]
}
