<template>
  <view class="my">
    <image :src="bgImage" mode='widthFix' class='tn-bg'></image>

    <view class="dong">
      <view class="monster">
        <view class="monster__face">
          <view class="monster__eye avatar-eye avatar-eye--green eye--left">
            <view class="avatar-eye-pupil pupil--green">
                <span class="avatar-eye-pupil-blackThing">
                  <span class="avatar-eye-pupil-lightReflection"></span>
                </span>
            </view>
          </view>
          <view class="monster__eye avatar-eye avatar-eye--violet eye--right">
            <view class="avatar-eye-pupil pupil--pink">
                <span class="avatar-eye-pupil-blackThing">
                  <span class="avatar-eye-pupil-lightReflection"></span>
                </span>
            </view>
          </view>
          <view class="monster__noses">
            <view class="monster__nose"></view>
            <view class="monster__nose"></view>
          </view>
          <view class="monster__mouth">
            <view class="monster__top"></view>
            <view class="monster__bottom"></view>
          </view>
        </view>
      </view>
    </view>

    <view class="" :style="'padding-top:' + CustomBar + 'px;'">
      <view class="cu-list menu my_logo">
        <view class="cu-item">
          <view class="cu-avatar round xl margin-right-sm shadow-blur-lg bg-img open-data">
            <open-data type="userAvatarUrl"></open-data>
          </view>
          <view class='content flex-sub'>
            <view class='padding-left-sm text-white text-xxl text-shadow-a padding-top-sm'>
              <open-data type="userNickName"></open-data>
            </view>
            <view class='text-lg flex justify-between padding-left-sm padding-top-sm text-white text-shadow-a'>
              欢迎访问图鸟
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="cu-list menu card-menu margin-top-xl shadow-shop bg-white text-black my-radius sm-border margin-bottom">
      <view v-if="SystemPlatform != 'apple'" class="cu-item">
        <button class='content cu-btn' @click="showAppreciateModal">
          <image src='/static/images/love.png' class='png' mode='aspectFit'></image>
          <text class='text-lg margin-sm'>赞赏服务</text>
        </button>
      </view>
      <view class="cu-item ">
        <button class='content cu-btn' @click="navAbout">
          <image src='/static/images/faxian.png' class='png' mode='aspectFit'></image>
          <text class='text-lg margin-sm'>关于图鸟</text>
        </button>
      </view>
      <view class="cu-item ">
        <button class='content cu-btn' open-type="contact">
          <image src='/static/images/fenxiang.png' class='png' mode='aspectFit'></image>
          <text class='text-lg margin-sm'>合作勾搭</text>
        </button>
      </view>
      <view class="cu-item">
        <button class='content cu-btn' open-type="feedback">
          <image src='/static/images/fankui.png' class='png' mode='aspectFit'></image>
          <text class='text-lg margin-sm'>问题反馈</text>
        </button>
      </view>
      <view class="cu-item" @click="callPhoneNumber" data-number="13699700470">
        <view class='content'>
          <image src='/static/images/kefu.png' class='png' mode='aspectFit'></image>
          <text class='text-lg margin-sm'>技术支持</text>
        </view>
        <view class="cu-tag badge margin-top-lg bg-orange light margin-right">136 9970 0470</view>
      </view>
    </view>

    <view :class="['cu-modal bottom-modal', showAppreciate ? 'show' : '']" @click='closeAppreciateModal'>
      <view class="main">
        <view class="stand"></view>
        <view class="cat">
          <view class="body"></view>
          <view class="head">
            <view class="ear"></view>
            <view class="ear"></view>
          </view>
          <view class="face">
            <view class="nose"></view>
            <view class="whisker-container">
              <view class="whisker"></view>
              <view class="whisker"></view>
            </view>
            <view class="whisker-container">
              <view class="whisker"></view>
              <view class="whisker"></view>
            </view>
          </view>
          <view class="tail-container">
            <view class="tail">
              <view class="tail">
                <view class="tail">
                  <view class="tail">
                    <view class="tail">
                      <view class="tail">
                        <view class="tail"></view>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>


      <view class="cu-dialog" style="z-index:999">
        <view class="cu-bar bg-white">
          <view class='action text-gray' @click.stop='closeAppreciateModal'>
            <text style="font-size:36rpx"></text>
          </view>
          <view class='action text-xl text-blod' @click.stop="deterAppreciateSelect">
            <button class='cu-btn bg-blue shadow'>
              投 币
            </button>
          </view>
        </view>
        <view class='grid col-2 padding-sm margin-top'>
          <view v-for="(item, index) in dongdong" :key="index" class='padding-xs margin-bottom social-btns'>
            <button :class="['cu-btn red lg block TNbtn', index == appreciateSelectIndex ? 'btn' : 'line-red']"
                    @click.stop="appreciateSelect" :data-index="index" :data-amount="(index + 1)*0.99+(index)*2">
              <text class="fa">{{item.name}}</text>
            </button>
          </view>
        </view>
      </view>

    </view>
    <tn-wx-login :show="showLogin" desc="用户记录您的登录信息" @closeLoginModal="closeLoginModal"
                 @getUserInfo="getUserInfo"></tn-wx-login>
  </view>
