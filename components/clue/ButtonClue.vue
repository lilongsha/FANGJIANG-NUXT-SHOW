<template>
  <div class="lg:hidden mt-4 bg-[#FFE8D9] w-full h-[50px] flex flex-row items-center justify-center rounded" @click="$emit('clickButton')">
    <span class="text-[#EB670C] text-[16px] font-medium">{{ name }}</span>
  </div>
</template>
<script>

export default{
  name: 'ButtonClue',
  props: {
    name: {
      type: String,
      required: true,
    }
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
