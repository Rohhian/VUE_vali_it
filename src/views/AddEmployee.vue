<template>
  <div>
    Firstname: <input v-model="looEmployee.first_name" placeholder="firstname"> <br>
    Lastname: <input v-model="looEmployee.last_name" placeholder="lastname"> <br>
    Position: <input v-model="looEmployee.position" placeholder="position"> <br>
    Address: <input v-model="looEmployee.address" placeholder="address"> <br>
    <button v-on:click="createEmployee()">Create Employee</button>
    <br>
  </div>
</template>

<script>

import router from "@/router";

export default {
  data: function () {
    return {
      looEmployee: {},
      vastus1: "",
    }
  },
  methods: {
    createEmployee: function () {
      this.$http.post('/employeeapi/workers', this.looEmployee)
          .then(response => {
            this.vastus1 = response.data
            router.push({name: 'Employees'})
          })
    },
  }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}
</style>