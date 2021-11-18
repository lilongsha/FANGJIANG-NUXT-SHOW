<template>
  <div class="overflow-hidden">
    <div class="lg:h-20">
    </div>
    <div class="relative w-full">
      <img src="~/assets/img/about/banner.jpg" alt="" class="w-full sm:h-36 lg:h-112">
      <div class="absolute bottom-0 flex flex-row items-center justify-center w-full h-16 text-white bg-black sm:space-x-6 lg:space-x-24 sm:text-base lg:text-2xl bg-opacity-10">
        <div class="relative flex flex-row items-center h-full text-center" @click="type = 0">
          <span class="whitespace-nowrap">联系我们</span>
          <div v-show="type === 0" class="absolute w-4 h-4 -ml-2 rotate-45 bg-white left-1/2 -bottom-2"></div>
        </div>
        <div class="relative flex flex-row items-center h-full text-center" @click="type = 1">
          <span class="whitespace-nowrap">诚聘英才</span>
          <div v-show="type === 1" class="absolute w-4 h-4 -ml-2 rotate-45 bg-white left-1/2 -bottom-2"></div>
        </div>
        <div class="relative flex flex-row items-center h-full text-center" @click="type = 2">
          <span class="whitespace-nowrap">招商加盟</span>
          <div v-show="type === 2" class="absolute w-4 h-4 -ml-2 rotate-45 bg-white left-1/2 -bottom-2"></div>
        </div>
      </div>
    </div>
    <div v-show="type === 0">
      <!-- 服务时间 -->
      <div class="mt-10 sm:w-full sm:px-2 lg:container lg:mx-auto">
        <div class="relative w-full h-20">
          <div class="abCenter z-9">
            <span class="text-3xl font-bold text-gray-200">SERVICE</span>
          </div>
          <div class="z-10 abCenter top-4">
            <span class="text-xl font-bold text-black">服务时间</span>
          </div>
        </div>
        <div class="w-full">
          <div class="flex flex-row w-full">
            <div class="flex flex-row items-center justify-end w-1/2 pr-4">
              <div class="flex items-center justify-center border-2 rounded-full sm:w-12 sm:h-12 lg:w-20 lg:h-20 border-fjBlue-100">周一</div>
              <div class="sm:w-12 lg:w-48 h-0.5 bg-fjBlue-100"></div>
              <div class="flex items-center justify-center border-2 rounded-full sm:w-12 sm:h-12 lg:w-20 lg:h-20 border-fjBlue-100">周五</div>
            </div>
            <div class="flex flex-row items-center justify-start w-1/2 pl-4">
              <div class="flex items-center justify-center border-2 rounded-full sm:w-12 sm:h-12 lg:w-20 lg:h-20 border-fjBlue-100">9:00</div>
              <div class="sm:w-12 lg:w-48 h-0.5 bg-fjBlue-100"></div>
              <div class="flex items-center justify-center border-2 rounded-full sm:w-12 sm:h-12 lg:w-20 lg:h-20 border-fjBlue-100">18:00</div>
            </div>
          </div>
          <div class="flex flex-col items-center w-full mt-10 space-y-2">
            <span class="text-fjBlue-100">我们用心去聆听您的问题</span>
            <span class="text-gray-400">欢迎拨打客户热线：<span class="text-fjBlue-100">400-960-9889</span>,24小时全天在线</span>
            <span class="text-gray-400">我们对您的问题或留言进行登记，及时回复更正您的建议</span>
          </div>
        </div>
      </div>
      <!-- 关注我们 -->
      <div class="mt-10 sm:w-full sm:px-2 lg:container lg:mx-auto">
        <div class="relative w-full h-20">
          <div class="abCenter z-9">
            <span class="text-3xl font-bold text-gray-200">CONCERN</span>
          </div>
          <div class="z-10 abCenter top-4">
            <span class="text-xl font-bold text-black">关注我们</span>
          </div>
        </div>
        <div class="w-full">
          <div class="flex flex-row justify-around">
            <img src="~/assets/img/about/index_03.jpg" alt="" class="rounded-full w-36 h-36">
            <img src="~/assets/img/about/index_05.jpg" alt="" class="rounded-full w-36 h-36">
          </div>
          <div class="flex flex-col items-center w-full mt-10 space-y-2">
            <span class="text-fjBlue-100">房匠-短视频平台</span>
            <span class="text-gray-400">欢迎踊跃关注，每天更新石家庄楼市资讯和实探楼盘</span>
          </div>
        </div>
      </div>
      <!-- 公司地址 -->
      <div class="mt-10 sm:w-full sm:px-2 lg:container lg:mx-auto">
        <div class="relative w-full h-20">
          <div class="abCenter z-9">
            <span class="text-3xl font-bold text-gray-200">ADDRESS</span>
          </div>
          <div class="z-10 abCenter top-4">
            <span class="text-xl font-bold text-black">公司地址</span>
          </div>
        </div>
        <div class="w-full">
          <div>
            <img src="~/assets/img/about/map-address.png" alt="长安区燕华大厦1308-1309室">
          </div>
          <div class="flex items-center justify-around w-full my-6 text-lg shadow sm:flex-col lg:flex-row lg:h-20">
            <div class="flex flex-row items-center space-x-2">
              <img src="~/assets/img/about/index_10.png" alt="" class="h-4 sm:w-4">
              <span>400-960-9889</span>
            </div>
            <div class="flex flex-row items-center space-x-2">
              <img src="~/assets/img/about/index_12.png" alt="" class="h-4 sm:w-4">
              <span>fangjiangkeji@163.com</span>
            </div>
            <div class="flex flex-row items-center space-x-2">
              <img src="~/assets/img/about/index_15.png" alt="" class="h-4 sm:w-4">
              <span>长安区燕华大厦1308-1309室</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="type === 1">
      <!-- 团队介绍 -->
      <div class="mt-10 sm:w-full sm:px-2 lg:container lg:mx-auto">
        <div class="relative w-full h-20">
          <div class="abCenter z-9">
            <span class="text-3xl font-bold text-gray-200">INTRODUCE</span>
          </div>
          <div class="z-10 abCenter top-4">
            <span class="text-xl font-bold text-black">团队介绍</span>
          </div>
        </div>
        <div class="w-full">
          <div class="flex justify-center w-full">
            <div class="text-left">
              <p>·我们的经纪人团队不光在专业技能上处于行业前端，我们更注重将客户的服务，能轻松理解客户的需求，所以我们能更好的将客户的需求表现出来。</p>
              <p>·我们拥有自己的抖音，快手拍摄制作团队。我们不断更新优质房源，对团队定期培训更好的为客户服务。</p>
              <p>·团队理念：公司秉承诚信、规范、高效的工作原则，用服务赢得市场，以真诚打动客户，竭诚为广大客户提供优质、高效、快捷的购房服务。</p>
            </div>
          </div>
          <div class="flex flex-col w-full mt-10 space-y-2">
            <div class="flex flex-row w-full space-x-4">
              <div class="w-1/3 h-full"><img class="w-full h-full" src="~/assets/img/about/line-1.jpg" alt=""></div>
              <div class="w-1/3 h-full"><img class="w-full h-full" src="~/assets/img/about/line-2.jpg" alt=""></div>
              <div class="w-1/3 h-full"><img class="w-full h-full" src="~/assets/img/about/line-3.jpg" alt=""></div>
            </div>
            <div class="flex w-full lg:space-x-4 sm:flex-col lg:flex-row">
              <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:w-full lg:w-1/2">
                <div><img class="object-cover w-full h-full" src="~/assets/img/about/food-1.jpg" alt=""></div>
                <div><img class="object-cover w-full h-full" src="~/assets/img/about/food-2.jpg" alt=""></div>
                <div class="flex flex-row">
                  <div class="w-2/5"><img class="object-cover w-full h-full" src="~/assets/img/about/food-3-1.jpg" alt=""></div>
                  <div class="flex flex-col w-3/5 lg:pl-4">
                    <span class="flex items-center justify-center font-bold sm:text-sm lg:text-lg h-1/3 text-fjBlue-100">休闲零食展示</span>
                    <img class="object-cover w-full h-full" src="~/assets/img/about/food-3-2.jpg" alt="">
                  </div>
                </div>
                <div><img class="object-cover w-full h-full" src="~/assets/img/about/food-4.jpg" alt=""></div>
              </div>
              <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:w-full lg:w-1/2 sm:mt-4 sm:mb-4">
                <div><img class="object-cover w-full h-full" src="~/assets/img/about/line-1.jpg" alt=""></div>
                <div><img class="object-cover w-full h-full" src="~/assets/img/about/line-3.jpg" alt=""></div>
                <div class="flex flex-row">
                  <div class="w-2/5"><img class="object-cover w-full h-full" src="~/assets/img/about/line-5.jpg" alt=""></div>
                  <div class="flex flex-col w-3/5 lg:pl-4">
                    <span class="flex items-center justify-center font-bold sm:text-sm lg:text-lg h-1/3 text-fjBlue-100">团队风采展示</span>
                    <img class="object-cover w-full h-full" src="~/assets/img/about/line-6.jpg" alt="">
                  </div>
                </div>
                <div><img class="object-cover w-full h-full" src="~/assets/img/about/line-4.jpg" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 服务核心 -->
      <div class="w-full h-48 py-8 lg:mt-10 bg-about-2">
        <div class="flex flex-row h-full mx-auto lg:container sm:w-full">
          <div class="item">
            <div>
              <span class="big">真房源</span>
              <span>优选真实优质房源</span>
            </div>
            <div>
              <span class="big">免费下午荼</span>
              <span>公司提供零食等下午荼</span>
            </div>
          </div>
          <div class="flex flex-col items-center w-0.5 h-full">
            <div class="w-0.5 h-full bg-white"></div>
          </div>
          <div class="item">
            <div>
              <span class="big">真服务</span>
              <span>专业经济人一对一服务</span>
            </div>
            <div>
              <span class="big">旅游团建</span>
              <span>外出踏青组织团建</span>
            </div>
          </div>
          <div class="flex flex-col items-center w-0.5 h-full">
            <div class="w-0.5 h-full bg-white"></div>
          </div>
          <div class="item">
            <div>
              <span class="big">真交易</span>
              <span>真实房源交易</span>
            </div>
            <div>
              <span class="big">弹性工作</span>
              <span>早：9:00；晚：6:00</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 加入我们 -->
      <div class="mt-10 sm:w-full sm:px-2 lg:container lg:mx-auto">
        <div class="relative w-full h-20">
          <div class="abCenter z-9">
            <span class="text-3xl font-bold text-gray-200">JOIN US</span>
          </div>
          <div class="z-10 abCenter top-4">
            <span class="text-xl font-bold text-black">加入我们</span>
          </div>
        </div>
        <div class="w-full">
          <div class="flex justify-center w-full">
            <div class="text-left">
              <p>为了公司更好的发展我们诚招优质人才。欢迎加入房匠大家庭！！  招聘岗位如下：</p>
            </div>
          </div>
          <div class="grid w-full gap-8 p-4 sm:grid-cols-1 sm:grid-rows-4 lg:grid-cols-2 lg:grid-rows-2">
            <div class="p-6 mx-auto shadow lg:w-96">
              <div class="title">销售顾问</div>
              <div class="mt-6">
                <p>1、大专及以上学历，年龄19-35周岁之间（欢迎优秀应届毕业生）； </p>
                <p>2、有良好的人际沟通能力，性格开朗，具备高度的工作热情且有较强观察能力和应变能力； </p>
                <p>3、工作积极主动，有较强的抗压和抗挫能力； </p>
                <p>4、做事认真踏实，为人正直，高度工作意识，具有良好的团队精神； </p>
                <p>5、愿意成为团队管理者，不甘愿做基层，有上进心。</p>
              </div>
            </div>
            <div class="p-6 mx-auto shadow lg:w-96">
              <div class="title">资深销售顾问</div>
              <div class="mt-6">
                <p>1、大专及以上学历，年龄19-35周岁之间，经验丰富； </p>
                <p>2、有良好的人际沟通能力，性格开朗，具备高度的工作热情且有较强观察能力和应变能力； </p>
                <p>3、工作积极主动，有较强的抗压和抗挫能力； </p>
                <p>4、做事认真踏实，为人正直，高度工作意识，具有良好的团队精神； </p>
                <p>5、愿意成为团队管理者，不甘愿做基层，有上进心。</p>
              </div>
            </div>
            <div class="p-6 mx-auto shadow lg:w-96">
              <div class="title">渠道经理</div>
              <div class="mt-6">
                <p>1、指定渠道方案，安排团队执行；</p>
                <p>2、负责自渠的专业培训，完成团队月度季度年度销售任务；</p>
                <p>3、监督完成当日到访客户描摹，督促组员追踪客户，提升成交率；</p>
                <p>4、及时做好月底业绩评估，认真执行上级领导下达的工作指令；</p>
                <p>5、做事认真踏实，为人正直，高度工作意识，具有良好的团队精神；</p>
                <p>6、有相关渠道专业优先录取。</p>
              </div>
            </div>
            <div class="p-6 mx-auto shadow lg:w-96">
              <div class="title">面试热线</div>
              <div class="mt-6">
                <p>公司招聘电话：</p>
                <p>15832137856 / 18032668717（李女士）</p>
                <p>简历投递：</p>
                <p>1148709065@qq.com</p>
                <p>18032668717@qq.com</p>
                <img class="w-1/3" src="~/assets/img/about/wechat-li.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="type === 2">
      <!-- 加盟流程 -->
      <div class="mt-10 sm:w-full sm:px-2 lg:container lg:mx-auto">
        <div class="relative w-full h-20">
          <div class="abCenter z-9">
            <span class="text-3xl font-bold text-gray-200">PROCESS</span>
          </div>
          <div class="z-10 abCenter top-4">
            <span class="text-xl font-bold text-black">加盟流程</span>
          </div>
        </div>
        <div class="w-full sm:space-y-6">
          <div class="bg-[#f5f5f5] bg-opacity-[35%] flex sm:flex-col lg:flex-row justify-around items-center py-4">
            <img src="~/assets/img/about/index-01.jpg" alt="">
            <div class="flex flex-col items-start sm:w-3/5">
              <span class="title">申请代理</span>
              <span>直接拨打加盟代理热线：400-960-9889</span>
            </div>
          </div>
          <div class="flex items-center justify-around py-4 sm:flex-col lg:flex-row">
            <div class="flex flex-col items-end sm:w-3/5">
              <span class="title">邀约洽谈</span>
              <span>与对接人，洽谈合作相关事宜</span>
            </div>
            <img src="~/assets/img/about/index-02.jpg" alt="">
          </div>
          <div class="bg-[#f5f5f5] bg-opacity-[35%] flex sm:flex-col lg:flex-row justify-around items-center py-4">
            <img src="~/assets/img/about/index-03.jpg" alt="">
            <div class="flex flex-col items-start sm:w-3/5">
              <span class="title">签订协议</span>
              <span>双方洽谈顺利，达成合作共识，正式签订协议，准备运营</span>
            </div>
          </div>
          <div class="flex items-center justify-around py-4 sm:flex-col lg:flex-row">
            <div class="flex flex-col items-end sm:w-3/5">
              <span class="title">渠道对接</span>
              <span>合同正式生效，双方部门负责人对接（开户、激活、后台及结算）</span>
            </div>
            <img src="~/assets/img/about/index-04.jpg" alt="">
          </div>
          <div class="bg-[#f5f5f5] bg-opacity-[35%] flex sm:flex-col lg:flex-row justify-around items-center py-4">
            <img src="~/assets/img/about/index-05.jpg" alt="">
            <div class="flex flex-col items-start sm:w-3/5">
              <span class="title">正式运营</span>
              <span>在协议合同规定内，正式开展签订业务</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 加盟留电 -->
      <div class="mt-10 sm:w-full sm:px-2 lg:container lg:mx-auto">
        <div class="relative w-full h-20">
          <div class="abCenter z-9">
            <span class="text-3xl font-bold text-gray-200">MESSAGE</span>
          </div>
          <div class="z-10 abCenter top-4">
            <span class="text-xl font-bold text-black">加盟留电</span>
          </div>
        </div>
        <div class="w-full space-y-4">
          <div class="flex justify-center sm:flex-col lg:flex-row">
            <div class="sm:w-full lg:w-1/2">
              <span class="text-lg">姓名：</span>
              <input class="sm:w-full lg:w-[478px] h-[51px] border" type="text">
            </div>
            <div class="sm:w-full lg:w-1/2">
              <span class="text-lg">公司：</span>
              <input class="sm:w-full lg:w-[478px] h-[51px] border" type="text">
            </div>
          </div>
          <div class="flex sm:flex-col lg:flex-row">
            <div class="sm:w-full lg:w-1/2">
              <span class="text-lg">电话：</span>
              <input class="sm:w-full lg:w-[478px] h-[51px] border" type="text">
            </div>
            <div class="sm:w-full lg:w-1/2">
              <span class="text-lg">微信：</span>
              <input class="sm:w-full lg:w-[478px] h-[51px] border" type="text">
            </div>
          </div>
          <div class="w-full">
            <span class="text-lg">留言：</span>
            <input class="sm:w-full lg:w-[1118px] h-20 border" type="text">
          </div>
          <div class="w-full pb-20 mt-12">
            <div class="flex items-center justify-center mx-auto text-white rounded-md sm:h-12 lg:h-16 sm:text-lg lg:text-2xl bg-fjBlue-100 sm:w-3/4 lg:w-72">
              <span class="">提交信息</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'JoinUs',
  asyncData ({ query }) {
    const type: number = Number(query.type);

    return {
      type,
    }
  },
  data () {
    const type: number = 0;
    return {
      type,
    }
  },
  methods: {
  }
})
</script>
<style scoped>
  .abCenter {
    @apply absolute w-full text-center;
  }
  .item {
    @apply flex flex-col items-center justify-center w-full lg:space-y-2 h-full;
  }
  .item div {
    @apply flex flex-col items-center justify-start text-center w-full lg:space-y-4 h-1/2 text-white;
  }
  .big {
    @apply text-xl font-bold;
  }
  .title {
    @apply text-xl font-medium text-fjBlue-100;
  }
</style>