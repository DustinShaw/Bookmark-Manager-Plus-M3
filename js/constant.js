
/* Chrome clamps extension popups to 25x25 .. 800x600 and derives their
   size from the page content, so these are documentation-only ceilings
   now. Stage 2 stopped sizing #result-panel with
   MAX_POPUP_HEIGHT - header - explore - footer - margin; the frame is a
   flex column and lets the browser distribute the real boxes instead. */
const MAX_POPUP_WIDTH = 800;
const MAX_POPUP_HEIGHT = 600;

/* Stage 2: default share of the left frame in the usable two-column width.
   282 / (790 - 4 - 2*2) = 282 / 782. Stored as a fraction in sync storage
   so a remembered separator drag survives any change to the popup width
   variables in default.css. */
const DEFAULT_SPLIT_RATIO = 282 / 782;

const MAX_SEARCH_HISTORY = 50;
const MAX_EXPLORE_HISTORY = 25;

const INCREMENTAL_SEARCH_TIMEOUT_DELAY = 500;
const PREVIEW_TIMEOUT_DELAY = 300;

const DEFAULT_ICON_SEARCH_MODE = "normal";
const DEFAULT_ICON_FOLDER_MODE = "children";
const DEFAULT_ICON_SORT_MODE = "hierarchy";
const DEFAULT_WARNING_COUNT = 500;
const DEFAULT_BADGE_DISPLAY_MODE = "domain";
const DEFAULT_THEME = "dark";


