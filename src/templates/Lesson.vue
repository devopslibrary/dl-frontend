<template>
  <Layout>
    <div class="container space-2 space-bottom-lg-3" v-html="$page.lesson.content"/>
  </Layout>
</template>

<page-query>
query Lesson ($path: String!) {
  lesson: lesson (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.lesson.title
    };
  }
};
</script>
