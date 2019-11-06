<template>
    <div class="wrapper">
        <Header></Header>
        <div class="container">
            <div class="content-grid">
                <Sidebar></Sidebar>
                <main class="main">
                    <div class="content">
                        <h1>{{ getMsg() }}</h1>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Sidebar from './Sidebar.vue'

    const msgs = [
        `There's nothing here.`,
        `How did we get here?`,
        `That's a Four-Oh-Four.`,
        `Looks like we've got some broken links.`
    ];

    export default {
        components: { Header, Sidebar },

        methods: {
            getMsg() {
                return msgs[Math.floor(Math.random() * msgs.length)]
            }
        }
    }
</script>

<style src="./styles/main.scss" lang="scss"></style>
