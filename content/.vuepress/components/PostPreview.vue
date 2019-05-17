<template>
    <section class="post-item" :class="{'post-item--large': large}">
        <figure class="post-item-image">
            <router-link v-if="link" :to="post.path">
                <img v-if="large && post.frontmatter.image" :src="$withBase(post.frontmatter.image)" :alt="post.title"/>
                <img v-else-if="post.frontmatter.thumbnail" :src="$withBase(post.frontmatter.thumbnail)" :alt="post.title"/>
            </router-link>
            <div v-else>
                <img v-if="large && post.frontmatter.image" :src="$withBase(post.frontmatter.image)" :alt="post.title"/>
                <img v-else-if="post.frontmatter.thumbnail" :src="$withBase(post.frontmatter.thumbnail)" :alt="post.title"/>
            </div>
        </figure>
        <div class="post-item-info">
            <h2 v-if="title" class="post-title">
                <router-link v-if="link" :to="post.path">{{ post.title }}</router-link>
                <span v-else>{{ post.title }}</span>
            </h2>
            <div class="post-meta">
                <span class="post-category">In <router-link :to="category.path">{{ category.title }}</router-link></span>
                <span class="post-date">{{ post.frontmatter.date }}</span>
            </div>
            <div v-if="excerpt" class="post-excerpt" v-html="post.frontmatter.excerpt"></div>
        </div>
    </section>
</template>

<script>
    import { GetCategory } from '../posts';

    export default {
        props: {
            post: {
                required: true,
                type: Object,
            },
            title: {
                required: false,
                type: Boolean,
                default: true,
            },
            excerpt: {
                required: false,
                type: Boolean,
                default: true,
            },
            link: {
                required: false,
                type: Boolean,
                default: true,
            },
            large: {
                required: false,
                type: Boolean,
                default: false,
            },
        },

        computed: {
            category() {
                return GetCategory(this.post);
            }
        }
    }
</script>
