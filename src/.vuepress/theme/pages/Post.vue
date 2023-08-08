<template>
    <article>
        <Content class="content-body -mt-2"/>

        <div class="w-full my-8 text-xs text-gray-500">
            {{ $page.frontmatter.date | date }}
        </div>

        <aside v-if="prev || next"
               class="flex flex-wrap leading-tight border border-l-0 border-r-0 border-gray-300 py-6">
            <div class="w-1/2 pr-2">
                <router-link v-if="prev" :to="prev.path" class="prev">
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
import { FindByOffset, FindByPath } from '../posts';

export default {
    data: () => ({likesAndRetweets: [], comments: []}),
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
    },
}
</script>
