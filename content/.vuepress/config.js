module.exports = {
    title: 'Ivan Dokov - Web Developer',
    description: 'Web development focused blog.',
    plugins: {
        'vuepress-plugin-rss': {
            base_url: '/', // required
            site_url: 'http://dokov.bg', // required
            copyright: 'Ivan Dokov', // optional
            count: 20 // How much articles
        }
    }
};
