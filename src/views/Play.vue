<template>
  <div>
    <game-header></game-header>
    <game-body></game-body>
  </div>
</template>

<script>
const GameHeader = () => import('@/components/GameHeader')
const GameBody = () => import('@/components/GameBody')

export default {
  components: {
    GameHeader,
    GameBody
  },
  data () {
    return {
      board: []
    }
  },
  methods: {
  }
}
</script>
