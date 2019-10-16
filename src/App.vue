<template>
  <div id="app">
    <AppHeader />
    <div class="layout">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
    import AppHeader from "@/components/layout/AppHeader";
    import AppFooter from "./components/layout/AppFooter";

    export default {
        name: "App",
        components: {
            AppHeader,
            AppFooter
        }
    };
</script>

<style>

</style>
