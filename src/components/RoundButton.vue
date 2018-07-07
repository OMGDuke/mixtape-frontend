<template>
  <div class="round-button">
    <a class="round-button__link" href="#" v-on:click="action"><font-awesome-icon v-bind:style="{ color: iconColor }" class="icon" v-if="icon" :icon="icon" /><span>{{title}}</span></a>
  </div>
</template>

<script>
export default {
  name: "roundButton",
  props: ["title", "action", "icon", "iconColor"]
};
</script>

<style scoped lang="scss">
.round-button {
  padding: 5px 50px 0px;
  border: 4px solid white;
  display: inline-block;
  letter-spacing: -0.3px;
  border-radius: 48px;
  &__link {
    font-family: BebasNeue;
    display: block;
    font-size: 48px;
    color: #ffffff;
    text-decoration: none;
  }
}

.icon {
  margin-right: 20px;
  // padding: 10px 0 0 0;
}
</style>
