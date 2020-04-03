<template>
  <div>
    <table>
      <!--表头-->

      <thead>
      <tr>
        <th>name <span class="arrow asc"></span></th>
        <th>age <span class="arrow dsc"></span></th>
        <th>price <span class="arrow asc"></span></th>
      </tr>

      </thead>


      <!--表体-->

      <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>

      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    name: "GridView"
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