"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkdocusaurus"] = globalThis["webpackChunkdocusaurus"] || []).push([["content---note-docs-my-public-software-downloadd-27-fe7"],{

/***/ "./docs/my/public/software/download.md":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assets: () => (/* binding */ assets),\n/* harmony export */   contentTitle: () => (/* binding */ contentTitle),\n/* harmony export */   \"default\": () => (/* binding */ MDXContent),\n/* harmony export */   frontMatter: () => (/* binding */ frontMatter),\n/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_download_md_d27_json__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   toc: () => (/* binding */ toc)\n/* harmony export */ });\n/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_download_md_d27_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-download-md-d27.json\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@mdx-js/react/lib/index.js\");\n\n\nconst frontMatter = {};\nconst contentTitle = 'download GET http file if changed  etag  modified time';\n\nconst assets = {\n\n};\n\n\n\nconst toc = [];\nfunction _createMdxContent(props) {\n  const _components = {\n    a: \"a\",\n    code: \"code\",\n    h1: \"h1\",\n    header: \"header\",\n    li: \"li\",\n    p: \"p\",\n    ul: \"ul\",\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.header, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {\n        id: \"download-get-http-file-if-changed--etag--modified-time\",\n        children: \"download GET http file if changed  etag  modified time\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"surprisingly few mature options\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://daniel.haxx.se/blog/2019/12/06/curl-speaks-etag/\",\n          children: \"https://daniel.haxx.se/blog/2019/12/06/curl-speaks-etag/\"\n        }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n          children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n              children: \"curl --etag-compare etag.txt --etag-save etag.txt https://example.com -o saved-file\"\n            })\n          }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n              children: \"curl -z saved-file -o saved-file https://example.com\"\n            })\n          }), \"\\n\"]\n        }), \"\\n\"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [\"wget does not support etag, not support \\\"--output-document with  --timestamping\\\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n          children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n              href: \"https://qmacro.org/blog/posts/2002/05/24/etag-enabled-wget/\",\n              children: \"https://qmacro.org/blog/posts/2002/05/24/etag-enabled-wget/\"\n            })\n          }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n            children: [\"guess not better \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n              href: \"https://github.com/TheTechsTech/node-wget-fetch\",\n              children: \"https://github.com/TheTechsTech/node-wget-fetch\"\n            })]\n          }), \"\\n\"]\n        }), \"\\n\"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [\"aria\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n          children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: \"\\\"Download URIs found in a text file or stdin and the destination directory and output file name can be specified optionally\\\"\"\n          }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: \"does not support etag?\"\n          }), \"\\n\"]\n        }), \"\\n\"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [\"Python\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n          children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: \"no good built-in package at 3.10\"\n          }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n            children: [\"need to verify source \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n              href: \"https://cachecontrol.readthedocs.io/en/latest/\",\n              children: \"https://cachecontrol.readthedocs.io/en/latest/\"\n            }), \"   recommended in \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n              href: \"https://requests.readthedocs.io/en/latest/community/recommended/\",\n              children: \"https://requests.readthedocs.io/en/latest/community/recommended/\"\n            })]\n          }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n            children: [\"need to verify source, also seems good \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n              href: \"https://requests-cache.readthedocs.io/en/stable/\",\n              children: \"https://requests-cache.readthedocs.io/en/stable/\"\n            })]\n          }), \"\\n\"]\n        }), \"\\n\"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [\"Js\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n          children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n            children: [\"need to verify source \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n              href: \"https://github.com/tidoust/fetch-filecache-for-crawling\",\n              children: \"https://github.com/tidoust/fetch-filecache-for-crawling\"\n            })]\n          }), \"\\n\"]\n        }), \"\\n\"]\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"Slightly different: File is assumed to be the same (not about getting latest version)\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://git-annex.branchable.com/tips/using_the_web_as_a_special_remote/\",\n        children: \"https://git-annex.branchable.com/tips/using_the_web_as_a_special_remote/\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {\n      id: \"bittorrent\",\n      children: \"bitTorrent\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"aria2 should be a good choice:\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://git-annex.branchable.com/tips/using_the_web_as_a_special_remote/\",\n          children: \"https://git-annex.branchable.com/tips/using_the_web_as_a_special_remote/\"\n        })\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"security not verified, don't install (use Docker image)\"\n      }), \"\\n\"]\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = {\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {\n    ...props,\n    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {\n      ...props\n    })\n  }) : _createMdxContent(props);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL215L3B1YmxpYy9zb2Z0d2FyZS9kb3dubG9hZC5tZCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jdXNhdXJ1cy8uL2RvY3MvbXkvcHVibGljL3NvZnR3YXJlL2Rvd25sb2FkLm1kPzBlY2IiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHt9O1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZSA9ICdkb3dubG9hZCBHRVQgaHR0cCBmaWxlIGlmIGNoYW5nZWQgIGV0YWcgIG1vZGlmaWVkIHRpbWUnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1ldGFkYXRhfSBmcm9tICdAc2l0ZS8uZG9jdXNhdXJ1cy9kb2N1c2F1cnVzLXBsdWdpbi1jb250ZW50LWRvY3MvZGVmYXVsdC9zaXRlLWRvY3MtbXktcHVibGljLXNvZnR3YXJlLWRvd25sb2FkLW1kLWQyNy5qc29uJ1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuaW1wb3J0IHtGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7dXNlTURYQ29tcG9uZW50cyBhcyBfcHJvdmlkZUNvbXBvbmVudHN9IGZyb20gXCJAbWR4LWpzL3JlYWN0XCI7XG5leHBvcnQgY29uc3QgdG9jID0gW107XG5mdW5jdGlvbiBfY3JlYXRlTWR4Q29udGVudChwcm9wcykge1xuICBjb25zdCBfY29tcG9uZW50cyA9IHtcbiAgICBhOiBcImFcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBoMTogXCJoMVwiLFxuICAgIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgICBsaTogXCJsaVwiLFxuICAgIHA6IFwicFwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgLi4uX3Byb3ZpZGVDb21wb25lbnRzKCksXG4gICAgLi4ucHJvcHMuY29tcG9uZW50c1xuICB9O1xuICByZXR1cm4gX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFtfanN4KF9jb21wb25lbnRzLmhlYWRlciwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuaDEsIHtcbiAgICAgICAgaWQ6IFwiZG93bmxvYWQtZ2V0LWh0dHAtZmlsZS1pZi1jaGFuZ2VkLS1ldGFnLS1tb2RpZmllZC10aW1lXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImRvd25sb2FkIEdFVCBodHRwIGZpbGUgaWYgY2hhbmdlZCAgZXRhZyAgbW9kaWZpZWQgdGltZVwiXG4gICAgICB9KVxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBcInN1cnByaXNpbmdseSBmZXcgbWF0dXJlIG9wdGlvbnNcIlxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy51bCwge1xuICAgICAgY2hpbGRyZW46IFtcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5saSwge1xuICAgICAgICBjaGlsZHJlbjogW19qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kYW5pZWwuaGF4eC5zZS9ibG9nLzIwMTkvMTIvMDYvY3VybC1zcGVha3MtZXRhZy9cIixcbiAgICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL2RhbmllbC5oYXh4LnNlL2Jsb2cvMjAxOS8xMi8wNi9jdXJsLXNwZWFrcy1ldGFnL1wiXG4gICAgICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy51bCwge1xuICAgICAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5saSwge1xuICAgICAgICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuY29kZSwge1xuICAgICAgICAgICAgICBjaGlsZHJlbjogXCJjdXJsIC0tZXRhZy1jb21wYXJlIGV0YWcudHh0IC0tZXRhZy1zYXZlIGV0YWcudHh0IGh0dHBzOi8vZXhhbXBsZS5jb20gLW8gc2F2ZWQtZmlsZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5jb2RlLCB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBcImN1cmwgLXogc2F2ZWQtZmlsZSAtbyBzYXZlZC1maWxlIGh0dHBzOi8vZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSwgXCJcXG5cIl1cbiAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFtcIndnZXQgZG9lcyBub3Qgc3VwcG9ydCBldGFnLCBub3Qgc3VwcG9ydCBcXFwiLS1vdXRwdXQtZG9jdW1lbnQgd2l0aCAgLS10aW1lc3RhbXBpbmdcXFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnVsLCB7XG4gICAgICAgICAgY2hpbGRyZW46IFtcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9xbWFjcm8ub3JnL2Jsb2cvcG9zdHMvMjAwMi8wNS8yNC9ldGFnLWVuYWJsZWQtd2dldC9cIixcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9xbWFjcm8ub3JnL2Jsb2cvcG9zdHMvMjAwMi8wNS8yNC9ldGFnLWVuYWJsZWQtd2dldC9cIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXCJndWVzcyBub3QgYmV0dGVyIFwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vVGhlVGVjaHNUZWNoL25vZGUtd2dldC1mZXRjaFwiLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL2dpdGh1Yi5jb20vVGhlVGVjaHNUZWNoL25vZGUtd2dldC1mZXRjaFwiXG4gICAgICAgICAgICB9KV1cbiAgICAgICAgICB9KSwgXCJcXG5cIl1cbiAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFtcImFyaWFcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMudWwsIHtcbiAgICAgICAgICBjaGlsZHJlbjogW1wiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBcIlxcXCJEb3dubG9hZCBVUklzIGZvdW5kIGluIGEgdGV4dCBmaWxlIG9yIHN0ZGluIGFuZCB0aGUgZGVzdGluYXRpb24gZGlyZWN0b3J5IGFuZCBvdXRwdXQgZmlsZSBuYW1lIGNhbiBiZSBzcGVjaWZpZWQgb3B0aW9uYWxseVxcXCJcIlxuICAgICAgICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogXCJkb2VzIG5vdCBzdXBwb3J0IGV0YWc/XCJcbiAgICAgICAgICB9KSwgXCJcXG5cIl1cbiAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFtcIlB5dGhvblxcblwiLCBfanN4cyhfY29tcG9uZW50cy51bCwge1xuICAgICAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5saSwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFwibm8gZ29vZCBidWlsdC1pbiBwYWNrYWdlIGF0IDMuMTBcIlxuICAgICAgICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5saSwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtcIm5lZWQgdG8gdmVyaWZ5IHNvdXJjZSBcIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9jYWNoZWNvbnRyb2wucmVhZHRoZWRvY3MuaW8vZW4vbGF0ZXN0L1wiLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL2NhY2hlY29udHJvbC5yZWFkdGhlZG9jcy5pby9lbi9sYXRlc3QvXCJcbiAgICAgICAgICAgIH0pLCBcIiAgIHJlY29tbWVuZGVkIGluIFwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3JlcXVlc3RzLnJlYWR0aGVkb2NzLmlvL2VuL2xhdGVzdC9jb21tdW5pdHkvcmVjb21tZW5kZWQvXCIsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vcmVxdWVzdHMucmVhZHRoZWRvY3MuaW8vZW4vbGF0ZXN0L2NvbW11bml0eS9yZWNvbW1lbmRlZC9cIlxuICAgICAgICAgICAgfSldXG4gICAgICAgICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW1wibmVlZCB0byB2ZXJpZnkgc291cmNlLCBhbHNvIHNlZW1zIGdvb2QgXCIsIF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vcmVxdWVzdHMtY2FjaGUucmVhZHRoZWRvY3MuaW8vZW4vc3RhYmxlL1wiLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL3JlcXVlc3RzLWNhY2hlLnJlYWR0aGVkb2NzLmlvL2VuL3N0YWJsZS9cIlxuICAgICAgICAgICAgfSldXG4gICAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICAgIH0pLCBcIlxcblwiXVxuICAgICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgIGNoaWxkcmVuOiBbXCJKc1xcblwiLCBfanN4cyhfY29tcG9uZW50cy51bCwge1xuICAgICAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXCJuZWVkIHRvIHZlcmlmeSBzb3VyY2UgXCIsIF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90aWRvdXN0L2ZldGNoLWZpbGVjYWNoZS1mb3ItY3Jhd2xpbmdcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9naXRodWIuY29tL3RpZG91c3QvZmV0Y2gtZmlsZWNhY2hlLWZvci1jcmF3bGluZ1wiXG4gICAgICAgICAgICB9KV1cbiAgICAgICAgICB9KSwgXCJcXG5cIl1cbiAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICB9KSwgXCJcXG5cIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFtcIlNsaWdodGx5IGRpZmZlcmVudDogRmlsZSBpcyBhc3N1bWVkIHRvIGJlIHRoZSBzYW1lIChub3QgYWJvdXQgZ2V0dGluZyBsYXRlc3QgdmVyc2lvbilcXG5cIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXQtYW5uZXguYnJhbmNoYWJsZS5jb20vdGlwcy91c2luZ190aGVfd2ViX2FzX2Ffc3BlY2lhbF9yZW1vdGUvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZ2l0LWFubmV4LmJyYW5jaGFibGUuY29tL3RpcHMvdXNpbmdfdGhlX3dlYl9hc19hX3NwZWNpYWxfcmVtb3RlL1wiXG4gICAgICB9KV1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5oMSwge1xuICAgICAgaWQ6IFwiYml0dG9ycmVudFwiLFxuICAgICAgY2hpbGRyZW46IFwiYml0VG9ycmVudFwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFwiYXJpYTIgc2hvdWxkIGJlIGEgZ29vZCBjaG9pY2U6XCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMudWwsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5saSwge1xuICAgICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdC1hbm5leC5icmFuY2hhYmxlLmNvbS90aXBzL3VzaW5nX3RoZV93ZWJfYXNfYV9zcGVjaWFsX3JlbW90ZS9cIixcbiAgICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL2dpdC1hbm5leC5icmFuY2hhYmxlLmNvbS90aXBzL3VzaW5nX3RoZV93ZWJfYXNfYV9zcGVjaWFsX3JlbW90ZS9cIlxuICAgICAgICB9KVxuICAgICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFwic2VjdXJpdHkgbm90IHZlcmlmaWVkLCBkb24ndCBpbnN0YWxsICh1c2UgRG9ja2VyIGltYWdlKVwiXG4gICAgICB9KSwgXCJcXG5cIl1cbiAgICB9KV1cbiAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3Qge3dyYXBwZXI6IE1EWExheW91dH0gPSB7XG4gICAgLi4uX3Byb3ZpZGVDb21wb25lbnRzKCksXG4gICAgLi4ucHJvcHMuY29tcG9uZW50c1xuICB9O1xuICByZXR1cm4gTURYTGF5b3V0ID8gX2pzeChNRFhMYXlvdXQsIHtcbiAgICAuLi5wcm9wcyxcbiAgICBjaGlsZHJlbjogX2pzeChfY3JlYXRlTWR4Q29udGVudCwge1xuICAgICAgLi4ucHJvcHNcbiAgICB9KVxuICB9KSA6IF9jcmVhdGVNZHhDb250ZW50KHByb3BzKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/my/public/software/download.md\n");

/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),\n/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/react/index.js\");\n/**\n * @import {MDXComponents} from 'mdx/types.js'\n * @import {Component, ReactElement, ReactNode} from 'react'\n */\n\n/**\n * @callback MergeComponents\n *   Custom merge function.\n * @param {Readonly<MDXComponents>} currentComponents\n *   Current components from the context.\n * @returns {MDXComponents}\n *   Additional components.\n *\n * @typedef Props\n *   Configuration for `MDXProvider`.\n * @property {ReactNode | null | undefined} [children]\n *   Children (optional).\n * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @property {boolean | null | undefined} [disableParentContext=false]\n *   Turn off outer component context (default: `false`).\n */\n\n\n\n/** @type {Readonly<MDXComponents>} */\nconst emptyComponents = {}\n\nconst MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)\n\n/**\n * Get current components from the MDX Context.\n *\n * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @returns {MDXComponents}\n *   Current components.\n */\nfunction useMDXComponents(components) {\n  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)\n\n  // Memoize to avoid unnecessary top-level context changes\n  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(\n    function () {\n      // Custom merge via a function prop\n      if (typeof components === 'function') {\n        return components(contextComponents)\n      }\n\n      return {...contextComponents, ...components}\n    },\n    [contextComponents, components]\n  )\n}\n\n/**\n * Provider for MDX context.\n *\n * @param {Readonly<Props>} properties\n *   Properties.\n * @returns {ReactElement}\n *   Element.\n * @satisfies {Component}\n */\nfunction MDXProvider(properties) {\n  /** @type {Readonly<MDXComponents>} */\n  let allComponents\n\n  if (properties.disableParentContext) {\n    allComponents =\n      typeof properties.components === 'function'\n        ? properties.components(emptyComponents)\n        : properties.components || emptyComponents\n  } else {\n    allComponents = useMDXComponents(properties.components)\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\n    MDXContext.Provider,\n    {value: allComponents},\n    properties.children\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3VzYXVydXMvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanM/MTE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mdx-js/react/lib/index.js\n");

/***/ }),

/***/ "./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-download-md-d27.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"id":"my/public/software/download","title":"download GET http file if changed  etag  modified time","description":"surprisingly few mature options","source":"@site/docs/my/public/software/download.md","sourceDirName":"my/public/software","slug":"/my/public/software/download","permalink":"/note/docs/my/public/software/download","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mySidebar","previous":{"title":"docFormat","permalink":"/note/docs/my/public/software/docFormat"},"next":{"title":"index","permalink":"/note/docs/my/public/software/editor/"}}');

/***/ })

}]);