<template>
  <div class="body-container">
    <div class="grid-container">
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
      <grid-cell></grid-cell>
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
      board: []
    }
  },
  methods: {
    // 初始化游戏
    init () {
      console.log('newGame')
    }
  }
}
</script>

<style lang="scss" src="../assets/scss/gameBody.scss"></style>
