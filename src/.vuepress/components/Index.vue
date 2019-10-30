<template>
    <div class="content-grid">
        <Sidebar></Sidebar>
        <main class="main">
            <div class="content">
                <h1 v-if="title">{{ title }}</h1>
                <div class="post-items">
                    <PostPreview v-for="(post, index) in items" :key="index" :post="post" :large="index == 0"/>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Sidebar from '../theme/Sidebar';
    import PostPreview from './PostPreview';
    import { SortedPosts } from '../posts'

    export default {
        components: { Sidebar, PostPreview },

        data() {
            return {
                title: null,
            }
        },

        computed: {
            items() {
                let posts = SortedPosts(this.$site.pages);

                this.title = 'All Posts';

                if (this.$page.path !== '/') {
                    this.title = this.$page.title;
                }

                return posts.filter(post => {
                    return post.path.match(new RegExp(`^${this.$page.path}`))
                });
            }
        }
    }
</script>
