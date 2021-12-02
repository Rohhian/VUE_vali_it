<template>
  <div>
    <!--    <input v-model="email" placeholder="enter your email"/>-->
    <!--    {{ email }}-->
    <!--    <button v-on:click="register()">Registreeri</button>-->
    <br>
    <button v-on:click="getData()">Get Data</button>
    <br>
    <table>
      <tr v-for="row in allAccounts">
        <td v-for="cell in row">{{ cell }}</td>
      </tr>
      <br>
<!--      {{ allAccounts[3].firstName }}-->
    </table>

  </div>
</template>


<script>
export default {
  data: function () {
    return {
      allAccounts: {}
    }
  },
  methods: {
    getData: function () {
      this.$http.get('api/lesson4/bank/listAll')
          .then(response => {
            this.allAccounts = response.data
          })
    }
  }
}


</script>
