<template>
  <section id="bitcoin" class="hero is-primary">
    <h1 class="title price">Bitcoin price :</h1>
    <btc-kuna type="btc"></btc-kuna>
    <crypto-compare></crypto-compare>
    <coin-market></coin-market>
    <coin-base></coin-base>
  </section>
</template>

<script>
  import Kuna from './kuna'
  import CryptoCompare from './cryptoCompare'
  import CoinMarket from './coinMarket'
  import CoinBase from './coinBase'
  export default {
    name: "bitcoin",
    components: {
      CoinBase,
      CoinMarket,
      'crypto-compare': CryptoCompare,
      'btc-kuna': Kuna,
      'coin-market': CoinMarket,
      'coin-base': CoinBase
    }
  }
</script>

<style>
.price {
  text-align: left;
}
.value {
  font-weight: bold;
}
.api_img {
  height: 80px;
  vertical-align: middle;
}
</style>
