<template>
    <div class="content-grid">
        <Sidebar></Sidebar>
        <main class="main">
            <div class="content-body">
                <Content/>
            </div>

            <div class="post-meta">
                <span class="post-category">In <router-link :to="category.path">{{ category.title }}</router-link></span>
                <span class="post-date">{{ $page.frontmatter.date }}</span>
            </div>

            <div class="prev-next" v-if="prev || next">
                <div v-if="prev" class="prev">
                  <router-link class="prev" :to="prev.path">
                      <strong>{{ prev.title }}</strong>
                  </router-link>
                </div>
                <div v-if="next" class="next">
                  <router-link :to="next.path">
                      <strong>{{ next.title }}</strong>
                  </router-link>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Sidebar from '../theme/Sidebar'
    import { FindByPath, FindByOffset, GetCategory } from '../posts';

    export default {
        components: { Sidebar },
        computed: {
            category() {
                return GetCategory(this.$page);
            },

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
