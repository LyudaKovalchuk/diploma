<template>
  <div class="litcoin">
  <h1 class="title price">Litcoin price :</h1>
  <p class="price">
    <span class="value"> {{ ltcCryptoCompare*26.6}}</span> from CryptoCompare
    <img alt="cryptoCompare_api" class="api_img" src="../assets/api_logo/Cryptocompare_logo.png" ></p>
  <p class="price">
    <span class="value">{{ ltcCoinMarket*26.6}}</span> from CoinMarket
    <img alt="coinMarket_api" class="api_img" src="../assets/api_logo/coinMarket.png" >
  </p>
  <p class="price">
    <span class="value">{{ ltcCoinBase *26.6}}</span> from CoinBase
    <img alt="btcBox_api" src="../assets/api_logo/coinbase-logo.png" class="api_img">
  </p>
  </div>
</template>

<script>
export default {
  name: 'litcoin',
  data () {
    return {
      ltcCryptoCompare: 0,
      ltcCoinMarket: 0,
      ltcCoinBase: 0
    }
  },
  methods: {
    getCryptoDatafromCryptoCompare () {
      this.$http.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD').then(respone => {
        this.$data.ltcCryptoCompare = respone.body.USD
      })
    },
    getCryptoDatafromCoinMarket () {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/litecoin/').then(response => {
        this.$data.ltcCoinMarket = response.body[0].price_usd
      })
    },
    getCryptoDatafromCoinBase () {
      this.$http.get('https://api.coinbase.com/v2/prices/LTC-USD/buy').then(response => {
        this.$data.ltcCoinBase = response.body.data.amount
      })
    }
  },
  beforeMount () {
    this.getCryptoDatafromCryptoCompare()
    this.getCryptoDatafromCoinMarket()
    this.getCryptoDatafromCoinBase()
  }
}
</script>

<style scoped>

</style>
