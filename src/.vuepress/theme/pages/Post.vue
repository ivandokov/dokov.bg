<template>
    <article>
        <Content class="content-body -mt-2"/>

        <aside class="border border-l-0 border-r-0 border-gray-300 my-12 py-10 text-xs text-gray-500">
            In <router-link :to="category.path" class="text-primary hover:underline">{{ category.title }}</router-link> {{ $page.frontmatter.date }}
        </aside>

        <aside class="flex leading-tight" v-if="prev || next">
            <div class="w-1/2 pr-2">
              <router-link v-if="prev" class="prev" :to="prev.path">
                  <strong>{{ prev.title }}</strong>
              </router-link>
            </div>
            <div class="w-1/2 pl-2 text-right">
              <router-link v-if="next" :to="next.path">
                  <strong>{{ next.title }}</strong>
              </router-link>
            </div>
        </aside>
    </article>
</template>

<script>
    import { FindByPath, FindByOffset, GetCategory } from '../posts';

    export default {
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