</template>

<script>
  export default {
    name: 'My',
    data() {
      return {
        CustomBar: this.CustomBar,
        SystemPlatform: this.SystemPlatform,
        bgImage: 'https://cdn.nlark.com/yuque/0/2019/png/280373/1575360202210-assets/web-upload/8605aee2-f9d7-486b-b1dc-b2e55c43805e.png', // 个人背景图地址
        appreciateSelectIndex: 0, // 选择对应的赞赏金额Index
        appreciateAmount: 0.01, // 赞赏金额
        checkUserScopeFlag: false, //用户是否已经授权
        mpShopOrderQualification: false, // 检查用户当前所购买的订单是否有活动权限
        showLogin: false, //打开登陆框
        showAppreciate: false, // 弹出赞赏框

        dongdong: [{
          name: '一个香吻',
        }, {
          name: '一包辣条',
        }, {
          name: '一片西瓜',
        }, {
          name: '一罐汽水',
        }, {
          name: '一条雪糕',
        }, {
          name: '一杯奶茶',
        }]
      }
    },
    created() {
      // this._loadData()
    },
    methods: {
      //拨打固定电话
      callPhoneNumber() {
        uni.makePhoneCall({
          phoneNumber: "13699700470",
        });
      },
      // 复制Github地址
      copyWebsite() {
        uni.setClipboardData({
          data: "https://gitee.com/TSpecific/tn_website_opensource",
        })
      },

      // 选择赞赏金额
      appreciateSelect(e) {

        this.appreciateSelectIndex = this.$getDataSet(e, 'index')
        this.appreciateAmount = this.$getDataSet(e, 'amount')

      },

      // 确定选择赞赏金额
      deterAppreciateSelect() {
        this.closeAppreciateModal();

        this._checkUserScope().then(async () => {
          const allow_ids = await util.checkSubscribeSetting(['IwhmNHIdELTGvNTqlo4Tz1y-7ojU7GsZAkB0qVU34BY',
            'PDkrF01llNsWjEQpCNwaYXsIvDEjlttRQCLWmwFR7Mk'
          ])

          // 请求预支付
          preAppreciateOrder({
            amount: parseFloat(this.appreciateAmount.toFixed(2)),
            allow_pay_subscribe: allow_ids.indexOf('IwhmNHIdELTGvNTqlo4Tz1y-7ojU7GsZAkB0qVU34BY') != -1 ? 1 :
              0,
            allow_refund_subscribe: allow_ids.indexOf('PDkrF01llNsWjEQpCNwaYXsIvDEjlttRQCLWmwFR7Mk') != -1 ?
              1 : 0
          }).then((res) => {
            const {
              data
            } = res
            uni.requestPayment({
              provider: 'wxpay',
              timeStamp: data.timeStamp,
              nonceStr: data.nonceStr,
              package: data.package,
              signType: data.signType,
              paySign: data.paySign,
              success: (res) => {
                uni.showToast({
                  title: '支付成功',
                  icon: 'none'
                })
              },
              fail: (res) => {
                uni.showToast({
                  title: '支付失败',
                  icon: 'none'
                });
                cancelOrder({
                  order_no: data.order_no
                })
              }
            })
          })
        }).catch(() => {
          this.showLogin = true
        })
      },

      // 关于图鸟
      navAbout() {
        uni.navigateTo({
          url: '/pagesA/about/about'
        })
      },

      // 公众号文章
      navArticle() {
        uni.navigateTo({
          url: '/pagesA/article/article'
        })
      },

      // 微信小商店商品列表
      navMpShopProductList() {

      },

      // 微信小商店订单
      navMpShopOrder() {
        this._checkUserScope().then(() => {
          uni.navigateTo({
            url: 'plugin-private://wx34345ae5855f892d/pages/orderList/orderList?tabId=all'
          })
        }).catch(() => {
          this.showLogin = true
        })
      },

      // 微信小商店购物车
      navMpShopShoppingCart() {
        this._checkUserScope().then(() => {
          uni.navigateTo({
            url: 'plugin-private://wx34345ae5855f892d/pages/shoppingCart/shoppingCart'
          })
        }).catch(() => {
          this.showLogin = true
        })
      },

      // 图鸟小商店领奖
      nacTnShopOrderAward() {

      },

      // 图鸟商店订单页面
      navTNShopOrder() {
        this._checkUserScope().then(() => {
          uni.navigateTo({
            url: '/tn_shop/order_list/order_list?from=my'
          })
        }).catch(() => {
          this.showLogin = true
        })
      },

      // 图鸟商店购物车
      navTNShopShoppingCart() {
        uni.navigateTo({
          url: '/tn_shop/shopping_cart/shopping_cart'
        })
      },

      // 图鸟抽奖活动
      navTnLottery() {

      },

      //获取用户登陆状态
      getUserInfo() {
        if (res != null) {
          updateUserInfoToServer(res).then(() => {
            this.checkUserScopeFlag = true;
            util.showTips('登陆成功', '请继续执行上一步操作');
            this.closeLoginModal()
          }).catch(() => {
            util.showTips('授权提示', '获取授权失败')
            this.closeLoginModal()
          })
        } else {
          this.closeLoginModal()
        }
      },

      // 关闭登录窗口
      closeLoginModal() {
        // console.log('close Login');
        this.showLogin = false

      },

      // 弹窗
      showAppreciateModal(e) {

        this.showAppreciate = true

      },
      closeAppreciateModal(e) {

        this.showAppreciate = false

      },


      /**
       * 检查当前用户的权限
       */
      _checkUserScope() {
        return new Promise((resolve, reject) => {
          checkUserScope().then((res) => {
            this.checkUserScopeFlag = res
            resolve()
          }).catch((res) => {
            this.checkUserScopeFlag = res
            reject()
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url("@/pages/case/cat.css");
  @import url("@/pages/case/bird.css");

  .cu-list.menu>.cu-item {
    background-color: rgba(0, 0, 0, 0);
  }

  .cu-modal .cu-dialog>.cu-bar:first-child .action {
    margin-right: 30rpx;
  }

  .bg-green {
    background-color: #7FD02B;
  }

  .my_logo {
    background: none;
    padding: 50rpx 0 30rpx 0;
  }

  .open-data {
    overflow: hidden;
    display: block;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }

  .my-radius {
    border-radius: 12rpx;
    overflow: hidden
  }

  .my-icon image {
    width: 100rpx;
    height: 100rpx;
    display: inline-block;
    margin: 0 auto
  }

  .my-iconcolor {
    background: rgba(255, 255, 255, 0.96)
  }

  .shadow-shop {
    box-shadow: 0rpx 0rpx 90rpx 0rpx rgba(0, 0, 0, 0.1);
  }

  .qrcode-img {
    position: fixed;
    width: 80rpx;
    height: 80rpx;
    bottom: 350rpx;
    right: 30rpx;
    z-index: 1024;
    opacity: 0.8;
    box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
    border: none
  }

  .text-my {
    font-size: 32upx !important;
    color: #aaa !important;
  }

  .social-btns .btn {
    transition: all 0.35s;
    transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
  }

  .social-btns .btn .fa {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .social-btns .btn.TNbtn {
    background-color: #fff;
  }

  .social-btns .btn.TNbtn .fa {
    color: #fff;
  }


  .social-btns .btn {
    /* background-image: linear-gradient(45deg, #f43f3b, #ec008c); */
    background: linear-gradient(45deg, #9A5CE5, #F15BB5, #ec008c, #f43f3b);
    background-size: 500% 500%;
    animation: gradientBG 15s ease infinite;
    color: #fff;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);
    opacity: 0.99;
  }


  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  /* #ifdef H5 */
  .tn-bg {
    z-index: 0;
  }

  /* #endif */
</style>
