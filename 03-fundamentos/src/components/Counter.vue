<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ getSquare }}</p>
  <p data-testid="counter">{{ counter }}</p>

  <div class="test">
    <button @click="increase">+ 1</button>
    <button @click="decrease">- 1</button>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 30,
            validator(value) {
                return value > 100;
            }
        }
    },
  data() {
    return {
      counter: this.start,
    };
  },
  computed: {
    getSquare() {
      console.log("test");
      return this.counter * this.counter;
    },
    customTitle() {
        return this.title || 'Counter';
    }
  },
  methods: {
    increase() {
        this.counter++;
    },
    decrease() {
        this.counter--;
    }
  }
};
</script>

<style>
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
  color: white;
  margin: 0 5px;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>