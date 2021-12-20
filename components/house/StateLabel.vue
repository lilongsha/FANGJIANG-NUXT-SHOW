<template>
    <span>
        <span v-if="state === '1'" :class="className" class="bg-fjYellow-100">在售</span>
        <span v-if="state === '2'" :class="className" class="bg-fjBlue-100">待售</span>
        <span v-if="state === '3'" :class="className" class="bg-fjRed-100">售罄</span>
    </span>
</template>
<script>

export default {
  name: 'StateLabel',
  props: {
    state: {
      type: String,
      require: true,
      default: ''
    },
    className: {
      type: String,
      require: true,
      default: ''
    },
  },
  data () {
    return {  };
  },
  mounted () {
  },
  methods: {
  }
}
</script>