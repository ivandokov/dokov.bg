module.exports = {
    title: 'Ivan Dokov - Web Expert',
    description: 'Blog for web related stuff.',
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
        ['container', {
            type: 'center',
            before: `<div class="center">`,
            after: `</div>`,
        }],
        ['container', {
            type: 'center-50',
            before: `<div class="center-50">`,
            after: `</div>`,
        }],
        ['container', {
            type: 'center-80',
            before: `<div class="center-80">`,
            after: `</div>`,
        }],
        ['container', {
            type: 'image',
            before: `<div class="image">`,
            after: `</div>`,
        }],
    ]
};