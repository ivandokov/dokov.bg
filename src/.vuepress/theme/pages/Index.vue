<template>
    <article>
        <section v-for="(post, index) in items" :key="index" class="mb-10">
            <h2 class="text-3xl leading-none font-bold mb-2">
                <router-link :to="post.path">{{ post.title }}</router-link>
            </h2>
            <div class="mb-1 text-xs text-gray-500">
                In <router-link :to="category(post).path" class="text-primary hover:underline">{{ category(post).title }}</router-link> {{ post.frontmatter.date | date }}
            </div>
            <div v-html="post.frontmatter.excerpt"></div>
        </section>
    </article>
</template>

<script>
    import { GetCategory, SortedPosts } from '../posts'

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

        methods: {
            category(post) {
                return GetCategory(post);
            }
        }
    }
</script>
