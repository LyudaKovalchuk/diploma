<template>
  <p class="price">
    <span class="value"> {{ btcCryptoCompare*26.6}}</span> from CryptoCompare
    <img alt="cryptoCompare_api" class="api_img" src="../../assets/api_logo/Cryptocompare_logo.png" ></p>
</template>

<script>
  export default {
    name: "crypto-compare",
    data(){
      return {
        btcCryptoCompare:0
      }
    },
    methods: {
      getCryptoDatafromCryptoCompare() {
        this.$http.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=ETH,USD,EUR').then(respone => {
          this.$data.btcCryptoCompare = respone.body.USD;
        })
      }
    },
    beforeMount(){
      this.getCryptoDatafromCryptoCompare();
    }
  }
</script>

<style scoped>

</style>