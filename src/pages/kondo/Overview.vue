<template>
  <div>
    <AppHeaderKondo />
    <div class="border-bottom w-md-75 w-lg-60 space-2 mx-md-auto">
      hi {{ this.$route.query.org }}
    </div>
    <AppFooter />
  </div>
</template>

<script>
  import AppHeaderKondo from "../../components/layout/AppHeaderKondo";
  import AppFooter from "../../components/layout/AppFooter";
  import axios from 'axios';

  export default {
    metaInfo: {
      title: "DevOpsLibrary - We're glad you found yourself here!"
    },
    components: {
      AppHeaderKondo,
      AppFooter
    },
    name: "Kondo",
    data() {
      return {
        apiMessage: "",
        token: false
      };
    },
    methods: {
      // Log the user in
      login() {
        this.$auth.loginWithRedirect();
      },
      async callApi() {
        // Get the access token from the auth wrapper
        const token = await this.$auth.getTokenSilently();

        // Use Axios to make a call to the API
        const {data} = await axios.get("/api/external", {
          headers: {
            Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
          }
        });

        this.apiMessage = data;
      }
    },
    watch: {
      '$auth.isAuthenticated': function () {
        this.callApi();
      }
    },
    mounted() {
      if (!this.$auth.loading) {
        this.callApi();
      }
    }
  };
</script>

<style scoped>

</style>
