<template>
    <div class=" fixed w-screen h-full top-0 left-0 z-[70] flex flex-col items-center justify-center" style="background: rgba(0,0,0,0.7); overflow: hidden;" >
        <div class="rounded-md z-[90] fixed w-[432px] h-[158px] sm:w-[90%]">
            <div class="rounded-tl-lg rounded-tr-lg relative w-full h-[48px] bg-fjBlue-100 text-white text-[18px] p-2">{{ title }}<button class="absolute right-0 mr-4 top-2" @click="$emit('closeNotice')">╳</button></div>
            <div class="rounded-br-lg rounded-bl-lg w-full h-[110px] bg-white p-4 text-[18px] font-normal leading-8">{{ noticeInfo }}</div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'Reminder',
  props: {
    noticeInfo: {
        type: String,
        required: false,
        default: ''
    },
    title: {
        type: String,
        required: true,
    },
  },
  data () {
    return {

     };
  },
  mounted () {
  },
  methods: {
  }
}
</script>
