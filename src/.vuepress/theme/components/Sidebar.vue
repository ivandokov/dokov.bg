<template>
    <section class="max-h-screen overflow-auto md:sticky md:top-0 pt-12">
        <div class="mb-10">
            <router-link :to="'/'" class="block w-1/3 sm:w-1/5 md:w-auto mx-auto md:ml-4 lg:ml-16 md:mr-10 md:pr-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.6 55.5"><path fill="#4385ef" d="M15.2 55.5c-3.7-1-6.3-2.7-7.9-5S5 45.5 5 42.3v-5.8c0-1.9-.4-3.3-1.2-4.4-.8-1-2.1-1.6-3.8-1.6v-5.7c1.7 0 3-.5 3.8-1.5.8-1 1.2-2.4 1.2-4.3v-5.8c0-3.2.8-6 2.4-8.2 1.6-2.3 4.2-3.9 7.9-5l1.6 4.5c-1.6.6-2.7 1.6-3.4 3.1-.7 1.5-1 3.4-1 5.6V19c0 2-.4 3.7-1.3 5.2-.8 1.5-2.1 2.7-3.8 3.6 1.7.9 3 2.1 3.8 3.6.8 1.5 1.3 3.2 1.3 5.2v5.8c0 2.2.3 4.1 1 5.6s1.8 2.5 3.4 3.1l-1.7 4.4z"/><path fill="#3F454C" d="M21.7 48.3V7h14.2c5 0 9.2 1.6 12.5 4.8 3.3 3.2 4.9 7.4 4.9 12.4V31c0 5.1-1.6 9.2-4.9 12.4-3.3 3.2-7.4 4.8-12.5 4.8H21.7zM30 13.4v28.5h5.5c3 0 5.3-1 7-3 1.7-2 2.5-4.6 2.5-7.9v-6.9c0-3.2-.8-5.8-2.5-7.8s-4-3-7-3H30zM57.8 32.7c0-4.6 1.3-8.3 3.8-11.2 2.6-2.9 6.1-4.4 10.6-4.4s8.1 1.5 10.7 4.4 3.9 6.7 3.9 11.3v.6c0 4.6-1.3 8.4-3.8 11.3-2.6 2.9-6.1 4.4-10.6 4.4s-8.1-1.5-10.7-4.4c-2.6-2.9-3.8-6.7-3.8-11.3v-.7zm8.2.6c0 2.8.5 5 1.5 6.7 1 1.7 2.6 2.5 4.8 2.5 2.1 0 3.7-.9 4.7-2.5 1-1.7 1.5-3.9 1.5-6.7v-.6c0-2.7-.5-4.9-1.5-6.7-1-1.7-2.6-2.6-4.7-2.6s-3.7.9-4.7 2.6c-1 1.7-1.5 3.9-1.5 6.6v.7zM102.4 35.5h-2.3v12.9h-8.3V4h8.3v25.1h2l7.1-11.5h9.6L109 31.5l11.3 16.8h-9.5l-8.4-12.8zM121.7 32.7c0-4.6 1.3-8.3 3.8-11.2 2.6-2.9 6.1-4.4 10.6-4.4s8.1 1.5 10.7 4.4 3.9 6.7 3.9 11.3v.6c0 4.6-1.3 8.4-3.8 11.3-2.6 2.9-6.1 4.4-10.6 4.4s-8.1-1.5-10.7-4.4c-2.6-2.9-3.8-6.7-3.8-11.3v-.7zm8.3.6c0 2.8.5 5 1.5 6.7 1 1.7 2.6 2.5 4.8 2.5 2.1 0 3.7-.9 4.7-2.5 1-1.7 1.5-3.9 1.5-6.7v-.6c0-2.7-.5-4.9-1.5-6.7-1-1.7-2.6-2.6-4.7-2.6s-3.7.9-4.7 2.6c-1 1.7-1.5 3.9-1.5 6.6v.7zM166.4 36.9l.5 2.8h.2l.6-2.8 5-19.3h8.7L171 48.3h-8l-10.4-30.7h8.7l5.1 19.3z"/><path fill="#4385ef" d="M182.8 51c1.6-.6 2.7-1.6 3.4-3.1.7-1.5 1-3.4 1-5.6v-5.8c0-2 .4-3.7 1.3-5.2s2.2-2.7 4-3.5c-1.8-.9-3.1-2-4-3.6-.9-1.5-1.3-3.3-1.3-5.3v-5.8c0-2.2-.3-4.1-1-5.6s-1.8-2.5-3.4-3.1l1.6-4.5c3.7 1 6.3 2.7 7.9 5 1.6 2.3 2.4 5 2.4 8.2V19c0 1.9.4 3.4 1.2 4.4.8 1 2.1 1.5 3.8 1.5v5.7c-1.7 0-3 .5-3.8 1.6-.8 1-1.2 2.5-1.2 4.4v5.8c0 3.2-.8 6-2.4 8.3-1.6 2.3-4.2 3.9-7.9 5l-1.6-4.7z"/></svg>
            </router-link>
        </div>
        <div class="py-1">
            <aside class="md:pr-10 md:border-r border-gray-100">
                <nav class="mb-5 -mt-2 text-center md:text-right">
                    <div class="inline md:block -mr-1 mb-5">
                        <router-link class="p-2 hover:text-primary hover:underline"
                                     :class="{'text-primary': isViewingBlog}"
                                     :to="'/'">Blog</router-link>
                        <router-link class="p-2 hover:text-primary hover:underline"
                                     :class="{'text-primary': $page.path === '/about'}"
                                     :to="'/about'">About</router-link>
                    </div>
                    <div class="inline md:block ml-2 md:ml-0 text-xs text-gray-500">
                        <a class="p-1 hover:text-primary hover:underline" href="https://github.com/ivandokov" target="_blank" rel="me">GitHub</a>
                        <a class="p-1 hover:text-primary hover:underline" href="https://twitter.com/ivandokov" target="_blank" rel="me">Twitter</a>
                        <a class="p-1 hover:underline" :href="emailHref">Email</a>
                        <a class="p-1 hover:underline" href="/rss.xml">RSS</a>
                    </div>
                </nav>

                <SearchBox/>
            </aside>
            <footer class="mb-5 pt-6 md:pr-10 md:border-r border-gray-100 text-xs text-gray-300 text-center md:text-right">
                &copy; 2006 - {{ year }} Ivan Dokov<br>
                Founder of <a href="https://jetspark.io/?utm_source=dokov.bg&utm_medium=sidebar" class="text-gray-400 hover:text-primary">JetSpark</a>
            </footer>
        </div>
    </section>
</template>

<script>
    import SearchBox from './SearchBox'
    import { email } from '../util';

    export default {
        components: {SearchBox},

        data() {
            return {
                emailHref: '#',
            };
        },

        mounted() {
            setTimeout(() => {
                this.emailHref = `mailto:${email()}`;
            });
        },

        computed: {
            isViewingBlog() {
                return ['index', 'post'].indexOf(this.$page.frontmatter.type) >= 0;
            },

            year() {
                return (new Date()).getFullYear();
            }
        },
    }
</script>
