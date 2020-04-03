<template>
  <div>
    Search <input type="text" v-model="searchQuery">
    <table>
      <!--表头-->
      <thead>
      <tr>
        <th v-for="item in columns">
          {{item}}
          <span class="arrow asc"></span>
        </th>
      </tr>
      </thead>
      <!--表体-->
      <tbody>
      <tr v-for="entry in filteredHeroes">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "GridView",

    data() {

      // this.heroes = [1,2,3,4]; 不能修改 现在不属于严格开发模式 以后:eslint就会报错
      // 因为props中的属性是只读属性
      return {
        //根据搜索的内容改变表格中的数据
        // 所以 操作的应该是  heroes

        //但是 通过props 传递过来的数据能不能修改
        searchQuery: ''
      }
    },

    computed: {
      filteredHeroes() {
        //1:输入筛选的值 (不区分大小写)
        let filterKey = this.searchQuery && this.searchQuery.toLowerCase();

        //2:因为heroes 是只读的 所以赋值到一个新的变量 就可以更改
        let heroes = this.heroes;//[{name:'',},{name:'',},{name:'',},]

        //如果输入了内容 就筛选
        if (filterKey) {
          //筛选
          heroes = heroes.filter((row) => {
            //筛选内容匹配的数据
            //遍历每一个条目中的key
            // console.log(Object.keys(row));//数组
            return Object.keys(row).some((key)=>{
              //判断key对应的值 是否包含 filterKey
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1;

            })//一些
          });
        }
        return heroes;
      }

    },


    props: {
      /*表头*/
      columns: Array,
      /*表体*/
      heroes: Array
    }
  }
</script>

<style scoped>
  table {
    border: 2px solid #65b687;
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: #5897b0;
    /*color: rgba();*/
    color: #ffffff;
    user-select: none;
    cursor: pointer;
  }

  td {
    background-color: #f9f9f9;
  }


  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

  .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: .66;
    vertical-align: middle;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #ffffff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #ffffff;
  }


</style>