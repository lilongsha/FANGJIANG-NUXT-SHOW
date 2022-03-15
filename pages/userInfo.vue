<template>
<div class="w-full h-full sm:hidden"> 
  <div class="w-full h-screen fixed z-[-1] bg-[#F5F5F5]"></div>
  <div class="sm:w-full lg:mx-auto lg:container ">
    <div class="lg:h-20"></div>
    <div class="lg:flex lg:flex-row lg:mt-10 sm:m-2 ">
      <div class="lg:w-1/5">
        <div class="bg-white sm:flex sm:flex-row sm:justify-between lg:pt-6">
          <div class="text-center lg:text-[24px] lg:py-4"><button class=" border-b border-b-[#DDDDDD] lg:pb-6 lg:px-6" :class="type === '1' ? 'text-fjBlue-100' : 'text-black'" @click="changeType('1')">个人信息</button></div>
          <div class="text-center lg:text-[24px] lg:py-4"><button class="border-b border-b-[#DDDDDD] lg:pb-6 lg:px-6" :class="type === '2' ? 'text-fjBlue-100' : 'text-black'" @click="changeType('2')">修改密码</button></div>
          <div class="text-center lg:text-[24px] lg:py-4"><button class="border-b border-b-[#DDDDDD] lg:pb-6 lg:px-6" :class="type === '3' ? 'text-fjBlue-100' : 'text-black'" @click="changeType('3')">我的收藏</button></div>
          <div class="text-center lg:text-[24px] lg:py-4"><button class="lg:pb-6 lg:px-6" :class="type === '4' ? 'text-fjBlue-100' : 'text-black'" @click="changeType('4')">我的问答</button></div>
        </div>
      </div>
      
      <div class="bg-white lg:w-4/5 lg:ml-5 lg:p-16 sm:mt-4">
        <div v-show="type === '1'" class="sm:p-2">
          <div class="flex flex-row items-center justify-around w-full ">
            <div class="rounded-full lg:w-[168px] lg:h-[168px] sm:w-[80px] sm:h-[80px] text-center bg-[#DDDDDD] flex flex-row justify-around items-center">
              <Upload
                accept="image/*"
                :custom-request="customRequest"
                name="file"
                class="avatarClass"
                list-type="picture-card"
                :show-upload-list="false"
              >
                <img v-if="avatar" :src="avatar" class="rounded-full lg:w-[168px] lg:h-[168px] sm:w-[80px] sm:h-[80px]" alt="">
                <a-icon v-else type="instagram" class="sss" />
              </Upload>
            </div>
          </div>
          <div class="w-full lg:mt-14">
            <div class="lg:grid lg:grid-cols-2 lg:gap-y-8 justify-items-start">
              <div class="flex flex-col  lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
                <div>昵称</div>
                <div><input v-model="nickName" class="smallIn" type="text" autocomplete="off"></div>
              </div>
              <div class="flex flex-col place-self-end  lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
                <div>真实姓名</div>
                <div><input v-model="realName" class="smallIn" type="text" autocomplete="off"></div>
              </div>
              <div class="flex flex-col lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
                <div>性别</div>
                <div>
                  <Select v-model="gender"
                    size="large"
                    placeholder=""
                    :options="genderOptions"
                    class="selectClass"
                    @change="changeGender"
                  />
                </div>
              </div>
              <div class="flex flex-col place-self-end lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
                <div>省份</div>
                <div>
                  <Select v-model="province"
                    size="large"
                    placeholder=""
                    :options="provinceOptions"
                    class="selectClass"
                    @change="changeProvince"
                  />
                </div>
              </div>
              <div class="flex flex-col lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
                <div>城市</div>
                <div>
                  <Select v-model="city"
                    size="large"
                    placeholder=""
                    :options="cityOptions"
                    class="selectClass"
                    @change="changeCity"
                  />
                </div>
              </div>
              <div class="flex flex-col place-self-end  lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
                <div>区域</div>
                <div>
                  <Select v-model="area"
                    size="large"
                    placeholder=""
                    :options="areaOptions"
                    class="selectClass"
                    @change="changeArea"
                  />
                </div>
              </div>
              <div class="flex flex-col lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
                <div class="">允许信息推送
                  <a-switch default-checked @change="onMessageChange" />
                </div>
              </div>
              <div class="flex flex-col place-self-center lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
                <div class="">允许电话联系
                  <a-switch default-checked @change="onPhoneChange" />
                </div>
              </div>
            </div>
            
            <div class="lg:mt-10 sm:mt-2">
              <div class="text-right lg:mt-6 ">
                <button class="sm:mt-3 bg-fjBlue-100 text-white rounded-[6px] lg:w-[160px] lg:h-[50px] lg:px-12 lg:py-2 sm:px-4 sm:py-2 lg:text-[22px]" @click="save">
                  保存
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div v-show="type === '2'" class="p-2 lg:w-1/2 sm:w-full">
          <div class="grid grid-cols-1 lg:gap-y-8 justify-items-start sm:gap-y-4">
            <div class="flex flex-col  lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
              <div>旧密码</div>
              <div><input v-model="oldPassword" autocomplete="off" type="password" class="smallIn placeholder-[#999999]" placeholder="请输入旧密码"></div>
            </div>
            <div class="flex flex-col  lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
              <div>新密码</div>
              <div><input v-model="newPassword" autocomplete="off" type="password" class="smallIn placeholder-[#999999]" placeholder="请输入新密码"></div>
            </div>
            <div class="flex flex-col  lg:space-y-4 sm:space-y-2 text-[#666666] text-[18px]">
              <div>确认新密码</div>
              <div><input v-model="passwordOk" autocomplete="off" type="password" class="smallIn placeholder-[#999999]" placeholder="确认输入的新密码"></div>
            </div>
            <div class="text-center lg:w-[180px] lg:h-[50px] bg-fjBlue-100 text-white lg:text-[22px] rounded-md sm:h-[30px] sm:w-[90px]" >
              <button class="w-full h-full" @click="clickPass">保存</button>
            </div>
          </div>
        </div>
        <div v-show="type === '3'" class="sm:p-2">
          <div class="text-[#666666] lg:text-[24px]">新房</div>
          <div v-if="projectList && projectList.length > 0" class="w-full lg:mt-8 sm:mt-4">
            <a v-for="item in projectList" :key="item.id" :href="`/house/${item.id}.html`" class="w-full lg:py-7 sm:py-2 border-b border-b-[#DDDDDD] flex flex-row">
              <div class="w-1/3">
                <img v-if="item.firstImg" :src="item.firstImg.address" alt="" class="w-full lg:h-[176px] sm:w-full sm:h-24">
              </div>
              <div class="relative w-2/3 lg:ml-4 sm:ml-2">
                <div class="flex flex-row items-center w-full">
                  <div class="text-[#000000] lg:text-[20px] font-bold">{{ item.name }}</div>
                  <div class="lg:ml-3 sm:ml-2">
                    <h1 v-if="item.saleState === '1'" class="text-white rounded-sm bg-fjYellow-100">在售</h1>
                    <h3 v-if="item.saleState === '2'" class="text-white rounded-sm bg-fjBlue-100">待售</h3>
                    <h3 v-if="item.saleState === '3'" class="text-white rounded-sm bg-fjRed-100">售罄</h3>
                  </div>
                  <div class="absolute top-0 right-0">
                    <img v-if="like.includes(item.id) && isLike" src="~/assets/img/list/red.png" alt="" @click.stop="deleteLike(item.id)">
                    <img v-else src="~/assets/img/list/white.png" alt="" @click.stop="addLike(item.id)">
                  </div>
                </div>
                <div class="flex flex-row items-center mt-2 text-[#999999] text-[12px]">
                  <!-- 类型 -->
                  <HouseTypeLabel :sort="item.type" :class-name="'text-gray-400'" />
                  <!-- 面积 -->
                  <span v-if="item.hLayoutsById && item.hLayoutsById.length > 0" class="ml-2 text-gray-400">|</span>
                  <span v-if="getRoomArea(item.hLayoutsById)" class="ml-2 text-gray-400">{{ getRoomArea(item.hLayoutsById) }}</span>
                  <!-- 开盘时间 -->
                  <span v-if="item.openTime" class="ml-2 text-gray-400">|</span>
                  <span class="ml-2 text-gray-400" :title="getOpenTime(item.openTime)">{{ getOpenTime(item.openTime) }}</span>
                </div>
                <div class="lg:mt-6 text-[#999999] text-[12px] lg:flex lg:flex-row">
                  <div class="h-full lg:w-3/5">
                    <div class="flex flex-row items-center">
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
                      <span class="flex-shrink-0 overflow-hidden whitespace-nowrap lg:mr-4" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="getAreaAndTrading(item)">[{{ getAreaAndTrading(item) }}]<span class="overflow-hidden whitespace-nowrap" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="item.address">{{ item.address }}</span></span>
                    </div>
                    <div class="flex flex-row items-center lg:mt-2">
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
                      <span class="whitespace-nowrap">户型：</span>
                      <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" >{{getRoomList(item)}}</span>
                    </div>
                    <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0" class="lg:mt-4 sm:hidden">
                      <span v-for="(item1, index) in item.sysDictDetailBeans" :key="index" class="text-[12px] rounded px-2 py-1 mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
                    </div>
                  </div>
                  <div class="lg:w-2/5 h-full text-[#999999] text-[12px] lg:text-right sm:flex sm:flex-row">
                    <div class="w-full ">
                      <span v-if="item.price" class="text-[#DA1111] text-[32px] sm:text-[16px] font-bold">{{ item.price }}</span>
                      <span v-if="item.price">元/㎡起</span>
                      <span v-if="!item.price">暂无数据</span>
                    </div>
                    <div class="w-full">
                      <span>价格更新日期：</span>
                      <span v-if="item.updatePriceTime">{{ item.updatePriceTime.split('T')[0] }}</span>
                      <span v-else>暂无数据</span>
                    </div>
                    <div class="w-full sm:hidden">
                      <span v-if="item.priceDays">价格有效期：{{ item.priceDays }}天</span>
                      <span v-else>暂无数据</span>
                    </div>
                  </div>
                  
                </div>
                <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0" class="lg:hidden">
                  <span v-for="(item1, index) in item.sysDictDetailBeans" :key="index" class="text-[12px] rounded px-2 py-1 mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div v-show="type === '4'" class="sm:p-2">
          <div v-if="questions && questions.length > 0">
            <div v-for="item in questions" :key="item.id" class="border-b border-b-[#DDDDDD] min-h-[150px] mt-2">
              <div class="flex flex-row items-center" @click="clickDiscuss(item.id)">
                <div class="text-white bg-fjRed-100 p-1 rounded-[4px]">问</div>
                <div class="lg:ml-4 sm:ml-2 lg:text-[18px] text-[#333333] font-medium">{{ item.content }}</div>
              </div>
              <div v-if="item.answerEntities && item.answerEntities.length > 0">
                <div v-for="answer in item.answerEntities" :key="answer.id" class="flex flex-row w-full lg:mt-8 lg:pb-10">
                  <div class="w-3/4 overflow-hidden">
                    <div class="flex flex-row items-center lg:space-x-6 sm:space-x-2">
                      <img :src="answer.avatar" alt="" class="lg:w-[60px] lg:h-[60px] sm:w-[30px] sm:h-[30px] rounded-full flex-shrink-0">
                      <div class="lg:space-y-3 sm:space-y-1">
                        <div class="sm:text-xs text-[#666666] text-[20px]">{{ answer.author }}</div>
                        <div class="sm:text-xs text-[#666666] text-[18px]">{{ answer.content }}</div>
                        <div class="sm:text-xs text-[#999999]">{{ answer.createTime.split('T')[0] }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row items-end justify-end sm:w-2/5 lg:w-1/4 text-[#999999]">
                    <div class="lg:px-3 sm:px-1 border border-[#DDDDDD] flex flex-row items-center rounded-full space-x-2" @click="clickDiscuss(item.id)">
                      <img src="~/assets/img/answer.png" alt="">
                      <span>{{ item.answerEntities.length }}</span>
                    </div>
                    <div class=" lg:ml-4 sm:ml-2 flex flex-row items-center border border-[#DDDDDD] rounded-full space-x-2 lg:px-3 sm:px-1" @click="clickAgree(answer.id)"> 
                      <img v-if="agree.includes(answer.id)" src="~/assets/img/agree.png" alt="">
                      <img v-else src="~/assets/img/disagree.png" alt="">
                      <span v-if="agree.includes(answer.id)">{{ answer.likeNum + 1 }}</span>
                      <span v-else>{{ answer.likeNum }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import * as Cookies from 'js-cookie';
import { message, Select, Upload } from 'ant-design-vue';
import moment from 'moment';
import { AnswerApi, Api, CurrentApi, QuestionApi } from '~/api/user/userApi';
import { Breadcrumb } from '~/types/app';
import { getDataResult, getPageResult } from '~/utils/response/util';
import { LocationApi } from '~/api/model/areaModel';
import { encrypt } from '~/utils/crypto/cryptojs';
interface Option {
  value: '',
  label: ''
}
export default Vue.extend({
  name: 'UserInfo',
  components: {
    Select, 
    Upload,
  },
  props: {

  },
  async asyncData({ route, store, $axios, req }){
    const userAgent = req?.headers['user-agent'] || '';
    let isMobile:any;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }
    const breadcrumb: Breadcrumb[] = [];
    breadcrumb.splice(0)
    store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

    const areaOptions: Option[] = []
    const cityOptions: Option[] = []
    const provinceOptions: Option[] = []
    const genderOptions = [{ value:'1', label:'女'}, { value:'0', label:'男'}]

    const type = route.query?.redirect || '1';
    const tokenType = store.state.app.tokenType;
    const accessToken = store.state.app.accessToken;
    const pageNum = 0;
    const pageParam = {
      pageSize: 10,
      total: 0,
      pageNum,
    }
    const pageNumProject = 0;
    const pageParamProject = {
      pageSize: 10,
      total: 0,
      pageNumProject,
    }
    // 收藏
    let projectList: any[] = [];
    try {
      $axios.setHeader('Authorization', tokenType + ' ' + accessToken);
      const param = {
        page: {
          pageNumProject,
          pageSize: 10
        }
      }
      const result = await $axios.$post(CurrentApi.SelectFavorite, param)
      if (result?.code === 200) {
        const { content, page } = getPageResult(result)
        projectList = content;
        pageParamProject.total = page.totalElements
      }
    } catch (error) {
    } finally {
      $axios.setHeader('Authorization', '');
    }
    
    // 个人信息
    let userInfo;
    try {
      $axios.setHeader('Authorization', tokenType + ' ' +accessToken)
      const result = await $axios.$post(Api.GetCurInfo)
      if (result?.code === 200) {
        userInfo = result.data.content;
      }
    } catch (error) {
    } finally {
      $axios.setHeader('Authorization', '')
    }

    // 省份
    const param = {
      data: {}
    }
    const proResult = await $axios.$post(LocationApi.GetAllProvinces, param)
    if (proResult?.code === 200) {
      const result = getDataResult(proResult)
      if (result && result.length > 0) {
        result.forEach((item: any) => {
          provinceOptions.push({ value: item.id, label: item.name })
        })
      }
    }

    // 市
    if (userInfo.provinceId) {
      const param = {
        data: {
          id: userInfo.provinceId
        }
      }
      const result = await $axios.$post(LocationApi.GetAllCitiesByProvinceId, param);
      if (result?.code === 200) {
        const cities = getDataResult(result);
        if (cities && cities.length > 0) {
          cities.forEach((city: any) => {
            cityOptions.push({ value: city.id, label: city.name })
          })
        }
      }
    }

    // 区
    if(userInfo.cityId) {
      const param = {
        data: {
          id: userInfo.cityId
        }
      }
      const result = await $axios.$post(LocationApi.GetAllAreasByCityId, param);
      if (result?.code === 200) {
        const cities = getDataResult(result);
        if (cities && cities.length > 0) {
          cities.forEach((city: any) => {
            areaOptions.push({ value: city.id, label: city.name })
          })
        }
      }
    }

    // 我的问答
    let questions = []
    try {
      $axios.setHeader('Authorization', tokenType + ' ' + accessToken)
      const param = {
        data: {
          state: '1'
        },
        page: {
          pageNum,
          pageSize: pageParam.pageSize
        }
      }
      const result = await $axios.$post(QuestionApi.MyQuestion, param)
      if (result?.code === 200) {
        const { content, page } = getPageResult(result)
        questions = content;
        pageParam.total = page.totalElements
      }
    } catch (error) {
    } finally {
      $axios.setHeader('Authorization', '')
    }
    const like:any[] = [];
    if (projectList && projectList.length > 0) {
      projectList.forEach((project: any) => {
        like.push(project.id)
      })
    }
    return { 
      type, tokenType, accessToken, pageParam, pageNum, questions, isMobile, userInfo, 
      avatar: userInfo.avatar || '',
      realName: userInfo.realName || '',
      gender: userInfo.gender || '', 
      province: userInfo.provinceId || '', 
      nickName: userInfo.nickName || '',
      area: userInfo.areaId || '',
      city: userInfo.cityId || '',
      messageOk: userInfo.messageOk || '1',
      phoneOk: userInfo.phoneOk || '1',
      provinceOptions,
      cityOptions,
      areaOptions,
      genderOptions,
      password: userInfo.password || '',
      oldPassword: '',
      newPassword: '',
      passwordOk: '',
      isOk: true,
      Api,
      projectList,
      like,
      isLike: true,
      pageParamProject,
      pageNumProject,
    }
  },
  data(){
    const genderOptions = [{ value:'1', label:'女'}, { value:'0', label:'男'}]
    const areaOptions: Option[] = []
    const cityOptions: Option[] = []
    const provinceOptions: Option[] = []
    const pageNum = 0;
    const pageParam = {
      pageSize: 10,
      total: 0,
      pageNum,
    }
    const projectList: any[] = []
    const like: any[] = []
    const pageNumProject = 0;
    const pageParamProject = {
      pageSize: 10,
      total: 0,
      pageNumProject,
    }
    return {
      pageParamProject,
      pageNumProject,
      like,
      projectList,
      projects: [],
      genderOptions,
      areaOptions,
      cityOptions,
      provinceOptions,
      type: '1',
      accessToken: '',
      tokenType: '',
      pageParam,
      pageNum,
      questions: [],
      agree: [''],
      userInfo: {
        gender: '',
        nickName: '',
        messageOk: '0',
        avatar: '',
        cityId: '',
        phoneOk: '0',
        provinceId: '',
        realName: '',
        password: '',
        areaId: '',
        id: '',
        username: ''
      },
      avatar: '',
      gender: '',
      nickName: '',
      realName: '',
      city: '',
      area: '',
      messageOk: '1',
      phoneOk: '1',
      newPassword:'',
      oldPassword: '',
      password: '',
      passwordOk: '',
      isOk: true,
      retry: 1,
    }
  },
  watch: {},
  methods: {
    async addLike(id: string) {
      // 阻止冒泡
      const evt =  window.event;
      if (evt && evt.preventDefault) {
          evt.preventDefault();
          evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
      }
      this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
      const param = {
        data: {
          projectId: id
        }
      }
      try {
        const result = await this.$axios.$post(CurrentApi.AddFavoriteProject, param)
        if (result?.code === 200) {
          message.success({ content: '关注成功', duration: 3})
          this.like.push(id)
        }
      } catch (error) {
         message.error({ content: '关注失败', duration: 3})
      } finally {
        this.$axios.setHeader('Authorization', '')
      }
    },
    async deleteLike(id: string) {
      // 阻止冒泡
      const evt =  window.event;
      if (evt && evt.preventDefault) {
          evt.preventDefault();
          evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
      }

      this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
      const param = {
        data: {
          projectId: id
        }
      }
      try {
        const result = await this.$axios.$post(CurrentApi.DeleteFavorite, param)
        if (result?.code === 200) {
          message.success({ content: '取消关注', duration: 3})
          const index = this.like.indexOf(id)
          this.like.splice(index, 1)
          // this.$router.go(0)
        }
      } catch (error) {
         message.error({ content: '取消失败', duration: 3})
      } finally {
        this.$axios.setHeader('Authorization', '')
      }
    },
    getRoomList(room: any) {
      const flagObj = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      }
      if (room?.hLayoutsById) {
        room.hLayoutsById.forEach((item: any) => {
          if (item.room) {
            switch(item.room) {
              case 1:
                flagObj[1] = flagObj[1] + 1;
                break;
              case 2:
                flagObj[2] = flagObj[2] + 1;
                break;
              case 3:
                flagObj[3] = flagObj[3] + 1;
                break;
              case 4:
                flagObj[4] = flagObj[4] + 1;
                break;
              case 5:
                flagObj[5] = flagObj[5] + 1;
                break;
              default:
                flagObj[0] = flagObj[0] + 1;
                break;  
            }
          }
        })
      }
      let result: string = '';
      if (flagObj[1] !== 0) {
        result = result + '1居室（' + flagObj[1] + '）';
      }
      if (flagObj[2] !== 0) {
        result = result + '2居室（' + flagObj[2] + '）';
      }
      if (flagObj[3] !== 0) {
        result = result + '3居室（' + flagObj[3] + '）';
      }
      if (flagObj[4] !== 0) {
        result = result + '4居室（' + flagObj[4] + '）';
      }
      if (flagObj[5] !== 0) {
        result = result + '5居室（' + flagObj[5] + '）';
      }
      if (flagObj[0] !== 0) {
        result = result + '5居室以上（' + flagObj[0] + '）';
      }
      if (result === '') {
        result = '暂无数据'
      }
      return result;
    },
    getAreaAndTrading(item: any) {
      let result: string = '';
      if (item?.sysAreaByAreaId?.name) {
        result = result + item?.sysAreaByAreaId?.name;
      }
      if (item?.sysTradingAreasById && item?.sysTradingAreasById[0] && item?.sysTradingAreasById[0].name) {
        result = result + ' - ' + item?.sysTradingAreasById[0].name;
      }
      return result;
    },
    getOpenTime(openTime: string) {
      if (!openTime) {
        return ''
      }
      const o = new Date(openTime)
      return o.getFullYear() + '年' + (o.getMonth() + 1) + '月' + ' 开盘'
    },
    getRoomArea(rooms: any[]) {
      // 是否放到asyncData
      const areaObj: any = {};
      if (rooms && rooms.length > 0) {
        rooms.forEach((item) => {
          const area = item.area;
          areaObj[area] = area;
        })
      }
      
      const areaArray = Object.keys(areaObj)
      if (areaArray.length > 0) {
        return '建面约' + areaArray[0] + '-' + areaArray[areaArray.length - 1] + '㎡'
      }
      return ''
    },
    async clickPass() {
      if (!this.test(this.newPassword)) {
        message.info({ content: '密码格式不对。密码要数字加一位大写和一位小写字母，共8位', duration: 3 })
      }else 
      if (this.oldPassword && this.newPassword && this.passwordOk && (this.passwordOk === this.newPassword)) {
        const old = encrypt(this.oldPassword)
        const newP = encrypt(this.newPassword);
        const param = {
          data: {
            t: newP,
            o: old,
          }
        }
        let result;
        try {
          this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
          result = await this.$axios.$post(Api.Update, param)
          if (result?.code === 200) {
            message.success({ content: '修改密码成功', duration: 3 })
          } 
        } catch (error) {
          message.error({ content: '密码错误，或密码格式错误.数字加两位位字母，一位大写，共八位', duration: 3 })
        } finally {
          this.$axios.setHeader('Authorization', '')
        }
        
      }else if (this.passwordOk !== this.newPassword) {
        message.info({ content: '新密码与确认密码不同', duration: 3 })
      } else {
        message.info({ content: '请正确填写信息', duration: 3 })
      }
    },
    test(a: string) {
      const s = /(?!^\d+$)(?!^[a-zA-Z]+$)^[0-9A-Za-z]{8}$/
      return s.test(a)
    },
    customRequest(options: any) {
      const formData = new FormData();
      formData.append('file', options.file as any);
      formData.append('id', this.userInfo.id || '');
      this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
      this.$axios.$post(
        Api.UploadAvatar, 
        formData,
        { headers: { 'Content-Type': 'multipart/form-data;charset=UTF-8' } }
      )
      .then(async (res: any) => {
          options.onSuccess(res, options.file);
          const date = moment();
          this.userInfo.avatar = res.data + '&date=' + date;
          this.avatar = res.data + '&date=' + date;
          await this.$store.commit('app/Avatar', this.userInfo.avatar)
          Cookies.set('Avatar', this.userInfo.avatar, { expires: 7, })
        })
        .catch(() => {
          options.onError();
          message.error('上传失败，请删除重试');
        });
      this.$axios.setHeader('Authorization', '')
    },
    async save() {
      const param = {
        data: {
          gender: this.userInfo.gender,
          nickName: this.userInfo.nickName,
          messageOk: this.userInfo.messageOk,
          avatar: this.userInfo.avatar,
          cityId: this.userInfo.cityId,
          phoneOk: this.userInfo.phoneOk,
          provinceId: this.userInfo.provinceId,
          realName: this.userInfo.realName,
          password: this.userInfo.password,
          areaId: this.userInfo.areaId,
          id: this.userInfo.id,
          username: this.userInfo.username,
        }
      }
      try {
        this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
        const result = await this.$axios.$post(Api.UpdateInfo, param);
        if (result?.code === 200) {
          message.success({ content: '保存成功', duration: 3 })
          await this.$store.commit('app/UserId', this.userInfo.id)
          await this.$store.commit('app/UserName', this.userInfo.username)
          await this.$store.commit('app/Avatar', this.userInfo.avatar)
          await this.$store.commit('app/NickName', this.userInfo.nickName)
          await this.$store.commit('app/Gender', this.userInfo.gender)
          Cookies.set('UserName', this.userInfo.username, { expires: 7, })
          Cookies.set('Gender', this.userInfo.gender, { expires: 7, })
          Cookies.set('UserId', this.userInfo.id, { expires: 7, })
          Cookies.set('RealName', this.userInfo.realName, { expires: 7, })
          Cookies.set('ProvinceId', this.userInfo.provinceId, { expires: 7, })
          Cookies.set('PhoneOk', this.userInfo.phoneOk, { expires: 7, })
          Cookies.set('Password', this.userInfo.password, { expires: 7, })
          Cookies.set('NickName', this.userInfo.nickName, { expires: 7, })
          Cookies.set('MessageOk', this.userInfo.messageOk, { expires: 7, })
          Cookies.set('CityId', this.userInfo.cityId, { expires: 7, })
          Cookies.set('AreaId', this.userInfo.areaId, { expires: 7, })
          Cookies.set('Avatar', this.userInfo.avatar, { expires: 7, })
          this.$router.go(0)
        }

      } catch (error) {
      } finally {
        this.$axios.setHeader('Authorization', '')
      }
      
    },
    onPhoneChange(checked: any) {
      if (checked) {
        this.userInfo.phoneOk = '1'
      } else {
        this.userInfo.phoneOk = '0'
      }
    },
    onMessageChange(checked: any) {
      if (checked) {
        this.userInfo.messageOk = '1'
      } else {
        this.userInfo.messageOk = '0'
      }
    },
    changeGender(value: any) {
      this.userInfo.gender = value;
    },
    changeType(type: string) {
      this.type = type;
    },
    clickDiscuss(id: string) {
      this.$router.push('/house/discuss/' + id + '.html')
    },
    async clickAgree(answerId: string) {
      if (this.agree.includes(answerId)) {
        return
      }
      try {
        this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
        const param = {
          data: {
            id: answerId,
          }
        }
        const result = await this.$axios.$post(AnswerApi.Agree, param)
        if (result?.code === 200) {
          this.agree.push(answerId)
        }
      } catch (error) {
        
      } finally {
        this.$axios.setHeader('Authorization', '')
      }
    },
    async changeCity(value: string) {
      this.userInfo.cityId = value || '';
      const param = {
        data: {
          id: value
        }
      }
      const result = await this.$axios.$post(LocationApi.GetAllAreasByCityId, param);
      if (result?.code === 200) {
        const cities = getDataResult(result);
        this.areaOptions.splice(0);
        this.area = '';
        if (cities && cities.length > 0) {
          cities.forEach((city: any) => {
            this.areaOptions.push({ value: city.id, label: city.name })
          })
        }
      }
    },
    changeArea(value: string) {
      this.userInfo.areaId = value;
    },
    async changeProvince(value: string) {
      this.userInfo.provinceId = value
      const param = {
        data: {
          id: value
        }
      }
      const result = await this.$axios.$post(LocationApi.GetAllCitiesByProvinceId, param);
      if (result?.code === 200) {
        const cities = getDataResult(result);
        this.cityOptions.splice(0);
        this.city = '';
        this.area = '';
        if (cities && cities.length > 0) {
          cities.forEach((city: any) => {
            this.cityOptions.push({ value: city.id, label: city.name })
          })
        }
      }
    }
  }
})
</script>
<style scoped>
  .sss >>> * {
    @apply object-center lg:w-[50px] lg:h-10;
  }
  .smallIn {
    @apply lg:w-[300px] lg:h-[50px] border border-[#DDDDDD] lg:text-[20px] text-[#333333] rounded-lg px-4;
  }
  .birthClass >>> .ant-calendar-picker-input {
    @apply lg:w-[300px] lg:h-[50px] rounded-lg lg:text-[18px] text-[#333333];
  }
  .birthClass >>> .anticon {
    @apply lg:w-4 lg:h-4;
  }
  .selectClass >>> .ant-select-selection {
    @apply lg:w-[300px] lg:h-[50px] border border-[#DDDDDD] lg:text-[20px] text-[#333333] rounded-lg px-4 flex flex-row items-center;
  }
  .avatarClass {
    @apply lg:w-[168px] lg:h-[168px] sm:w-[80px] sm:h-[80px];
  }
  .avatarClass >>> *{
    @apply lg:w-[168px] lg:h-[168px] sm:w-[80px] sm:h-[80px] rounded-full;
  }
  .avatarClass >>> .ant-upload {
    @apply p-0 bg-[#DDDDDD];
  }
  .avatarClass >>> .sss {
    @apply object-center lg:w-[50px] lg:h-10;
  }
</style>