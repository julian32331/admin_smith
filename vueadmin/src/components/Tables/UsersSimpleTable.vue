<template>
  <div>
    <!-- <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row
        slot-scope="{ item }"
        v-on:click="onSelect(item)"
        slot="md-table-row"
      >
        <md-table-cell md-label="UserID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
      </md-table-row>

      <md-table-pagination
        :md-size="limit"
        :md-page="offset + 1"
        :md-total="counts"
        md-label="Rows"
        md-separator="of"
        :md-page-options="[5, 10, 25, 50]"
        @pagination="onPagination"
      >
      </md-table-pagination>
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
  components: {
    mdbDatatable
  },
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
  created() {
    this.counts = this.users.length;
    this.data.rows = this.users;
  },
  methods: {
    onSelect: function(item) {
      var { dispatch } = this.$store;
      dispatch("users/setSelectedUser", { item: this.users[item] });
    },
    onPagination(pagination) {
      console.log("pagination", pagination);
      if (pagination) {
        this.limit = pagination.size;
        this.offset = (pagination.page - 1) * this.limit;
      }
    }
  },
  data() {    
    return {
      selected: [],

      counts: 4,
      limit: 5,
      offset: 0,
    
      data: {
          columns: [
            {
              label: 'UserID',
              field: 'id',
              sort: 'asc'
            },
            {
              label: 'Name',
              field: 'name',
              sort: 'asc'
            }           
          ]
      }
    };
  }
};
</script>
