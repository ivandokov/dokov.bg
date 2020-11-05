<template>
    <article>
        <Content class="content-body -mt-2"/>

        <div class="w-full my-8 text-xs text-gray-500">
            {{ $page.frontmatter.date | date }}
        </div>

        <aside class="flex flex-wrap leading-tight border border-l-0 border-r-0 border-gray-300 py-6" v-if="prev || next">
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

        <aside v-if="numLikes || commentLink" class="mt-5">
            <div v-if="commentLink" class="mb-3">Like, retweet or comment at <a :href="commentLink" target="_blank" class="text-primary hover:underline">this tweet</a>.</div>
            <template v-if="numLikes">
                <div class="mb-1 text-gray-500">
                    {{ numLikes }} like{{ numLikes > 1 ? 's' : ''}} or retweet{{ numLikes > 1 ? 's' : ''}}
                </div>
                <div class="mb-3">
                    <a v-for="mention in likesAndRetweets"
                       :key="`likeretweet_${mention.webmention_id}`"
                       :href="mention.author_url"
                       :title="mention.author_name"
                       target="_blank"
                       class="inline-block -mr-2 mb-2 align-middle w-6 rounded-full overflow-hidden">
                        <img
                                :src="mention.author_photo_url"
                                :alt="mention.author_name">
                    </a>
                </div>
            </template>
            <div v-if="numComments" class="mb-1 text-gray-500">
                {{ numComments }} comment{{ numComments > 1 ? 's' : '' }}
            </div>
            <div class="mb-5"
                 v-for="mention in comments"
                 :key="`comment_${mention.webmention_id}`">
                <a :href="mention.author_url"
                   :title="mention.author_name"
                   target="_blank"
                   class="inline-block align-middle w-6 rounded-full overflow-hidden">
                    <img
                            :src="mention.author_photo_url"
                            :alt="mention.author_name">
                </a>
                <a :href="mention.author_url"
                   target="_blank"
                   class="hover:text-primary">
                    <strong>{{ mention.author_name }}</strong>
                </a>
                on {{ mention.created_at.toDate() | date }}
                <p class="mt-2">{{ mention.text }}</p>
            </div>
        </aside>
    </article>
</template>

<script>
    import { FindByPath, FindByOffset } from '../posts';
    import { db } from '../db';

    export default {
        data: () => ({ likesAndRetweets: [], comments: [] }),
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

            numLikes() {
                return this.likesAndRetweets.length
            },

            numComments() {
                return this.comments.length
            },

            commentLink() {
                return this.$page.frontmatter.comment_link || null;
            },
        },

        mounted() {
            const url = `https://dokov.bg${this.$page.regularPath}`;
            db.collection('webmentions')
                .where('post_url', '==', url)
                .orderBy('created_at', 'asc')
                .onSnapshot((querySnapshot) => {
                    this.likesAndRetweets = [];
                    this.comments = [];

                    querySnapshot.forEach(doc => {
                        const mention = doc.data();
                        switch (mention.type) {
                            case "like-of":
                            case "repost-of":
                                this.likesAndRetweets.push(mention);
                                break;
                            case "in-reply-to":
                                this.comments.push(mention);
                                break;
                        }
                    });
                });
        }
    }
</script>
