<template>
  <header>
    <div>
      <div class="container">
        <nav>
          <!-- Logo -->
          <a href="/kondo/overview" aria-label="logo">
            <span id="logo">
              <img
                class="u-header__promo-icon"
                style="margin-right: 0;"
                src="/assets/img/kondo.png"
                alt="SVG"
              />Kondo.io
            </span>
          </a>
          <!-- End Logo -->

          <!-- Navigation -->
          <div class="navbar-collapse">
            <ul class="navbar-nav u-header__navbar-nav">
              <!-- Home -->
              <li class="nav-item">
                <g-link class="nav-link u-header__nav-link" to="/">@DevOpsLibrary</g-link>
              </li>
              <!-- End Home -->

              <!-- Org Selector -->
              <li
                v-if="$auth.isAuthenticated"
                class="nav-item u-header__nav-item"
                @mouseover="toolsHover = true"
                @mouseleave="toolsHover = false"
              >
                <a
                  class="nav-link u-header__nav-link u-header__nav-link-toggle"
                  href="javascript:;"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Change Org</a>

                <!-- Tools   - Submenu -->
                <div
                  v-if="toolsHover"
                  class="hs-mega-menu u-header__sub-menu"
                  style="min-width: 330px;"
                >
                  <div class="u-header__promo-item" v-for="(org, idx) in installedOrgs" :key="idx">
                    <a class="u-header__promo-link" :href="'/kondo/overview?org=' + org.name">
                      <div class="media align-items-center">
                        <img
                          class="js-svg-injector u-header__promo-icon"
                          :src="org.avatar"
                          alt="SVG"
                        />
                        <div class="media-body">
                          <span class="u-header__promo-title">
                            {{ org.name }}
                            <span class="badge badge-primary badge-pill ml-1">ACTIVE</span>
                          </span>
                          <small class="u-header__promo-text">Click to switch orgs</small>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="u-header__promo-item">
                    <a class="u-header__promo-link" href="/kondo/configure">
                      <div class="media align-items-center">
                        <img
                          class="js-svg-injector u-header__promo-icon"
                          src="/assets/img/gear.png"
                          alt="SVG"
                        />
                        <div class="media-body">
                          <span class="u-header__promo-title">Add / Remove Orgs</span>
                          <small class="u-header__promo-text">Configure Installations</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- End Docs - Submenu -->
              </li>
              <!-- End Docs -->
              <button
                v-if="this.$auth.isAuthenticated"
                type="submit"
                @click="logout"
                class="btn btn-primary btn-wide transition-3d-hover ml-3"
                value="logout"
                name="logout"
                id="logout"
              >Logout</button>
              <!-- End Contact -->
            </ul>
          </div>
          <!-- End Navigation -->
        </nav>
      </div>
    </div>
  </header>
</template>

<static-query>
  query Lessons {
    lessons: allLesson {
      edges {
        node {
          title
          path
          category
          excerpt
          difficulty
          permalink
        }
      }
    }
  }
</static-query>
<script>
import axios from "axios";

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
      menuHover: ""
    };
  },
  computed: {
    installedOrgs: function() {
      return this.apiMessage.filter(function(u) {
        return u.installed;
      });
    }
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

      // Use Axios to make a call to the API
      const { data } = await axios.get("/orgs", {
        headers: {
          Authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
        }
      });

      this.apiMessage = data;
    }
  },
  watch: {
    "$auth.isAuthenticated": function() {
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
#pagesSubMenu {
  min-width: 230px;
  position: fixed;
  background-color: #fff;
}

#navSubmenuPagesAccount {
  min-width: 230px;
  position: fixed;
  margin-left: 230px;
  margin-top: -56px;
  background-color: #fff;
  overflow: visible;
  max-height: 80%;
  overflow-y: auto;
}

#logo {
  display: block;
  font-size: 2.25rem;
  font-weight: 700;
  margin-left: 0.5rem;
  color: #629efa;
}

.navbar-collapse {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-align: center;
  align-items: center;
}

.black {
  color: #000;
}

.hs-mega-menu {
  position: absolute;
  width: 80px;
  background-color: #fff;
}

.hs-sub-menu {
  width: 100px;
}

header {
  position: relative;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 1px 10px rgba(151, 164, 175, 0.1);
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

nav {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 0;
  padding-bottom: 0;
}

@media (max-width: 767.98px) {
  nav > .container,
  nav > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 768px) {
  nav {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  nav .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }

  nav .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  nav > .container {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }

  nav .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
}

@media (min-width: 768px) {
  nav {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  nav .u-header__navbar-nav {
    -ms-flex-align: center;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
  }

  nav .u-header__navbar-nav .u-header__nav-link {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-right: 0.875rem;
    padding-left: 0.875rem;
  }

  nav .u-header__navbar-nav .u-header__sub-menu {
    border-top: 0.1875rem solid #62b562;
    border-bottom-right-radius: 0.3125rem;
    border-bottom-left-radius: 0.3125rem;
    box-shadow: 0 8px 20px rgba(55, 125, 255, 0.075);
  }

  nav .u-header__navbar-nav .u-header__sub-menu-nav-link {
    padding-right: 1.75rem;
    padding-left: 1.75rem;
  }

  nav
    .u-header__navbar-nav
    .u-header__sub-menu-nav-group
    .u-header__sub-menu-nav-link {
    padding-left: 0;
  }

  nav .u-header__navbar-nav .u-header__sub-menu.hs-sub-menu {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  nav .u-header__navbar-nav .u-header__sub-menu .hs-has-sub-menu {
    padding: 0;
  }

  nav
    .u-header__navbar-nav
    .u-header__sub-menu
    .hs-has-sub-menu
    .u-header__sub-menu {
    margin-top: -1.1875rem;
  }
}
/* Nav Item */
.nav-item:first-child .u-header__nav-link {
  padding-left: 0;
}

.nav-item:hover .nav-link:hover {
  color: #62b562;
}
</style>
