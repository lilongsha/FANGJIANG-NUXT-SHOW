<template>
  <div class="container mx-auto">
    <div class="w-full h-32"></div>
    <div class="w-full h-24">
      <!-- name -->
      <div>
        <span class="text-3xl font-bold">{{ house.name }}</span>
        <span v-if="house.aliasName" class="ml-4">别名：{{ house.aliasName }}</span>
      </div>
      <div class="mt-4">
        <span v-if="house.saleState === '1'" class="px-1 py-0.5 font-normal text-sm text-white rounded-sm bg-fjYellow-100">在售</span>
        <span v-else-if="house.saleState === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
        <span v-else-if="house.saleState === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
        <span v-if="house.type === '1'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">住宅</span>
        <span v-else-if="house.type === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">公寓</span>
        <span v-else-if="house.type === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">商铺</span>
        <span v-else-if="house.type === '4'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">写字楼</span>
        <span v-else-if="house.type === '5'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">仓库</span>
        <span v-else-if="house.type === '6'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">其它</span>
        <span class="ml-4"></span>
        <span v-for="(item, index) in house.labels.split(',')" :key="index" :class="colors[index % 5]" class="px-1 py-0.5 text-xs ">{{ item }}</span>
      </div>
    </div>
    <div class="flex flex-row w-full">
      <div class="w-3/4 pr-4">
        <!-- 基本信息 -->
        <div class="w-full p-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">基本信息</span>
          </div>
          <!-- 内容 -->
          <div class="flex flex-row">
            <div class="w-1/2 pt-2 space-y-2">
              <div>产权类型：
                <span v-if="house.type === '1'" class="font-normal">住宅</span>
                <span v-else-if="house.type === '2'" class="font-normal">公寓</span>
                <span v-else-if="house.type === '3'" class="font-normal">商铺</span>
                <span v-else-if="house.type === '4'" class="font-normal">写字楼</span>
                <span v-else-if="house.type === '5'" class="font-normal">仓库</span>
                <span v-else-if="house.type === '6'" class="font-normal">其它</span>
              </div>
              <div>建筑类型：<span v-if="house.buildType">{{ buildType[house.buildType].title }}</span><span v-else>暂无数据</span></div>
              <div>产权年限：<span v-if="house.property">{{ house.property }}年</span><span v-else>暂无数据</span></div>
              <div>开&nbsp;&nbsp;发&nbsp;&nbsp;商：<span v-if="house.hDeveloperByDeveloperId"><a :href="house.hDeveloperByDeveloperId.link" target="_blank">{{ house.hDeveloperByDeveloperId.name }}</a></span><span v-else>暂无数据</span></div>
              <div>品&nbsp;&nbsp;牌&nbsp;&nbsp;商：<span v-if="house.brandId"><a :href="house.brandId.link" target="_blank">{{ house.brandId.name }}</a></span><span v-else>暂无数据</span></div>
              <div>装修类型：<span v-if="house.decorationType">{{ decorationType[house.decorationType].title }}</span><span v-else>暂无数据</span></div>
              <div>装修标准：<span v-if="house.decorationStandard">{{ house.decorationStandard }}元/㎡</span><span v-else>暂无数据</span></div>
              <div>项目地址：<span v-if="house.address">{{ house.address }}</span><span v-else>暂无数据</span></div>
            </div>
            <div class="w-1/2">
              <div class="w-full h-[220px] mx-auto mt-2">
                <line-echart :option="scoreOption" />
              </div>
            </div>
          </div>
        </div>
        <!-- 销售信息 -->
        <div class="w-full p-4 mt-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">销售信息</span>
          </div>
          <!-- 内容 -->
          <div class="flex flex-row">
            <div class="w-1/2 pt-2 space-y-2">
              <div>销售状态：<span v-if="house.saleState">{{ saleState[house.saleState].title }}</span><span v-else>暂无数据</span></div>
              <div>交房时间：<span v-if="house.payTime">预计{{ house.payTime.split('T')[0] }}</span><span v-else>暂无数据</span></div>
              <div>咨询电话：
                <a :href="`tel:${phoneNum},${house.number}%23`">
                  <span class="text-fjRed-100">{{ phoneNum }} 转 {{ house.number }}</span>
                </a>
              </div>
            </div>
            <div class="w-1/2 pt-2 space-y-2">
              <div>开盘时间：<span v-if="house.payTime">{{ house.payTime.split('T')[0] }}</span><span v-else>暂无数据</span></div>
              <div>售楼地址：<span v-if="house.saleAddress">预计{{ house.saleAddress }}</span><span v-else>暂无数据</span></div>
            </div>
          </div>
          <!-- 楼栋列表详情 -->
          <div class="w-full p-4">
            <table v-if="house.hBuildsById && house.hBuildsById.length > 0" class="w-full text-center transition-all border" cellpadding="0" cellspacing="0">
              <tbody>
                <tr class="w-full h-12 bg-gray-400">
                  <!-- number -->
                  <td class="w-1/12 border">楼栋号</td>
                  <!-- price -->
                  <td class="w-1/12 border">楼栋均价</td>
                  <!-- priceDescription -->
                  <td class="w-3/12 border">价格描述</td>
                  <!-- saleState -->
                  <td class="w-1/12 border">状态</td>
                  <!-- floors -->
                  <td class="w-1/12 border">层高</td>
                  <!-- description -->
                  <td class="w-4/12 border">描述</td>
                  <!-- licenseId -->
                  <td class="w-1/12 border">预售信息</td>
                </tr>
                <tr v-for="(item, index) in house.hBuildsById" v-show="index < 2 || showBuild" :key="item.id" class="w-full h-12 bg-gray-300">
                  <td class="w-1/12 border">{{ item.number }}</td>
                  <td class="w-1/12 border">{{ item.price }}</td>
                  <td class="w-3/12 border">{{ item.priceDescription }}</td>
                  <td class="w-1/12 border">
                    <span v-if="item.saleState === '1'" class="px-1 py-0.5 font-normal text-sm text-white rounded-sm bg-fjYellow-100">在售</span>
                    <span v-if="item.saleState === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
                    <span v-if="item.saleState === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
                  </td>
                  <td class="w-1/12 border">{{ item.floors }}</td>
                  <td class="w-4/12 border">{{ item.description }}</td>
                  <!-- {{ item.licenseId }} -->
                  <td class="w-1/12 border"><a target="_blank">预售证</a></td>
                </tr>
              </tbody>
            </table>
            <div v-if="house.hBuildsById && house.hBuildsById.length > 2" v-show="!showBuild" class="w-1/6 mx-auto text-center bg-gray-300" @click="changeShowBuild(true)">展开</div>
            <div v-if="house.hBuildsById && house.hBuildsById.length > 2" v-show="showBuild" class="w-1/6 mx-auto text-center bg-gray-300" @click="changeShowBuild(false)">合并</div>
          </div>
        </div>
        <!-- 小区规划 -->
        <div class="w-full p-4 mt-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">小区规划</span>
          </div>
          <!-- 内容 -->
          <div class="flex flex-row">
            <div class="w-1/2 pt-2 space-y-2">
              <div>占地面积：<span v-if="house.landArea">{{ house.landArea }}㎡</span><span v-else>暂无数据</span></div>
              <div>拿地时间：<span v-if="house.getLandTime" class="">{{ house.getLandTime.split('T')[0] }}</span><span v-else>暂无数据</span></div>
              <div>容&nbsp;&nbsp;积&nbsp;&nbsp;率：<span v-if="house.volumeRate" class="">{{house. volumeRate }}</span><span v-else>暂无数据</span></div>
              <div>停&nbsp;&nbsp;车&nbsp;&nbsp;位：<span v-if="house.parking" class="">{{ house.parking }}</span><span v-else>暂无数据</span></div>
              <div>总&nbsp;&nbsp;户&nbsp;&nbsp;数：<span v-if="house.houseTotal" class="">{{ house.houseTotal }}户</span><span v-else>暂无数据</span></div>
              <div>物&nbsp;&nbsp;业&nbsp;&nbsp;费：<span v-if="house.estatePrice" class="">{{ house.estatePrice }}元/㎡</span><span v-else>暂无数据</span></div>
            </div>
            <div class="w-1/2 pt-2 space-y-2">
              <div>建筑面积：<span v-if="house.buildArea" class="">{{ house.buildArea }}㎡</span><span v-else>暂无数据</span></div>
              <div>绿&nbsp;&nbsp;化&nbsp;&nbsp;率：<span v-if="house.greenRate" class="">{{ house.greenRate }}%</span><span v-else>暂无数据</span></div>
              <div>楼栋总数：<span v-if="house.buildingTotal" class="">{{ house.buildingTotal }}栋</span><span v-else>暂无数据</span></div>
              <div>物业公司：<span v-if="house.estateCompanyById" class=""><a target="_blank" :href="house.estateCompanyById.link">{{ house.estateCompanyById.name }}</a></span><span v-else>暂无数据</span></div>
              <div>物业费说明：<span v-if="house.estateDescription" class="">{{ house.estateDescription }}</span><span v-else>暂无数据</span></div>
            </div>
          </div>
        </div>
        <!-- 价格信息 -->
        <div class="w-full p-4 mt-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">价格信息</span>
          </div>
          <div class="w-full h-80">
            <line-echart :option="option" :chart-id="'priceChart'" />
          </div>
        </div>
      </div>
      <div class="w-1/4">
        <!-- 广告位 -->
      </div>
    </div>
    <!-- 推荐楼盘 -->
    <div class="container mx-auto mt-12">
      <!-- 标题 -->
      <div class="flex flex-row items-center w-full ml-4 h-9">
        <!-- 竖线 -->
        <div class="w-4 h-full bg-black"></div>
        <!-- 标题内容 -->
        <div class="ml-2 text-xl font-bold">推荐楼盘</div>
      </div>
      <!-- 图片盒子 -->
      <div class="grid grid-cols-4 grid-rows-1 gap-2 w-[full-8] mx-4 mt-8 h-112 overflow-hidden">
        <a v-for="item in getHotProject" :key="item.id" :href="`/house/${item.id}.html`" class="block w-[96%] h-[96%] mx-[2%] my-[2%] shadow-lg">
          <div class="w-full h-7/10">
            <img v-if="item.firstImg" :src="item.firstImg.address" :alt="item.name" width="100%" height="100%" class="object-cover w-full h-full">
          </div>
          <div class="w-full px-4 mt-2 bg-white h-3/10">
            <div class="font-bold">
              <span class="text-2xl text-black py-0.5">{{ item.name }}</span>
              <span v-if="item.saleState === '1'" class="px-1 py-0.5 font-normal text-sm text-white rounded-sm bg-fjYellow-100">在售</span>
              <span v-if="item.saleState === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
              <span v-if="item.saleState === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
              <span v-if="item.type === '1'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">住宅</span>
              <span v-if="item.type === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">公寓</span>
              <span v-if="item.type === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">商铺</span>
              <span v-if="item.type === '4'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">写字楼</span>
              <span v-if="item.type === '5'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">仓库</span>
              <span v-if="item.type === '6'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">其它</span>
            </div>
            <div class="flex flex-row items-center mt-2">
              <svg version="1.1" class="w-4 h-4 mr-1 text-gray-400 icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
          RQflCgoAJiq3NZKmAAAEB0lEQVRYw6XXW4hWVRQH8J/mjSQvE6b5ohRMOuKDouaAhWSoiRqZkkJK
          grUxRUEfDKXUHrKhTBCKdj4YmlRgRmMoAwqSQk0OSKRmgrcHE4McJQLv9fAdx/Od73y3XC/nnL3W
          //9fe+191j6n279qsdDNGKM1GoCrTvvVsVgTtFv1qDDZayYblhm+4JDP46EHFAgzrPFshYAftMR9
          /1Mg9BQt7nq85aRj/kFfYzTp2eXZLsRbdQuEEb41InlotcOP8Y+Ud6hmi8xOHk95KZ6qSyBMdFgP
          8I318USZJEbZ6GVw2zPxp5oFwuPO6wXeiNtUtPC6z8BNw+OlUn/3XFRbQj+9Gj1xm+mgl7Y8f45A
          2GI0mBbb1GCxzTQwOmypoUShyYnaipNbqFHxZLUZbAUH6qEnbnMghS4vEBpNAYvqoU8hpoTG4uEe
          mbBlYHfefgijzDUOHXaXbtx4Kew2F8usrFSieeDTHPotjttgppk2OJ63nAlqXvFg0SKHkU7iSny0
          hP67rrf2nrXGF0ui/tKApvhbuRlMBO0lwHtN4ah11jkKZofSdWpPseSuQaH3dJQAW8BXcQF4L3xp
          PlrsyMR1eKGLJXcGhZ5/NpN/syG4mNAjLnARQ0JzRuBsiiVX4GFwJwMbBY4UjR1Jee7bnRRLrkAh
          4G4Gdhv0KRrrk/Lct7ulCRYLXAGDMrDCok4OfbuK1tfklOe+DUqx5Ar8AjKVjSecQn+toR+Eflr1
          x6mS1605xZJY8S4qHBmTZG2VfXjO6dCGaQYno1mblGLJncExlzE0TMjMYb9NYLBFFiX0m+L+4qgw
          wVBcdqysQLyV9MSF2dTiWitTtb1iZVxbkn8BdaD4AyBzHoRZWnEtDiiBC/3N8RR+tydey/Ff1R+z
          495KAg/p9AgWxi/UZeFVO/G3gbHCNhXv2AXero++C7ErZl7T0hPtQ9AYZtSV/wyNKXQlgXjGQfBB
          XfkXog/GM1UFsAI0hTk15z9HUwpZZPkfXnvNxBWD421VLfRwWQO+j7NKvfkfXoVTtSE5B6pZi4YU
          qpYZED72JngynlXRwhMKdf8kLsvzdy+DW+0G+Lpq/oWIG1bnu8sIxOuWgnFhecX8lxsHlsbr+RGV
          fkDaFZre8HihTMQw58HP8elyLOVKBPOT656yEXsykfUJxHNJmcaGzbn5bzY2Kc+58izVfgIPJN+q
          Jc0vaW4cjM9XYqhUIpihE+wM44voxyf0nar0rCoC8aapye3hMLKLfqTDye3UePOBBIgdloDe2sMY
          CGO06w2WxI5q+Br+9AkbrE9u38G7yf3GuKE6tiYBwvvWZIZa4lu1IGsUIKyS3qyr40e14WoWILxi
          q8fwpxWxeo+qX4Aw0GJsj521Y/4DSPcta79rLVoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTAt
          MDlUMTY6Mzg6NDIrMDg6MDDCFhjIAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEwLTA5VDE2OjM4
          OjQyKzA4OjAws0ugdAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2d
          AAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6
          OkhlaWdodAA0OIdghy0AAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANDh/z0egAAAAGXRFWHRU
          aHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MzM3Njg3
          MjIz7prBAAAAEnRFWHRUaHVtYjo6U2l6ZQAyMTI1QkLGHJgzAAAARnRFWHRUaHVtYjo6VVJJAGZp
          bGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYzMTc1NzUyNjc1MjE3NjJfODRfWzBd
          eTPfkgAAAABJRU5ErkJggg==" ></image>
          </svg>
              <span v-if="item.address" class="overflow-hidden text-gray-400 whitespace-nowrap" style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;" :title="item.address">{{ item.address }}</span>
            </div>
            <div class="flex flex-row items-center">
              <svg version="1.1" class="w-4 h-4 mr-1 text-gray-400 icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
          RQflCgoAJiRQjb+hAAACXUlEQVRYw+2YMWgTURjHf5cciUmhIhYFQwsdLFIUBKGDHURcpItQ3dT5
          6WA6SOMm6qYubvIG6SZUEBSDCCqCgw4i0kF0EkQipCiI2l6b9HIO6TPX3CX33l0iGfwv9967777f
          9733cu/LWR5KYo7j5HGJVhqHRbmgYYnVBAiLMjM6D/h0V57WB8xxC4Dn/GCDVJcnXGwmmQTglLwf
          BbA3rxeANWbkC73gRYnrQJFIgIq1ANzRdQ/yBq+BXdGWCrAOPNZ1D8ACMCJyugAb+GoE+Azkuq7W
          FkA8NfCiTBTAM4ZpWifLwBBgDR7Ak6smgBjhBbepaAvT9rXNMxhiSbhtQaZFnadck9+CAHNZ7A0d
          38dJMSFXkgNqSNZ8PhrYjDIL7OEyl5JN0TKwIovBG+IED4AzQYCmxEF24jAFZMUxHPJ8kJXWfflQ
          3GSeHc1enAwkU5utPM8AuMqVLRZPmKfebMbZpsOBkXxb/yeQjp9BiVFqvn6Ol20W9VYzBkA+ijRJ
          t5r/9GXn9BuQ7QdArUENuCe+d4BYwKz8mATgAmOMdbEcSZZBGnhPlW0dM6gmA2SAs/JdPCc6AAXR
          lsiyHYffMqKu8FcVRgCO8ImlDlMaAjBXhiHG+1l4bQC/9AsvGMiyxRDQF/3PYLAyiNzT2mqEA3qX
          jW+y47+Lumm4lYUCpIDpngGOtjwrwDJwUUwYOKkAjbA/IOIAJf4eUOo8KFMkxxsh+YKlsRrr7Ady
          osSq70xxSTHOObJAuTmkvlXs5i2Fnk0RVDgkqz4AiAK3OUzGYLN6hP04LWq84ryqt/8AjaKFO12a
          KAsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTAtMDlUMTY6Mzg6MzYrMDg6MDA8nDXCAAAAJXRF
          WHRkYXRlOm1vZGlmeQAyMDIxLTEwLTA5VDE2OjM4OjM2KzA4OjAwTcGNfgAAACB0RVh0c29mdHdh
          cmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBh
          Z2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0OIdghy0AAAAWdEVYdFRodW1i
          OjpJbWFnZTo6V2lkdGgANDh/z0egAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JW
          TgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MzM3Njg3MTYfrg0bAAAAEnRFWHRUaHVtYjo6U2l6ZQAx
          NjgyQkKYWsBsAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3Zp
          ZXcyXzlfMTYzMTU5MjMzNzY3ODc4MzRfNzlfWzBdjI0y0QAAAABJRU5ErkJggg==" ></image>
          </svg>
              <span class="overflow-hidden text-gray-400" :title="item.rooms">{{ item.rooms }}</span>
              <span class="ml-2 overflow-hidden text-gray-400" :title="item.roomAreas">{{ item.roomAreas }}</span>
            </div>
            <div class="flex flex-row items-end justify-between px-2 h-9">
              <div v-if="item.labels" class="flex flex-row items-end space-x-2">
                <span v-for="(label, index) in (item.labels.split(','))" v-show="index < 2" :key="index" class="px-1 overflow-hidden text-xs text-blue-600 align-text-bottom bg-blue-300 rounded-sm whitespace-nowrap" :title="label">{{ label }}</span>
              </div>
              <div>
                <div>
                  <span class="text-lg text-fjRed-100">{{ item.price }}</span>
                  <span class="text-xs text-gray-400">元/㎡</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as HouseApi, decorationType, buildType, saleState, phoneNum } from '~/api/model/houseModel'
