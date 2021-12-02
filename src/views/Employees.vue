<template>
  <div>
    <hr>
    <h2>All Employees List</h2><br>
    <span>{{ vastus1 }}</span>
    <br><br>
    <button v-on:click="addEmployee()">Add Employee</button>
    <table>
      <tr v-show="allEmployees.length>0">
        <th>ID</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Position</th>
        <th>Address</th>
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
    }
  },
  methods: {
    getAllEmployees: function () {
      this.$http.get('/employeeapi/workers')
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
    }
  },
  mounted() {
    this.getAllEmployees();
  }
}
</script>

<style>

</style>