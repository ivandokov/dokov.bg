<template>
    <article class="space-y-20">
        <section v-for="(post, index) in items" :key="index">
            <h2 class="text-4xl leading-none font-bold mb-2">
                <router-link :to="post.path">{{ post.title }}</router-link>
            </h2>
            <div class="mb-1 text-xs text-gray-500">
                {{ post.frontmatter.date | date }}
            </div>
            <div v-html="post.frontmatter.excerpt"></div>
        </section>
    </article>
</template>

<script>
    import { SortedPosts } from '../posts'

    export default {
        data() {
            return {
                title: null,
            }
        },

        computed: {
            items() {
                let posts = SortedPosts(this.$site.pages);

                if (this.$page.path !== '/') {
                    this.title = this.$page.title;
                }

                return posts.filter(post => {
                    return post.path.match(new RegExp(`^${this.$page.path}`))
                });
            },
        },
    }
</script>
