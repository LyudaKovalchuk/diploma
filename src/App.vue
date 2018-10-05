<template>
  <div id="app">
    <HelloWorld/>
    <div class="main-container">
      <div class="container">
        <router-link to="/bitcoin" class="crypto-image bitcoin-btn"><img src="./assets/bitcoin-logo.png"/> - Bitcoin</router-link>
        <router-link to="/ethereum" class="crypto-image ethereum-btn"><img src="./assets/ethereum_logo.png"/>- Ethereum</router-link>
        <router-link to="/litcoin" class="crypto-image litcoint-btn"><img src="./assets/litecoin-logo.png"/>- Litcoin</router-link>
        <a class="crypto-image ubiq-btn"><img src="./assets/Ubiq_Logo.png"/>- Ubiq</a>
        <router-link to="{ name: 'user', params: { userId: 123 }}">test</router-link>
        <!--<Bitcoin str="New text"/>-->
      </div>
      <div class="router-view-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/Title.vue'
import Bitcoin from './components/bitcoin/Bitcoin.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Bitcoin
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Mina');
  #app {
    font-family: 'Mina', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url("assets/background.jpg");
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;

  }
  body {
    margin: 0;
  }

  .crypto-image {
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    font-size: x-large;
    font-weight: 500;
    img {
      height: 60px;
    }
  }
  .crypto-image:hover img {
    height: 80px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px;
    align-items: flex-start;
  }
  .main-container {
    display: flex;
    justify-content: space-between;
  }
  .router-view-container {
    width: 50vw;
  }
</style>
