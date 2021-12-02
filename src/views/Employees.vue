<template>
  <div>
    <hr>
    <h1>Employees</h1>
    <br>
    <br>
    <input v-model="looEmployee.first_name" placeholder="firstname"/>
    <input v-model="looEmployee.last_name" placeholder="lastname"/>
    <input v-model="looEmployee.position" placeholder="position"/>
    <input v-model="looEmployee.address" placeholder="address"/>
    <button v-on:click="createEmployee()">Create Employee</button>
    <br><br>
    <!--    <button v-on:click="getAllEmployees()">Get All Employees</button>-->
    <!--    <br><br>-->
    <!--    <input v-model="employeeId" placeholder="employee id"/>-->
    <!--    <button v-on:click="getEmployee()">Show Employee</button>-->
    <!--    <button v-on:click="deleteEmployee()">Delete Employee</button>-->
    <br>
    <br>
    <!--    <table>-->
    <!--      <tr>-->
    <!--        <th>ID</th>-->
    <!--        <th>Firstname</th>-->
    <!--        <th>Lastname</th>-->
    <!--        <th>Position</th>-->
    <!--        <th>Address</th>-->
    <!--      </tr>-->
    <!--      <tr>-->
    <!--        <td>{{ showEmployee.id }}</td>-->
    <!--        <td>{{ showEmployee.first_name }}</td>-->
    <!--        <td>{{ showEmployee.last_name }}</td>-->
    <!--        <td>{{ showEmployee.position }}</td>-->
    <!--        <td>{{ showEmployee.address }}</td>-->
    <!--      </tr>-->
    <!--    </table>-->
    <!--    <br><br>-->
    <hr>
    <h2>All Employees List</h2><br>
    <span>{{ vastus1 }}</span>
    <br><br>
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
      looEmployee: {},
      allEmployees: "",
      showEmployee: "",
      employeeId: "",
      employeeIdmuuda: "",
      muudaEmployee: {},
    }
  },
  methods: {
    getAllEmployees: function () {
      this.$http.get('/employeeapi/workers')
          .then(response => {
            this.showEmployee = []
            this.allEmployees = response.data
          })
    },
    createEmployee: function () {
      this.$http.post('/employeeapi/workers', this.looEmployee)
          .then(response => {
            this.vastus1 = response.data
            this.getAllEmployees()
          })
    },
    // getEmployee: function () {
    //   this.$http.get('/employeeapi/workers/' + this.employeeId)
    //       .then(response => {
    //         this.showEmployee = response.data
    //       })
    // },
    deleteEmployee: function (id) {
      this.$http.delete('/employeeapi/workers/' + id)
          .then(response => {
            this.vastus1 = response.data
            this.getAllEmployees()
          })
    },
    edit: function (id) {
      router.push({name: 'EditEmployees', params: {id: id}});
    }
  },
  mounted() {
    this.getAllEmployees();
  }
}
</script>

<style>

</style>