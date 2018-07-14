<template>
  <div class="field">
    <label class="field__label">{{label}}

    </label>
          <input class="field__input" ref="input" :value="this.default" :placeholder="placeholder" @input="updateField"/>
  </div>
</template>

<script>
export default {
  name: 'formField',
  props: ['label', 'placeholder', 'default'],
  methods: {
    updateField() {
      this.$emit('input', this.$refs.input.value);
    }
  }
};
</script>

<style scoped lang="scss">
.field {
  text-align: left;
  width: 80vw;
  display: block;
  margin: auto;
  &__input {
    width: 100%;
    border-radius: 2px;
    border: none;
    padding: 15px;
    font-family: HelveticaNeue;
    font-size: 24px;
    font-weight: 200;
    font-style: italic;
    letter-spacing: -0.5px;
    margin-bottom: 17px;
    box-sizing: border-box;
  }
  &__label {
    text-align: left;
    width: 37px;
    height: 28px;
    font-family: HelveticaNeue;
    font-size: 24px;
    font-weight: 200;
    font-style: italic;
    letter-spacing: -0.5px;
    color: #ffffff;
  }
}
</style>