import { Breadcrumb } from '~/types/app';
import { getDataResult } from '~/utils/response/util';
import LineEchart from '~/components/echart/LineEchart.vue';
const colors: string[] = ['bg-fjBlue-100 bg-opacity-20 text-fjBlue-100', 'bg-purple-200 text-purple-400', 'bg-red-200 text-red-400', 'bg-fuchsia-200 text-fuchsia-400', 'bg-gray-200 text-gray-400', 'bg-indigo-200 text-indigo-400'];
export default Vue.extend({
  name: 'HouseInfoMation',
  components: {
    LineEchart,
  },
  async asyncData ({ $axios, params, store }) {
    let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }

    // 获取价格
    const option: any = {
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      toolbox: {
        show: false,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} 元/㎡'
        }
      },
      series: [
        {
          data: [],
          type: 'line',
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
        }
      ]
    };
    const getPrice = (house: any) => {
      if (house.projectPriceLogEntities && house.projectPriceLogEntities.length > 0) {
        house.projectPriceLogEntities.forEach((item: any) => {
          if (item.price) {
            option.xAxis.data.push(item.createTime.split('T')[0]);
            option.series[0].data.push(item.price);
          }
        })
      }
    }

    // 获取楼盘详情
    let house: any;
    const scoreOption = {
      title: {
        text: '',
        top: '0',
        left: '0'
      },
      legend: {
        left: '0',
        top: '28',
        data: ['']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '位置评分', max: 5.0 },
          { name: '教育评分', max: 5.0 },
          { name: '医疗评分', max: 5.0 },
          { name: '交通评分', max: 5.0 },
          { name: '商业评分', max: 5.0 },
        ]
      },
      series: [
        {
          name: '',
          type: 'radar',
          data: [{ value: [0], name: ''}]
        }
      ]
    };
    const getHouse = async () => {
      const param: any = {
        data: {
          id,
        }
      }
      const result = await $axios.$post(HouseApi.GetProject, param)
      if (result.code === 200) {
        house = getDataResult(result);
        getPrice(house);
        scoreOption.title.text = `${house.name}综合评分`;
        scoreOption.legend.data = [house.name];
        scoreOption.series[0].data = [{
          value: [house.locationScore, house.educationScore, house.medicalScore, house.trafficScore, house.matchingScore],
          name: house.name
        }]

        const breadcrumb: Breadcrumb[] = [];
        breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
        breadcrumb.push({ title: '新房', href: '/house/list' })
        breadcrumb.push({ title: house.sysAreaByAreaId.name, href: '/house/list?areaId=' + house.sysAreaByAreaId.id })
        breadcrumb.push({ title: house.name, href: `/house/${house.id}.html` })
        breadcrumb.push({ title: '详情信息', href: '' })
        store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

      }
    }

    await getHouse();

    return {
      house, option, scoreOption
    }
  },
  data() {
    const showBuild: boolean = false;
    return {
      colors,
      buildType,
      decorationType,
      saleState,
      phoneNum,
      showBuild,
    }
  },
  computed: {
    getHotProject(): any {
      const that = this;
      const store = that.$store;
      const hotProject: [] = store.state.app.hotProject;
      return hotProject.slice(0, 4);
    }
  },
  methods: {
     changeShowBuild(flag: boolean) {
      this.showBuild = flag;
    },
  }
});
</script>