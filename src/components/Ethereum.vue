<template>
  <div id="ethereum">
    <h1 class="title price">Ethereum price:</h1>
    <p class="price">
      <span class="value">{{ethKuna}}</span> from Kuna
      <img class="api_img" alt="kuna_api" src="../assets/api_logo/kuna_api.png"/>
    </p>
    <p class="price">
      <span class="value">{{ethCryptoCompare*26.6}}</span> fromCryptoCompare
      <img class="api_img" alt="cryptoCompare_api" src="../assets/api_logo/Cryptocompare_logo.png"/>
    </p>
    <p class="price">
      <span class="value">{{ethCoinMarket*26.6}}</span> from Coin Market
      <img class="api_img" alt="coinMarket_api" src="../assets/api_logo/coinMarket.png"/>
    </p>
    <p class="price">
      <span class="value">{{ethCoinBase*26.6}}</span> from Coin Base
      <img class="api_img" alt="coinBase_api" src="../assets/api_logo/coinbase-logo.png"/>
    </p>
    </div>
</template>

<script>
export default {
  name: 'ethereum',
  data () {
    return {
      ethKuna: 0,
      ethCryptoCompare: 0,
      ethCoinMarket: 0,
      ethCoinBase: 0
    }
  },
  methods: {
    getCryptoDatafromKuna () {
      this.$http.get('https://kuna.io/api/v2/tickers/ethuah').then(response => {
        console.log(response)
        this.$data.ethKuna = response.body.ticker.last
      })
    },
    getCryptoDatafromCryptoCompare () {
      this.$http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD').then(respone => {
        this.$data.ethCryptoCompare = respone.body.USD
      })
    },
    getCryptoDatafromCoinMarket () {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/').then(response => {
        this.$data.ethCoinMarket = response.body[0].price_usd
      })
    },
    getCryptoDatafromCoinBase () {
      this.$http.get('https://api.coinbase.com/v2/prices/ETH-USD/buy').then(response => {
        this.$data.ethCoinBase = response.body.data.amount
      })
    }
  },
  beforeMount () {
    this.getCryptoDatafromKuna()
    this.getCryptoDatafromCryptoCompare()
    this.getCryptoDatafromCoinMarket()
    this.getCryptoDatafromCoinBase()
  }
}
</script>

<style scoped>

</style>
