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
