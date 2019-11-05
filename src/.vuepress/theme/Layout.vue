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
        }
    }
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="normalize.css/normalize.css"></style>
<style src="./styles/main.scss" lang="scss"></style>
