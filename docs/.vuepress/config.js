module.exports = {
  title: "Daily Question Docs",
  description: "Front End Developer Daily Question",
  base: "/front-end-daily-interview-question/",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Missy Blog",
        items: [
          { text: "Github", link: "https://github.com/AnAiYi" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/1856437358176254",
          },
          {
            text: "Life",
            link: "https://anaiyi.biebio.com/",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "基础学习",
        path: "/handbook/ConditionalTypes",
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
      {
        title: "Daily Question",
        path: "/issues/day01",
        collapsable: false, // 不折叠
        children: [
          { title: "写 React / Vue项目时,为什么要在列表组件中写 key,作用是什么", path: "/issues/day01" },
        ],
      },
      {
        title: "Project difficulties",
        path: "/project/day01",
        collapsable: false, // 不折叠
        children: [
          { title: "现代图片性能优化", path: "/project/day01.md" },
        ],
      },
    ],
  },
};
