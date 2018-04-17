<template>
  <div>
    <game-header @on-new-game="newGameHandler"></game-header>
    <game-body ref="gamebody"></game-body>
  </div>
</template>

<script>
import GameHeader from '@/components/GameHeader'
import GameBody from '@/components/GameBody'

export default {
  components: {
    GameHeader,
    GameBody
  },
  data () {
    return {
    }
  },
  mounted () {
    // 进入页面时将游戏初始化
    this.newGameHandler()
  },
  methods: {
    // 接收game-header组件传来的点击事件，将游戏初始化
    newGameHandler () {
      this.$refs.gamebody.newGame()
    }
  }
}
</script>
