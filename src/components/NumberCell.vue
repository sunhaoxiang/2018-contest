<template>
  <div
    v-show="numberPosition.value > 0"
    class="number-cell"
    :style="{
      top: `${numberPosition.top}px`,
      left: `${numberPosition.left}px`,
      backgroundColor: colorMap[numberPosition.value].backgroundColor,
      color: colorMap[numberPosition.value].color
    }">
    {{numberPosition.value}}
  </div>
</template>

<script>
export default {
  props: {
    numberPosition: {
      type: Object,
      default: () => ({
        top: 20,
        left: 20,
        value: 0
      })
    }
  },
  data () {
    return {
      colorMap: {
        0: {
          backgroundColor: '#fff',
          color: '#fff'
        },
        2: {
          backgroundColor: '#eee4da',
          color: '#776e65'
        },
        4: {
          backgroundColor: '#ede0c8',
          color: '#776e65'
        },
        8: {
          backgroundColor: '#f2b179',
          color: '#fff'
        },
        16: {
          backgroundColor: '#f59563',
          color: '#fff'
        },
        32: {
          backgroundColor: '#f67c5f',
          color: '#fff'
        },
        64: {
          backgroundColor: '#f65e3b',
          color: '#fff'
        },
        128: {
          backgroundColor: '#edcf72',
          color: '#fff'
        },
        256: {
          backgroundColor: '#edcc61',
          color: '#fff'
        },
        512: {
          backgroundColor: '#9c0',
          color: '#fff'
        },
        1024: {
          backgroundColor: '#33b5e5',
          color: '#fff'
        },
        2048: {
          backgroundColor: '#09c',
          color: '#fff'
        },
        4096: {
          backgroundColor: '#a6c',
          color: '#fff'
        },
        8192: {
          backgroundColor: '#93c',
          color: '#fff'
        }
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" src="../assets/scss/numberCell.scss"></style>
