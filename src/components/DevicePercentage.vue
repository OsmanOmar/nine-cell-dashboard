<template>
  <v-chart :options="devicePercentage" autoresize></v-chart>
</template>

<script>
import devicePercentage from '../data/device-percentage';
export default {
  data() {
    return {
      devicePercentage
    };
  }
};
</script>
