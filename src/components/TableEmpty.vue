<template>
  <div>
    <div class="table-top">
      <v-container fluid>
        <v-row>
          <v-col cols="6" class="pl-0 flex-column">
            <p class="table-top__title">Title</p>
            <p class="table-top__count">Total number: {{ count }}</p>
          </v-col>
          <v-col cols="6" class="pr-0 d-flex justify-end align-center">
            <v-btn color="deep-purple accent-4" class="mr-4" depressed outlined>
              <v-icon color="deep-purple accent-4"> mdi-cached </v-icon>
            </v-btn>
            <btn
              titleBtn="Add"
              @click="onAdd"
              icon="mdi-plus"
              colorBtn="deep-purple accent-4"
              colorIcon="deep-purple accent-4"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-data-table
      :headers="headers"
      :items="items"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      sort-by="calories"
      class="table"
      @page-count="pageCount = $event"
    >
      <template v-slot:[`item.calories`]="{ item }">
        <v-chip dark :color="getColor(item.calories)">{{
          item.calories
        }}</v-chip>
      </template>
      <template v-slot:[`item.actions`]>
        <v-icon small class="mr-2" @click="onEdit"> mdi-pencil </v-icon>
        <v-menu offset-x left nudge-top="50%" nudge-left="10px">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" small @click="deleteItem">
              mdi-close
            </v-icon>
          </template>
          <delete-item @close="dialogDelete = false" />
        </v-menu>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogCreate" max-width="500px">
      <create-item title="Add title" @close="close" />
    </v-dialog>
    <v-dialog v-model="dialogEdit" max-width="500px">
      <edit-item title="Edit title" @close="close" />
    </v-dialog>

    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        color="deep-purple accent-4"
        v-if="items.length > 5"
        circle
      />
    </div>
  </div>
</template>
<script>
import btn from "./ui/Btn.vue";
import createItem from "./ui/CreateItem.vue";
import editItem from "./ui/EditItem.vue";
import deleteItem from "./ui/DeleteItem.vue";
export default {
  components: { createItem, editItem, deleteItem, btn },
  data() {
    return {
      page: 1,
      pageCount: 0,
      dialogCreate: false,
      dialogEdit: false,
      dialogDelete: false,
    };
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    getColor(calories) {
      if (calories < 100) {
        return "red";
      } else if (calories > 200 && calories < 300) {
        return "deep-purple accent-4";
      } else return "green";
    },
    onAdd() {
      this.dialogCreate = true;
      this.$emit("add");
    },
    onEdit() {
      this.dialogEdit = true;
      this.$emit("edit");
    },
    close() {
      this.dialogCreate = false;
      this.dialogEdit = false;
    },
    deleteItem() {
      this.dialogDelete = false;
      this.$emit("deleteItem");
    },
  },
};
</script>
<style lang="scss">
.table {
  &-top {
    margin-bottom: 20px;
    &__title {
      font-weight: bold;
      font-size: 30px;
      line-height: 26px;
      color: #111421;
      margin-bottom: 17px !important;
    }
    &__count {
      font-size: 16px;
      line-height: 12px;
      letter-spacing: 0.045em;
      color: #4e5471;
    }
  }
}
</style>
