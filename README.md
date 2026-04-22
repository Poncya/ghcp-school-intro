# 神山まるごと高専 紹介LP / Kamiyama Marugoto College — Intro LP

徳島県・神山町に2023年に開校した「神山まるごと高専」を紹介する1ページのランディングページ。Astro + Tailwind CSS で実装し、GitHub Pages で公開する。

> Unofficial demo site built as a learning exercise. Not affiliated with the school.

## 特徴

- 日英併記（JP主 / EN補助）で、写真中心の余白を活かしたクリーンUI
- 1ページ構成（ヒーロー / 特徴 / 学び / アクセス / FAQ / フッター）
- GitHub Pages への自動デプロイ（`main` への push で公開）

## セットアップ

前提: Node.js 22（`.nvmrc` / `.devcontainer` 参照）。

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイルを出力
npm run preview  # build 結果をローカル確認
```

Dev Container を使う場合は VS Code で「Reopen in Container」を選ぶだけで `npm ci` が走り、4321 ポートが自動フォワードされる。

## デプロイ

- `main` ブランチへの push で `.github/workflows/deploy.yml` が実行され、GitHub Pages に公開される。
- リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定すること。
- 公開 URL: `https://<owner>.github.io/ghcp-school-intro/`
- ベースパスは `astro.config.mjs` の `base` で `/ghcp-school-intro` に設定済み。フォークしてリポジトリ名を変える場合は `REPO_NAME` を書き換える。

## コンテンツ更新ルール

- テキストは `src/components/*.astro` 内に直接記述。日英を必ずセットで更新する（意味ズレを避ける）。
- 画像は `public/images/` に配置し、命名規約は [public/images/README.md](public/images/README.md) を参照。
- 追加セクションを作る場合は `src/components/` に `.astro` を追加し、`src/pages/index.astro` に差し込む。
- 新しいページを追加するより、まずはセクション追加で対応する（本LPは1ページ構成）。

## 構成

```text
src/
  components/   # セクション単位の UI
  layouts/      # 共通レイアウト（head/meta/フェード演出）
  pages/
    index.astro # 唯一のページ
  styles/
    global.css  # Tailwind + カスタムレイヤ
public/
  favicon.svg
  images/       # 写真・プレースホルダ
```

## 検証チェックリスト

- [ ] `npm run dev` / `npm run build` がエラーなく完了する
- [ ] モバイル / タブレット / デスクトップで崩れがない
- [ ] 日英テキストが各セクションで対応している
- [ ] 画像 alt、見出し階層（h1→h2→h3）、FAQ 展開が正しい
- [ ] GitHub Pages 公開後、`/<repo>/` 配下で CSS / 画像が 404 にならない
