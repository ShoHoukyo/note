"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkdocusaurus"] = globalThis["webpackChunkdocusaurus"] || []).push([["content---note-docs-my-public-network-open-wrt-wan-7-b-4-112"],{

/***/ "./docs/my/public/network/openWRT/wan.md":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assets: () => (/* binding */ assets),\n/* harmony export */   contentTitle: () => (/* binding */ contentTitle),\n/* harmony export */   \"default\": () => (/* binding */ MDXContent),\n/* harmony export */   frontMatter: () => (/* binding */ frontMatter),\n/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_network_open_wrt_wan_md_7b4_json__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   toc: () => (/* binding */ toc)\n/* harmony export */ });\n/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_network_open_wrt_wan_md_7b4_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-network-open-wrt-wan-md-7b4.json\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@mdx-js/react/lib/index.js\");\n\n\nconst frontMatter = {};\nconst contentTitle = undefined;\n\nconst assets = {\n\n};\n\n\n\nconst toc = [{\n  \"value\": \"wifi\",\n  \"id\": \"wifi\",\n  \"level\": 2\n}, {\n  \"value\": \"USB tether\",\n  \"id\": \"usb-tether\",\n  \"level\": 2\n}];\nfunction _createMdxContent(props) {\n  const _components = {\n    a: \"a\",\n    code: \"code\",\n    h2: \"h2\",\n    li: \"li\",\n    p: \"p\",\n    pre: \"pre\",\n    ul: \"ul\",\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {\n      id: \"wifi\",\n      children: \"wifi\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://openwrt.org/docs/guide-user/network/wifi/connect_client_wifi\",\n        children: \"https://openwrt.org/docs/guide-user/network/wifi/connect_client_wifi\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"network.lan.ipaddr='192.168.2.1'\\nnetwork.wwan=interface\\nnetwork.wwan.proto='dhcp'\\nfirewall.@zone[1]=zone\\nfirewall.@zone[1].name='wwan'\\nfirewall.@zone[1].input='REJECT'\\nfirewall.@zone[1].output='ACCEPT'\\nfirewall.@zone[1].forward='REJECT'\\nfirewall.@zone[1].masq='1'\\nfirewall.@zone[1].mtu_fix='1'\\nfirewall.@zone[1].network='wwan'\\nwireless.@wifi-iface[1]=wifi-iface\\nwireless.@wifi-iface[1].network='wwan'\\nwireless.@wifi-iface[1].ssid='Violetta'\\nwireless.@wifi-iface[1].encryption='psk2'\\nwireless.@wifi-iface[1].device='radio0'\\nwireless.@wifi-iface[1].mode='sta'\\nwireless.@wifi-iface[1].bssid='C8:D5:FE:C8:61:B0'\\nwireless.@wifi-iface[1].key='myWifiPasswordHere'\\n\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {\n      id: \"usb-tether\",\n      children: \"USB tether\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://openwrt.org/docs/guide-user/network/wan/wwan/ethernetoverusb_rndis\",\n        children: \"seem to connect USB-end to router, weird\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://openwrt.org/docs/guide-user/network/wan/smartphone.usb.tethering\",\n        children: \"lots to config, hassle\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"maybe worth: (this one only) opkg install kmod-usb-net-rndis\"\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"Phone -> USB Ethernet port -> LAN cable -> Router (WAN)\\n\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"possible since Android 11, easier\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://superuser.com/questions/1127972/android-usb-tethering-to-ethernet-to-router\",\n        children: \"https://superuser.com/questions/1127972/android-usb-tethering-to-ethernet-to-router\"\n      }), \"\\n2023  no good info online on ipv6, in this case, need \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://openwrt.org/docs/guide-user/network/ipv6/configuration#ipv6_relay\",\n        children: \"https://openwrt.org/docs/guide-user/network/ipv6/configuration#ipv6_relay\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"the case with JP Povo\"\n      }), \"\\n\"]\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = {\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {\n    ...props,\n    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {\n      ...props\n    })\n  }) : _createMdxContent(props);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL215L3B1YmxpYy9uZXR3b3JrL29wZW5XUlQvd2FuLm1kIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jdXNhdXJ1cy8uL2RvY3MvbXkvcHVibGljL25ldHdvcmsvb3BlbldSVC93YW4ubWQ/ZjhmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge307XG5leHBvcnQgY29uc3QgY29udGVudFRpdGxlID0gdW5kZWZpbmVkO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1ldGFkYXRhfSBmcm9tICdAc2l0ZS8uZG9jdXNhdXJ1cy9kb2N1c2F1cnVzLXBsdWdpbi1jb250ZW50LWRvY3MvZGVmYXVsdC9zaXRlLWRvY3MtbXktcHVibGljLW5ldHdvcmstb3Blbi13cnQtd2FuLW1kLTdiNC5qc29uJ1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuaW1wb3J0IHtGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7dXNlTURYQ29tcG9uZW50cyBhcyBfcHJvdmlkZUNvbXBvbmVudHN9IGZyb20gXCJAbWR4LWpzL3JlYWN0XCI7XG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgXCJ2YWx1ZVwiOiBcIndpZmlcIixcbiAgXCJpZFwiOiBcIndpZmlcIixcbiAgXCJsZXZlbFwiOiAyXG59LCB7XG4gIFwidmFsdWVcIjogXCJVU0IgdGV0aGVyXCIsXG4gIFwiaWRcIjogXCJ1c2ItdGV0aGVyXCIsXG4gIFwibGV2ZWxcIjogMlxufV07XG5mdW5jdGlvbiBfY3JlYXRlTWR4Q29udGVudChwcm9wcykge1xuICBjb25zdCBfY29tcG9uZW50cyA9IHtcbiAgICBhOiBcImFcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIGxpOiBcImxpXCIsXG4gICAgcDogXCJwXCIsXG4gICAgcHJlOiBcInByZVwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgLi4uX3Byb3ZpZGVDb21wb25lbnRzKCksXG4gICAgLi4ucHJvcHMuY29tcG9uZW50c1xuICB9O1xuICByZXR1cm4gX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFtfanN4KF9jb21wb25lbnRzLmgyLCB7XG4gICAgICBpZDogXCJ3aWZpXCIsXG4gICAgICBjaGlsZHJlbjogXCJ3aWZpXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9vcGVud3J0Lm9yZy9kb2NzL2d1aWRlLXVzZXIvbmV0d29yay93aWZpL2Nvbm5lY3RfY2xpZW50X3dpZmlcIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9vcGVud3J0Lm9yZy9kb2NzL2d1aWRlLXVzZXIvbmV0d29yay93aWZpL2Nvbm5lY3RfY2xpZW50X3dpZmlcIlxuICAgICAgfSlcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wcmUsIHtcbiAgICAgIGNoaWxkcmVuOiBfanN4KF9jb21wb25lbnRzLmNvZGUsIHtcbiAgICAgICAgY2hpbGRyZW46IFwibmV0d29yay5sYW4uaXBhZGRyPScxOTIuMTY4LjIuMSdcXG5uZXR3b3JrLnd3YW49aW50ZXJmYWNlXFxubmV0d29yay53d2FuLnByb3RvPSdkaGNwJ1xcbmZpcmV3YWxsLkB6b25lWzFdPXpvbmVcXG5maXJld2FsbC5Aem9uZVsxXS5uYW1lPSd3d2FuJ1xcbmZpcmV3YWxsLkB6b25lWzFdLmlucHV0PSdSRUpFQ1QnXFxuZmlyZXdhbGwuQHpvbmVbMV0ub3V0cHV0PSdBQ0NFUFQnXFxuZmlyZXdhbGwuQHpvbmVbMV0uZm9yd2FyZD0nUkVKRUNUJ1xcbmZpcmV3YWxsLkB6b25lWzFdLm1hc3E9JzEnXFxuZmlyZXdhbGwuQHpvbmVbMV0ubXR1X2ZpeD0nMSdcXG5maXJld2FsbC5Aem9uZVsxXS5uZXR3b3JrPSd3d2FuJ1xcbndpcmVsZXNzLkB3aWZpLWlmYWNlWzFdPXdpZmktaWZhY2VcXG53aXJlbGVzcy5Ad2lmaS1pZmFjZVsxXS5uZXR3b3JrPSd3d2FuJ1xcbndpcmVsZXNzLkB3aWZpLWlmYWNlWzFdLnNzaWQ9J1Zpb2xldHRhJ1xcbndpcmVsZXNzLkB3aWZpLWlmYWNlWzFdLmVuY3J5cHRpb249J3BzazInXFxud2lyZWxlc3MuQHdpZmktaWZhY2VbMV0uZGV2aWNlPSdyYWRpbzAnXFxud2lyZWxlc3MuQHdpZmktaWZhY2VbMV0ubW9kZT0nc3RhJ1xcbndpcmVsZXNzLkB3aWZpLWlmYWNlWzFdLmJzc2lkPSdDODpENTpGRTpDODo2MTpCMCdcXG53aXJlbGVzcy5Ad2lmaS1pZmFjZVsxXS5rZXk9J215V2lmaVBhc3N3b3JkSGVyZSdcXG5cIlxuICAgICAgfSlcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5oMiwge1xuICAgICAgaWQ6IFwidXNiLXRldGhlclwiLFxuICAgICAgY2hpbGRyZW46IFwiVVNCIHRldGhlclwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vb3BlbndydC5vcmcvZG9jcy9ndWlkZS11c2VyL25ldHdvcmsvd2FuL3d3YW4vZXRoZXJuZXRvdmVydXNiX3JuZGlzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcInNlZW0gdG8gY29ubmVjdCBVU0ItZW5kIHRvIHJvdXRlciwgd2VpcmRcIlxuICAgICAgfSlcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9vcGVud3J0Lm9yZy9kb2NzL2d1aWRlLXVzZXIvbmV0d29yay93YW4vc21hcnRwaG9uZS51c2IudGV0aGVyaW5nXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImxvdHMgdG8gY29uZmlnLCBoYXNzbGVcIlxuICAgICAgfSlcbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMudWwsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5saSwge1xuICAgICAgICBjaGlsZHJlbjogXCJtYXliZSB3b3J0aDogKHRoaXMgb25lIG9ubHkpIG9wa2cgaW5zdGFsbCBrbW9kLXVzYi1uZXQtcm5kaXNcIlxuICAgICAgfSksIFwiXFxuXCJdXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucHJlLCB7XG4gICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5jb2RlLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcIlBob25lIC0+IFVTQiBFdGhlcm5ldCBwb3J0IC0+IExBTiBjYWJsZSAtPiBSb3V0ZXIgKFdBTilcXG5cIlxuICAgICAgfSlcbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFtcInBvc3NpYmxlIHNpbmNlIEFuZHJvaWQgMTEsIGVhc2llclxcblwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL3N1cGVydXNlci5jb20vcXVlc3Rpb25zLzExMjc5NzIvYW5kcm9pZC11c2ItdGV0aGVyaW5nLXRvLWV0aGVybmV0LXRvLXJvdXRlclwiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL3N1cGVydXNlci5jb20vcXVlc3Rpb25zLzExMjc5NzIvYW5kcm9pZC11c2ItdGV0aGVyaW5nLXRvLWV0aGVybmV0LXRvLXJvdXRlclwiXG4gICAgICB9KSwgXCJcXG4yMDIzICBubyBnb29kIGluZm8gb25saW5lIG9uIGlwdjYsIGluIHRoaXMgY2FzZSwgbmVlZCBcIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9vcGVud3J0Lm9yZy9kb2NzL2d1aWRlLXVzZXIvbmV0d29yay9pcHY2L2NvbmZpZ3VyYXRpb24jaXB2Nl9yZWxheVwiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL29wZW53cnQub3JnL2RvY3MvZ3VpZGUtdXNlci9uZXR3b3JrL2lwdjYvY29uZmlndXJhdGlvbiNpcHY2X3JlbGF5XCJcbiAgICAgIH0pXVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy51bCwge1xuICAgICAgY2hpbGRyZW46IFtcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcInRoZSBjYXNlIHdpdGggSlAgUG92b1wiXG4gICAgICB9KSwgXCJcXG5cIl1cbiAgICB9KV1cbiAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3Qge3dyYXBwZXI6IE1EWExheW91dH0gPSB7XG4gICAgLi4uX3Byb3ZpZGVDb21wb25lbnRzKCksXG4gICAgLi4ucHJvcHMuY29tcG9uZW50c1xuICB9O1xuICByZXR1cm4gTURYTGF5b3V0ID8gX2pzeChNRFhMYXlvdXQsIHtcbiAgICAuLi5wcm9wcyxcbiAgICBjaGlsZHJlbjogX2pzeChfY3JlYXRlTWR4Q29udGVudCwge1xuICAgICAgLi4ucHJvcHNcbiAgICB9KVxuICB9KSA6IF9jcmVhdGVNZHhDb250ZW50KHByb3BzKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/my/public/network/openWRT/wan.md\n");

/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),\n/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/react/index.js\");\n/**\n * @import {MDXComponents} from 'mdx/types.js'\n * @import {Component, ReactElement, ReactNode} from 'react'\n */\n\n/**\n * @callback MergeComponents\n *   Custom merge function.\n * @param {Readonly<MDXComponents>} currentComponents\n *   Current components from the context.\n * @returns {MDXComponents}\n *   Additional components.\n *\n * @typedef Props\n *   Configuration for `MDXProvider`.\n * @property {ReactNode | null | undefined} [children]\n *   Children (optional).\n * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @property {boolean | null | undefined} [disableParentContext=false]\n *   Turn off outer component context (default: `false`).\n */\n\n\n\n/** @type {Readonly<MDXComponents>} */\nconst emptyComponents = {}\n\nconst MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)\n\n/**\n * Get current components from the MDX Context.\n *\n * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @returns {MDXComponents}\n *   Current components.\n */\nfunction useMDXComponents(components) {\n  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)\n\n  // Memoize to avoid unnecessary top-level context changes\n  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(\n    function () {\n      // Custom merge via a function prop\n      if (typeof components === 'function') {\n        return components(contextComponents)\n      }\n\n      return {...contextComponents, ...components}\n    },\n    [contextComponents, components]\n  )\n}\n\n/**\n * Provider for MDX context.\n *\n * @param {Readonly<Props>} properties\n *   Properties.\n * @returns {ReactElement}\n *   Element.\n * @satisfies {Component}\n */\nfunction MDXProvider(properties) {\n  /** @type {Readonly<MDXComponents>} */\n  let allComponents\n\n  if (properties.disableParentContext) {\n    allComponents =\n      typeof properties.components === 'function'\n        ? properties.components(emptyComponents)\n        : properties.components || emptyComponents\n  } else {\n    allComponents = useMDXComponents(properties.components)\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\n    MDXContext.Provider,\n    {value: allComponents},\n    properties.children\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3VzYXVydXMvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanM/MTE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mdx-js/react/lib/index.js\n");

/***/ }),

/***/ "./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-network-open-wrt-wan-md-7b4.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"id":"my/public/network/openWRT/wan","title":"wan","description":"wifi","source":"@site/docs/my/public/network/openWRT/wan.md","sourceDirName":"my/public/network/openWRT","slug":"/my/public/network/openWRT/wan","permalink":"/note/docs/my/public/network/openWRT/wan","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mySidebar","previous":{"title":"lan","permalink":"/note/docs/my/public/network/openWRT/lan"},"next":{"title":"performance","permalink":"/note/docs/my/public/network/performance"}}');

/***/ })

}]);