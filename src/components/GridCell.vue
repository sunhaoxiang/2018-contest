<template>
  <div class="grid-cell" :style="{top: `${cellPosition.top}px`, left: `${cellPosition.left}px`}"></div>
</template>

<script>
export default {
  props: {
    cellPosition: {
      type: Object,
      default: () => ({
        top: 20,
        left: 20
      })
    }
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="scss" src="../assets/scss/gridCell.scss"></style>
