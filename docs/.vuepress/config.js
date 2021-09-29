module.exports = {
  title: '开发宝典',
  description: '积沙成塔，集腋成裘，燕子衔泥磊大窝！',
  head: [["link", { rel: "icon", href: `/favicon.ico` }]],
  base: "/devdocs/",
  dest: "./dist",
  lastUpdated: 'Last Updated',
  themeConfig: {
    nav: [
      { text: "页面导航", link: "/0-guides/" },
      { text: "前端开发", link: "/1-frontend/" },
      { text: "后端开发", link: "/2-backend/" },
      { text: "开发基础", link: "/3-devbasic/" },
      { text: "GitHub", link: "https://github.com/CN-Tower/devdocs" }
    ],
    sidebar: getSideBar(),
    lastUpdated: 'Last Updated'
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
  }
}

function getSideBar() {
  const sidebar = {};
  const pages = getPages();
  pages.forEach(page => sidebar[page.path] = getSideMenu(page.name, page.children));
  return sidebar;
}

function getSideMenu(name, children) {
  const pages = getPages();
  const menuList = pages.map((item, i) => [item.path, getTitle(item, i)]);
  menuList.find((item , i) => {
    if (item[1].indexOf(name) > -1) {
      menuList[i] = {
        title: item[1],
        children,
        collapsable: false,
        path: item[0],
      };
    }
  });
  return menuList;
}

function getTitle({title, name}, i) {
  return `${i + 1} ${title} ${name}`;
}

function getPages() {
  return [
    {
      path: '/1-frontend/',  title: 'FrontEnd',  name: '前端开发',  children: [
        ['@Angular/', 'Aangular 框架'],
        ['@React/', 'React 框架'],
        ['@Vue/', 'Vue 框架'],
        ['github/', 'GitHub 仓库'],
        ['blogs/', 'Blogs 文章'],
        ['books/', 'Books 书籍'],
        ['styles/', 'Styles 样式'],
        ['libs/', 'Libs 类库'],
        ['plugins/', 'Plugins 插件'],
        ['2d3d/', '2D3D 画布'],
        ['data/', 'Data 可视化'],
      ],
    },
    {
      path: '/2-backend/',   title: 'BackEnd',  name: '后端开发',  children: [

      ],
    },
    {
      path: '/3-devbasic/',  title: 'DevBasic',  name: '开发基础',  children: [
   
      ],
    },
    {
      path: '/4-testing/',   title: 'Testing',  name: '测试',     children: [
      ],
    },
    {
      path: '/5-devops/',    title: 'DevOps',  name: '运维',     children: [
      ],
    },
    {
      path: '/6-product/',   title: 'Product',  name: '产品',     children: [
      ],
    },
    {
      path: '/7-design/',    title: 'Design',  name: '设计',     children: [
      ],
    },
    {
      path: '/8-devtools/',  title: 'DevTools',  name: '开发工具',  children: [
      ],
    },
    {
      path: '/9-relatives/', title: 'Relatives',  name: '开发相关',  children: [
      ],
    },
  ];
}