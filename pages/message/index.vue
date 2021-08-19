<template>
  <view class="message">
    <cu-custom bgColor="bg-gradual-blue">
      <block slot="backText">返回</block>
      <block slot="content">
        <view v-if="!isLoad" class="cu-load load-text loading" :class="!isLoad?'loading':'over'"></view>
        <view v-else>{{ pageStatus }}</view>
      </block>
    </cu-custom>
    <view class="cu-bar bg-white solid-bottom margin-top">
      <view class="action">
        <text class="cuIcon-title text-orange "></text> 消息列表
      </view>
    </view>
    <view class="cu-list menu-avatar">
      <view class="cu-item">
        <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
        <view class="content">
          <view class="text-grey">凯尔</view>
          <view class="text-gray text-sm flex">
            <view class="text-cut">
              <text class="cuIcon-infofill text-red  margin-right-xs"></text>
              我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
            </view> </view>
        </view>
        <view class="action">
          <view class="text-grey text-xs">22:20</view>
          <view class="cu-tag round bg-grey sm">5</view>
        </view>
      </view>
      <view class="cu-item">
        <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
          <view class="cu-tag badge">99+</view>
        </view>
        <view class="content">
          <view class="text-grey">
            <view class="text-cut">瓦洛兰之盾-塔里克</view>
            <view class="cu-tag round bg-orange sm">战士</view>
          </view>
          <view class="text-gray text-sm flex">
            <view class="text-cut">
              塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
            </view>
          </view>
        </view>
        <view class="action">
          <view class="text-grey text-xs">22:20</view>
          <view class="cuIcon-notice_forbid_fill text-gray"></view>
        </view>
      </view>
      <view class="cu-item" :class="modalName==='move-box-'+ index?'move-cur':''" v-for="(item,index) in friendList" :key="index"
            @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index" @tap="toChat">
        <view class="cu-avatar radius lg" :style="[{ backgroundImage: 'url(' + item.avatar + ')' }]">
        </view>
        <view class="content">
          <view class="text-grey">
            <view class="text-cut">{{ item.name }}</view>
          </view>
          <view class="text-gray text-sm flex"> <view class="text-cut">{{ item.introduction }}</view></view>
        </view>
        <view class="action">
          <view class="text-grey text-xs">22:20</view>
          <view class="cu-tag round bg-red sm">99+</view>
        </view>
        <view class="move">
          <view class="bg-grey">置顶</view>
          <view class="bg-red">删除</view>
        </view>
      </view>
      <view class="cu-item grayscale">
        <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
        <view class="content">
          <view><view class="text-cut">伊泽瑞尔</view>
            <view class="cu-tag round bg-orange sm">断开连接...</view>
          </view>
          <view class="text-gray text-sm flex"> <view class="text-cut"> 等我回来一个打十个</view></view>
        </view>
        <view class="action">
          <view class="text-grey text-xs">22:20</view>
          <view class="cu-tag round bg-red sm">5</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "message",
    data() {
      return {
        isLoad:false,
        pageStatus: '信息',
        modalName: null,
        friendList: [
          {
            name: '凯尔',
            status: '',
            unReadMsg: 0,
            avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
            introduction: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
          },
          {
            name: '瓦罗兰之盾',
            status: '',
            unReadMsg: 1,
            avatar: 'https://ossweb-img.qq.com/images/lol/img/champion/Taric.png',
            introduction: '塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。' +
              '塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的' +
              '更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。',
          },
          {
            name: '莫甘娜',
            status: '',
            unReadMsg: 3,
            avatar: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
            introduction: '凯尔，你被自己的光芒变的盲目！',
          },
          {
            name: '伊泽瑞尔',
            status: '',
            unReadMsg: 2,
            avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
            introduction: '等我回来一个打十个',
          },
        ],
        listTouchStart: 0,
      }
    },
    created() {
      this.pageStatus='收取中'
      let self = this;
      setTimeout(function () {
        self.pageStatus = '信息'
        self.isLoad = true
      }, 2000)

    },
    methods: {
      toChat(e) {
        uni.navigateTo({
        	url: '../friends/chat'
        })
      },
      isLoading(e) {
        this.isLoad = e.detail.value;
      },
      // ListTouch触摸开始
      ListTouchStart(e) {
        this.listTouchStart = e.touches[0].pageX
      },
      // ListTouch计算方向
      ListTouchMove(e) {
        this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
      },
      // ListTouch计算滚动
      ListTouchEnd(e) {
        if (this.listTouchDirection === 'left') {
          this.modalName = e.currentTarget.dataset.target
        } else {
          this.modalName = null
        }
        this.listTouchDirection = null
      }
    }
  }
</script>

<style scoped>
  .load-text {
    line-height: 60rpx;
  }
  // 覆盖colorui 的样式, 从‘加载中’改为‘收取中’
  .cu-load.loading::after {
    content: "收取中...";
  }
</style>
