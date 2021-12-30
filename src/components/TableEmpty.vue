<template>
  <div>
    <div class="table-top">
      <v-container fluid>
        <v-row>
          <v-col cols="6" class="pl-0 d-flex flex-column justify-center">
            <p class="table-top__title" v-if="titleHide">{{ title }}</p>
            <p class="table-top__count">Total number: {{ count }}</p>
          </v-col>
          <v-col cols="6" class="pr-0 d-flex justify-end align-center">
            <v-btn
              @click="$emit('reboot')"
              color="primary"
              class="mr-4"
              depressed
              outlined
            >
              <v-icon color="primary"> mdi-cached </v-icon>
            </v-btn>
            <btn
              titleBtn="Add"
              @click="onAdd"
              icon="mdi-plus"
              colorBtn="primary"
              colorIcon="primary"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="table-inner">
      <v-data-table
        :headers="headers"
        :items="items"
        :sort-by="sortBy"
        :loading="loading"
        :page.sync="page"
        hide-default-footer
        class="table"
        @page-count="pageCount = $event"
      >
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
        <template v-slot:[`item.eye`]="{ item }">
          <v-btn
            :to="`/family/user/${item.id}`"
            class="mx-2"
            fab
            elevation="0"
            small
            color="transparent"
          >
            <v-icon color="primary"> mdi-eye </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </div>
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
        color="primary"
        v-if="items.length > 5"
        circle
        next-icon="mdi-chevron-right"
        prev-icon="mdi-chevron-left"
      />
    </div>
  </div>
</template>
<script>
import btn from "./ui/Btn.vue";
import createItem from "./ui/CreateItem.vue";
import editItem from "./ui/EditItem.vue";
// import deleteItem from "./ui/DeleteItem.vue";
export default {
  components: { createItem, editItem, btn },
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
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "Title",
    },
    titleHide: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    sortBy: {
      type: String,
      default: "",
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
.v-data-table > .v-data-table__wrapper > table {
  border-radius: 18px;
  overflow: hidden !important;
  border: 1.5px solid rgba(#9575cd, 0.5) !important;
  margin: -4px;

  overflow: hidden;
}
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
      font-weight: 600;
      font-size: 16px;
      line-height: 12px;
      letter-spacing: 0.045em;
      color: #4e5471;
    }
  }
}
</style>
