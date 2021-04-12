<template>
  <div id="search-app" class="container">
    <!-- Search form section -->
    <div class="m-auto">
      <div class="text-center mt-10">
          <input type="text" v-model="q" class="form-control" placeholder="Search google at here..." aria-label="Recipient's username" aria-describedby="basic-addon2">
          <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"  v-on:click="doSearch()" type="button">Search
          </button>
      </div>
    </div>

    <!-- Search result -->
    <section class="row">
      <PostCard
          v-for="(post,index) in searchResult.items"
          :key="index"
          v-bind:post="post"/>
    </section>
  </div>


</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import PostCard from "@/components/PostCard";
export default {
  name: "SearchGoogle",
  components: {PostCard},
  data(){
    return {
      q: "",
      searchResult: ""
    }
  },
  watch: {
    q: function () {
      console.log(this.q);
      this.debouncedDoSearch()
    }
  },
  created: function () {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedDoSearch = _.debounce(this.doSearch, 500)
  },
  methods: {
    doSearch: function () {
      var app = this
      axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyA-E6jAtsnQpCO6E3xrkdWiWlnFiLZ8Dr8\n&cx=012824193354011438485:0eph-olc3lw&q='+this.q)
          .then(function (response) {
            app.searchResult = response.data;
            console.log(app.searchResult);
          })
          .catch(function (error) {
            console.log(error);
          })
    }

  }
}
</script>

<style scoped>

</style>
