<template>
    <div :class="pathAsClassName" class="px-3 md:px-0 font-sans text-secondary">
        <div class="container flex flex-wrap">
            <Sidebar class="w-full md:w-1/4 md:text-right"/>
            <main class="w-full md:w-3/4 md:pl-10 md:pt-24 pb-12 mt-6 text-xl leading-relaxed">
                <Index v-if="type === 'index'" :key="$page.key"></Index>
                <Post v-else-if="type === 'post'" :key="$page.key"></Post>
                <section v-else :key="$page.key">
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
        },
        pathAsClassName() {
            return 'page-' + this.$page.path.substring(1).replace('/', '-')
        }
    }
}
</script>

<style src="../styles/app.css"></style>
