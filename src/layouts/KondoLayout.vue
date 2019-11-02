<template>
  <div>
    <AppHeaderKondo />
    <slot /> <!-- Page content will be inserted here  -->
    <AppFooter />
  </div>
</template>

<script>
  import AppHeaderKondo from "../components/layout/AppHeaderKondo";
  import AppFooter from "../components/layout/AppFooter";

  export default {
    components: {
      AppHeaderKondo,
      AppFooter
    },
  }
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
