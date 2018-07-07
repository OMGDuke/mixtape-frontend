<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: BebasNeue;
  src: url("assets/BebasNeue-Regular.otf") format("opentype");
}
body {
  background: #222;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
.strong-text {
  font-family: BebasNeue;
  font-size: 36px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.4px;
  text-align: center;
  color: #1ed760;
}

.body-text {
  font-family: HelveticaNeue;
  font-size: 24px;
  font-weight: 200;
  font-style: italic;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: center;
  color: #ffffff;
}
</style>
