<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row
        slot-scope="{ item }"
        v-on:click="onSelect(item)"
        slot="md-table-row"
      >
        <md-table-cell md-label="UserID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
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
      users: "users/users"
    })
  },
  methods: {
    onSelect: function(item) {
      console.log(item);
      var { dispatch } = this.$store;
      dispatch("users/setSelectedUser", { item });
    }
  },
  data() {
    return {
      selected: []
    };
  }
};
</script>
