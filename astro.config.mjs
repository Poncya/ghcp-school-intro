import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages 既定 URL: https://<owner>.github.io/<repo>/
// 独自ドメインは今回スコープ外。リポジトリ名に合わせて base を設定する。
const REPO_NAME = 'ghcp-school-intro';
const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: `https://poncya.github.io/${REPO_NAME}`,
  base: isProd ? `/${REPO_NAME}` : '/',
  trailingSlash: 'ignore',
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { host: '0.0.0.0', port: 4321 },
});
