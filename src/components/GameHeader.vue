<template>
  <div>
    <header class="header-container">
      <h1 class="title">2048</h1>
      <a href="javascript:;" class="button" @click="newGame">New Game</a>
      <p class="score">score: <span>{{score}}</span></p>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: 0
    }
  },
  methods: {
    newGame () {
      console.log('newGame')
    }
  }
}
</script>

<style lang="scss" src="../assets/scss/gameHeader.scss"></style>
