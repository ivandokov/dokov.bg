<template>
    <aside class="sidebar">
        <div class="search-box-wrapper">
            <SearchBox/>
            <div class="nav-button" v-if="smallScreen" @click="showNav = !showNav"></div>
        </div>

        <nav class="nav-links" v-if="showNav">
            <div class="nav-item">
                <router-link :to="'/'">
                    <span>All posts</span>
                    <span class="item-count">{{ allPostsCount }}</span>
                </router-link>
            </div>
            <div class="nav-item" v-for="category in categories" :key="category.page.path">
                <router-link :to="category.page.path">
                    <span>{{ category.page.title }}</span>
                    <span class="item-count">{{ category.pages.length }}</span>
                </router-link>
            </div>
        </nav>
    </aside>
</template>

<script>
    import SearchBox from './SearchBox'
    import { Posts, ByCategories } from '../posts'

    export default {
        components: {SearchBox},

        data() {
            return {
                smallScreen: false,
                showNav: true,
            };
        },

        mounted() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },

        computed: {
            allPostsCount() {
                return Posts(this.$site.pages).length;
            },

            categories() {
                return Object.values(ByCategories(this.$site.pages));
            }
        },

        methods: {
            handleResize() {
                this.smallScreen = window.innerWidth < 800;
                this.showNav = !this.smallScreen;
            }
        }
    }
</script>
