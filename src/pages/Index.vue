<template>
  <div>
    <HeroSection />
      <!-- Blog Listing Section -->
      <div class="container space-2 space-bottom-lg-3">
        <div class="row">
          <div class="col-md-7 col-lg-8 mb-7 mb-md-0">

            <!-- Start Blog Card -->
            <article class="card shadow mb-5" v-for="edge in $page.allLesson.edges" :key="edge.node.id">
              <a v-bind:href="edge.node.permalink">
                <img class="card-img-top" v-bind:src="'/assets/img/coverart/' + edge.node.coverart" alt="Image Description">
              </a>
              <div class="card-body p-5">
                <a class="d-inline-block text-secondary font-weight-medium text-uppercase small mb-2" href="#">{{ edge.node.category }}</a>

                <h2 class="h5 font-weight-medium">
                  <a v-bind:href="edge.node.permalink">{{ edge.node.title }}</a>
                </h2>

                <p>{{ edge.node.excerpt }}</p>

                <div class="media align-items-center pt-5">
                  <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle" title="Samantha Ventura">
                    <img class="img-fluid rounded-circle" src="/assets/img/authors/samantha.jpeg" alt="Samantha Ventura">
                  </div>
                  <div class="u-sm-avatar u-sm-avatar--bordered rounded-circle ml-n2" title="Ken Erwin">
                    <img class="img-fluid rounded-circle" src="/assets/img/authors/ken.jpeg" alt="Ken Erwin">
                  </div>
                  <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                    {{ edge.node.date | formatDate }}
                  </div>
                </div>
              </div>
            </article>
            <!-- End Blog Card -->

            <div class="space-bottom-2"></div>

            <!-- Pagination -->
            <nav aria-label="Page navigation">
              <Pager :info="$page.allLesson.pageInfo"/>
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

          <div id="stickyBlockStartPoint" class="col-md-5 col-lg-4" style="position: -webkit-sticky;
  position: sticky; top: 30px; height: 100vh;">
            <div class="js-sticky-block pl-lg-4">
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
    <SubscribeSection />
  </div>
</template>

<page-query>
   query LessonQuery ($page: Int) {
    allLesson(perPage: 10, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
          category
          difficulty
          excerpt
          date
          coverart
          permalink
        }
      }
    }
  }
</page-query>

<script>
  import HeroSection from "@/components/ui/HeroSection";
  import SubscribeSection from "../components/ui/SubscribeSection";
  import { Pager } from 'gridsome'

  export default {
    metaInfo: {
      title: 'Hello, world!'
    },
    components: {
      HeroSection,
      SubscribeSection,
      Pager
    }
  }
</script>
