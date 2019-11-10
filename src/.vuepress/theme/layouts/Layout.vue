<template>
    <div class="pb-12 px-3 md:px-0 font-sans text-secondary">
        <div class="container flex flex-wrap">
            <Sidebar class="w-full md:w-1/4 md:text-right"/>
            <main class="w-full md:w-3/4 md:pl-10 md:pt-24 mt-6 text-lg leading-relaxed">
                <Index v-if="type === 'index'"></Index>
                <Post v-else-if="type === 'post'"></Post>
                <section v-else>
                    <Content class="content-body -mt-2"></Content>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar';
    import Index from '../pages/Index'
    import Post from '../pages/Post'

    export default {
        components: {Sidebar, Index, Post},

        computed: {
            type() {
                return this.$page.frontmatter.type;
            }
        }
    }
</script>

<style src="../styles/app.css"></style>
