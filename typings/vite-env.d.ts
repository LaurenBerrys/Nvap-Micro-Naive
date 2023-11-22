/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-02-13 19:56:31
 * @LastEditTime: 2023-10-30 17:00:06
 * @Description: 
 */
/// <reference types="vite/client" />
//配置智能提示
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_TOKEN_NAME: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_BASE_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  $RefreshReg$: () => void;
  $RefreshSig$: () => (type: any) => any;
  __vite_plugin_react_preamble_installed__: boolean;
  __POWERED_BY_QIANKUN__: boolean;
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
  proxy: any;
  moudleQiankunAppLifeCycles: QiankunAppLifeCycles;
}

