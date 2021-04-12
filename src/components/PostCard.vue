<template>
  <div class="col-md-6 col-lg-4 mb-4 d-flex">
    <div class="card card-shadow">
      <a href="">
        <img class="card-img-top" :src="post.pagemap.cse_image[0].src"/>
      </a>
      <div class="card-body">
        <h5 class="card-title">
          <a class="text-dark" :href="post.link">{{ post.title }}</a>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {type: Object, required: Object}
  },
}
</script>

<style scoped>

</style>
