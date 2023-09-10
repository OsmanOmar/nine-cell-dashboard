<template>
  <div class="area-1">
    <PopularizeRate />
    <div class="chart">
      <v-chart :options="deviceAmount" autoresize></v-chart>
      <DevicePercentage />
    </div>
  </div>
</template>

<script>
import PopularizeRate from '../components/PopularizeRate';
import DevicePercentage from '../components/DevicePercentage';
import deviceAmount from '../data/device-amount';
export default {
  components: {
    PopularizeRate,
    DevicePercentage
  },
  data() {
    return {
      deviceAmount
    };
  }
};
</script>

<style lang="scss">
.area-1 {
  height: 100%;
  display: grid;
  grid-template-rows: 24px 1fr;

  .chart {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
