export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.filter('date', function (value) {
        const date = value instanceof Date ? value : new Date(value);
        const nav = typeof navigator === 'object' ? navigator : {language: 'en-US'};
        const lang = nav.language || nav.languages[0];

        return date.toLocaleString(lang, {
            year: 'numeric',
            day: 'numeric',
            month: 'short',
        });
    })
}