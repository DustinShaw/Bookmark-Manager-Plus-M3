## 修改后最终状态（Bookmark Manager Plus M3）

### 已实现并保留的功能
| # | 功能 | 关键实现 |
|---|------|----------|
| 1 | **搜索状态自动恢复** | 重开 popup 恢复 `lastQuery` 并重跑搜索；`searchActive` 保留无查询的过滤视图 |
| 2 | **选项持久化一并应用** | 搜索模式/排序/文件文件夹可见性/日期范围本就持久化，重跑时连带生效 |
| 3 | **搜索结果滚动位置记忆** | `lastSearchScroll` 持久化；恢复时还原、新搜索重置为 0；scroll 监听仅 Search 模式回写 |
| 4 | **历史单条删除** | 每条右侧 × 按钮（`stopPropagation` 防误搜），删后从 DOM 重建 `history` 数组并持久化 |
| 5 | **清空历史按钮** | 历史下拉 footer 的 🗑 按钮，删空自动收起 |
| 6 | **聚焦自动全选** | 打开 popup 即 `$searchEditor.focus()` + `select()`（setTimeout 避开 mouseup） |
| 7 | **加高输入框** | 高度 16→24px，字号 12→13px |
| 8 | **打开即聚焦全选** | 恢复块末尾触发，已恢复的关键词直接整段选中 |

### 界面/加载优化
- **横线随输入框下移**：`#header-panel` 改 `height:auto; min-height:22px; display:flow-root`（修掉写死高度导致横线不随搜索盒下移）
- **图标以输入框中线垂直居中**：三个图标容器设为 24px 高 + `inline-flex` 居中；统一 `.fa-basic` 尺寸（去 `!important` 1.1em 吹大）
- **全选背景浅灰**：`::selection` 由深蓝改为 `#cdd3da` 浅灰底 + 深字（明暗主题均清晰）
- **加载提速**：popup/options 全部 `<script defer>`；options 页移除 248KB jquery-ui；alertify 换 min 版；删除未用 `picker.time.js`
- **主题滚动条 + 选区颜色**：补齐 `::-webkit-scrollbar` 与 `::selection`（之前变量定义未使用）

<div align="center">
<img src="./icon/icon128.png" alt="Bookmark Manager Plus M3 icon" width="96" height="96" />
<h1>Bookmark Manager Plus M3</h1>
<em>An All in One advanced bookmark manager with modern UI and advanced search capabilities</em>
</div>

### Setup

- Download latest version from [releases](https://github.com/aatansen/Bookmark-Manager-Plus-M3/releases)
- Unzip it
- Go to chrome browser Manage extensions
  - `chrome://extensions/`
- Enable Developer mode
- Now click on `Load unpacked` and select unzipped folder
- For any bugs report [here](https://github.com/aatansen/Bookmark-Manager-Plus-M3/issues)

### Extension Features

- **M3 Version (v1.0.0.0+)**

  - **Manifest V3 Compliant**: Fully aligned with Chrome’s latest extension requirements
  - **Refined User Interface**: Cleaner layout with improved usability and visual consistency
  - **Enhanced Settings**: More configuration options for personalized workflows
  - **Dark Mode Support**: Native dark theme for comfortable low-light usage
  - **New Logo**: Updated logo with a modern look and better visibility

- **Basic Filters**

  - Filter bookmarks by page or folder visibility
  - Sort items by hierarchy, title, URL, or added date

- **Advanced Search**

  - Highlights queries in result items
  - Case-sensitive search
  - Scope limiting
  - Supports special characters
  - Additional options available

- **Badge Display** *(configurable in options)*

  - Same-domain bookmark count
  - Total bookmark count
  - Today’s bookmark count

- **Context Menu**

  - Provides additional views for preview
  - Supports drag-and-drop (DnD)

- **Search History**

  - Keeps track of previous searches for quick reuse

---

### Keyboard Shortcuts

- **Selection & Clipboard**

  - `Ctrl + A` → Select all
  - `Ctrl + C` → Copy
  - `Ctrl + X` → Cut
  - `Ctrl + V` → Paste

- **Editing & Actions**

  - `Ctrl + S` → Edit search box
  - `Ctrl + E` → Edit item
  - `Ctrl + F` → Add folder
  - `Ctrl + B` → Add page
  - `Ctrl + Shift + A` → Append / remove view
  - `Ctrl + R` → Reset icon toolbar options
  - `Delete` → Delete item

- **Navigation**

  - `Left Arrow / Backspace` → Explore backward
  - `Right Arrow` → Explore forward

---

### Tips

- Clicking a **page icon** opens the page in the current tab
- Clicking a **page icon + Ctrl** opens the page in a new tab
- Clicking a **page icon + Shift** opens the page in a new window
- Clicking a **folder icon** opens the folder in the current view
- Clicking a **folder icon + Ctrl** opens the folder in the other view *(only when an appended view is enabled)*

---

### Acknowledgements

This project is based on the original work [Bookmark-Manager-Plus](https://github.com/HyunWooBro/Bookmark-Manager-Plus) by [Kim Hyun-Woo](https://github.com/HyunWooBro)

The current version builds upon the original foundation with bug fixes, new features, and modern UI improvements, while respecting the original concept and intent.

---

## UI 改造（阶段 1–4，2026-11）

本轮只改界面与尺寸骨架，**未改动书签逻辑与搜索状态机**；`manifest.json` 版本仍为 `1.0.0.0`。

| 阶段 | 内容 | 主要落点 |
|---|---|---|
| 基础美化 | 深浅双主题变量（各 67 个 token）、中性灰阶 + 靛蓝强调色、去拟物阴影与渐变、第三方皮肤适配 | `css/themes.css`、`css/default.css` 的 `Modern UI refresh` 段 |
| 阶段 1 | 右栏头部改 flex，搜索框弹性占宽，搜索历史改浮层；删除全部 JS 设宽公式（`updateSearchEditorWidth()` 改为 no-op） | `css/default.css` Stage 1 段、`js/util.js`、`js/init.js` |
| 阶段 2 | `:root` 变量化双栏几何（`--popup-*`、`--split-left`、`--sep-w`、`--frame-gap`），闭合等式 `790 = 282 + 2 + 4 + 2 + 500`；`.frame` 纵向 flex；拖拽分栏比例持久化 | Stage 2 段、`js/constant.js`、`js/util.js`、`js/init.js` |
| 阶段 3 | 弹层用 `clamp()` / `min()` 限宽（`--overlay-avail`），左右栏头部统一栅格 | Stage 3 段 |
| 阶段 4 | 文件夹图标换成扁平双色 `img/folder.svg`，保留 `<img>` 元素与点击绑定，深色主题用 `filter` 提亮；旧 `folder.png` 留作回滚 | `img/folder.svg`、Stage 4 段 |

同时把原先的 CDN 依赖改为本地资源（`css/jquery-ui.smoothness.css` + `css/images/`、`lib/font-awesome/`），CSP 收紧为纯 `'self'`，popup / options 脚本全部 `defer`。

> `preview.html`（静态 UI 预览）与各阶段 `*-before/` 快照仅本地留存，未纳入本仓库。
