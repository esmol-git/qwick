<template>
  <div>
    <table-empty
      :headers="headerFamily"
      :items="USERS"
      :titleHide="false"
      :loading="load"
      :count="COUNT"
      sortBy="id"
      @reboot="rebootTable"
      @clickPreview="itemId"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TableEmpty from "../components/TableEmpty.vue";
export default {
  name: "Family",

  components: { TableEmpty },
  data() {
    return {
      load: true,
      headerFamily: [
        { text: "id", value: "id", sortable: true },
        { text: "username", value: "username", align: "center" },
        { text: "firstname", value: "firstName", align: "center" },
        { text: "lastname", value: "lastName", align: "center" },
        { text: "age", value: "age", align: "center" },
        { text: "Country", value: "address.country", align: "center" },
        { text: "", value: "eye", align: "right", sortable: false },
      ],
    };
  },
  methods: {
    ...mapActions(["getUsers"]),
    rebootTable() {
      this.load = true;
      if (this.load) {
        setTimeout(() => ((this.load = false), this.getUsers()), 2000);
      }
    },
    itemId() {
      console.log("hh");
    },
  },
  computed: {
    ...mapGetters(["USERS", "COUNT"]),
  },
  mounted() {
    this.getUsers();
    this.load = false;
  },
};
</script>

<style lang="scss" scoped></style>
