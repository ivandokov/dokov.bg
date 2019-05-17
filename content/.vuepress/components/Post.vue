<template>
    <div class="content-grid">
        <Sidebar></Sidebar>
        <main class="main">
            <PostPreview :post="$page" :large="true" :link="false" :excerpt="false" :title="false"/>

            <div class="content-body">
                <Content :custom="false"/>
            </div>

            <div class="prev-next" v-if="prev || next">
                <div class="prev">
                  <router-link v-if="prev" class="prev" :to="prev.path">
                      <img v-if="prev.frontmatter.thumbnail" :src="$withBase(prev.frontmatter.thumbnail)" :alt="prev.title">
                      <h4>{{ prev.title }}</h4>
                  </router-link>
                </div>
                <div class="next">
                  <router-link v-if="next" :to="next.path">
                      <h4>{{ next.title }}</h4>
                      <img v-if="next.frontmatter.thumbnail" :src="$withBase(next.frontmatter.thumbnail)" :alt="next.frontmatter.title">
                  </router-link>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Sidebar from '../theme/Sidebar'
    import PostPreview from './PostPreview';
    import { FindByPath, FindByOffset } from '../posts';

    export default {
        components: { PostPreview, Sidebar },
        computed: {
            prev() {
                const prev = this.$page.frontmatter.prev;
                if (prev === false) {
                    return;
                }

                if (prev) {
                    return FindByPath(this.$site.pages, prev);
                }

                return FindByOffset(this.$site.pages, this.$page, -1);
            },

            next() {
                const next = this.$page.frontmatter.next;
                if (next === false) {
                    return;
                }

                if (next) {
                    return FindByPath(this.$site.pages, next);
                }

                return FindByOffset(this.$site.pages, this.$page, 1);
            },
        }
    }
</script>
