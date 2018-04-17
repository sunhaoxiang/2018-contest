<template>
  <div>
    <header class="header-container">
      <h1 class="title">2048</h1>
      <a href="javascript:;" class="button" @click="clickNewGameBtnhandler">New Game</a>
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
    // 将新游戏按钮点击事件传递给父组件
    clickNewGameBtnhandler () {
      this.$emit('on-new-game')
    }
  }
}
</script>

<style lang="scss" src="../assets/scss/gameHeader.scss"></style>
