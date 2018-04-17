<template>
  <div class="body-container">
    <div class="grid-container">
      <grid-cell
        v-for="(cellPosition, index) of cellPositionList"
        :cellPosition="cellPosition"
        :key="`grid${index}`">
      </grid-cell>
      <number-cell
        v-for="(numberPosition, index) of numberPositionList"
        :numberPosition="numberPosition"
        :key="index">
      </number-cell>
    </div>
  </div>
</template>

<script>
import GridCell from '@/components/GridCell'
import NumberCell from '@/components/NumberCell'

export default {
  components: {
    GridCell,
    NumberCell
  },
  data () {
    return {
      // board: [[2, 4, 8, 16], [32, 64, 128, 256], [512, 1024, 2048, 4096], [8192, 8192, 8192, 8192]],
      board: [],
      cellPositionList: [],
      numberPositionList: []
    }
  },
  methods: {
    // 新游戏
    newGame () {
      // 初始化
      this.init()

      // 随机生成两个数字
      this.generateNumber()
      this.generateNumber()
    },
    // 初始化游戏
    init () {
      this.cellPositionList = []
      this.numberPositionList = []
      this.board = []

      // 计算出每个网格的位置
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          this.cellPositionList.push({
            top: 20 + i * 120,
            left: 20 + j * 120
          })
        }
      }
      // 将board中的值初始化为0
      for (let i = 0; i < 4; i++) {
        this.board[i] = []
        for (let j = 0; j < 4; j++) {
          this.board[i][j] = 0
        }
      }
      // this.updateBoard()
    },
    // 更新board数值
    updateBoard () {
      let index = 0

      // 计算出每个数字的位置
      for (let i = 0; i < this.board.length; i++) {
        for (let j = 0; j < this.board[i].length; j++) {
          this.numberPositionList.push({
            index,
            top: 20 + i * 120,
            left: 20 + j * 120,
            value: this.board[i][j]
          })
          index++
        }
      }
    },
    // 在一个随机格子生成数字
    generateNumber () {
      // 如果棋盘格没有空间
      if (this.noSpace()) {
        return false
      }

      // 随机生成一个位置
      let randomX = parseInt(Math.floor(Math.random() * 4))
      let randomY = parseInt(Math.floor(Math.random() * 4))

      while (true) {
        if (this.board[randomX][randomY] === 0) {
          break
        } else {
          randomX = parseInt(Math.floor(Math.random() * 4))
          randomY = parseInt(Math.floor(Math.random() * 4))
        }
      }

      // 随机生成一个数字
      let randomNumber = Math.random() < 0.5 ? 2 : 4

      // 在随机位置显示随机数字
      this.board[randomX][randomY] = randomNumber
      // showNumberWithAnimation(randomX, randomY, randomNumber)
      this.updateBoard()

      return true
    },
    // 判断是否可以生成数字
    noSpace () {
      for (let i = 0; i < this.board.length; i++) {
        for (let j = 0; j < this.board[i].length; j++) {
          if (this.board[i][j] === 0) {
            return false
          }
        }
      }

      return true
    },
    showNumberWithAnimation (i, j, number) {
    }
  }
}
</script>

<style lang="scss" src="../assets/scss/gameBody.scss"></style>
