<template>
  <div>
    Firstname: <input v-model="muudaEmployee.first_name" placeholder=employee.first_name> <br>
    Lastname: <input v-model="muudaEmployee.last_name" placeholder="lastname"> <br>
    Position: <input v-model="muudaEmployee.position" placeholder="position"> <br>
    Address: <input v-model="muudaEmployee.address" placeholder="address"> <br>
    <button v-on:click="changeEmployee()">Save Changes</button>
    <br>

  </div>
</template>

<script>
import router from "@/router";

export default {
  data: function () {
    return {
      muudaEmployee: {},
    }
  },
  methods: {
    changeEmployee: function () {
      this.$http.put('/employeeapi/workers/' + this.$route.params.id, this.muudaEmployee)
          .then(response => {
            this.vastus = response.data
            router.push({name: 'Employees'});
          })
    }
  },
  mounted() {
    this.$http.get('/employeeapi/workers/' + this.$route.params.id)
        .then(response => {
          this.muudaEmployee = response.data
        })
  }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}

</style>