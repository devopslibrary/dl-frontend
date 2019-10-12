<template>
  <div id="app">
    <AppHeader />
    <div class="layout">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import AppHeader from "@/components/layout/AppHeader";
    export default {
        name: "App",
        components: {
            AppHeader
        }
    };
</script>

<style>

</style>
