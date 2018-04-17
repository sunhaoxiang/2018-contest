<template>
  <div class="body-container">
    <div class="grid-container">
      <grid-cell v-for="(cellPosition, index) of cellPositionList" :cellPosition="cellPosition" :key="index"></grid-cell>
    </div>
  </div>
</template>

<script>
const GridCell = () => import('@/components/GridCell')

export default {
  components: {
    GridCell
  },
  data () {
    return {
      board: [],
      cellPositionList: []
    }
  },
  methods: {
    // 初始化游戏
    newGame () {
      this.init()
    },
    // 初始化游戏
    init () {
      this.cellPositionList = []
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          this.cellPositionList.push({
            top: 20 + i * 120,
            left: 20 + j * 120
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" src="../assets/scss/gameBody.scss"></style>
