/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 19:56:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-30 17:29:58
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/main.ts
 * @Description:
 *
 */
import '@/assets/style/reset.css';
import '@/assets/style/global.scss';
import { App as TApp, createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { setupI18n } from '@/lang/index';
import { createPinia } from 'pinia';
import 'uno.css';
import 'vfonts/FiraCode.css';
import WebSocketClient from './utils/websockt';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/es/helper';

//数据持久化，刷新页面数据不丢失
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const store = createPinia();
const WebSocket = new WebSocketClient();
WebSocket.connect(3333);
store.use(piniaPluginPersistedstate);
import { routerInit } from './permission';
import { myDirective } from './utils/directive';
import './styles/index.scss';
let app: TApp;
let NvapRouter;
function render(props: any) {
  const { container } = props;
  app = createApp(App);
  app.directive('permission', myDirective);
  // 路由挂载
  NvapRouter = router(props);
  routerInit(NvapRouter);
  app.use(store);
  app.use(NvapRouter);
  const c = container ? container.querySelector('#app') : document.getElementById('app');
  app.mount(c);
}

renderWithQiankun({
  mount(props) {
    console.log('vue3sub mount', props);
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('vue3sub unmount', props);
    app.unmount();
  },
  update(props: any) {
    console.log('vue3sub update', props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

export { NvapRouter };

// const app = createApp(App);
// app.config.warnHandler = () => {
//   // console.log(msg, vm);
// };
// app.directive('permission', myDirective);
// //store
// app.use(store);
// //router
// app.use(router);
// //i18n
// app.use(setupI18n);
// app.mount('#app');
