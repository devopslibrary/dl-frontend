<template>
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
                <input type="email" class="form-control" name="email" id="subscribeSr" placeholder="Your email"
                       aria-label="Your email">
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
</template>

<script>
    export default {
        name: "SubscribeSection.vue"
    }
</script>

<style scoped>

</style>
