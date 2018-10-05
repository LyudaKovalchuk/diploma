<template>
  <p class="price">
    <span class="value">{{ btcCoinMarket*26.6}}</span> from CoinMarket
    <img alt="coinMarket_api" class="api_img" src="../../assets/api_logo/coinMarket.png" >
  </p>
</template>

<script>
  export default {
    name: "coin-market",
    data(){
      return {
        btcCoinMarket:0
      }
    },
    methods: {
      getCryptoDatafromCoinMarket() {
        this.$http.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/').then(response => {
          this.$data.btcCoinMarket = response.body[0].price_usd;
        })
      },
    },
    beforeMount(){
      this.getCryptoDatafromCoinMarket();
    }
  }
</script>

<style scoped>

</style>