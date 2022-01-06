<template>
    <div>
        <div v-if="state === '1'" :class="className" class="bg-fjYellow-100">在售</div>
        <div v-if="state === '2'" :class="className" class="bg-fjBlue-100">待售</div>
        <div v-if="state === '3'" :class="className" class="bg-fjRed-100">售罄</div>
    </div>
</template>
<script>

export default {
  name: 'StateDiv',
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