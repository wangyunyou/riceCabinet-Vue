<template>
  <div class="container" v-title data-title="活动">
    <div class="item">
      <div class="title">1.智能柜内出售的是什么品牌的大米？</div>
      <div class="detail">
        答：为品牌大米“盐田玉”，由农场统一直供。是苏北特有的，生长在盐碱地上的大米，口感弹韧，营养含量是普通大米的4-6倍；富含20几种人体所缺微量元素和矿物营养，其中钙含量为普通大米的6-7倍，铁和硒含量为为普通大米4-5倍。
        <div>如您发现大米品牌变化，请立即拨打客服电话反馈情况。</div>
      </div>
    </div>
    <div class="item">
      <div class="title">2.怎么购买大米？</div>
      <div
        class="detail"
      >答：您可以在智能米柜屏幕上，点击选择您需要购买的大米斤数，然后点击选择您的付款方式，扫描屏幕上出现的二维码（如您使用小程序支付，为保证您支付顺利，请先进行充值），支付成功后，等待取米窗口打开。 当屏幕上显示：“取米窗口已打开，请套袋取米”时，从取米窗口内取出一个装米袋，套在出米口上，按下窗口旁边的绿色取米按钮，出米口即出米。</div>
    </div>
    <div class="item">
      <div class="title">3.钱付过了，但是柜体没有出米怎么办？</div>
      <div class="detail">答：因无法及时判定是哪种因素导致此类问题，请直接拨打客服电话获取帮助及相应的补偿。</div>
    </div>
    <div class="item">
      <div class="title">4.在智能柜购买的大米会缺斤少两吗？</div>
      <div class="detail">答：本智能米柜采用精准的称量装置，实际购买到的大米重量一般不小于屏幕上标注的规格重量。</div>
    </div>
    <div class="item">
      <div class="title">5.付过钱但不想购买了，可以取消订单吗？</div>
      <div class="detail">答：目前系统没有提供取消订单服务。因个人问题导致的订单交易失败问题，运营商不承担责任；因系统问题导致的订单问题，请联系客服寻求帮助。</div>
    </div>
    <div class="item">
      <div class="title">6.怎么参加活动？</div>
      <div
        class="detail"
      >答：登录即拥有参与活动资格。您可以点击小程序首页的【活动】按钮，进入运营商列表，选择个人所在城市，本页即展示当前城市所有运营商；点击某运营商，即可查看或选择参与该运营商的活动。</div>
    </div>
    <div class="item">
      <div class="title">7.刮刮卡抵用券怎么使用？</div>
      <div
        class="detail"
      >答：中奖后您可在个人中心的【中奖记录】查看中奖详情，到指定的运营商地址，在智能柜屏幕上点击【奖品领取】，输入两串密钥，即可使用抵用券支付，使用小程序扫描屏幕上的二维码，优惠购买相应规格的大米。</div>
    </div>
    <div class="item">
      <div class="title">8.奖品在哪里兑换？</div>
      <div
        class="detail"
      >答：中奖后您可在个人中心的【中奖记录】查看中奖详情，其中，刮刮卡奖品需要到指定的智能柜体前输入密钥领取，大转盘奖品等实物奖品需要去指定的运营商处线下领取。</div>
    </div>
    <div class="item">
      <div class="title">9.奖品可以向运营商折现吗？</div>
      <div class="detail">答：不可以。凡中奖后，奖品不支持开具发票，不支持套现或退换。购买大米如需开具发票的，可向相关运营商咨询相关事宜。</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Help"
};
</script>

<style scoped>
.item {
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
}

.title {
  color: #333;
  text-align: justify;
}

.detail {
  color: #888;
  font-size: 14px;
  text-align: justify;
  margin-top: 5px;
}
</style>