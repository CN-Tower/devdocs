module.exports = {
  title: '开发宝典',
  description: '积沙成塔，集腋成裘，燕子衔泥磊大窝！',
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  base: '/devdocs/',
  port: 8083,
  dest: './dist',
  lastUpdated: 'Last Updated',
  themeConfig: {
    nav: [
      ...getNavList(),
      { text: 'GitHub', link: 'https://github.com/CN-Tower/devdocs' }
    ],
    sidebar: getSideBar(),
    lastUpdated: 'Last Updated',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
  }
}

/**
 * 获取导航菜单配置
 */
function getNavList() {
  return getPages().map(item => {
    const navItem = { text: item.name, link: item.path };
    if (item.children.length) {
      delete navItem.link;
      navItem['items'] = item.children.map(it => ({ text: it.name, link: item.path + it.path }));
      navItem['items'].unshift({text: item.name, link: item.path});
    }
    return navItem;
  });
}

/**
 * 获取侧边栏的配置
 */
function getSideBar() {
  const sidebar = {};
  const pages = getPages();
  pages.forEach(page => {
    sidebar[page.path] = pages.map((item, i) => {
      return {
        title: `${i + 1} ${item.title} ${item.name}`,
        path: item.path,
        collapsable: false,
        children: page.name === item.name ? item.children.map(it => [it.path, it.name]) : [],
      };
    });
  });
  return sidebar;
}

/**
 * 页面配置
 */
function getPages() {
  return [
    {
      path: '/1-frontend/',
      title: 'FrontEnd',
      name: '前端',
      children: [
        { path: '@Angular/',     name: 'Aangular 框架'   },
        { path: '@React/',       name: 'React 框架'      },
        { path: '@Vue/',         name: 'Vue 框架'        },
        { path: 'nodejs',        name: 'NodeJs 学习'     },
        { path: 'libs/',         name: 'Libs 类库'       },
        { path: 'styles/',       name: 'Styles 样式'     },
        { path: 'build/',        name: 'Build 构建'      },
        { path: 'data/',         name: 'Data 可视化'     },
        { path: '2d3d/',         name: '2D3D 画布'       },
        { path: 'plugins/',      name: 'Plugins 插件'    },
        { path: 'miniprogram/',  name: 'MiniPG 小程序'   },
        { path: 'hybrid/',       name: 'Hybrid 混合应用'  },
        { path: 'blogs/',        name: 'Blogs 文章'      },
        { path: 'books/',        name: 'Books 书籍'      },
        { path: 'github',        name: 'GitHub 仓库'     },
      ],
    },
    {
      path: '/2-backend/', 
      title: 'BackEnd',
      name: '后端',
      children: [

      ],
    },
    {
      path: '/3-devbasic/', 
      title: 'DevBasic', 
      name: '基础', 
      children: [

      ],
    },
    {
      path: '/4-testing/',  
      title: 'Testing', 
      name: '测试',    
      children: [
      ],
    },
    {
      path: '/5-devops/',   
      title: 'DevOps', 
      name: '运维',    
      children: [
        { path: 'linux', name: 'Linux' },
        { path: 'mac', name: 'MacOS' },
      ],
    },
    {
      path: '/6-product/',  
      title: 'Product', 
      name: '产品',    
      children: [
      ],
    },
    {
      path: '/7-design/',   
      title: 'Design', 
      name: '设计',    
      children: [
      ],
    },
    {
      path: '/8-devtools/', 
      title: 'DevTools', 
      name: '工具', 
      children: [
      ],
    },
    {
      path: '/9-relatives/',
      title: 'Relatives', 
      name: '相关', 
      children: [
      ],
    },
  ];
}