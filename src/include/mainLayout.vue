<template>
  <div class="mainLayout" :style="{backgroundColor: backgroundColor}" @back="back">
    <slot></slot>
  </div>
</template>
<script>
  import baseUtil from '../utils/BaseUtil';

  export default {
    props: {
      backgroundColor: {
        type: String,
        default: '',
      },
      canGoBack: { default: 0 },
      webRef: { default: '' },
      isRedirect: { default: false },
    },
    methods: {
      back() {
        if (this.$router && this.$router.currentRoute.fullPath !== '/') {
          this.$router.back();
        } else {
          baseUtil.back(this.canGoBack, this.webRef);
        }
      },
    },
  };
</script>
<style>
  .mainLayout {
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 750px;
  }
</style>
