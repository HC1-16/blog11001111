// docs/plugins/change-body-class.js
export default function () {
    return {
      name: 'change-body-class',
      enhanceApp({ app, router }) {
        // 在组件挂载完成后触发
        router.afterEach((to) => {
          const path = to.path
          console.log('Current path:', path)  // 用于调试
  
          // 根据路径判断页面，添加不同的类
          document.body.classList.remove('page-home', 'page-about', 'page-author') // 移除现有类
          if (path === '/') {
            document.body.classList.add('page-home')
          } else if (path === '/about') {
            document.body.classList.add('page-about')
          } else {
            document.body.classList.add('page-author')
          }
        })
      }
    }
  }
  