<template>
    <div class="leading-tight" :class="{ 'has-suggestions': showSuggestions }">
        <input
                @input="query = $event.target.value"
                aria-label="Search"
                :value="query"
                :class="{ 'focused': focused }"
                class="w-full mb-2 px-2 py-1 text-xs text-center md:text-right outline-none border-b border-transparent focus:border-gray-100 text-secondary placeholder-gray-500 hover:placeholder-primary"
                autocomplete="off"
                spellcheck="false"
                placeholder="Search"
                @focus="focused = true"
                @blur="focused = false"
                @keyup.esc="query = ''"
                @keyup.enter="go(focusIndex)"
                @keyup.up="onUp"
                @keyup.down="onDown">
        <ul
                v-if="showSuggestions"
                @mouseleave="unfocus">
            <li
                    class="mb-2"
                    v-for="(s, i) in suggestions"
                    :class="{ 'text-primary': i === focusIndex }"
                    @mousedown="go(i)"
                    @mouseenter="focus(i)">
                <a :href="s.path" @click.prevent>
                    <span class="block font-bold text-sm">{{ s.title || s.path }}</span>
                    <span class="block text-gray-500 text-xs"
                          :class="{ 'text-primary': i === focusIndex }"
                          v-if="s.header">{{ s.header.title }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { SortedPosts } from '../posts';

    export default {
        data() {
            return {
                query: '',
                focused: false,
                focusIndex: 0
            }
        },

        computed: {
            showSuggestions() {
                return (
                    this.focused &&
                    this.suggestions &&
                    this.suggestions.length
                )
            },

            suggestions() {
                const query = this.query.trim().toLowerCase();
                if (!query) {
                    return;
                }

                const posts = SortedPosts(this.$site.pages);
                const max = 5;
                const matches = item => (
                    item.title &&
                    item.title.toLowerCase().indexOf(query) > -1
                );
                const res = [];
                for (let i = 0; i < posts.length; i++) {
                    if (res.length >= max) break;
                    const p = posts[i];
                    if (matches(p)) {
                        res.push(p);
                    } else if (p.headers) {
                        for (let j = 0; j < p.headers.length; j++) {
                            if (res.length >= max) break;
                            const h = p.headers[j];
                            if (matches(h)) {
                                res.push(Object.assign({}, p, {
                                    path: p.path + '#' + h.slug,
                                    header: h
                                }));
                            }
                        }
                    }
                }
                return res;
            },
        },

        methods: {
            onUp() {
                if (this.showSuggestions) {
                    if (this.focusIndex > 0) {
                        this.focusIndex--;
                    } else {
                        this.focusIndex = this.suggestions.length - 1;
                    }
                }
            },

            onDown() {
                if (this.showSuggestions) {
                    if (this.focusIndex < this.suggestions.length - 1) {
                        this.focusIndex++;
                    } else {
                        this.focusIndex = 0;
                    }
                }
            },

            go(i) {
                if (!this.showSuggestions || i === -1) {
                    return;
                }
                this.$router.push(this.suggestions[i].path);
                this.query = '';
                this.focusIndex = 0;
            },

            focus(i) {
                this.focusIndex = i;
            },

            unfocus() {
                this.focusIndex = -1;
            }
        }
    }
</script>
