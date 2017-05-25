<template>
  <div
    :dataRole="dataRole"
    :style="{ backgroundColor: backgroundColor }">
    <div v-if="platForm === 'iOS'" class="iOSHeight" :style="{ backgroundColor: backgroundColor }"></div>
    <div class="navContainer" :style="{ height: height + 'px' }">
      <div class="leftContainer">
        <div class="touchArea" @click="clickLeftItem">
        <text
          v-if="!leftItemSrc"
          naviItemPosition="left"
          :style="{ color: leftItemColor }"
          class="left-text"
          @click="clickLeftItem"
          @back="clickLeftItem"
        >{{leftItemTitle}}</text>
          <image
            naviItemPosition="left"
            :src="leftItemSrc"
            class="left-image"
          />
        </div>
      </div>
      <text
        naviItemPosition="center"
        :style="{ color: titleColor }"
        class="center-text">{{title}}</text>
      <div class="rightContainer">
        <div class="touchArea" @click="clickRightItem">
        <text
          v-if="!rightItemSrc"
          naviItemPosition="right"
          :style="{ color: rightItemColor }"
          class="right-text"
          @click="clickRightItem"
        >
          {{rightItemTitle}}
        </text>
        <image
          v-if="rightItemSrc"
          naviItemPosition="right"
          :src="rightItemSrc"
          class="right-image"
          @click="clickRightItem"
        />
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .navContainer {
    position: relative;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-y: auto;
    flex: 1;
  }
  .iOSHeight{
    height: 20px;
  }
  .leftContainer {
    width: 220px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }
  .rightContainer {
    width: 220px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }
  .right-text {
    text-align: right;
    font-size: 32px;
    font-family: STHeitiSC-Light;
    padding-right: 16px;
  }
  .left-text {
    text-align :left;
    font-size: 32px;
    font-family: STHeitiSC-Light;
    padding-left: 16px;
  }
  .center-text {
    width: 310px;
    font-size: 36px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    align-content: center;
  }
  .left-image {
    margin-left: 16px;
    width: 25px;
    height: 41px;
  }
  .right-image {
    width: 44px;
    height: 42px;
    margin-left: 16px;
  }
  .touchArea {
    min-width: 88px;
    height: 88px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;

  }
</style>

<script>
  import baseUtil from '../utils/BaseUtil';

  export default {
    props: {
      dataRole: { default: 'none' },
      // 导航条背景色
      backgroundColor: { default: '#000' },
      // 导航条高度
      height: { default: 88 },
      // 导航条标题
      title: { default: '' },
      // 导航条标题颜色
      titleColor: { default: '#fff' },
      // 右侧按钮图片
      rightItemSrc: { default: '' },
      // 右侧按钮标题
      rightItemTitle: { default: '' },
      // 右侧按钮标题颜色
      rightItemColor: { default: '#fff' },
      // 左侧按钮图片
      leftItemSrc: { default: '' },
      // 左侧按钮标题
      leftItemTitle: { default: '' },
      // 左侧按钮颜色
      leftItemColor: { default: '#fff' },
      // 返回按钮类型 1：bundle返回 2：route返回
      canGoBack: { default: 0 },
      webRef: { default: '' },
      leftImgStyle: { default: '' },
      rightImgStyle: { default: '' },
      isRedirect: { default: false },
    },
    data() {
      return {
        platForm: weex.config.env.platform,
      };
    },
    methods: {
      clickRightItem() {
        this.$emit('naviBarRightItemClick');
      },
      clickLeftItem() {
        if (this.$router && this.$router.currentRoute.fullPath !== '/') {
          this.$router.back();
        } else {
          baseUtil.back(this.canGoBack, this.webRef);
        }
      },
    },
  };
</script>
