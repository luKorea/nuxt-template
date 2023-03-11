# 1. nuxt 项目集成第三方库(*开发时nuxt版本为^3.2.3)

## 1. element-plus

1. 安装 `element-plus` `@element-plus/nuxt`

2. 配置 nuxt.config.ts

   ```typescript
    // build modules
     modules: ["@element-plus/nuxt"],
   ```

3. `@element-plus/nuxt` 会自动按需加载 element-plus 样式 组件

## 2. pinia

1. 安装 `pinia` `@pinia/nuxt`

2. 配置 nuxt.config.ts

   ```typescript
    // build modules
     modules: ["@pinia/nuxt"],
   ```

3. <u>注意: 在 nuxt 中无需 createPinia 即可使用</u>

4. 代码实例

   ```typescript
   import { defineStore } from "pinia";
   
   const useCountStore = defineStore("count", () => {
     const count = ref(1);
     function addCount() {
       count.value++;
     }
     return {
       count,
       addCount,
     };
   });
   
   export default useCountStore;
   ```

## 3. normalize.css

1. 安装 `normalize.css`

2. 配置 `nuxt.config.ts`

   ```typescript
     css: ["normalize.css"],
   ```

## 4. sass

1. 安装 `sass`

2. 配置 `nuxt.config.ts`

   ```typescript
    css: ["normalize.css", "@/assets/css/global.scss"],
     vite: {
       css: {
         preprocessorOptions: {
           scss: {
             additionalData: "@use '@/assets/css/variables.scss' as *;",
           },
         },
       },
     },
   ```


# 2. 发布流程

## 1. 服务器安装 node

1. `yum install node`

## 2. 安装 npm

1. `yum install npm`

## 3. node 部署方式

1. PORT=指定端口 node ./.output/server/index.mjs

## 4. PM2 部署

1. npm i pm2 -g 

2. PORT=指定端口 pm2 start ./.output/server/index.mjs --name web

3. pm2 init simple 生成 ecosystem.config.js

   ```js
   module.exports = {
     apps: [
       {
         name: 'NuxtAppName', 
         exec_mode: 'cluster', // 运行的模式:cluster模式和fork模式(默认)
         instances: 'max', // 指定启动实例(进程)的个数
         script: './.output/server/index.mis'
       }
     ]
   }
   ```

4. pm2 start ecosystem.config.js 启动服务