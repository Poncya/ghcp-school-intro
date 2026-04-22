import { defineConfig } from 'astro/config';

// GitHub Pages のプロジェクトサイトとして公開する設定だ。
// リポジトリ名: ghcp-school-intro / 所有者: Poncya
export default defineConfig({
  site: 'https://poncya.github.io',
  base: '/ghcp-school-intro',
});
