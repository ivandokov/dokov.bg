<template>
    <div class="container">
        <Sidebar></Sidebar>
        <main class="main">
            <h1>{{ getMsg() }}</h1>
        </main>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar.vue'

    const msgs = [
        `There's nothing here.`,
        `How did we get here?`,
        `That's a Four-Oh-Four.`,
        `Looks like we've got some broken links.`
    ];

    export default {
        components: { Sidebar },

        methods: {
            getMsg() {
                return msgs[Math.floor(Math.random() * msgs.length)]
            }
        }
    }
</script>

<style src="./styles/app.css"></style>
