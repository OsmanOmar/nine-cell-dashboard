<template>
  <div class="container">
    <div class="row-1">
      <div class="col-1">
        <!-- <OnlineTimer /> -->
      </div>
      <div class="col-2">
        <h1 class="text-center page-title">南京市 xxx 运行监测系统</h1>
      </div>
      <div class="col-3">
        <!-- <DigitalClock /> -->
      </div>
    </div>
    <div class="row-2">
      <frame-border class="col-1" frame-title=" xxx 概览">
        <AreaOne />
      </frame-border>
      <frame-border class="col-2" frame-title=" xxx 使用情况">
        <DeviceSummary />
        <!-- <v-chart :options="appUsageStatistics" autoresize></v-chart> -->
      </frame-border>
      <frame-border class="col-3" frame-title="应用概览">
        <ApplicationSummary />
      </frame-border>
    </div>
    <div class="row-3">
      <frame-border class="col-1" frame-title=" xxx 在线情况">
        <OnlineStatus />
      </frame-border>
      <frame-border class="col-2" frame-title="当前使用动态">
        <!-- <v-chart :options="appUserStatistics" autoresize></v-chart> -->
        <TransactionList />
      </frame-border>
      <frame-border class="col-3" frame-title="应用使用次数排名">
        <v-chart :options="appRank" autoresize></v-chart>
      </frame-border>
    </div>

    <div class="row-4">
      <frame-border class="col-2" frame-title="一周服务器I/O">
        <v-chart :options="appUsageWeekly" autoresize></v-chart>
      </frame-border>
      <frame-border class="col-2" frame-title=" xxx 平台拓扑图">
        <Topology />
      </frame-border>
      <frame-border class="col-3" frame-title="积分榜">
        <PointRank />
      </frame-border>
    </div>
  </div>
</template>

<script>
import appRank from '../data/app-rank';
import AreaOne from './AreaOne';
import PointRank from '../components/PointRank';
import TransactionList from '../components/TransactionList';
import OnlineStatus from '../components/OnlineStatus';
import OnlineTimer from '../components/OnlineTimer';
import Topology from '../components/Topology';
import FrameBorder from '../components/FrameBorder';
import DeviceSummary from '../components/DeviceSummary';
import ApplicationSummary from '../components/ApplicationSummary';

import appUserStatistics from '../data/app-user-statistics';
import appUsageStatistics from '../data/app-usage-statistics';
import deviceAmount from '../data/device-amount';
import appUsageWeekly from '../data/app-usage-weekly';

export default {
  components: {
    AreaOne,
    PointRank,
    TransactionList,
    OnlineStatus,
    OnlineTimer,
    Topology,
    FrameBorder,
    DeviceSummary,
    ApplicationSummary
  },
  data() {
    return {
      appRank,
      appUserStatistics,
      appUsageStatistics,
      deviceAmount,
      appUsageWeekly
    };
  }
};
</script>

<style lang="scss">
.container {
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr 1fr 1fr;
  grid-gap: 2rem;

  .page-title {
    font-size: 24px;
    letter-spacing: 5px;
    text-align: center;
  }

  .row-1,
  .row-2,
  .row-3,
  .row-4 {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 1rem;
  }

  .row-1 {
    background-image: url('../assets/header-bg.png');
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }

}
</style>
