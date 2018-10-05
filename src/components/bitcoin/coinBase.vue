<template>
  <p class="price">
    <span class="value">{{ btcCoinBase *26.6}}</span> from CoinBase
    <img alt="btcBox_api" src="../../assets/api_logo/coinbase-logo.png" class="api_img">
  </p>
</template>

<script>
  export default {
    name: "coin-base",
    data(){
      return {
        btcCoinBase:0
      }
    },
    methods: {
      getCryptoDatafromCoinBase() {
        this.$http.get('https://api.coinbase.com/v2/prices/BTC-USD/buy').then(response => {
          this.$data.btcCoinBase = response.body.data.amount;
        })
      }
    },
    beforeMount(){
      this.getCryptoDatafromCoinBase();
    }
  }
</script>

<style scoped>

</style>