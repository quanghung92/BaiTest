
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue'
    // './plugins/**/*.{js,ts}',
    // './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'brand-color': '#0095DA',
                'same-brand-1': '#101A2C',
                'brand-1': '#0095DA',
            }
        }
    },
    plugins: []
}
