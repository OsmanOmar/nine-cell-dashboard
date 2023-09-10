<template>
  <div class="point-rank">
    <el-table :data="pointRank">
      <el-table-column label="排名" prop="rank" width="56"></el-table-column>
      <el-table-column label="姓名" prop="userName" width="80"></el-table-column>
      <el-table-column label="单位">
        <template slot-scope="scope">{{ scope.row.orgName }}</template>
      </el-table-column>
      <el-table-column label="积分" prop="point" width="56"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import pointRank from '../data/point-rank.json';
export default {
  data() {
    return {
      pointRank: pointRank.slice(0, 4)
    };
  }
};
</script>

<style lang="scss">
.point-rank {
  .el-table {
    color: inherit;
    background-color: transparent;

    tr,
    th,
    td {
      background-color: transparent;
    }

    thead {
      color: inherit;
    }

    .el-table__body tr:hover>td {
      background-color: transparent;
    }
  }
}
</style>
