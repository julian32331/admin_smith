<template>
  <div>
    <md-table v-model="posts" :table-header-color="tableHeaderColor">
      <md-table-row
        slot-scope="{ item }"
        v-on:click="onSelect(item)"
        slot="md-table-row"
      >
        <md-table-cell md-label="PostID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters({
      posts: "posts/posts"
    })
  },
  methods: {
    onSelect: function(item) {
      console.log(item);
      var { dispatch } = this.$store;
      dispatch("posts/setSelectedPost", { item });
    }
  },
  data() {
    return {
      selected: []
    };
  }
};
</script>
