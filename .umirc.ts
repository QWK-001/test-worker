import { defineConfig } from '@umijs/max';
import router from './src/router/index';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  routes: router,
  npmClient: 'pnpm',
});
