<template>
    <div class="content-grid">
        <Sidebar></Sidebar>
        <main class="main">
            <div class="content">
                <div class="post-items">
                    <section v-for="(post, index) in items" :key="index" class="post-item">
                        <div class="post-item-info">
                            <h2 class="post-title">
                                <router-link :to="post.path">{{ post.title }}</router-link>
                            </h2>
                            <div class="post-meta">
                                <span class="post-category">In <router-link :to="category(post).path">{{ category(post).title }}</router-link></span>
                                <span class="post-date">{{ post.frontmatter.date }}</span>
                            </div>
                            <div class="post-excerpt" v-html="post.frontmatter.excerpt"></div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Sidebar from '../theme/Sidebar';
    import { GetCategory, SortedPosts } from '../posts'

    export default {
        components: { Sidebar },

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
