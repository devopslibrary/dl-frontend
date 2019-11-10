<template>
  <KondoLayout>
    <div class="border-bottom w-md-75 w-lg-60 space-2 mx-md-auto">
      <div v-if="!this.$route.query.org">
        <h1>Please select an organization to manage with Kondo</h1>
        <div class="Box">
          <div v-for="org in apiMessage" v-if="org.installed" class="Box-row">
            <a :href="'/kondo/overview?org=' + org.login">
              <img class="avatar mr-1 v-align-middle" :src="org.avatar_url"
                   width="34" height="34" alt="@Pixel-Map">
              <span class="text-bold">{{ org.login }}</span>
            </a>
          </div>
        </div>
      </div>
      <div v-if="this.$route.query.org">
        <h1>{{ this.$route.query.org }} Overview</h1>
        <p v-for="repo in repos.data">{{ repo.name }} - {{ repo.description }}</p>
      </div>
    </div>
  </KondoLayout>
</template>

<script>
  import axios from 'axios';

  export default {
    metaInfo: {
      title: "DevOpsLibrary - We're glad you found yourself here!"
    },
    name: "Kondo",
    data() {
      return {
        apiMessage: "",
        token: false,
        toolsHover: false,
        videosHover: false,
        menuHover: '',
        repos: '',
      };
    },
    methods: {
      // Log the user in
      login() {
        this.$auth.loginWithRedirect();
      },
      // Log the user out
      logout() {
        this.$auth.logout({
          returnTo: window.location.origin
        });
      },
      async callApi() {
        // Get the access token from the auth wrapper
        const token = await this.$auth.getTokenSilently();

        // Get Org Data
        const {data} = await axios.get("/api/get-orgs", {
          headers: {
            Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
          }
        });
        this.apiMessage = data;

        const rdata = await axios.get("/api/get-repos", {
          params: {
            org: this.$route.query.org
          },
          headers: {
            Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
          }
        });
        this.repos = rdata;
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
