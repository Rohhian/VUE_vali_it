<template>
  <div class="about">
    <hr>
    <div id="minmax">
      <h2>Min Max</h2>
      <input v-model.number="a" placeholder="nr1"> <input v-model.number="b" placeholder="nr2">
      <button v-on:click="min()">Min</button>
      <button v-on:click="max()">Max</button>
      <br>
      Min: {{ minAnswer }}<br>
      Max: {{ maxAnswer }}
    </div>

    <div id="second">
      <h2>isEven Abs Fibonacci</h2>
      <input v-model.number="c" placeholder="nr">
      <button v-on:click="isEven()">isEven</button>
      <button v-on:click="abs()">Abs</button>
      <button v-on:click="fibonacci()">Fibonacci</button>
      <br>
      {{ isEvenAnswer }}<br>
      Abs: {{ absAnswer }}<br>
      Fibonacci: {{ fiboAnswer }}
    </div>

    <div id="minmax3">
      <h2>Min3 Max3</h2>
      <input v-model.number="d" placeholder="nr1">
      <input v-model.number="e" placeholder="nr2">
      <input v-model.number="f" placeholder="nr3">
      <button v-on:click="min3()">Min3</button>
      <button v-on:click="max3()">Max3</button>
      <br>
      Vastus: {{ min3Answer }}<br>
      Vastus: {{ max3Answer }}
    </div>
    <hr>
    <h2>Arrays</h2>
    <input v-model.number="g" placeholder="nr">
    <button v-on:click="genArr()">Generate Array</button>
    <button v-on:click="decArr()">Decreasing Array</button>
    <button v-on:click="yl3()">Yl3</button>
    <button v-on:click="firstN()">FirstN</button>
    <br>
    <!--    generate array: {{ genAnswer }}<br>-->
    <!--    decreasing array: {{ decAnswer }}<br>-->
    <!--    yl3: {{ yl3Answer }}<br>-->
    <!--    firstN: {{ firstNAnswer }}-->
    <table>
      <tr>
        <th>number</th>
      </tr>
      <tr v-for="row in answerArray">
        <td>{{ row }}</td>
      </tr>
    </table>

    <hr>
    <h2>Multiply Table</h2>
    <input v-model.number="arv1" placeholder="nr1">
    <input v-model.number="arv2" placeholder="nr2">
    <button v-on:click="multiTable()">Multiply Table</button>
    <br><br>
    <table>
      <tr v-for="row in responseArray">
        <td v-for="cell in row">{{ cell }}</td>
      </tr>
    </table>
    <br>
    <hr>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "",
      minAnswer: "",
      maxAnswer: "",
      isEvenAnswer: "",
      max3Answer: "",
      min3Answer: "",
      absAnswer: "",
      fiboAnswer: "",
      genAnswer: "",
      decAnswer: "",
      yl3Answer: "",
      firstNAnswer: "",
      answerArray: [],
      arv1: "",
      arv2: "",
      // array1: [],
      // array2: [],
      responseArray: [],
    }
  },
  methods: {
    min: function () {
      if (this.a < this.b) {
        this.minAnswer = this.a;
      } else {
        this.minAnswer = this.b;
      }
    },
    max: function () {
      if (this.a > this.b) {
        this.maxAnswer = this.a;
      } else {
        this.maxAnswer = this.b;
      }
    },
    isEven: function () {
      if (this.c % 2 == 0) {
        this.isEvenAnswer = "see on paarisarv";
      } else {
        this.isEvenAnswer = "see ei ole paarisarv";
      }
    },
    max3: function () {
      if (this.d >= this.e && this.a >= this.f) {
        this.max3Answer = this.d
      } else if (this.e >= this.d && this.e >= this.f) {
        this.max3Answer = this.e
      } else {
        this.max3Answer = this.f
      }
    },
    min3: function () {
      if (this.d <= this.e && this.d <= this.f) {
        this.min3Answer = this.d
      } else if (this.e <= this.d && this.e <= this.f) {
        this.min3Answer = this.e
      } else {
        this.min3Answer = this.f
      }
    },
    abs: function () {
      if (this.c < 0) {
        this.c = 0 - this.c;
        this.absAnswer = this.c;
      } else {
        this.absAnswer = this.c;
      }
    },
    fibonacci: function () {
      let theSum = 0;
      let number1 = 0;
      let number2 = 1;
      for (let i = 0; i < this.c; i++) {
        theSum = number1 + number2;
        number1 = number2;
        number2 = theSum;
      }
      this.fiboAnswer = number1;
    },
    genArr: function () {
      this.answerArray = []
      for (let i = 0; i < this.g; i++) {
        this.answerArray[i] = i + 1
      }
    },
    decArr: function () {
      if (this.g >= 0) {
        let uusArray = [this.g + 1];
        for (let i = this.g; i >= 0; i--) {
          uusArray[i] = this.g - i;
        }
        this.answerArray = uusArray;

      } else {
        let uusArray2 = [Math.abs(this.g - 1)];
        for (let i = Math.abs(this.g); i >= 0; i--) {
          uusArray2[i] = this.g + i;
        }
        this.answerArray = uusArray2;
      }
    },
    yl3: function () {
      let uusArray = [];
      for (let i = 0; i < this.g; i++) {
        uusArray[i] = 3;
      }
      this.answerArray = uusArray;
    },
    firstN: function () {
      let uusArray = [];
      for (let i = 0; i < this.g; i++) {
        uusArray[i] = i + 1;
      }
      this.answerArray = uusArray;
    },
    multiTable: function () {
      let array2 = [];
      for (let i = 1; i <= this.arv1; i++) {
        let array1 = [];
        for (let j = 1; j <= this.arv2; j++) {
          let tmp = i * j;
          array1[j - 1] = tmp;
        }
        array2[i - 1] = array1;
      }
      this.responseArray = array2;
    }
  }
}

</script>

<style>
#minmax {
  background-color: cadetblue;
}

#second {
  background-color: coral;
}

#minmax3 {
  background-color: orange;
}

table {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}

th {
  border: 1px solid black;
}

td {
  border: 1px solid black;
}

</style>