<template>
  <div>
    <hr>
    <h2>All Employees List</h2><br>
    <span>{{ vastus1 }}</span>
    <br><br>
    <button v-on:click="addEmployee()">Add Employee</button>
    <br>
    <input v-model="search">
    <button v-on:click="getAllEmployees()">Search</button>
    <table>
      <tr v-show="allEmployees.length>0">
        <th v-on:click="orderBy('id')">ID</th>
        <th v-on:click="orderBy('first_name')">Firstname</th>
        <th v-on:click="orderBy('last_name')">Lastname</th>
        <th v-on:click="orderBy('position')">Position</th>
        <th v-on:click="orderBy('address')">Address</th>
      </tr>
      <tr v-for="row in allEmployees">
        <td v-for="cell in row">{{ cell }}</td>
        <td>
          <button v-on:click="edit(row.id)">Change</button>
          <button v-on:click="deleteEmployee(row.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data: function () {
    return {
      vastus: "",
      vastus1: "",
      allEmployees: "",
      employeeId: "",
      employeeIdmuuda: "",
      muudaEmployee: {},
      search: "",
      orderByField: "",
    }
  },
  methods: {
    getAllEmployees: function () {
      this.$http.get('/employeeapi/workers', {
        params: {search: this.search, orderBy: this.orderByField}
      })
          .then(response => {
            this.allEmployees = response.data
          })
    },
    deleteEmployee: function (id) {
      this.$http.delete('/employeeapi/workers/' + id)
          .then(response => {
            this.vastus1 = response.data
            this.getAllEmployees()
          })
    },
    edit: function (id) {
      router.push({name: 'EditEmployees', params: {id: id}});
    },
    addEmployee: function () {
      router.push({name: 'AddEmployee'});
    },
    orderBy: function (field) {
      this.orderByField = field
      this.getAllEmployees()
    },
  },
  mounted() {
    this.getAllEmployees();
  }
}
</script>

<style>

</style>