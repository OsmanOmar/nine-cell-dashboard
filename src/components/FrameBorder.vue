<template>
  <div class="frame">
    <div class="frame-title">
      <span>{{ frameTitle }}</span>
    </div>
    <slot></slot>
    <span class="effect bottom-to-top"></span>
    <span class="effect left-to-right"></span>
  </div>
</template>

<script>
export default {
  props: ['frameTitle']
};
</script>

<style lang="scss">
$frameColor: #54dcf2;
$frameBorderWidth: 1px;
$cornerSize: 1rem;
$cornerBorderWidth: 3px;
$cornerOffset: -($frameBorderWidth + $cornerBorderWidth);

.frame {
  background-color: rgba($color: #000a24, $alpha: .25);
  position: relative;
  padding-top: 20px;

  .frame-title {
    position: absolute;
    width: 40%;
    height: 2rem;    
    line-height: 2rem;
    top: -1rem;
    left: 5%;
    text-align: center;
    background-color: rgb(22, 41, 113);
    z-index: 10;
    border: 1px solid #3f7de4;
  }
  .effect {
    position: absolute;
    display: block;
  }
  .bottom-to-top {
    height: 0;
    width: 3px;
    left: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba($color: #000a24, $alpha: .25), #3f7de4);
    animation: bottom-to-top 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  @keyframes bottom-to-top {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }

  .left-to-right {
    left: 0;
    top: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(to right, rgba($color: #000a24, $alpha: .25), #3f7de4);
    animation: left-to-right 2s ease-in-out infinite;
    animation-delay: 3s;
  }

  @keyframes left-to-right {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
}
</style>
