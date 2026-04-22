# Image assets / 画像アセット

本ディレクトリは `public/images/` で、ビルド時に `/<base>/images/*` としてそのまま配信される。

## 命名規約 / Naming convention

`<section>-<role>[-<variant>].<ext>` のケバブケース（すべて小文字）を使用する。

| セクション (section) | 役割 (role)      | 例                            |
| -------------------- | ---------------- | ----------------------------- |
| `hero`               | `main`, `bg`     | `hero-main.jpg`               |
| `features`           | `01`..`04`       | `features-02.jpg`             |
| `learn`              | `technology`,`design`,`entrepreneurship` | `learn-design.jpg` |
| `access`             | `map`, `campus`  | `access-campus.jpg`           |
| `faq`                | `accent`         | `faq-accent.jpg`              |
| `og`                 | `default`        | `og-default.jpg`              |

- 解像度: ヒーローは長辺 1920px、セクション画像は長辺 1600px を上限目安。
- 形式: 写真は `.jpg`（品質80前後）、アイコン/図は `.svg`。
- 代替: 正式素材が入るまでは `.svg` のプレースホルダ（本ディレクトリ内 `hero.svg` / `learn.svg`）を利用する。
- alt テキストは日本語で内容を具体的に記述し、英語補助が必要な場合は本文側で併記する。

## 差し替え手順 / Replacement

1. 本ディレクトリに上記命名で新規ファイルを配置する。
2. 使用箇所（`src/components/*.astro`）で `import.meta.env.BASE_URL` + 相対パスを更新する。
3. `npm run build` で 404/リンク切れがないことを確認する。
