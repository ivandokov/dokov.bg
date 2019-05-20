<template>
    <div class="wrapper">
        <Header></Header>
        <div class="container">
            <Index v-if="type === 'index'"></Index>
            <Post v-else-if="type === 'post'"></Post>
            <Page v-else></Page>
        </div>
        <footer class="footer">
            <div class="container">
                Copyright &copy; 2006 - {{ year }} Ivan Dokov. All rights reserved.
            </div>
        </footer>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Index from '../components/Index'
    import Page from '../components/Page'
    import Post from '../components/Post'

    export default {
        components: {Header, Index, Page, Post},

        computed: {
            type() {
                return this.$page.frontmatter.type;
            },

            year() {
                return (new Date()).getFullYear();
            }
        },

        mounted() {
            // Temp workaround for Google Analytics until a solution is found for https://github.com/vuejs/vuepress/issues/1608
            const router = this.$router;
            const GA_ID = 'UA-29469126-4';
            if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
                (function (i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r;
                    i[r] = i[r] || function () {
                        (i[r].q = i[r].q || []).push(arguments);
                    }
                    i[r].l = 1 * new Date();
                    a = s.createElement(o);
                    m = s.getElementsByTagName(o)[0];
                    a.async = 1;
                    a.src = g;
                    m.parentNode.insertBefore(a, m);
                })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

                ga('create', GA_ID, 'auto');
                ga('set', 'anonymizeIp', true);
                ga('send', 'pageview');

                router.afterEach(function (to) {
                    ga('set', 'page', to.fullPath);
                    ga('send', 'pageview');
                });
            }
        }
    }
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="normalize.css/normalize.css"></style>
<style src="./styles/main.scss" lang="scss"></style>
