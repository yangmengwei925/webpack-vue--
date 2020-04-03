<template>

  <div>
    <GridView
      :columns="columnsData"
      :heroes="heroesData"

    ></GridView>

  </div>

</template>

<script>
  export default {
    name: "gridview",
    data() {
      return{
        columnsData: [
          'name', 'age', 'price'
        ],
        heroesData:[
          {'name':'暴龙兽', 'age':21, 'price':1413},
          {'name':'兽人加鲁鲁', 'age':32, 'price':544},
          {'name':'天使兽', 'age':31, 'price':310},
          {'name':'迦楼大兽', 'age':11, 'price':667},
          {'name':'超比多兽', 'age':24, 'price':1243},
        ]
      }
    }
  }
</script>

<style scoped>

</style>