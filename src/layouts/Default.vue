<template>
  <div class="layout">
    <!-- ========== HEADER ========== -->
    <header id="header" class="u-header">
    
      <!-- Search -->
    <div id="searchPushTop" class="u-search-push-top">
      <div class="container position-relative">
        <div class="u-search-push-top__content">
          <!-- Close Button -->
          <button type="button" class="close u-search-push-top__close-btn"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-controls="searchPushTop"
                  data-unfold-type="jquery-slide"
                  data-unfold-target="#searchPushTop">
            <span aria-hidden="true">&times;</span>
          </button>
          <!-- End Close Button -->

          <!-- Input -->
          <form class="js-focus-state input-group">
            <input type="search" class="form-control" placeholder="Search Front" aria-label="Search Front">
            <div class="input-group-append">
              <button type="button" class="btn btn-primary">Search</button>
            </div>
          </form>
          <!-- End Input -->

          <!-- Content -->
          <div class="row d-none d-md-flex mt-7">
            <div class="col-sm-6">
              <strong class="d-block mb-2">Quick Links</strong>

              <div class="row">
                <!-- List Group -->
                <div class="col-6">
                  <div class="list-group list-group-transparent list-group-flush list-group-borderless">
                    <a class="list-group-item list-group-item-action" href="#">
                      <span class="fas fa-angle-right list-group-icon"></span>
                      Search Results List
                    </a>
                    <a class="list-group-item list-group-item-action" href="#">
                      <span class="fas fa-angle-right list-group-icon"></span>
                      Search Results Grid
                    </a>
                    <a class="list-group-item list-group-item-action" href="#">
                      <span class="fas fa-angle-right list-group-icon"></span>
                      About
                    </a>
                    <a class="list-group-item list-group-item-action" href="#">
                      <span class="fas fa-angle-right list-group-icon"></span>
                      Services
                    </a>
                    <a class="list-group-item list-group-item-action" href="#">
                      <span class="fas fa-angle-right list-group-icon"></span>
                      Invoice
                    </a>
                  </div>
                </div>
                <!-- End List Group -->

                <!-- List Group -->
                <div class="col-6">
                  <div class="list-group list-group-transparent list-group-flush list-group-borderless">
                    <a class="list-group-item list-group-item-action" href="#">
                      <span class="fas fa-angle-right list-group-icon"></span>
                      Profile
                    </a>
                    <a class="list-group-item list-group-item-action" href="#">
                      <span class="fas fa-angle-right list-group-icon"></span>
                      User Contacts
                    </a>
                    <a class="list-group-item list-group-item-action" href="#">
                      <span class="fas fa-angle-right list-group-icon"></span>
                      Reviews
                    </a>
                    <a class="list-group-item list-group-item-action" href="#">
                      <span class="fas fa-angle-right list-group-icon"></span>
                      Settings
                    </a>
                  </div>
                </div>
                <!-- End List Group -->
              </div>
            </div>

            <div class="col-sm-6">
              <!-- Banner -->
              <div class="rounded u-search-push-top__banner">
                <div class="d-flex align-items-center">
                  <div class="u-search-push-top__banner-container">
                    <img class="img-fluid u-search-push-top__banner-img" src="/assets/img/jenkinscourse.png" alt="Image Description">
                    <img class="img-fluid u-search-push-top__banner-img" src="/assets/img/jenkinscourse.png" alt="Image Description">
                  </div>

                  <div>
                    <div class="mb-4">
                      <strong class="d-block mb-2">Featured Item</strong>
                      <p>Create astonishing web sites and pages.</p>
                    </div>
                    <a class="btn btn-xs btn-soft-success transition-3d-hover" href="index.html">Apply Now <span class="fas fa-angle-right ml-2"></span></a>
                  </div>
                </div>
              </div>
              <!-- End Banner -->
            </div>
          </div>
          <!-- End Content -->
        </div>
      </div>
    </div>
    <!-- End Search -->

    <div class="u-header__section">
    
      <div id="logoAndNav" class="container">
        <!-- Nav -->
        <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
          <!-- Logo -->
          <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="/" aria-label="Front">
            <span class="u-header__navbar-brand-text">DEVOPS<span style="color: #000;">Library</span></span>
          </a>
          <!-- End Logo -->

          <!-- Responsive Toggle Button -->
          <button type="button" class="navbar-toggler btn u-hamburger"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  aria-controls="navBar"
                  data-toggle="collapse"
                  data-target="#navBar">
            <span id="hamburgerTrigger" class="u-hamburger__box">
              <span class="u-hamburger__inner"></span>
            </span>
          </button>
          <!-- End Responsive Toggle Button -->

          <!-- Navigation -->
          <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
            <ul class="navbar-nav u-header__navbar-nav">
              <!-- Home -->
              <li class="nav-item hs-has-mega-menu u-header__nav-item">
                <a id="homeMegaMenu" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false">Home</a>
              </li>
              <!-- End Home -->

              <!-- Blog -->
              <li class="nav-item hs-has-sub-menu u-header__nav-item"
                  data-event="hover"
                  data-animation-in="slideInUp"
                  data-animation-out="fadeOut">
                <a id="blogMegaMenu" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Blog</a>
              </li>
              <!-- End Blog -->

              <!-- Videos -->
              <li class="nav-item hs-has-sub-menu u-header__nav-item"
                  data-event="hover"
                  data-animation-in="slideInUp"
                  data-animation-out="fadeOut">
                <a id="pagesMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Videos</a>

                <!-- Pages - Submenu -->
                <ul id="pagesSubMenu" class="hs-sub-menu u-header__sub-menu" aria-labelledby="pagesMegaMenu" style="min-width: 230px;">
                  <!-- Kubernetes -->
                  <li class="hs-has-sub-menu">
                    <a id="navLinkPagesAccount" class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesAccount">Kubernetes</a>

                    <ul id="navSubmenuPagesAccount" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesAccount" style="min-width: 230px;">
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../account/dashboard.html">What is Kubernetes, and should I use it?</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../account/profile.html">Kubernetes the wasy way</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../account/my-tasks.html">Kubernetes the hard way</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../account/projects.html">Comparing flavors of K8</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../account/members.html">Helpful Kubernetes Tips &amp; Tricks</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../account/edit-profile.html">K8 Secrets Management with Kamus</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../account/change-password.html">Kubernetes Disaster Recovery</a></li>
                    </ul>
                  </li>
                  <!-- End Kubernetes -->

                  <!-- Jenkins -->
                  <li class="hs-has-sub-menu">
                    <a id="navLinkPagesCompany" class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesCompany">Jenkins</a>

                    <ul id="navSubmenuPagesCompany" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesCompany" style="min-width: 230px;">
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/about-agency.html">About Agency</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/services-agency.html">Services Agency</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/customers.html">Customers</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/customer-story.html">Customer story</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/careers.html">Careers</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/careers-single.html">Careers Single</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/hire-us.html">Hire Us</a></li>
                    </ul>
                  </li>
                  <!-- Jenkins -->

                  <!-- Portfolio -->
                  <li class="hs-has-sub-menu">
                    <a id="navLinkPagesPortfolio" class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesPortfolio">Azure DevOps</a>

                    <ul id="navSubmenuPagesPortfolio" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesPortfolio" style="min-width: 230px;">
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../portfolio/boxed-classic.html">All layouts</a></li>
                      <li class="dropdown-divider"></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../portfolio/case-studies-simple.html">Case Studies Simple</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../portfolio/case-studies-modern.html">Case Studies Modern</a></li>
                      <li class="dropdown-divider"></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../portfolio/single-page-simple.html">Single Page Simple</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../portfolio/single-page-grid.html">Single Page Grid</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../portfolio/single-page-masonry.html">Single Page Masonry</a></li>
                    </ul>
                  </li>
                  <!-- End Portfolio -->

                  <!-- Login -->
                  <li class="hs-has-sub-menu">
                    <a id="navLinkPagesLogin" class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesLogin">Vagrant</a>

                    <ul id="navSubmenuPagesLogin" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesLogin" style="min-width: 230px;">
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/login.html">Login</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/signup.html">Signup</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/recover-account.html">Recover Account</a></li>
                      <li class="dropdown-divider"></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/login-simple.html">Login Simple</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/signup-simple.html">Signup Simple</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/recover-account-simple.html">Recover Account Simple</a></li>
                    </ul>
                  </li>
                  <!-- Signup -->

                  <!-- Contacts -->
                  <li class="hs-has-sub-menu">
                    <a id="navLinkContactsServices" class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuContactsServices">Misc</a>

                    <ul id="navSubmenuContactsServices" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkContactsServices" style="min-width: 230px;">
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/contacts-agency.html">Contacts Agency</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="../pages/contacts-start-up.html">Contacts Start-Up</a></li>
                    </ul>
                  </li>
                  <!-- Contacts -->

                </ul>
                <!-- End Pages - Submenu -->
              </li>
              <!-- End Pages -->

              <!-- Tools -->
              <li class="nav-item hs-has-mega-menu u-header__nav-item"
                  data-event="hover"
                  data-animation-in="slideInUp"
                  data-animation-out="fadeOut"
                  data-max-width="260px"
                  data-position="right">
                <a id="docsMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Tools</a>

                <!-- Tools   - Submenu -->
                <div class="hs-mega-menu u-header__sub-menu" aria-labelledby="docsMegaMenu" style="min-width: 330px;">
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
              <li class="nav-item hs-has-mega-menu u-header__nav-item"
              data-event="hover"
              data-animation-in="slideInUp"
              data-animation-out="fadeOut"
              data-max-width="900px"
              data-position="right">
                <a id="demosMegaMenu" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false">About Us</a>
              </li>
              <li class="nav-item hs-has-mega-menu u-header__nav-item"
              data-event="hover"
              data-animation-in="slideInUp"
              data-animation-out="fadeOut"
              data-max-width="900px"
              data-position="right">
                <a id="demosMegaMenu" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false">Supporters</a>
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
  <!-- ========== END HEADER ========== -->

    
  
    

  <!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Hero Section -->
    <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll" data-options='{direction: "normal"}'>
      <!-- Apply your Parallax background image here -->
      <div class="divimage dzsparallaxer--target" style="height: 100%; background-image: url(../../assets/img/lib3.jpg);"></div>

      <!-- Content -->
      <div class="container space-2 space-md-3">
        <div class="text-center w-lg-80 mx-auto">
          <h1 class="text-white display-1 font-size-md-down-5 font-weight-semi-bold">Welcome to the <span class="library-green">DevOps Library</span></h1>
        </div>

        <div class="text-center w-lg-40 mx-auto">
          <p class="lead">We're glad you found yourself here!  Enjoy our free video courses, articles, and tools for the DevOps Community.</p>
        </div>
      </div>
      <!-- End Content -->
    </div>
    <!-- End Hero Section -->

    <!-- Blog Listing Section -->
    <div class="container space-2 space-bottom-lg-3">
      <div class="row">
        <div class="col-md-7 col-lg-8 mb-7 mb-md-0">
          <!-- End Blog Card -->
          <article class="card shadow mb-5">
            <img class="card-img-top" src="/assets/img/jenkinscourse.png" alt="Image Description">

            <div class="card-body p-5">
              <a class="d-inline-block text-secondary font-weight-medium text-uppercase small mb-2" href="#">Jenkins</a>

              <h2 class="h5 font-weight-medium">
                <a href="single-article.html">Setting up a Jenkins master</a>
              </h2>

              <p>For a lot of people these days, Measure What Matters by John Doerr is their first introduction to OKR (Objectives and Key Results). It's a good book — though there are a couple of things that Measure What Matters got entirely wrong.</p>

              <div class="media align-items-center pt-5">
                <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle" data-toggle="tooltip" data-placement="top" title="Nataly Gaga">
                  <img class="img-fluid rounded-circle" src="/assets/img/jenkinscourse.png" alt="Image Description">
                </div>
                <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle ml-n2" data-toggle="tooltip" data-placement="top" title="Emily Milda">
                  <img class="img-fluid rounded-circle" src="/assets/img/jenkinscourse.png" alt="Image Description">
                </div>
                <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                  July 15
                </div>
              </div>
            </div>
          </article>
          <!-- End Blog Card -->

          <!-- End Blog Card -->
          <article class="card shadow mb-5">
            <img class="card-img-top" src="/assets/img/jenkinscourse.png" alt="Image Description">

            <div class="card-body p-5">
              <a class="d-inline-block text-secondary font-weight-medium text-uppercase small mb-2" href="#">Business</a>

              <h3 class="h5 font-weight-medium">
                <a href="single-article.html">Front accounts - let's work together</a>
              </h3>

              <p>Are you an accountant? Are you a company formation advisor? Would you like to partner with one of the world's most popular and fastest-growing Fintech startups?</p>

              <div class="media align-items-center pt-5">
                <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle" data-toggle="tooltip" data-placement="top" title="Hanna Wolfe">
                  <img class="img-fluid rounded-circle" src="/assets/img/jenkinscourse.png" alt="Image Description">
                </div>
                <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle ml-n2" data-toggle="tooltip" data-placement="top" title="John O'nolan">
                  <img class="img-fluid rounded-circle" src="/assets/img/jenkinscourse.png" alt="Image Description">
                </div>
                <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                  July 15
                </div>
              </div>
            </div>
          </article>
          <!-- End Blog Card -->

          <!-- Blog Card -->
          <article class="mb-5">
            <a class="card bg-img-hero bg-primary text-white text-center py-7 px-5" href="single-article.html" style="background-image: url(../../assets/svg/components/abstract-shapes-19.svg);">
              <div class="w-lg-65 mx-lg-auto">
                <div class="mb-5">
                  <span class="d-inline-block text-warning font-weight-semi-bold text-uppercase small mb-2">Resources</span>
                  <h3 class="h2 font-weight-medium">No-Skills-Required Design Tools for Entrepreneurs</h3>
                </div>
                <div class="media justify-content-center align-items-center">
                  <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle" data-toggle="tooltip" data-placement="top" title="Nataly Gaga">
                    <img class="img-fluid rounded-circle" src="/assets/img/jenkinscourse.png" alt="Image Description">
                  </div>
                  <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle ml-n2" data-toggle="tooltip" data-placement="top" title="John O'nolan">
                    <img class="img-fluid rounded-circle" src="/assets/img/jenkinscourse.png" alt="Image Description">
                  </div>
                </div>
              </div>
            </a>
          </article>
          <!-- End Blog Card -->

          <!-- End Blog Card -->
          <article class="card shadow mb-5">
            <img class="card-img-top" src="/assets/img/jenkinscourse.png" alt="Image Description">

            <div class="card-body p-5">
              <a class="d-inline-block text-secondary font-weight-medium text-uppercase small mb-2" href="#">Community</a>

              <h3 class="h5 font-weight-medium">
                <a href="single-article.html">Should Product Owners think like entrepreneurs?</a>
              </h3>

              <p>Front is a financial technology company. We build products. We do it fast and we do it well..</p>

              <div class="media align-items-center pt-5">
                <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle" data-toggle="tooltip" data-placement="top" title="Emily Milda">
                  <img class="img-fluid rounded-circle" src="/assets/img/jenkinscourse.png" alt="Image Description">
                </div>
                <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle ml-n2" data-toggle="tooltip" data-placement="top" title="John O'nolan">
                  <img class="img-fluid rounded-circle" src="/assets/img/jenkinscourse.png" alt="Image Description">
                </div>
                <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                  July 15
                </div>
              </div>
            </div>
          </article>
          <!-- End Blog Card -->

          <!-- End Blog Card -->
          <article class="card shadow mb-5">
            <img class="card-img-top" src="/assets/img/jenkinscourse.png" alt="Image Description">

            <div class="card-body p-5">
              <a class="d-inline-block text-secondary font-weight-medium text-uppercase small mb-2" href="#">Community</a>

              <h3 class="h5 font-weight-medium">
                <a href="single-article.html">Do millennials care about saving?</a>
              </h3>

              <p>Over the last few years, numerous studies have appeared to confirm a troubling pattern – millennials don't save, they don't care about their financial futures.</p>

              <div class="media align-items-center pt-5">
                <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle" data-toggle="tooltip" data-placement="top" title="Nataly Gaga">
                  <img class="img-fluid rounded-circle" src="/assets/img/jenkinscourse.png" alt="Image Description">
                </div>
                <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                  July 15
                </div>
              </div>
            </div>
          </article>
          <!-- End Blog Card -->

          <!-- Sticky Block End Point -->
          <div id="stickyBlockEndPoint"></div>

          <div class="space-bottom-2"></div>

          <!-- Pagination -->
          <nav aria-label="Page navigation">
            <ul class="pagination mb-0">
              <li class="page-item mr-auto">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="d-none d-sm-inline-block ml-1">Prev</span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item ml-auto">
                <a class="page-link" href="#" aria-label="Next">
                  <span class="d-none d-sm-inline-block mr-1">Next</span>
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <!-- End Pagination -->
        </div>

        <div id="stickyBlockStartPoint" class="col-md-5 col-lg-4">
          <div class="js-sticky-block pl-lg-4"
               data-parent="#stickyBlockStartPoint"
               data-sticky-view="md"
               data-start-point="#stickyBlockStartPoint"
               data-end-point="#stickyBlockEndPoint"
               data-offset-top="16"
               data-offset-bottom="16">
            <h3 class="h6 font-weight-semi-bold mb-4">Useful links</h3>

            <!-- List Group -->
            <ul class="list-group list-group-flush list-group-borderless mb-5">
              <li>
                <a class="list-group-item list-group-item-action d-flex align-items-center" href="#">
                  All
                  <span class="badge bg-soft-secondary badge-pill ml-2">30+</span>
                  <small class="fas fa-angle-right ml-auto"></small>
                </a>
              </li>
              <li>
                <a class="list-group-item list-group-item-action d-flex align-items-center" href="#">
                  Top rated
                  <small class="fas fa-angle-right ml-auto"></small>
                </a>
              </li>
              <li>
                <a class="list-group-item list-group-item-action d-flex align-items-center" href="#">
                  Kubernetes
                  <span class="badge bg-soft-secondary badge-pill ml-2">5</span>
                  <small class="fas fa-angle-right ml-auto"></small>
                </a>
              </li>
              <li>
                <a class="list-group-item list-group-item-action d-flex align-items-center" href="#">
                  Jenkins
                  <span class="badge bg-soft-secondary badge-pill ml-2">18</span>
                  <small class="fas fa-angle-right ml-auto"></small>
                </a>
              </li>
              <li>
                <a class="list-group-item list-group-item-action d-flex align-items-center" href="#">
                  Vagrant
                  <span class="badge bg-soft-secondary badge-pill ml-2">5</span>
                  <small class="fas fa-angle-right ml-auto"></small>
                </a>
              </li>
              <li>
                <a class="list-group-item list-group-item-action d-flex align-items-center" href="#">
                  New
                  <small class="fas fa-angle-right ml-auto"></small>
                </a>
              </li>
            </ul>
            <!-- End List Group -->

            <div class="border-top pt-5 mt-5">
              <h3 class="h6 font-weight-semi-bold mb-4">Related stories</h3>

              <!-- Blog Card -->
              <article>
                <div class="row justify-content-between">
                  <div class="col-6">
                    <a class="d-inline-block text-muted font-weight-medium text-uppercase small" href="#">Product</a>
                    <h4 class="h6 font-weight-medium mb-0">
                      <a href="single-article.html">Simplifying Kubernetes Secrets with Kamus</a>
                    </h4>
                  </div>

                  <div class="col-5">
                    <img class="img-fluid" src="/assets/img/jenkinscourse.png" alt="Image Description">
                  </div>
                </div>
              </article>
              <!-- End Blog Card -->

              <!-- Blog Card -->
              <article class="border-top pt-5 mt-5">
                <div class="row justify-content-between">
                  <div class="col-6">
                    <a class="d-inline-block text-muted font-weight-medium text-uppercase small" href="#">Jenkins</a>
                    <h4 class="h6 font-weight-medium mb-0">
                      <a href="single-article.html">Setting up a Jenkins master</a>
                    </h4>
                  </div>

                  <div class="col-5">
                    <img class="img-fluid" src="/assets/img/jenkinscourse.png" alt="Image Description">
                  </div>
                </div>
              </article>
              <!-- End Blog Card -->

              <!-- Blog Card -->
              <article class="border-top pt-5 mt-5">
                <div class="row justify-content-between">
                  <div class="col-6">
                    <a class="d-inline-block text-muted font-weight-medium text-uppercase small" href="#">Business</a>
                    <h4 class="h6 font-weight-medium mb-0">
                      <a href="single-article.html">Enjoy $1,000 worth of perks with Front for Business</a>
                    </h4>
                  </div>

                  <div class="col-5">
                    <img class="img-fluid" src="/assets/img/jenkinscourse.png" alt="Image Description">
                  </div>
                </div>
              </article>
              <!-- End Blog Card -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Blog Listing Section -->

    <!-- Subscribe Section -->
    <div class="space-1">
      <div class="bg-img-hero" style="background-image: url(../assets/img/bglogos.png);">
        <div class="container space-2 space-bottom-lg-3">
          <!-- Title -->
          <div class="w-md-60 text-center mx-auto mb-7">
            <h2 class="font-weight-semi-bold">Keep up on the latest DevOps trends</h2>
            <p>Bi-weekly newsletter with tips, tricks, and articles on all things DevOps</p>
          </div>
          <!-- End Title -->

          <!-- Form -->
          <form class="js-validate w-md-75 w-lg-50 mx-md-auto">
            <div class="js-form-message">
              <div class="d-flex align-items-center">
                <label class="sr-only" for="subscribeSr">Subscribe</label>
                <div class="input-group">
                  <input type="email" class="form-control" name="email" id="subscribeSr" placeholder="Your email" aria-label="Your email" required
                         data-msg="Please enter a valid email address."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
                <button type="submit" class="btn btn-primary btn-wide transition-3d-hover ml-3">Get Started</button>
              </div>
            </div>
          </form>
          <!-- End Form -->
        </div>
      </div>
    </div>
    <!-- End Subscribe Section -->
  </main>
  <!-- ========== END MAIN ========== -->

  <!-- ========== FOOTER ========== -->
  <footer>
    <!-- Lists -->
    <div class="border-bottom">
      <div class="container space-2">
        <div class="row justify-content-md-between">
          <div class="col-sm-4 col-lg-2 mb-4 mb-lg-0">
            <h4 class="h6 font-weight-semi-bold">About</h4>

            <!-- List Group -->
            <ul class="list-group list-group-flush list-group-borderless mb-0">
              <li><a class="list-group-item list-group-item-action" href="../pages/about-agency.html">About</a></li>
              <li><a class="list-group-item list-group-item-action" href="../pages/services-agency.html">Services</a></li>
              <li><a class="list-group-item list-group-item-action" href="../pages/careers.html">Careers</a></li>
            </ul>
            <!-- End List Group -->
          </div>

          <div class="col-sm-4 col-lg-2 mb-4 mb-lg-0">
            <h4 class="h6 font-weight-semi-bold">Account</h4>

            <!-- List Group -->
            <ul class="list-group list-group-flush list-group-borderless mb-0">
              <li><a class="list-group-item list-group-item-action" href="../account/dashboard.html">Account</a></li>
              <li><a class="list-group-item list-group-item-action" href="../account/my-tasks.html">My tasks</a></li>
              <li><a class="list-group-item list-group-item-action" href="../account/projects.html">Projects</a></li>
            </ul>
            <!-- End List Group -->
          </div>

          <div class="col-sm-4 col-lg-2 mb-4 mb-lg-0">
            <h4 class="h6 font-weight-semi-bold">Resources</h4>

            <!-- List Group -->
            <ul class="list-group list-group-flush list-group-borderless mb-0">
              <li><a class="list-group-item list-group-item-action" href="../pages/faq.html">Help</a></li>
              <li><a class="list-group-item list-group-item-action" href="../pages/terms.html">Terms</a></li>
              <li><a class="list-group-item list-group-item-action" href="../pages/privacy.html">Privacy</a></li>
            </ul>
            <!-- End List Group -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Lists -->

    <!-- Copyright -->
    <div class="container text-center space-1">
      <!-- Logo -->
      <a class="d-inline-flex align-items-center mb-2" href="../home/index.html" aria-label="Front">
        <span class="library-green brand">DEVOPS<span style="color: #000;">Library</span></span>
      </a>
      <!-- End Logo -->
      <p class="small text-muted">&copy; DevOpsLibrary 2019 - All rights reserved.</p>
    </div>
    <!-- End Copyright -->
  </footer>
  <!-- ========== END FOOTER ========== -->

  <!-- ========== SECONDARY CONTENTS ========== -->
  <!-- Account Sidebar Navigation -->
  <aside id="sidebarContent" class="u-sidebar" aria-labelledby="sidebarNavToggler">
    <div class="u-sidebar__scroller">
      <div class="u-sidebar__container">
        <div class="u-header-sidebar__footer-offset">
          <!-- Toggle Button -->
          <div class="d-flex align-items-center pt-4 px-7">
            <button type="button" class="close ml-auto"
                    aria-controls="sidebarContent"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-unfold-event="click"
                    data-unfold-hide-on-scroll="false"
                    data-unfold-target="#sidebarContent"
                    data-unfold-type="css-animation"
                    data-unfold-animation-in="fadeInRight"
                    data-unfold-animation-out="fadeOutRight"
                    data-unfold-duration="500">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- End Toggle Button -->

          <!-- Content -->
          <div class="js-scrollbar u-sidebar__body">
            <div class="u-sidebar__content u-header-sidebar__content">
              <form class="js-validate">
                <!-- Login -->
                <div id="login" data-target-group="idForm">
                  <!-- Title -->
                  <header class="text-center mb-7">
                    <h2 class="h4 mb-0">Welcome Back!</h2>
                    <p>Login to manage your account.</p>
                  </header>
                  <!-- End Title -->

                  <!-- Form Group -->
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="signinEmail">Email</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="signinEmailLabel">
                            <span class="fas fa-user"></span>
                          </span>
                        </div>
                        <input type="email" class="form-control" name="email" id="signinEmail" placeholder="Email" aria-label="Email" aria-describedby="signinEmailLabel" required
                               data-msg="Please enter a valid email address."
                               data-error-class="u-has-error"
                               data-success-class="u-has-success">
                      </div>
                    </div>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="signinPassword">Password</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="signinPasswordLabel">
                            <span class="fas fa-lock"></span>
                          </span>
                        </div>
                        <input type="password" class="form-control" name="password" id="signinPassword" placeholder="Password" aria-label="Password" aria-describedby="signinPasswordLabel" required
                               data-msg="Your password is invalid. Please try again."
                               data-error-class="u-has-error"
                               data-success-class="u-has-success">
                      </div>
                    </div>
                  </div>
                  <!-- End Form Group -->

                  <div class="d-flex justify-content-end mb-4">
                    <a class="js-animation-link small link-muted" href="javascript:;"
                       data-target="#forgotPassword"
                       data-link-group="idForm"
                       data-animation-in="slideInUp">Forgot Password?</a>
                  </div>

                  <div class="mb-2">
                    <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Login</button>
                  </div>

                  <div class="text-center mb-4">
                    <span class="small text-muted">Do not have an account?</span>
                    <a class="js-animation-link small" href="javascript:;"
                       data-target="#signup"
                       data-link-group="idForm"
                       data-animation-in="slideInUp">Signup
                    </a>
                  </div>

                  <div class="text-center">
                    <span class="u-divider u-divider--xs u-divider--text mb-4">OR</span>
                  </div>

                  <!-- Login Buttons -->
                  <div class="d-flex">
                    <a class="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                      <span class="fab fa-facebook-square mr-1"></span>
                      Facebook
                    </a>
                    <a class="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                      <span class="fab fa-google mr-1"></span>
                      Google
                    </a>
                  </div>
                  <!-- End Login Buttons -->
                </div>

                <!-- Signup -->
                <div id="signup" style="display: none; opacity: 0;" data-target-group="idForm">
                  <!-- Title -->
                  <header class="text-center mb-7">
                    <h2 class="h4 mb-0">Welcome to Front.</h2>
                    <p>Fill out the form to get started.</p>
                  </header>
                  <!-- End Title -->

                  <!-- Form Group -->
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="signupEmail">Email</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="signupEmailLabel">
                            <span class="fas fa-user"></span>
                          </span>
                        </div>
                        <input type="email" class="form-control" name="email" id="signupEmail" placeholder="Email" aria-label="Email" aria-describedby="signupEmailLabel" required
                               data-msg="Please enter a valid email address."
                               data-error-class="u-has-error"
                               data-success-class="u-has-success">
                      </div>
                    </div>
                  </div>
                  <!-- End Input -->

                  <!-- Form Group -->
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="signupPassword">Password</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="signupPasswordLabel">
                            <span class="fas fa-lock"></span>
                          </span>
                        </div>
                        <input type="password" class="form-control" name="password" id="signupPassword" placeholder="Password" aria-label="Password" aria-describedby="signupPasswordLabel" required
                               data-msg="Your password is invalid. Please try again."
                               data-error-class="u-has-error"
                               data-success-class="u-has-success">
                      </div>
                    </div>
                  </div>
                  <!-- End Input -->

                  <!-- Form Group -->
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="signupConfirmPassword">Confirm Password</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="signupConfirmPasswordLabel">
                            <span class="fas fa-key"></span>
                          </span>
                        </div>
                        <input type="password" class="form-control" name="confirmPassword" id="signupConfirmPassword" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="signupConfirmPasswordLabel" required
                               data-msg="Password does not match the confirm password."
                               data-error-class="u-has-error"
                               data-success-class="u-has-success">
                      </div>
                    </div>
                  </div>
                  <!-- End Input -->

                  <div class="mb-2">
                    <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Get Started</button>
                  </div>

                  <div class="text-center mb-4">
                    <span class="small text-muted">Already have an account?</span>
                    <a class="js-animation-link small" href="javascript:;"
                       data-target="#login"
                       data-link-group="idForm"
                       data-animation-in="slideInUp">Login
                    </a>
                  </div>

                  <div class="text-center">
                    <span class="u-divider u-divider--xs u-divider--text mb-4">OR</span>
                  </div>

                  <!-- Login Buttons -->
                  <div class="d-flex">
                    <a class="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                      <span class="fab fa-facebook-square mr-1"></span>
                      Facebook
                    </a>
                    <a class="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                      <span class="fab fa-google mr-1"></span>
                      Google
                    </a>
                  </div>
                  <!-- End Login Buttons -->
                </div>
                <!-- End Signup -->

                <!-- Forgot Password -->
                <div id="forgotPassword" style="display: none; opacity: 0;" data-target-group="idForm">
                  <!-- Title -->
                  <header class="text-center mb-7">
                    <h2 class="h4 mb-0">Recover Password.</h2>
                    <p>Enter your email address and an email with instructions will be sent to you.</p>
                  </header>
                  <!-- End Title -->

                  <!-- Form Group -->
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="recoverEmail">Your email</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="recoverEmailLabel">
                            <span class="fas fa-user"></span>
                          </span>
                        </div>
                        <input type="email" class="form-control" name="email" id="recoverEmail" placeholder="Your email" aria-label="Your email" aria-describedby="recoverEmailLabel" required
                               data-msg="Please enter a valid email address."
                               data-error-class="u-has-error"
                               data-success-class="u-has-success">
                      </div>
                    </div>
                  </div>
                  <!-- End Form Group -->

                  <div class="mb-2">
                    <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Recover Password</button>
                  </div>

                  <div class="text-center mb-4">
                    <span class="small text-muted">Remember your password?</span>
                    <a class="js-animation-link small" href="javascript:;"
                       data-target="#login"
                       data-link-group="idForm"
                       data-animation-in="slideInUp">Login
                    </a>
                  </div>
                </div>
                <!-- End Forgot Password -->
              </form>
            </div>
          </div>
          <!-- End Content -->
        </div>

        <!-- Footer -->
        <footer id="SVGwaveWithDots" class="svg-preloader u-sidebar__footer u-sidebar__footer--account">
          <ul class="list-inline mb-0">
            <li class="list-inline-item pr-3">
              <a class="u-sidebar__footer--account__text" href="../pages/privacy.html">Privacy</a>
            </li>
            <li class="list-inline-item pr-3">
              <a class="u-sidebar__footer--account__text" href="../pages/terms.html">Terms</a>
            </li>
            <li class="list-inline-item">
              <a class="u-sidebar__footer--account__text" href="../pages/help.html">
                <i class="fas fa-info-circle"></i>
              </a>
            </li>
          </ul>

          <!-- SVG Background Shape -->
          <div class="position-absolute right-0 bottom-0 left-0">
            <img class="js-svg-injector" src="/assets/svg/components/wave-bottom-with-dots.svg" alt="Image Description"
                   data-parent="#SVGwaveWithDots">
          </div>
          <!-- End SVG Background Shape -->
        </footer>
        <!-- End Footer -->
      </div>
    </div>
  </aside>
  <!-- End Account Sidebar Navigation -->
  <!-- ========== END SECONDARY CONTENTS ========== -->

  <!-- Go to Top -->
  <a class="js-go-to u-go-to" href="#"
    data-position='{"bottom": 15, "right": 15 }'
    data-type="fixed"
    data-offset-top="400"
    data-compensation="#header"
    data-show-effect="slideInUp"
    data-hide-effect="slideOutDown">
    <span class="fas fa-arrow-up u-go-to__inner"></span>
  </a>
  <!-- End Go to Top -->

    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
