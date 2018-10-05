<template>
  <div>
    <p class="price">
      <span class="value">{{ btcKuna }}</span> from Kuna
      <img alt="kuna_api" class="api_img" src="../../assets/api_logo/kuna_api.png"/>
    <span>{{ type }} 1235678 </span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'kuna',
  props: ['type'],
  data() {
    return {
      btcKuna: 10,
    }
  },
  methods: {
    getCryptoDatafromKuna: function () {
      this.$http.get(`https://kuna.io/api/v2/tickers/${btcKuna}uah`).then(response => {
        this.$data.btcKuna = response.body.ticker.last;
      })
    }
  },
  beforeMount(){
    this.getCryptoDatafromKuna();
  }
}
</script>

<style scoped>

</style>
