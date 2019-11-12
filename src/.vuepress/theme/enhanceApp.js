export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.filter('date', function (value) {
        const date = value instanceof Date ? value : new Date(value);
        const lang = navigator.language || navigator.languages[0];

        return date.toLocaleString(lang, {
            year: 'numeric',
            day: 'numeric',
            month: 'short',
        });
    })
}