<template>
  <div>
    <table-empty
      :headers="headers"
      :items="desserts"
      :itemsPerPage="7"
      :count="desserts.length"
    />
    <table-empty
      :headers="lokoHeaders"
      :items="lokoItems"
      :itemsPerPage="4"
      :count="lokoItems.length"
      @add="onAdd"
      @edit="onEdit"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import TableEmpty from "../components/TableEmpty.vue";
export default {
  name: "Home",
  components: { TableEmpty },
  data() {
    return {
      lokoHeaders: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Name",

          value: "name",
        },
        {
          text: "Age",
          value: "age",
        },
      ],
      lokoItems: [
        { id: 1, name: "Ivan", age: 18 },
        { id: 2, name: "Evgen", age: 22 },
        { id: 3, name: "Taras", age: 31 },
        { id: 4, name: "Matvei", age: 33 },
        { id: 5, name: "Goshan", age: 34 },
        { id: 6, name: "Petr", age: 25 },
      ],
      headers: [
        {
          text: "Dessert (100g serving)",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories", align: "center" },
        { text: "Fat (g)", value: "fat", align: "center" },
        { text: "Carbs (g)", value: "carbs", align: "center" },
        { text: "Protein (g)", value: "protein", align: "center" },
        { text: "Iron (%)", value: "iron", align: "center" },
        { text: "", value: "actions", sortable: false, align: "end" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.dialogCreate = true;
    },
    onEdit() {
      this.dialogEdit = true;
    },
    deleteItem() {
      this.dialogDelete = true;
    },
    countItem() {
      return this.lokoItems.length;
    },
  },
};
</script>
