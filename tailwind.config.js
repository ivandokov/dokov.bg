module.exports = {
    purge: [
        './src/.vuepress/theme/**/*.vue',
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
        },
        container: {
            center: true,
        },
        fontFamily: {
            'sans': ['Source\\ Sans\\ Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe\\ UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open\\ Sans', 'Helvetica\\ Neue', 'sans-serif'],
        },
        extend: {
            colors: {
                'primary': '#4385ef',
                'secondary': '#2c3e50',
            }
        }
    },
    variants: {
        fontFamily: [],
        placeholderColor: ['responsive', 'focus', 'hover'],
    },
    plugins: [],
};
