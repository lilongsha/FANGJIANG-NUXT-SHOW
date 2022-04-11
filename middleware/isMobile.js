export default function ({ req, store }) {
  const userAgent = req.headers['user-agent'] || '';
    let isMobile;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }
    store.commit('app/IS_MOBILE', isMobile)
}