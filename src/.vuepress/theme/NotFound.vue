<template>
    <div class="pb-12 px-3 md:px-0 font-sans text-secondary">
        <div class="container flex flex-wrap">
            <Sidebar class="w-full md:w-1/4 md:text-right"/>
            <main class="w-full md:w-3/4 md:pl-10 md:pt-24 mt-6 text-lg leading-relaxed">
                <section class="text-5xl leading-none font-bold mb-2">
                    <h1>Oh Snap! The page is missing...</h1>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar.vue'

    export default {
        components: { Sidebar },
    }
</script>

<style src="./styles/app.css"></style>
