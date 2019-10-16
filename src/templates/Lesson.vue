<template>
  <div class="w-md-75 w-lg-60 space-1 mx-md-auto lesson">
    <div v-html="$page.lesson.content">
    </div>
    <g-link to="https://www.youtube.com/channel/UCOnioSzUZS-ZqsRnf38V2nA?sub_confirmation=1">
      Subscribe to our YouTube channel
    </g-link>
      or follow
    <g-link to="https://twitter.com/intent/user?screen_name=devopslibrary">
      DevOpsLibrary on Twitter
    </g-link>.
  </div>
</template>

<page-query>
query Lesson ($path: String!) {
  lesson: lesson (path: $path) {
    title
    content
  }
}
</page-query>
<style>
  .shiki {
    border-radius: 8px;
    padding: 15px;
  }
  .shiki-inline {
    border-radius: 8px;
    padding: 5px;
  }
  .lesson img {
    max-width:100%;
    max-height:100%;
    border: #62b562 3px solid;
  }
</style>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.lesson.title
    };
  }
};
</script>
