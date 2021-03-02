import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  base: './',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};

export default config;
