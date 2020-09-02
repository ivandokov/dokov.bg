const production = process.env.NODE_ENV === 'production';

module.exports = {
    title: 'Ivan Dokov - Software architect and strategist',
    description: 'Blog for web related stuff.',
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: 'anonymous' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap' }],
        ['link', { rel: 'me', href: 'https://twitter.com/ivandokov' }],
        ['link', { rel: 'webmention', href: 'https://webmention.io/dokov.bg/webmention' }],
        ['link', { rel: 'pingback', href: 'https://webmention.io/dokov.bg/xmlrpc' }],
        ['link', { rel: 'alternate', href: 'https://dokov.bg/rss.xml', type: 'application/atom+xml', title: 'Ivan Dokov - blog for web related stuff' }],
    ],
    postcss: {
        plugins: [
            require('postcss-import'),
            require('postcss-nested'),
            require('tailwindcss'),
            ...production ? [require('autoprefixer')] : [],
        ]
    },
    plugins: [
        ['vuepress-plugin-rss', {
            base_url: '/',
            site_url: 'http://dokov.bg',
            copyright: 'Ivan Dokov',
            count: 20
        }],
        ['@vuepress/plugin-google-analytics', {
            ga: 'UA-29469126-4'
        }],
        ['vuepress-plugin-container', {
            type: 'center',
            before: '<div class="text-center">',
            after: '</div>',
        }],
        ['vuepress-plugin-container', {
            type: 'center-50',
            before: '<div class="w-1/2 mx-auto">',
            after: '</div>',
        }],
        ['vuepress-plugin-container', {
            type: 'center-80',
            before: '<div class="w-3/4 mx-auto">',
            after: '</div>',
        }],
    ]
};
