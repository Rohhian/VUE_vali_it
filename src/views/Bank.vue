<template>
  <div>
    <hr>
    <h1>The Bank</h1>
    <br>
    <input v-model="accountNr" placeholder="account nr"/>
    <br>
    <button v-on:click="getBalance()">Get Account Balance</button>
    <button v-on:click="getAccInfo()">Get Account Info</button>
    <!--    <button v-on:click="getLockStatus()">Get Account LockStatus</button>-->
    <br>
    account balance is: {{ balance }}
    <br>
    {{ lockstatus }}
    <br>
    {{ vastus5 }}
    <br>
    <input v-model="looClient.first_name" placeholder="firstname"/>
    <input v-model="looClient.last_name" placeholder="lastname"/>
    <input v-model="looClient.address" placeholder="address"/>
    <button v-on:click="createClient()">Create Client</button>
    <br>{{ vastus }}
    <br>
    <input v-model="looAccount.account_nr" placeholder="account nr"/>
    <input v-model="looAccount.client_id" placeholder="client ID"/>
    <button v-on:click="createAccount()">Create Account</button>
    <br>{{ vastus2 }}
    <br>
    <input v-model="accountNum" placeholder="account nr"/>
    <input v-model="amount" placeholder="amount"/>
    <button v-on:click="deposit()">Deposit</button>
    <button v-on:click="withdraw()">Withdraw</button>
    <br>{{ vastus3 }}
    <br>
    <input v-model="transferFROM" placeholder="accountFROM"/>
    <input v-model="transferTO" placeholder="accountTO"/>
    <input v-model="transferAMOUNT" placeholder="amount"/>
    <button v-on:click="transfer()">Transfer</button>
    <br>{{ vastus4 }}
    <br>
    <button v-on:click="getAllAccounts()">Get All Accounts</button>
    <button v-on:click="getAllTrans()">Get All Transactions</button>
    <br><br>
    <hr>
    <table>
      <tr v-show="allAccounts.length>0">
        <th>ClientID</th>
        <th>AccountNR</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Address</th>
        <th>Balance</th>
        <th>LockStatus</th>
      </tr>
      <tr v-for="row in allAccounts">
        <td v-for="cell in row">{{ cell }}</td>
        <td>
          <button id="lock" v-on:click="lock(row.accountNr)">Lock</button>
          <button id="unlock" v-on:click="unlock(row.accountNr)">Unlock</button>
          <button v-on:click="getTransHist(row.accountNr)">Transaction History</button>
          <button v-on:click="deleteAccount(row.clientId)">Delete Client if Any Null</button>
        </td>
      </tr>

    </table>
    <hr>
    <table>
      <tr v-show="accTransHist.length>0">
        <th>TransactionID</th>
        <th>AccountNR</th>
        <th>Deposit</th>
        <th>Withdraw</th>
        <th>AccountFROM</th>
        <th>AmountIN</th>
        <th>AccountTO</th>
        <th>AmountOUT</th>
      </tr>
      <tr v-for="row in accTransHist">
        <td v-for="cell in row">{{ cell }}</td>
      </tr>
      <tr v-show="accInfo.length>0">
        <th>ClientID</th>
        <th>Account NR</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Address</th>
        <th>Balance</th>
        <th>LockStatus</th>
      </tr>
      <tr v-for="row in accInfo">
        <td v-for="cell in row">{{ cell }}</td>
      </tr>
      <tr v-show="allTransInfo.length>0">
        <th>TransactionID</th>
        <th>AccountNR</th>
        <th>Deposit</th>
        <th>Withdraw</th>
        <th>AccountFROM</th>
        <th>AmountIN</th>
        <th>AccountTO</th>
        <th>AmountOUT</th>
      </tr>
      <tr v-for="row in allTransInfo">
        <td v-for="cell in row">{{ cell }}</td>
      </tr>
    </table>
    <br><br>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      allAccounts: {},
      balance: "",
      accountNr: "",
      accountNum: "",
      transferFROM: "",
      transferTO: "",
      transferAMOUNT: "",
      lockstatus: "",
      deletestatus: "",
      accInfo: {},
      allTransInfo: {},
      accTransHist: {},
      looClient: {},
      looAccount: {},
      vastus: "",
      vastus2: "",
      vastus3: "",
      vastus4: "",
      vastus5: "",
      amount: "",
      firstName: "",
      lastName: "",

    }
  },
  methods: {
    getAllAccounts: function () {
      this.$http.get('api/lesson4/bank/listAll')
          .then(response => {
            // this.accInfo = []
            // this.allTransInfo = []
            // this.accTransHist = []
            this.allAccounts = response.data
          })
    },
    getBalance: function () {
      this.$http.get('api/lesson4/bank/' + this.accountNr)
          .then(response => {
            this.balance = response.data
          })
    },
    // getLockStatus: function () {
    //   this.$http.get('api/lesson4/bank/lock/' + this.accountNr)
    //       .then(response => {
    //         this.lockstatus = response.data
    //         if (this.lockstatus) {
    //           this.lockstatus = "Account is Locked"
    //         }
    //         if (!this.lockstatus) {
    //           this.lockstatus = "Account is Unlocked"
    //         }
    //       })
    // },
    getAccInfo: function () {
      this.$http.get('api/lesson4/bank/getAccInfo/' + this.accountNr)
          .then(response => {
            // this.allAccounts = []
            this.allTransInfo = []
            this.accTransHist = []
            this.accInfo = response.data
          })
          .catch(error => {
            this.vastus5 = error.response.data.message
          })
    },
    getAllTrans: function () {
      this.$http.get('api/lesson4/bank/listAllTransactions')
          .then(response => {
            // this.allAccounts = []
            this.accInfo = []
            this.accTransHist = []
            this.allTransInfo = response.data
          })
    },
    getTransHist: function (id) {
      this.$http.get('api/lesson4/bank/getTransInfo/' + id)
          .then(response => {
            // this.allAccounts = []
            this.accInfo = []
            this.allTransInfo = []
            this.accTransHist = response.data
          })
    },
    createClient: function () {
      this.$http.post('api/lesson4/bank/createClient', this.looClient)
          .then(response => {
            this.vastus = response.data
          })
    },
    createAccount: function () {
      this.$http.post('api/lesson4/bank/createAccount', this.looAccount)
          .then(response => {
            this.vastus2 = response.data
          })
    },
    deposit: function () {
      this.$http.post('api/lesson4/bank/deposit/' + this.accountNum + '/' + this.amount)
          .then(response => {
            this.vastus3 = response.data
          })
    },
    withdraw: function () {
      this.$http.post('api/lesson4/bank/withdraw/' + this.accountNum + '/' + this.amount)
          .then(response => {
            this.vastus3 = response.data
          })
    },
    transfer: function () {
      this.$http.post('api/lesson4/bank/transfer/' + this.transferFROM + '/' + this.transferTO + '/' + this.transferAMOUNT)
          .then(response => {
            this.vastus4 = response.data
          })
    },
    lock: function (lockid) {
      this.$http.post('api/lesson4/bank/lock/' + lockid)
          .then(response => {
            this.lockstatus = response.data
            this.getAllAccounts()
          })
    },
    unlock: function (unlockid) {
      this.$http.post('api/lesson4/bank/unlock/' + unlockid)
          .then(response => {
            this.lockstatus = response.data
            this.getAllAccounts()
          })
    },
    deleteAccount: function (id) {
      this.$http.delete('api/lesson4/bank/delete/' + id)
          .then(response => {
            this.deletestatus = response.data
            this.getAllAccounts()
          })
    }
  },
  mounted() {
    this.getAllAccounts();
  }
}

</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-collapse: collapse
}

tr {
  border-bottom: 1px solid black;
}

th {
  padding-left: 6px;
  padding-right: 6px;
}

#lock {
  background-color: red;
}

#unlock {
  background-color: green;
}
</style>