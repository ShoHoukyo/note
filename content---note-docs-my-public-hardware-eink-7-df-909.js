"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkdocusaurus"] = globalThis["webpackChunkdocusaurus"] || []).push([["content---note-docs-my-public-hardware-eink-7-df-909"],{

/***/ "./docs/my/public/hardware/eink.md":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assets: () => (/* binding */ assets),\n/* harmony export */   contentTitle: () => (/* binding */ contentTitle),\n/* harmony export */   \"default\": () => (/* binding */ MDXContent),\n/* harmony export */   frontMatter: () => (/* binding */ frontMatter),\n/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_hardware_eink_md_7df_json__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   toc: () => (/* binding */ toc)\n/* harmony export */ });\n/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_hardware_eink_md_7df_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-hardware-eink-md-7df.json\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@mdx-js/react/lib/index.js\");\n\n\nconst frontMatter = {};\nconst contentTitle = undefined;\n\nconst assets = {\n\n};\n\n\n\nconst toc = [{\n  \"value\": \"big display\",\n  \"id\": \"big-display\",\n  \"level\": 3\n}, {\n  \"value\": \"misc.\",\n  \"id\": \"misc\",\n  \"level\": 3\n}];\nfunction _createMdxContent(props) {\n  const _components = {\n    a: \"a\",\n    code: \"code\",\n    h3: \"h3\",\n    p: \"p\",\n    pre: \"pre\",\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {\n      id: \"big-display\",\n      children: \"big display\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"2023 level\\n25.3-inch display, with support for (\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"2**12\"\n      }), \") 4096 colors, 3200 x 1800 resolution\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {\n      id: \"misc\",\n      children: \"misc.\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://www.sharpsma.com/sharp-memory-lcd-technology\",\n        children: \"https://www.sharpsma.com/sharp-memory-lcd-technology\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://cloudconfusing.com/2019/09/10/e-ink-monitors-ready-for-prime-time/\",\n        children: \"https://cloudconfusing.com/2019/09/10/e-ink-monitors-ready-for-prime-time/\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"http://tinyapps.org/docs/e-ink-monitor.html\",\n        children: \"http://tinyapps.org/docs/e-ink-monitor.html\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"http://www.pcworld.com/article/259582/how_to_use_a_kindle_dx_as_a_pc_display.html#tk.hp_new\",\n        children: \"http://www.pcworld.com/article/259582/how_to_use_a_kindle_dx_as_a_pc_display.html#tk.hp_new\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"http://www.youtube.com/watch?v=FdmX52SCpG0\",\n        children: \"http://www.youtube.com/watch?v=FdmX52SCpG0\"\n      }), \"\\n1 second lag\\nmight destroy the kindle\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"emacs slow update to simulate e ink\\nemacs simulate slow terminal\\nemacs redraw delay   perfect but didn't find a way to do it\\ndidn't find a way to do it in win8 video card either\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"  (add-hook 'before-change-functions   ; this is not much better than doing it for every command\\n\\n  (defun wait1Sec ()\\n      (sleep-for 0.2) ;simulating e ink \\n      ;(message \\\"wake up\\\")\\n      )\\n    (add-hook 'pre-command-hook 'wait1Sec)\\n    ;this really slows down productivity, bad \\n\\n    (remove-hook 'pre-command-hook 'wait1Sec)\\n\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"http://www.quora.com/Do-any-companies-make-an-E-Ink-screen-suitable-for-a-desktop-computer\",\n        children: \"http://www.quora.com/Do-any-companies-make-an-E-Ink-screen-suitable-for-a-desktop-computer\"\n      }), \"\\nnothing now\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"电子墨水 显示器\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"http://dasung.com.cn/zh_cn.html\",\n        children: \"http://dasung.com.cn/zh_cn.html\"\n      }), \"\\npaperlike\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://www.zhihu.com/question/31386319\",\n        children: \"https://www.zhihu.com/question/31386319\"\n      }), \"\\nwait for better price, more mature, competitors\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://www.zhihu.com/question/29443841\",\n        children: \"https://www.zhihu.com/question/29443841\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"sony DPT-s1\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"http://site.douban.com/150757/widget/notes/7660584/note/330464382/\",\n        children: \"http://site.douban.com/150757/widget/notes/7660584/note/330464382/\"\n      }), \"\\ntablet\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"http://forum.xda-developers.com/android/apps-games/app-screen-backlight-off-xda-exclusive-t3037380\",\n        children: \"http://forum.xda-developers.com/android/apps-games/app-screen-backlight-off-xda-exclusive-t3037380\"\n      }), \"\\nphone backlight off\"]\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = {\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {\n    ...props,\n    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {\n      ...props\n    })\n  }) : _createMdxContent(props);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL215L3B1YmxpYy9oYXJkd2FyZS9laW5rLm1kIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2N1c2F1cnVzLy4vZG9jcy9teS9wdWJsaWMvaGFyZHdhcmUvZWluay5tZD81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7fTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQge2RlZmF1bHQgYXMgbWV0YWRhdGF9IGZyb20gJ0BzaXRlLy5kb2N1c2F1cnVzL2RvY3VzYXVydXMtcGx1Z2luLWNvbnRlbnQtZG9jcy9kZWZhdWx0L3NpdGUtZG9jcy1teS1wdWJsaWMtaGFyZHdhcmUtZWluay1tZC03ZGYuanNvbidcbmV4cG9ydCBjb25zdCBhc3NldHMgPSB7XG5cbn07XG5cbmltcG9ydCB7RnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4c30gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQge3VzZU1EWENvbXBvbmVudHMgYXMgX3Byb3ZpZGVDb21wb25lbnRzfSBmcm9tIFwiQG1keC1qcy9yZWFjdFwiO1xuZXhwb3J0IGNvbnN0IHRvYyA9IFt7XG4gIFwidmFsdWVcIjogXCJiaWcgZGlzcGxheVwiLFxuICBcImlkXCI6IFwiYmlnLWRpc3BsYXlcIixcbiAgXCJsZXZlbFwiOiAzXG59LCB7XG4gIFwidmFsdWVcIjogXCJtaXNjLlwiLFxuICBcImlkXCI6IFwibWlzY1wiLFxuICBcImxldmVsXCI6IDNcbn1dO1xuZnVuY3Rpb24gX2NyZWF0ZU1keENvbnRlbnQocHJvcHMpIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSB7XG4gICAgYTogXCJhXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgaDM6IFwiaDNcIixcbiAgICBwOiBcInBcIixcbiAgICBwcmU6IFwicHJlXCIsXG4gICAgLi4uX3Byb3ZpZGVDb21wb25lbnRzKCksXG4gICAgLi4ucHJvcHMuY29tcG9uZW50c1xuICB9O1xuICByZXR1cm4gX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFtfanN4KF9jb21wb25lbnRzLmgzLCB7XG4gICAgICBpZDogXCJiaWctZGlzcGxheVwiLFxuICAgICAgY2hpbGRyZW46IFwiYmlnIGRpc3BsYXlcIlxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW1wiMjAyMyBsZXZlbFxcbjI1LjMtaW5jaCBkaXNwbGF5LCB3aXRoIHN1cHBvcnQgZm9yIChcIiwgX2pzeChfY29tcG9uZW50cy5jb2RlLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcIjIqKjEyXCJcbiAgICAgIH0pLCBcIikgNDA5NiBjb2xvcnMsIDMyMDAgeCAxODAwIHJlc29sdXRpb25cIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5oMywge1xuICAgICAgaWQ6IFwibWlzY1wiLFxuICAgICAgY2hpbGRyZW46IFwibWlzYy5cIlxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW19qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LnNoYXJwc21hLmNvbS9zaGFycC1tZW1vcnktbGNkLXRlY2hub2xvZ3lcIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly93d3cuc2hhcnBzbWEuY29tL3NoYXJwLW1lbW9yeS1sY2QtdGVjaG5vbG9neVwiXG4gICAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9jbG91ZGNvbmZ1c2luZy5jb20vMjAxOS8wOS8xMC9lLWluay1tb25pdG9ycy1yZWFkeS1mb3ItcHJpbWUtdGltZS9cIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9jbG91ZGNvbmZ1c2luZy5jb20vMjAxOS8wOS8xMC9lLWluay1tb25pdG9ycy1yZWFkeS1mb3ItcHJpbWUtdGltZS9cIlxuICAgICAgfSldXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cDovL3RpbnlhcHBzLm9yZy9kb2NzL2UtaW5rLW1vbml0b3IuaHRtbFwiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwOi8vdGlueWFwcHMub3JnL2RvY3MvZS1pbmstbW9uaXRvci5odG1sXCJcbiAgICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwOi8vd3d3LnBjd29ybGQuY29tL2FydGljbGUvMjU5NTgyL2hvd190b191c2VfYV9raW5kbGVfZHhfYXNfYV9wY19kaXNwbGF5Lmh0bWwjdGsuaHBfbmV3XCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHA6Ly93d3cucGN3b3JsZC5jb20vYXJ0aWNsZS8yNTk1ODIvaG93X3RvX3VzZV9hX2tpbmRsZV9keF9hc19hX3BjX2Rpc3BsYXkuaHRtbCN0ay5ocF9uZXdcIlxuICAgICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1GZG1YNTJTQ3BHMFwiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RmRtWDUyU0NwRzBcIlxuICAgICAgfSksIFwiXFxuMSBzZWNvbmQgbGFnXFxubWlnaHQgZGVzdHJveSB0aGUga2luZGxlXCJdXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFwiZW1hY3Mgc2xvdyB1cGRhdGUgdG8gc2ltdWxhdGUgZSBpbmtcXG5lbWFjcyBzaW11bGF0ZSBzbG93IHRlcm1pbmFsXFxuZW1hY3MgcmVkcmF3IGRlbGF5ICAgcGVyZmVjdCBidXQgZGlkbid0IGZpbmQgYSB3YXkgdG8gZG8gaXRcXG5kaWRuJ3QgZmluZCBhIHdheSB0byBkbyBpdCBpbiB3aW44IHZpZGVvIGNhcmQgZWl0aGVyXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wcmUsIHtcbiAgICAgIGNoaWxkcmVuOiBfanN4KF9jb21wb25lbnRzLmNvZGUsIHtcbiAgICAgICAgY2hpbGRyZW46IFwiICAoYWRkLWhvb2sgJ2JlZm9yZS1jaGFuZ2UtZnVuY3Rpb25zICAgOyB0aGlzIGlzIG5vdCBtdWNoIGJldHRlciB0aGFuIGRvaW5nIGl0IGZvciBldmVyeSBjb21tYW5kXFxuXFxuICAoZGVmdW4gd2FpdDFTZWMgKClcXG4gICAgICAoc2xlZXAtZm9yIDAuMikgO3NpbXVsYXRpbmcgZSBpbmsgXFxuICAgICAgOyhtZXNzYWdlIFxcXCJ3YWtlIHVwXFxcIilcXG4gICAgICApXFxuICAgIChhZGQtaG9vayAncHJlLWNvbW1hbmQtaG9vayAnd2FpdDFTZWMpXFxuICAgIDt0aGlzIHJlYWxseSBzbG93cyBkb3duIHByb2R1Y3Rpdml0eSwgYmFkIFxcblxcbiAgICAocmVtb3ZlLWhvb2sgJ3ByZS1jb21tYW5kLWhvb2sgJ3dhaXQxU2VjKVxcblwiXG4gICAgICB9KVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW19qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHA6Ly93d3cucXVvcmEuY29tL0RvLWFueS1jb21wYW5pZXMtbWFrZS1hbi1FLUluay1zY3JlZW4tc3VpdGFibGUtZm9yLWEtZGVza3RvcC1jb21wdXRlclwiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwOi8vd3d3LnF1b3JhLmNvbS9Eby1hbnktY29tcGFuaWVzLW1ha2UtYW4tRS1Jbmstc2NyZWVuLXN1aXRhYmxlLWZvci1hLWRlc2t0b3AtY29tcHV0ZXJcIlxuICAgICAgfSksIFwiXFxubm90aGluZyBub3dcIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFtcIueUteWtkOWiqOawtCDmmL7npLrlmahcXG5cIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cDovL2Rhc3VuZy5jb20uY24vemhfY24uaHRtbFwiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwOi8vZGFzdW5nLmNvbS5jbi96aF9jbi5odG1sXCJcbiAgICAgIH0pLCBcIlxcbnBhcGVybGlrZVxcblwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy56aGlodS5jb20vcXVlc3Rpb24vMzEzODYzMTlcIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3F1ZXN0aW9uLzMxMzg2MzE5XCJcbiAgICAgIH0pLCBcIlxcbndhaXQgZm9yIGJldHRlciBwcmljZSwgbW9yZSBtYXR1cmUsIGNvbXBldGl0b3JzXCJdXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LnpoaWh1LmNvbS9xdWVzdGlvbi8yOTQ0Mzg0MVwiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL3d3dy56aGlodS5jb20vcXVlc3Rpb24vMjk0NDM4NDFcIlxuICAgICAgfSlcbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFtcInNvbnkgRFBULXMxXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHA6Ly9zaXRlLmRvdWJhbi5jb20vMTUwNzU3L3dpZGdldC9ub3Rlcy83NjYwNTg0L25vdGUvMzMwNDY0MzgyL1wiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwOi8vc2l0ZS5kb3ViYW4uY29tLzE1MDc1Ny93aWRnZXQvbm90ZXMvNzY2MDU4NC9ub3RlLzMzMDQ2NDM4Mi9cIlxuICAgICAgfSksIFwiXFxudGFibGV0XCJdXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cDovL2ZvcnVtLnhkYS1kZXZlbG9wZXJzLmNvbS9hbmRyb2lkL2FwcHMtZ2FtZXMvYXBwLXNjcmVlbi1iYWNrbGlnaHQtb2ZmLXhkYS1leGNsdXNpdmUtdDMwMzczODBcIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cDovL2ZvcnVtLnhkYS1kZXZlbG9wZXJzLmNvbS9hbmRyb2lkL2FwcHMtZ2FtZXMvYXBwLXNjcmVlbi1iYWNrbGlnaHQtb2ZmLXhkYS1leGNsdXNpdmUtdDMwMzczODBcIlxuICAgICAgfSksIFwiXFxucGhvbmUgYmFja2xpZ2h0IG9mZlwiXVxuICAgIH0pXVxuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IHtcbiAgICAuLi5fcHJvdmlkZUNvbXBvbmVudHMoKSxcbiAgICAuLi5wcm9wcy5jb21wb25lbnRzXG4gIH07XG4gIHJldHVybiBNRFhMYXlvdXQgPyBfanN4KE1EWExheW91dCwge1xuICAgIC4uLnByb3BzLFxuICAgIGNoaWxkcmVuOiBfanN4KF9jcmVhdGVNZHhDb250ZW50LCB7XG4gICAgICAuLi5wcm9wc1xuICAgIH0pXG4gIH0pIDogX2NyZWF0ZU1keENvbnRlbnQocHJvcHMpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/my/public/hardware/eink.md\n");

/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),\n/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/react/index.js\");\n/**\n * @import {MDXComponents} from 'mdx/types.js'\n * @import {Component, ReactElement, ReactNode} from 'react'\n */\n\n/**\n * @callback MergeComponents\n *   Custom merge function.\n * @param {Readonly<MDXComponents>} currentComponents\n *   Current components from the context.\n * @returns {MDXComponents}\n *   Additional components.\n *\n * @typedef Props\n *   Configuration for `MDXProvider`.\n * @property {ReactNode | null | undefined} [children]\n *   Children (optional).\n * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @property {boolean | null | undefined} [disableParentContext=false]\n *   Turn off outer component context (default: `false`).\n */\n\n\n\n/** @type {Readonly<MDXComponents>} */\nconst emptyComponents = {}\n\nconst MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)\n\n/**\n * Get current components from the MDX Context.\n *\n * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @returns {MDXComponents}\n *   Current components.\n */\nfunction useMDXComponents(components) {\n  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)\n\n  // Memoize to avoid unnecessary top-level context changes\n  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(\n    function () {\n      // Custom merge via a function prop\n      if (typeof components === 'function') {\n        return components(contextComponents)\n      }\n\n      return {...contextComponents, ...components}\n    },\n    [contextComponents, components]\n  )\n}\n\n/**\n * Provider for MDX context.\n *\n * @param {Readonly<Props>} properties\n *   Properties.\n * @returns {ReactElement}\n *   Element.\n * @satisfies {Component}\n */\nfunction MDXProvider(properties) {\n  /** @type {Readonly<MDXComponents>} */\n  let allComponents\n\n  if (properties.disableParentContext) {\n    allComponents =\n      typeof properties.components === 'function'\n        ? properties.components(emptyComponents)\n        : properties.components || emptyComponents\n  } else {\n    allComponents = useMDXComponents(properties.components)\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\n    MDXContext.Provider,\n    {value: allComponents},\n    properties.children\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3VzYXVydXMvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanM/MTE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mdx-js/react/lib/index.js\n");

/***/ }),

/***/ "./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-hardware-eink-md-7df.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"id":"my/public/hardware/eink","title":"eink","description":"big display","source":"@site/docs/my/public/hardware/eink.md","sourceDirName":"my/public/hardware","slug":"/my/public/hardware/eink","permalink":"/note/docs/my/public/hardware/eink","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mySidebar","previous":{"title":"display","permalink":"/note/docs/my/public/hardware/display"},"next":{"title":"keyboard","permalink":"/note/docs/my/public/hardware/keyboard"}}');

/***/ })

}]);