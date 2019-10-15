<template>
  <header>
    <div>
      <div class="container">
        <nav>
          <!-- Logo -->
          <a href="/" aria-label="logo">
            <span id="logo">DEVOPS<span class="black">Library</span></span>
          </a>
          <!-- End Logo -->

          <!-- Navigation -->
          <div class="navbar-collapse">
            <ul class="navbar-nav u-header__navbar-nav">
              <!-- Home -->
              <li class="nav-item">
                <g-link class="nav-link u-header__nav-link" to="/">Home</g-link>
              </li>
              <!-- End Home -->

              <!-- Videos -->
              <li class="nav-item"
                  @mouseover="videosHover = true"
                  @mouseleave="videosHover = false">
                <a class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;"
                   aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Videos</a>
                <ul id="pagesSubMenu" class="hs-sub-menu u-header__sub-menu" aria-labelledby="pagesMegaMenu"
                    v-if="videosHover">
                  <li class="hs-has-sub-menu" v-for="category in categories" @mouseover="menuHover = category"
                      @mouseleave="menuHover = category">
                    <a id="navLinkPagesAccount"
                       class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle"
                       href="javascript:">{{ category }}</a>

                    <ul v-if="menuHover === category" id="navSubmenuPagesAccount" class="hs-sub-menu u-header__sub-menu">
                      <li v-for="lesson in lessonMap[category]">
                        <a class="nav-link u-header__sub-menu-nav-link" v-bind:href="'/' + lesson.permalink">
                          {{lesson.title}}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <!-- End Videos -->

              <!-- Tools -->
              <li class="nav-item u-header__nav-item"
                  @mouseover="toolsHover = true"
                  @mouseleave="toolsHover = false">
                <a class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;"
                   aria-haspopup="true" aria-expanded="false">Tools</a>

                <!-- Tools   - Submenu -->
                <div v-if="toolsHover" class="hs-mega-menu u-header__sub-menu"
                     style="min-width: 330px;">
                  <!-- Promo Item -->
                  <div class="u-header__promo-item">
                    <a class="u-header__promo-link" href="./adde.html">
                      <div class="media align-items-center">
                        <img class="js-svg-injector u-header__promo-icon" src="/assets/img/adde.png" alt="SVG">
                        <div class="media-body">
                          <span class="u-header__promo-title">
                            Adde
                            <span class="badge badge-primary badge-pill ml-1">Soon!</span>
                          </span>
                          <small class="u-header__promo-text">Automated Declarative Data Engine</small>
                        </div>
                      </div>
                    </a>
                  </div>
                  <!-- End Promo Item -->

                  <!-- Promo Item -->
                  <div class="u-header__promo-item">
                    <a class="u-header__promo-link" href="./kondo.html">
                      <div class="media align-items-center">
                        <img class="js-svg-injector u-header__promo-icon" src="/assets/img/kondo.png" alt="SVG">
                        <div class="media-body">
                          <span class="u-header__promo-title">Kondo
                            <span class="badge badge-primary badge-pill ml-1">Soon!</span>
                          </span>
                          <small class="u-header__promo-text">Repositories as Code</small>
                        </div>
                      </div>
                    </a>
                  </div>
                  <!-- End Promo Item -->
                </div>
                <!-- End Docs - Submenu -->
              </li>
              <!-- End Docs -->

              <!-- Contact -->
              <li class="nav-item u-header__nav-item">
                <g-link class="nav-link u-header__nav-link" to="/about/">About Us</g-link>
              </li>
              <li class="nav-item u-header__nav-item">
                <g-link class="nav-link u-header__nav-link" to="/supporters/">Supporters</g-link>
              </li>
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
    export default {
        data() {
            return {
                toolsHover: false,
                videosHover: false,
                menuHover: '',
            };
        },
        name: "AppFooter",
        computed: {
            categories() {
                this.categorySet = new Set();
                this.$static.lessons.edges.forEach((lesson) => {
                    this.categorySet.add(lesson.node.category)
                });
                return this.categorySet;
            },
            lessonMap() {
                this.lessMap = new Map();
                this.categories.forEach((category => this.lessMap[category] = []));
                this.$static.lessons.edges.forEach((lesson) => {
                    this.lessMap[lesson.node.category].push(lesson.node)
                });
                return this.lessMap;
            }
        }
    }
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
    margin-left: .5rem;
    color: #62b562;
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

  Nav {
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
    Nav > .container,
    Nav > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 768px) {
    Nav {
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }

    Nav .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }

    Nav .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    Nav > .container {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }

    Nav .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
  }

  @media (min-width: 768px) {
    Nav {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    Nav .u-header__navbar-nav {
      -ms-flex-align: center;
      align-items: center;
      padding-top: 0;
      padding-bottom: 0;
    }

    Nav .u-header__navbar-nav .u-header__nav-link {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      padding-right: 0.875rem;
      padding-left: 0.875rem;
    }

    Nav .u-header__navbar-nav .u-header__sub-menu {
      border-top: 0.1875rem solid #62b562;
      border-bottom-right-radius: 0.3125rem;
      border-bottom-left-radius: 0.3125rem;
      box-shadow: 0 8px 20px rgba(55, 125, 255, 0.075);
    }

    Nav .u-header__navbar-nav .u-header__sub-menu-nav-link {
      padding-right: 1.75rem;
      padding-left: 1.75rem;
    }

    Nav .u-header__navbar-nav .u-header__sub-menu-nav-group .u-header__sub-menu-nav-link {
      padding-left: 0;
    }

    Nav .u-header__navbar-nav .u-header__sub-menu.hs-sub-menu {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    Nav .u-header__navbar-nav .u-header__sub-menu .hs-has-sub-menu {
      padding: 0;
    }

    Nav .u-header__navbar-nav .u-header__sub-menu .hs-has-sub-menu .u-header__sub-menu {
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
