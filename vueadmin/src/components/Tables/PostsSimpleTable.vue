<template>
  <div>
    <!-- <md-table v-model="posts" :table-header-color="tableHeaderColor">
      <md-table-row
        slot-scope="{ item }"
        v-on:click="onSelect(item)"
        slot="md-table-row"
      >
        <md-table-cell md-label="PostID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
      </md-table-row>
    </md-table> -->
        <mdb-datatable
        :data="data"
        striped
        bordered
        materialInputs
        responsive
        focus
        @selectRow="onSelect"
      />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mdbDatatable } from "mdbvue";
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  components: {
    mdbDatatable
  },
  computed: {
    ...mapGetters({
      posts: "posts/posts"
    })
  },
  created() {
    this.data.rows = this.posts;
  },
  methods: {
    onSelect: function(item) {
      var { dispatch } = this.$store;
      dispatch("posts/setSelectedPost", { item: this.posts[item] });
    }
  },
  data() {
    return {
      selected: [],

      data: {
          columns: [
            {
              label: 'PostID',
              field: 'id',
              sort: 'asc'
            },
            {
              label: 'Title',
              field: 'title',
              sort: 'asc'
            }           
          ]
      }
    };
  }
};
</script>
