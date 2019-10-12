<template>
  <header>
    <div>
      <div class="container">
        <!-- Nav -->
        <nav class="navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
          <!-- Logo -->
          <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="/" aria-label="Front">
            <span class="u-header__navbar-brand-text">DEVOPS<span style="color: #000;">Library</span></span>
          </a>
          <!-- End Logo -->

          <!-- Navigation -->
          <div id="navBar" class="navbar-collapse">
            <ul class="navbar-nav u-header__navbar-nav">
              <!-- Home -->
              <li class="nav-item">
                <a id="home" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true"
                   aria-expanded="false">Home</a>
              </li>
              <!-- End Home -->

              <!-- Blog -->
              <li class="nav-item hs-has-sub-menu u-header__nav-item">
                <a id="blogMegaMenu" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true"
                   aria-expanded="false" aria-labelledby="blogSubMenu">Blog</a>
              </li>
              <!-- End Blog -->

              <!-- Videos -->
              <li class="nav-item hs-has-sub-menu u-header__nav-item"
                  @mouseover="videosHover = true"
                  @mouseleave="videosHover = false">
                <a id="pagesMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;"
                   aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Videos</a>

                <!-- Pages - Submenu -->
                <ul id="pagesSubMenu" class="hs-sub-menu u-header__sub-menu" aria-labelledby="pagesMegaMenu"
                    v-if="videosHover">
                  <!-- Kubernetes -->
                  <li class="hs-has-sub-menu" v-for="category in categories" @mouseover="menuHover = category"
                      @mouseleave="menuHover = category">
                    <a id="navLinkPagesAccount"
                       class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle"
                       href="javascript:;" aria-haspopup="true" aria-expanded="false"
                       aria-controls="navSubmenuPagesAccount">{{ category }}</a>

                    <ul v-if="menuHover === category" id="navSubmenuPagesAccount" class="hs-sub-menu u-header__sub-menu"
                        aria-labelledby="navLinkPagesAccount">
                      <li v-for="lesson in lessonMap[category]"><a class="nav-link u-header__sub-menu-nav-link" v-bind:href="lesson.permalink">{{lesson.title}}</a></li>
                    </ul>
                  </li>
                  <!-- End Kubernetes -->
                </ul>
                <!-- End Pages - Submenu -->
              </li>
              <!-- End Pages -->

              <!-- Tools -->
              <li class="nav-item hs-has-mega-menu u-header__nav-item"
                  @mouseover="toolsHover = true"
                  @mouseleave="toolsHover = false">
                <a id="docsMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;"
                   aria-haspopup="true" aria-expanded="false">Tools</a>

                <!-- Tools   - Submenu -->
                <div v-if="toolsHover" class="hs-mega-menu u-header__sub-menu" aria-labelledby="docsMegaMenu"
                     style="min-width: 330px;">
                  <!-- Promo Item -->
                  <div class="u-header__promo-item">
                    <a class="u-header__promo-link" href="../../documentation/index.html">
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
                    <a class="u-header__promo-link" href="../../starter/index.html">
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
              <li class="nav-item hs-has-mega-menu u-header__nav-item">
                <a id="demosMegaMenu" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true"
                   aria-expanded="false">About Us</a>
              </li>
              <li class="nav-item hs-has-mega-menu u-header__nav-item">
                <a class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false">Supporters</a>
              </li>
              <!-- End Contact -->
            </ul>
          </div>
          <!-- End Navigation -->
        </nav>
        <!-- End Nav -->
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
          categories
          excerpt
          difficulty
          permalink
        }
      }
    }
  }
</static-query>
<script>
    import uniqBy from 'lodash/uniq'
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
            categories () {
                this.categorySet = new Set();
                this.$static.lessons.edges.forEach((lesson)=>{this.categorySet.add(lesson.node.categories)});
                return this.categorySet;
            },
            lessonMap () {
                this.lessMap = new Map();
                this.categories.forEach((category=>this.lessMap[category] = []));
                this.$static.lessons.edges.forEach((lesson)=>{this.lessMap[lesson.node.categories].push(lesson.node)});
                return this.lessMap;
            }
        }
    }
</script>

<style scoped>
  #pagesSubMenu {
    min-width: 230px;
    position: absolute;
  }
  #navSubmenuPagesAccount {
    min-width: 230px;
    position: absolute;
    left: 230px;
    margin-top: -56px;
  }
  .hs-mega-menu {
    position: absolute;
    width: 80px;
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
  .navbar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .navbar > .container,
  .navbar > .container-fluid {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
</style>
