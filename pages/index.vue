<template>
  <div class="w-full">
    <!-- 轮播图功能区域定位 -->
    <div class="absolute z-10 flex flex-row w-full h-64 top-28">
      <div class="w-1/3"></div>
      <!-- 轮播图功能区域 -->
      <div class="container h-full mx-auto">
        <!-- 菜单 -->
        <div class="menu-box" @mouseleave="closeMenu()">
          <!-- 菜单左侧 -->
          <div class="menu-box-left">
            <!-- 菜单区域 -->
            <div class="menu-item group" @mouseover="openMenu(1)">
              <div class="menu-item-left">
                <div class="menu-item-left-content">
                  <span class="">
                    <svg version="1.1" class="w-6 h-6 pr-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
                    RQflCgoAIhwc48I7AAADzElEQVRYw9WYb2jVZRTHP3e7a7lK3EihSRAsjUAqnZhvQiyhP5iKBhMz
                    hkStvyssQySExBeVvchqaQghvQhbLAqN2guVQqRaI1Lof5ZLnU6yzVpLx/bpxf3d6+937+/e+9ua
                    LzoPjPuc8z3n+zzPPec8z11KLq5UXOT4pBPi7uJObqCOSaQYop/D7Gc3Qwk8LT9W+r1x0usj5b3L
                    Aa53fyRonyci80Pe8l8IljocBPrOrd7uTKtN2+BCN/lVjuSh8RI0BwGGfTDWfp9nA8TG8RCsDpw/
                    dmZRzHTfDVCtYyWYFDi+XvZrXB8gp42NYLuqexPkGO4ohY13qVd10FQiAvxF1cbkBC+oujZPu8Cd
                    /uAR2707z7JE1Y6kBBWeVv/KW/9rkfx/z5qI9SdV65IRLFL1lYhubxD4V3/MVUZVyL5O1YcLo8U1
                    u3kAfBjSrOBWANZwDTNo4jxwHU+FEF0AzE7WTa8CoC+keRSAZ9kJQDvNACwLIf4BYHoygqkA/BHS
                    XAtAW26+izNAbQjxNwCXJSPoL9BUAnA+VpuRkdDfsgRHQ6vOyCEANufmT1IH9IYQUwA4FRMtJovm
                    q9oW0swNMmeHs53ly8GsKYR4QtWWpIXWr/ZbUdAOwhJtDd+OpQ5wi6rrShZaOmRbqur7yVvFZFWH
                    rE3YKk6q2pCcAJ9W9WCiVteu6rZ4a3G3HlU/Kht+m6rHitmLO94cnHZbyfBrA9SSsRNccN5QFJG9
                    Vp8vHiXJ9nVRrLUxsH5QKka+otIqK63K1cA7QZA7ClznOxBJhJSXWGlVJH3zCG6y02P2etxef/NN
                    q0V8LqDYFHF8PFfbmflGezzpcXs94T4XxBGk/TOvVqdEUlY7cqvL1vVLOe+RPN/6QoLlqp7ygF12
                    +7mrQ+vN7uIbJ4ufBrPtIcQyD9ptlwfsVfXFQoLdqi4s8mWtCYIe9XDwaUsRZIOqPfkENY6qZ0rk
                    w232h47g/hLIL1S9MUrwgKpbSyZtvZ2qdju3JO4ZVV+NEmQ2PqekI+KGokdzYcxTdTCTEuFzOxd5
                    iIx/pDyt6mIx+AmVeSXsYzjmyruCOkZDd6+hn10VnI08DrKX5C4eA5rZk70yj6h6b8xqmv1dHSky
                    dMD1MV5zVB22OnNEs1QdzXsMZsbPlpe4Y8o0+xWZ7bYC8HbwtonKKlqYWvBgyUoVA7wVa3mDzUAr
                    HZh2ULVM6o11TAt2d3UFy6kBvuZLJlL62ANAU5p7APiMWi6fQIJzfMJioDEdPFtbaJnQHeQk5Qw6
                    uZJLqZrgyKMMMsTK1P/+vy3/Ao9ouJ5JGHj8AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEwLTA5
                    VDE2OjM0OjI4KzA4OjAwujWujwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMC0wOVQxNjozNDoy
                    OCswODowMMtoFjMAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAA
                    ABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpI
                    ZWlnaHQANDiHYIctAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADQ4f89HoAAAABl0RVh0VGh1
                    bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjMzNzY4NDY4
                    tREIggAAABJ0RVh0VGh1bWI6OlNpemUAMjA5MUJCK3SeXgAAAEZ0RVh0VGh1bWI6OlVSSQBmaWxl
                    Oi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2MzE3NTc1MjUzMzIxNDQ5XzYzX1swXcGG
                    154AAAAASUVORK5CYII=" ></image>
                    </svg>
                    <!-- <svg t="1630750851703" class="w-6 h-6 pr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17555" width="128" height="128"><path d="M738.304 852.8896H309.1968a134.1952 134.1952 0 0 1-134.0928-134.0928V218.2144a134.1952 134.1952 0 0 1 134.0928-134.0928h429.1072a134.1952 134.1952 0 0 1 134.0928 134.0928v500.5824a134.1952 134.1952 0 0 1-134.0928 134.0928zM309.1968 137.728a80.5376 80.5376 0 0 0-80.4352 80.4864v500.5824a80.5376 80.5376 0 0 0 80.4352 80.4864h429.1072a80.5888 80.5888 0 0 0 80.4864-80.4864V218.2144A80.5888 80.5888 0 0 0 738.304 137.728z" fill="#ffffff" p-id="17556" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M200.2432 546.6112h647.0656v53.6576H200.2432zM316.0064 938.496a26.8288 26.8288 0 0 1-19.0464-45.7728l75.8784-75.8784a26.8288 26.8288 0 0 1 37.9904 38.1952l-75.8784 75.5712a26.5728 26.5728 0 0 1-18.944 7.8848zM731.5456 938.496a26.5728 26.5728 0 0 1-18.944-7.8848L636.7232 855.04a26.8288 26.8288 0 0 1 37.9392-37.9392l75.8784 75.8784a26.8288 26.8288 0 0 1-18.9952 45.7728z" fill="#ffffff" p-id="17557" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M398.592 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17558" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path><path d="M648.9088 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17559" data-spm-anchor-id="a313x.7781069.0.i9" class="selected"></path></svg> -->
                  </span>
                  <span class="text-lg text-white">区域</span>
                </div>
                <svg
                  class="w-5 h-5 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- 菜单商圈 -->
            <div class="menu-item group" @mouseover="openMenu(2)">
              <div class="menu-item-left">
                <div class="flex flex-row items-center transition-all group-hover:pl-4">
                  <span class="">
                    <svg version="1.1" class="w-6 h-6 pr-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
                    RQflCgoAJBE0CBkAAAACYklEQVRYw+2Xz0sUYRjHP7ON2aIYBaVu9NNVg6BMMrek6C/oVFBESRBU
                    eJAg6B508VIni7oEnqrt0kZ1KawOSZgZhBFYB40tC4RAibZtHg877cy2+84748wSgd8XXuZ953mf
                    zzzPMM/7jiG4VM9ZttFMLd76zjcmuc4seonT2uSjBNFnaRN0zXBFMM4OALLUaJ7qF40sA16xy38E
                    +0VE5Im0S1waNC0urTIsIiIpXQTOZa+IiJzRB223oyIi0quzixVDWQOgTY6jFQBYOjMHYABg+gaY
                    QQFa08UpFt7FPwaocr6OjeQrzNcwzVR4wB4eE1esyNPDy+Lo5+JSlFC6B5O12vXaCO5ykFRFSI5R
                    7rvGl5jhaXAAZMjong2AJMOc40rQFAXTZe6oC3xYwD2ywCHesr06gIt08wZIMsKpagC28olObgJx
                    bnCt3F8U78DiJH3kgdM8pyV6AMAg3bwD9jJm74sRA2CMDm4BDTyizplWfQebaK1Yi0zeK2tRjiPk
                    OE4TA/R5Azp4Ye9Y5ZpjH+PKOE7QwxaOcZ4fXilKKN1DPc2eqUoDK+nyjuABh9lZOBSUyMBggoee
                    gKyd4mdeAEiTJoya/lxEv6MVPFqlw+hVTO7/v+kvAbRSfQerSCnuvOZLeEAXGRoVK+Y5wKh/QOUU
                    bVa6hzr7oB8qgtvU0km+rBbBckY0tcgXAIYYCuImaIoi1BIgAMBy9X7029W79ZcfBzDv6v2oYDmn
                    mC/6MWQ3F1iNsIEWYJJp+4fWW0KCdmCCmRJ7YT1J4ANTGMwyYEhWc0oIp68mV+knVpW/5BgWgwt8
                    9yeCUUe6zwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0wOVQxNjozNjoxNyswODowMMYHCbgA
                    AAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMDlUMTY6MzY6MTcrMDg6MDC3WrEEAAAAIHRFWHRz
                    b2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVu
                    dDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADQ4h2CHLQAAABZ0RVh0
                    VGh1bWI6OkltYWdlOjpXaWR0aAA0OH/PR6AAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9w
                    bmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYzMzc2ODU3Nz13TmUAAAASdEVYdFRodW1iOjpT
                    aXplADE2OTZCQifvD9UAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMv
                    aW1ndmlldzJfOV8xNjMxNzU3NTI5NTY4OTc4NF83M19bMF1sMAGYAAAAAElFTkSuQmCC" ></image>
                    </svg>
                  </span>
                  <span class="text-lg text-white">商圈</span>
                </div>
                <svg
                  class="w-5 h-5 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- 菜单地铁 -->
            <div class="menu-item group" @mouseover="openMenu(3)">
              <div class="menu-item-left">
                <div class="flex flex-row items-center transition-all group-hover:pl-4">
                  <span class="">
                    <svg t="1630750851703" class="w-6 h-6 pr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17555" width="128" height="128"><path d="M738.304 852.8896H309.1968a134.1952 134.1952 0 0 1-134.0928-134.0928V218.2144a134.1952 134.1952 0 0 1 134.0928-134.0928h429.1072a134.1952 134.1952 0 0 1 134.0928 134.0928v500.5824a134.1952 134.1952 0 0 1-134.0928 134.0928zM309.1968 137.728a80.5376 80.5376 0 0 0-80.4352 80.4864v500.5824a80.5376 80.5376 0 0 0 80.4352 80.4864h429.1072a80.5888 80.5888 0 0 0 80.4864-80.4864V218.2144A80.5888 80.5888 0 0 0 738.304 137.728z" fill="#ffffff" p-id="17556" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M200.2432 546.6112h647.0656v53.6576H200.2432zM316.0064 938.496a26.8288 26.8288 0 0 1-19.0464-45.7728l75.8784-75.8784a26.8288 26.8288 0 0 1 37.9904 38.1952l-75.8784 75.5712a26.5728 26.5728 0 0 1-18.944 7.8848zM731.5456 938.496a26.5728 26.5728 0 0 1-18.944-7.8848L636.7232 855.04a26.8288 26.8288 0 0 1 37.9392-37.9392l75.8784 75.8784a26.8288 26.8288 0 0 1-18.9952 45.7728z" fill="#ffffff" p-id="17557" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M398.592 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17558" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path><path d="M648.9088 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17559" data-spm-anchor-id="a313x.7781069.0.i9" class="selected"></path></svg>
                  </span>
                  <span class="text-lg text-white">地铁</span>
                </div>
                <svg
                  class="w-5 h-5 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- 菜单右侧menu-right -->
          <div v-show="menuShow.isShow" class="w-3/5 h-full ml-4 transition-all bg-black bg-opacity-80 rounded-2xl">
            <!-- 区域 -->
            <div v-show="menuShow.flag === 1" class="grid grid-flow-row grid-cols-5 gap-4 m-8 text-center text-white">
              <a v-for="area in areas" :key="area.id" class="overflow-hidden text-base text-white border-blue-500 rounded-xl whitespace-nowrap opacity-60 hover:opacity-100" :href="`/house/list?areaId=${area.id}`" target="_blank">{{ area.name }}</a>
            </div>
            <!-- 商圈 -->
            <div v-show="menuShow.flag === 2" class="flex flex-row w-full h-full py-4 ml-4 text-lg text-white">
              <div class="flex flex-col w-1/5 h-full space-y-2 overflow-auto">
                <div v-for="area in areas" :key="area.id" class="flex flex-row justify-between w-full text-sm opacity-60 hover:opacity-100" @click="getTradings(area.id)">
                  <span>{{ area.name }}</span>
                  <svg
                  class="w-3 h-3 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
                </div>
              </div>
              <div v-show="!showTrading" class="w-2/3 h-full ml-2">
                <div class="grid w-full grid-flow-row grid-cols-3 gap-2 overflow-auto text-center">
                  <a v-for="trading in tradings" :key="trading.id" class="h-6 overflow-hidden text-xs text-white border-blue-500 rounded-xl whitespace-nowrap opacity-60 hover:opacity-100" :href="`/house/list?tradingId=${trading.id}`" target="_blank">{{ trading.name }}</a>
                </div>
                <AppLoading ref="loadingTrading" :box-class="'w-full h-full rounded-xl'" :height="'32px'" :width="'6px'"  />
              </div>
            </div>
            <!-- 地铁 -->
            <div v-show="menuShow.flag === 3" class="flex flex-row w-full h-full py-4 ml-4 text-lg text-white">
              <div class="flex flex-col w-1/5 h-full space-y-2 overflow-auto">
                <div v-for="metroLine in metroLines" :key="metroLine.id" class="flex flex-row justify-between w-full text-sm opacity-60 hover:opacity-100" @click="getMetroStations(metroLine.id)">
                  <span>{{ metroLine.name }}</span>
                  <svg
                  class="w-3 h-3 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
                </div>
              </div>
              <div v-show="!showMetroStation" class="static w-2/3 h-full ml-2">
                <div class="grid w-full grid-flow-row grid-cols-3 gap-2 overflow-auto text-center text-white">
                  <a v-for="metroStation in metroStations" :key="metroStation.id" class="overflow-hidden text-xs text-white border-blue-500 rounded-xl whitespace-nowrap opacity-60 hover:opacity-100" :href="`/house/list?metroStationId=${metroStation.id}`" target="_blank">{{ metroStation.name }}</a>
                </div>
                <AppLoading ref="loadingMetroStation" :box-class="'w-full h-full rounded-xl'" :height="'32px'" :width="'6px'"  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3"></div>
    </div>
    <!-- banner 轮播图 -->
    <a-carousel class="w-full h-[450px]" dot-position="right" effect="fade" autoplay>
      <img
        v-for="item in banners"
        :key="item.id" 
        class="object-cover w-full h-[450px]"
        height="450px"
        width="100%"
        :src="item.address"
        :title="item.title"
        :alt="item.description"
      />
    </a-carousel>
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
      <div class="flex flex-row w-[full-8] mx-4 mt-8 h-96 overflow-hidden">
        <a v-for="item in recommendProjects" :key="item.id" :href="`/house/${item.id}.html`" target="_blank" :class="selectRecommendKey === item.id ? 'select-recommend' : '' " class="relative block h-full transition-all duration-500 ease-in-out w-1/10">
          <img v-if="item.firstImg" :src="item.firstImg.address" :alt="item.name" width="10%" class="object-cover w-full h-full" height="100%" @mouseover="selectRecommendKey = item.id">
          <div v-show="selectRecommendKey === item.id" class="absolute bottom-0 flex flex-row justify-between w-full px-4 py-4 text-2xl font-bold text-white bg-black whitespace-nowrap bg-opacity-30">
            <span>{{ item.name }}</span>
            <div>
              <span class="text-fjRed-100 ">{{ item.price }}</span>
              <span class="text-sm">元/㎡</span>
            </div>
          </div>
        </a>
          <!-- <img v-for="item in recommendProjects" :key="item.id" :src="item.firstImg.address" :alt="item.name" width="10%" :class="selectRecommendKey === item.id ? 'select-recommend' : '' " class="object-cover h-full transition-all duration-500 ease-in-out w-1/10" height="100%" @mouseover="selectRecommendKey = item.id">
          <div v-for="item in recommendProjects" v-show="selectRecommendKey === item.id" :key="item.id"  class="">{{ item.name }}</div> -->
      </div>
    </div>
    <!-- 热销楼盘 -->
    <div class="container mx-auto mt-12">
      <!-- 标题 -->
      <div class="flex flex-row items-center w-full ml-4 h-9">
        <!-- 竖线 -->
        <div class="w-4 h-full bg-black"></div>
        <!-- 标题内容 -->
        <div class="ml-2 text-xl font-bold">热销楼盘</div>
      </div>
      <!-- 图片盒子 -->
      <div class="grid grid-cols-4 grid-rows-1 gap-2 w-[full-8] mx-4 mt-8 h-112 overflow-hidden">
        <a v-for="item in hotProjects" :key="item.id" :href="`/house/${item.id}.html`" target="_blank" class="block w-[96%] h-[96%] mx-[2%] my-[2%] shadow-lg">
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
              <span v-if="item.address" class="overflow-hidden text-gray-400" :title="item.address">{{ item.address }}</span>
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
                  <span class="text-2xl font-bold text-fjRed-100">{{ item.price }}</span>
                  <span class="text-xs text-gray-400">元/㎡</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 资讯 -->
    <div class="container mx-auto mt-12">
      <!-- 标题 -->
      <div class="flex flex-col items-center justify-center">
        <div class="ml-2 text-xl font-bold">楼盘资讯</div>
        <div class="h-3 bg-black w-9"></div>
      </div>
      <!-- 内容 -->
      <div class="container mx-auto mt-8 overflow-hidden h-112">
        <div class="flex flex-row justify-center space-x-6 text-gray-500">
          <span :class="newsType === '1' ? 'text-blue-600' : ''" class="hover:text-blue-300" @click="newsType = '1'">实探楼盘</span>
          <span :class="newsType === '2' ? 'text-blue-600' : ''" class="hover:text-blue-300" @click="newsType = '2'">房贷利率</span>
          <span :class="newsType === '3' ? 'text-blue-600' : ''" class="hover:text-blue-300" @click="newsType = '3'">楼市政策</span>
          <a class="text-gray-500 hover:text-fjBlue-100" @click="goNews">查看更多</a>
        </div>
        <div v-for="(list, index) in newsObj" v-show="newsType === index" :key="index" class="grid w-full h-full grid-cols-2 grid-rows-2 gap-4 px-4 mt-2">
          <a v-for="item in list" :key="item.id" :href="`/info/${item.id}.html`" class="flex flex-row w-full h-full bg-black shadow-lg" :title="item.title">
            <img :src="item.img" :alt="item.title" height="100%" width="100%" class="object-cover w-64 h-full">
            <div class="w-full h-full px-4 py-4 bg-white">
              <div class="w-full text-xl font-bold text-black">
                {{ item.title }}
              </div>
              <div class="w-full h-16 overflow-hidden text-base text-gray-400 mt-7">
                {{ item.description}}
              </div>
              <div class="w-full text-right text-gray-400 mt-7">
                {{ item.createTime.split('T')[0] }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 置业管家 -->
    <div></div>
    <!-- 大数据 -->
    <div></div>
    <!-- 购房流程 -->
    <div class="container mx-auto mt-12">
      <!-- 标题 -->
      <div class="flex flex-col items-center justify-center">
        <div class="ml-2 text-xl font-bold">在线服务流程</div>
        <div class="h-3 bg-black w-9"></div>
        <!-- 副标题 -->
        <div class="text-base text-gray-500 mt-7">一站式看房服务</div>
      </div>
      <!-- 内容0 -->
      <div v-show="processType === '0'" class="grid w-full grid-cols-3 grid-rows-1 gap-4 shadow-lg h-36">
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-1"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">搜房源</span>
            <span>超多楼盘，任您选择</span>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-2"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">帮我找房</span>
            <span>平时太忙，房匠满足您的个性化需求</span>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-3"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">在线咨询</span>
            <span>看的太多不好选择，联系我们</span>
          </div>
        </div>
      </div>
      <!-- 内容1 -->
      <div v-show="processType === '1'" class="grid w-full grid-cols-3 grid-rows-1 gap-4 shadow-lg h-36">
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-1"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">搜房源</span>
            <span>超多楼盘，任您选择</span>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-2"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">帮我找房</span>
            <span>平时太忙，房匠满足您的个性化需求</span>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-3"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">在线咨询</span>
            <span>看的太多不好选择，联系我们</span>
          </div>
        </div>
      </div>
      <!-- 内容2 -->
      <div v-show="processType === '2'" class="grid w-full grid-cols-3 grid-rows-1 gap-4 shadow-lg h-36">
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-1"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">搜房源</span>
            <span>超多楼盘，任您选择</span>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-2"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">帮我找房</span>
            <span>平时太忙，房匠满足您的个性化需求</span>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-3"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">在线咨询</span>
            <span>看的太多不好选择，联系我们</span>
          </div>
        </div>
      </div>
      <!-- 内容3 -->
      <div v-show="processType === '3'" class="grid w-full grid-cols-3 grid-rows-1 gap-4 shadow-lg h-36">
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-1"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">搜房源</span>
            <span>超多楼盘，任您选择</span>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-2"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">帮我找房</span>
            <span>平时太忙，房匠满足您的个性化需求</span>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="w-10 h-10 mr-4 bg-contain bg-index-3"></div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-black">在线咨询</span>
            <span>看的太多不好选择，联系我们</span>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between w-full h-20 pl-20 mt-12 pr-28">
        <div :class="processType === '0' ? ' process-select' : 'process-unselect'" class="border-b-[3px] relative" @mouseover="processType = '0'">
          <div class="z-10 text-xl">选房</div>
          <div class="absolute bottom-0 z-0 text-5xl italic font-bold -right-10 opacity-30 process-child">01</div>
        </div>
        <img src="~/assets/img/index-right.png" />
        <div :class="processType === '1' ? ' process-select' : 'process-unselect'" class="border-b-[3px] relative" @mouseover="processType = '1'">
          <div class="z-10 text-xl">预约看房</div>
          <div class="absolute bottom-0 z-0 text-5xl italic font-bold opacity-30 -right-10">02</div>
        </div>
        <img src="~/assets/img/index-right.png" />
        <div :class="processType === '2' ? ' process-select' : 'process-unselect'" class="border-b-[3px] relative" @mouseover="processType = '2'">
          <div class="z-10 text-xl">实地看房</div>
          <div class="absolute bottom-0 z-0 text-5xl italic font-bold opacity-30 -right-10">03</div>
        </div>
        <img src="~/assets/img/index-right.png" />
        <div :class="processType === '3' ? ' process-select' : 'process-unselect'" class="border-b-[3px] relative" @mouseover="processType = '3'">
          <div class="z-10 text-xl ">认筹认购</div>
          <div class="absolute bottom-0 z-0 text-5xl italic font-bold opacity-30 -right-10">04</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex';
import { Api as AreaApi, AreaByCondition, AreaModel } from '@/api/model/areaModel'
import { Api as TradingAreaApi, TradingAreaByCondition, TradingAreaModel } from '@/api/model/tradingAreaModel';
import { Api as BannerApi, BannerByCondition, BannerModel } from '@/api/model/bannerModel';
import { Api as MetroLineApi, MetroLineByCondition, MetroStationByCondition, MetroStationModel, MetroLineModel } from '@/api/model/metroLineModel';
import { Api as ProjectApi, RecommendProjectByCondition } from '@/api/model/houseModel';
import { Api as NewsApi } from '@/api/model/newsModel';
import { BaseListResult, BasePageResult } from '@/api/model/baseModel';
import { getDataResult } from '@/utils/response/util';

export default Vue.extend({
  name: 'Home',
  async asyncData({ $axios, store }) {
    // banner
    const bannerData: BannerByCondition = {
      cityId: store.state.app.cityId,
    };
    const bannerParam: any = {
      data: bannerData
    };
    let banners: BannerModel[] = [];
    // 获取banner
    const getBannerResult = async () => {  
      const bannerResult:BaseListResult<BannerModel> = await $axios.$post(BannerApi.GetBanners, bannerParam)
      if (bannerResult.code === 200) {
        banners = getDataResult(bannerResult);
      }
    }

    // 区域参数
    const areaData: AreaByCondition = {
      id: store.state.app.cityId,
      state: '1',
    };
    const areaParam: any = {
      data: areaData
    };
    let areas: any[] = [];
    // 获取区域
    const getAreasResult = async () => {
      const areaResult:BaseListResult<AreaModel> = await $axios.$post(AreaApi.GetAllAreas, areaParam)
      if (areaResult.code === 200) {
        areas = getDataResult(areaResult);
      }
    }

    // metro line
    const metroLineData: MetroLineByCondition = {
      cityId: store.state.app.cityId,
    };
    const metroLineParam: any = {
      data: metroLineData
    };
    let metroLines: MetroLineModel[] = [];
    // 获取地铁线路
    const getMetroLinesResult = async () => {
      const metroLineResult:BaseListResult<MetroLineModel> = await $axios.$post(MetroLineApi.GetAllLines, metroLineParam)
      if (metroLineResult.code === 200) {
        metroLines = getDataResult(metroLineResult);
      }
    }
    

    // 获取推荐楼盘
    const recommendProject: RecommendProjectByCondition = {
      cityId: store.state.app.cityId,
    };
    const recommendProjectParam: any = {
      data: recommendProject
    }
    let recommendProjects: any[] = []
    let selectRecommendKey;
    // 获取推荐楼盘
    const getRecommendProjectResult = async () => {
      const recommendProjectResult:BaseListResult<any> = await $axios.$post(ProjectApi.GetRecommendByCityId, recommendProjectParam);
      if (recommendProjectResult.code === 200) {
        recommendProjects = getDataResult(recommendProjectResult);
        selectRecommendKey = recommendProjects[0].id;
      }
    }
    
     

    // 处理数据
    const getRooms = (rooms: any[]) => {
      // 是否放到asyncData
      const roomObj: any = {};
      if (rooms && rooms.length > 0) {
        rooms.forEach((item) => {
          const room = item.room;
          roomObj[room] = room;
        })
      }
      const roomArray = Object.keys(roomObj)
      const result: string = roomArray.toString().replace(',', '室/')
      if (result) {
        return result + '室'
      }
      return '暂无数据'
    }
    const getRoomArea = (rooms: any[]) => {
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
      return '暂无数据'
    }

    // 获取热销楼盘
    const hotProjectParam: any = {
      data: {
        cityId: store.state.app.cityId
      },
      page: {
        pageNum: 0,
        pageSize: 4,
      },
      sort: {
        desc: ['orderNum'],
      },
    }
    let hotProjects: any[] = []
    // 获取热销楼盘
    const getHotProject = async () => {
      const hotProjectResult:BasePageResult<any> = await $axios.$post(ProjectApi.GetByCityIdAndOrder, hotProjectParam);
    
      if (hotProjectResult.code === 200) {
        hotProjects = getDataResult(hotProjectResult);
        hotProjects.forEach((item) => {
          const rooms = getRooms(item.hLayoutsById);
          item.rooms = rooms;
          const roomAreas = getRoomArea(item.hLayoutsById);
          item.roomAreas = roomAreas;
        })
      }
    }

    await Promise.all([
      getHotProject(),
      getRecommendProjectResult(),
      getMetroLinesResult(),
      getAreasResult(),
      getBannerResult(),
    ])

    // 获取资讯 7: 实探楼盘 4: 房贷利率 3: 楼市政策
    const getNews7 = async () => {
      const newsParam: any = {
        data: {
          cityId: store.state.app.cityId,
          inMobile: "0",
          sort: "7",
        },
        page: {
          pageNum: 0,
          pageSize: 4,
        },
        sort: {
          desc: ['createTime'],
        },
      }
      return await $axios.$post(NewsApi.GetNewsByCity, newsParam);
    }
    const getNews4 = async () => {
      const newsParam: any = {
        data: {
          cityId: store.state.app.cityId,
          inMobile: "0",
          sort: "4",
        },
        page: {
          pageNum: 0,
          pageSize: 4,
        },
        sort: {
          desc: ['createTime'],
        },
      }
      return await $axios.$post(NewsApi.GetNewsByCity, newsParam);
    }
    const getNews3 = async () => {
      const newsParam: any = {
        data: {
          cityId: store.state.app.cityId,
          inMobile: "0",
          sort: "3",
        },
        page: {
          pageNum: 0,
          pageSize: 4,
        },
        sort: {
          desc: ['createTime'],
        },
      }
      return await $axios.$post(NewsApi.GetNewsByCity, newsParam);
    }
    const newsObj = {
      1: [],
      2: [],
      3: [],
    };
    const getNews = async () => {
      const [news7, news4, news3] = await Promise.all([
        getNews7(),
        getNews4(),
        getNews3()
      ])
      if (news7.code === 200) {
        newsObj[1] = getDataResult(news7);
      }
      if (news4.code === 200) {
        newsObj[2] = getDataResult(news4);
      }
      if (news3.code === 200) {
        newsObj[3] = getDataResult(news3);
      }
    }
    await getNews();

    return {
      banners,
      areas,
      metroLines,
      recommendProjects,
      selectRecommendKey,
      hotProjects,
      newsObj,
    }
  },
  data() {
    return {
      menuShow: {
        isShow: false,
        flag: 0,
      },
      showTrading: false,
      showMetroStation: false,
      tradings: [],
      metroStations: [],
      newsType: '1', // 资讯分类 7 4 3
      labels: [],
      processType: '0',
    }
  },
  head() {
    return {
      title: '房匠 - 做您买房路上的自己人',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: '房匠 - 做您买房路上的自己人'
        }
      ],
      script: [
        {
          innerHTML: '{"@context":"https://zhanzhang.baidu.com/contexts/cambrian.jsonld","@id":"https://www.fangjiang.com","appid":"1713124212115293","title":"房匠网","images":[""],"description": "","upDate":"2021-10-9T18:51:22"}',
          type: 'application/ld+json',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  computed: {
    getTest() {
      return this.$store.state.app.test;
    }
  },
  mounted() {
    this.BREADCRUMB_RE_SET();
  },
  methods: {
    goNews() {
      this.$router.push('/info/list');
    },
    async getTradings(areaId: string) {
      this.tradings = [];
      (this.$refs.loadingTrading as any).start();
      try {
        const data: TradingAreaByCondition = {
          provinceId: this.$store.state.app.provinceId,
          cityId: this.$store.state.app.cityId,
          areaId,
          state: '1',
        };

        const param: any = {
          data
        };
        const result:BaseListResult<TradingAreaModel>  = await this.$axios.$post(TradingAreaApi.GetAllTradingAreas, param);
        if (result.code === 200) {
          this.tradings = getDataResult(result);
        }
      } catch(e) {}
      finally {
        (this.$refs.loadingTrading as any).finish();
      }
    },
    async getMetroStations(metroLineId: string) {
      this.metroStations = [];
      (this.$refs.loadingMetroStation as any).start();
      try {
        const data: MetroStationByCondition = {
          lineId: metroLineId,
          state: '1',
        };
        const param: any = {
          data
        };
        const result:BaseListResult<MetroStationModel>  = await this.$axios.$post(MetroLineApi.GetStations, param);
        if (result.code === 200) {
          this.metroStations = getDataResult(result);
        }
      } catch(e) {}
      finally {
        (this.$refs.loadingMetroStation as any).finish();
      }
    },
    openMenu(flag: number) {
      this.menuShow.isShow = true;
      this.menuShow.flag = flag;
    },
    closeMenu() {
      this.menuShow.isShow = false;
      this.menuShow.flag = 0;
    },
    ...mapMutations('app', ['BREADCRUMB_RE_SET']),
  },
})
</script>

<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 420px;
  line-height: 420px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.menu-box {
  /* 菜单最大盒子 */
  @apply flex flex-row w-full h-full;
}

.menu-box-left {
  /* 菜单盒子左侧 */
  @apply flex flex-col justify-center w-1/5 h-full space-y-4 bg-black bg-opacity-80 rounded-2xl;
}

.menu-item {
  /* 菜单盒子左侧下列表 */
  @apply z-10;
}
.menu-item-left {
  /* 菜单盒子左侧下列表左侧 */
  @apply flex flex-row items-center justify-between py-1 mx-2 transition-all group-hover:bg-white group-hover:bg-opacity-30 group-hover:rounded-md;
}
.menu-item-left-content {
  /* 菜单盒子左侧下列表左侧内容 */
  @apply flex flex-row items-center transition-all group-hover:pl-4;
}

.menu-right {
  /* 菜单盒子右侧 */
  @apply w-3/5 h-full ml-4 bg-blue-500;
}

.select-recommend {
  @apply w-2/3;
}

.process-select {
  @apply border-fjBlue-100;
  @apply text-fjBlue-100;
}

.process-unselect {
  @apply border-gray-500;
  @apply border-gray-500;
}
</style>