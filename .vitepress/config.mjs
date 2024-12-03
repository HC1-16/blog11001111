import { defineConfig } from 'vitepress'
//import changeBodyClass from './plugins/change-body-class'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:/blog11001111/,
  title:"11001111" ,
  description: "11001111的blog",
  enhanceApp({ app, router }) {
    router.afterEach((to) => {
      // 清除所有类
      document.body.classList.remove('page-home', 'page-author', 'page-other')

      // 根据页面路径添加类
      if (to.path === '/') {
        document.body.classList.add('page-home')
      } else if(to.path==='author'){
        document.body.classList.add('page-author')
      }
      else {
        document.body.classList.add('page-other')
      }
    })
  },


  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Home",
        link:"/",
      },
      {
        text: "About",
        link:"/about/about.md",
      },
      {
        text: "author",
        link: "/author/author.md",
      },
      {
          text: "blog",
          link: "/blog/index.md",
      }, 
    
    ],

    sidebar: {
      '/blog': [
        {
          text: 'Blog Posts',
          items: [
            { text: '位运算', link: '/blog/algorithm/位运算.md' },
            { text:'前端学习', link:'/blog/frontend/cfh.md'},
            { text:'西藏',link:'/blog/photo/西藏.md'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/cfhu' }
    ],
    
  }
})
