export default function MapLoader() {
  return new Promise((resolve, reject) =>{// 全局对象如果存在地图直接将结果抛出
    if(window.AMap) {
      resolve(window.AMap)
    }else{// 创建script标签并放入cdn链接
    
    const script = document.createElement('script')
    
    script.type= 'text/javascript'
    script.async = true
    script.src= 'https://webapi.amap.com/maps?v=2.0&key=373bc52968224086cc848f3981e30d07&callback=initAMap'
    script.οnerrοr=reject
    
    document.head.appendChild(script)
    
    }
  
    window.initAMap= () =>{// 注入相关插件
      // &plugin=AMap.Scale,AMap.HawkEye,AMap.ToolBar,AMap.ControlBar
      // window.AMap.plugin(['AMap.Scale', 'AMap.HawkEye', 'AMap.ToolBar', 'AMap.ControlBar'], function () {// 异步同时加载多个插件
      //   const scale = new AMap.Scale();
      //   map.addControl(scale);
      //   const toolbar = new AMap.ToolBar();
      //   map.addControl(toolbar);
      //   const controlBar = new AMap.ControlBar();
      //   map.addControl(controlBar);
      // });// 将结果抛出
      resolve(window.AMap)
    }
  })
}