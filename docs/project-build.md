# VitePress + GitHub创建自己的静态站点服务

## 一、本地搭建

### 第一步：新建文件夹
```shell 
# 打开电脑的「终端」
# 输入命令：
mkdir vitepress-docs && cd vitepress-docs
```

### 第二步：安装 VitePress
```shell
# 输入命令：
yarn add -D vitepress   # 或者用 npm add -D vitepress
```

### 使用VitePress命令行设置向导
```shell
npx vitepress init
```
将需要回答几个简单的问题(根据自己需求选择/填写)：
```markdown
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```
完成后，可以得到一个基础的目录结构如下：
```markdown
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

### 第三步：启动并运行
package.json中应该已注入了npm脚本：
```markdown
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```
docs:dev 脚本将启动具有即时热更新的本地开发服务器
```shell
npm run docs:dev
```
开发服务应该会运行在 http://localhost:5173 上。在浏览器中访问 URL 以查看新站点的运行情况吧！🎉🎉🎉🎉🎉🎉🎉🎉

## 二、Github Pages部署
1.首先在 Github 上新建一个仓库，这里我取的仓库名为 example-blog(你喜欢的名字)，然后我们需要在配置文件中加上base路径设置：
```markdown
module.exports = {
  	// 路径名为 "/<REPO>/"
    base: '/example-blog(你取的项目名字)/',
  	//...
}
```
2.在项目根目录创建文件夹.github,再在其下创建目录workflows,再在其下创建deploy.yml文件，包含如下内容：
```markdown
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [master]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消注释
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
这是一个工作流文件，它的作用是你每次修改提交的内容到github仓库里 它就会自动帮助你发布部署你的站点

3.在gitHub创建的项目中找到设置中的“Pages”菜单项下，选择“Build and deployment > Source > GitHub Actions”。

4.将更改推送到 master 分支并等待 GitHub Action 工作流完成。这样你就可以看到你的站点更新啦!
🚀🚀🚀🚀🚀 🎇🎇🎇🎇
