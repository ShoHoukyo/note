"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkdocusaurus"] = globalThis["webpackChunkdocusaurus"] || []).push([["content---note-docs-my-public-software-java-script-react-forme-69-98f"],{

/***/ "./docs/my/public/software/JavaScript/React/form.md":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assets: () => (/* binding */ assets),\n/* harmony export */   contentTitle: () => (/* binding */ contentTitle),\n/* harmony export */   \"default\": () => (/* binding */ MDXContent),\n/* harmony export */   frontMatter: () => (/* binding */ frontMatter),\n/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_java_script_react_form_md_e69_json__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   toc: () => (/* binding */ toc)\n/* harmony export */ });\n/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_java_script_react_form_md_e69_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-java-script-react-form-md-e69.json\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@mdx-js/react/lib/index.js\");\n\n\nconst frontMatter = {};\nconst contentTitle = undefined;\n\nconst assets = {\n\n};\n\n\n\nconst toc = [{\n  \"value\": \"simple\",\n  \"id\": \"simple\",\n  \"level\": 3\n}, {\n  \"value\": \"React Hook Form\",\n  \"id\": \"react-hook-form\",\n  \"level\": 3\n}, {\n  \"value\": \"tips\",\n  \"id\": \"tips\",\n  \"level\": 4\n}];\nfunction _createMdxContent(props) {\n  const _components = {\n    a: \"a\",\n    blockquote: \"blockquote\",\n    cite: \"cite\",\n    code: \"code\",\n    h3: \"h3\",\n    h4: \"h4\",\n    ins: \"ins\",\n    p: \"p\",\n    pre: \"pre\",\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {\n      id: \"simple\",\n      children: \"simple\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://react.dev/learn/reusing-logic-with-custom-hooks\",\n        children: \"https://react.dev/learn/reusing-logic-with-custom-hooks\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"   const nameProps = useFormInput('');\\n   <input {...nameProps} />\\n\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {\n      id: \"react-hook-form\",\n      children: \"React Hook Form\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"good overview  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://www.react-hook-form.com/get-started/\",\n        children: \"https://www.react-hook-form.com/get-started/\"\n      }), \"\\nnote React official \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://react.dev/reference/react-dom/hooks/useFormState\",\n        children: \"https://react.dev/reference/react-dom/hooks/useFormState\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.cite, {\n        children: [\" \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://www.react-hook-form.com/faqs/\",\n          children: \" 2023-12-04  \"\n        }), \" \"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n        style: {},\n        children: [\"\\nReact Hook Form is focusing on uncontrolled inputs, which means you\\ndon't need to change the input value via state via onChange. In fact,\\nyou don't need value at all. You only need to set defaultValue for the\\ninitial input value.\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.ins, {\n          children: \"\\nAccording to its table, React Hook Form seems better than Formik or Redux Form.\\n\"\n        }), \"\\n\"]\n      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://www.react-hook-form.com/api/usecontroller/\",\n          children: \"https://www.react-hook-form.com/api/usecontroller/\"\n        }), \"\\nController's job is to spy on the input, report, and set its value.\"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {}), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {\n      id: \"tips\",\n      children: \"tips\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"2024-04-05\\nit seems that manual marking of required fields is needed (e.g. an asterisk)\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.cite, {\n        children: [\" \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://www.react-hook-form.com/advanced-usage/\",\n          children: \" 2023-12-07  \"\n        }), \" \"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n        style: {},\n        children: [\"\\nThe native input returns the value in string format unless invoked\\nwith valueAsNumber or valueAsDate\\nit's not perfect. We still have to deal with isNaN or null values\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.ins, {\n          children: \" \\n[2020 react-hook-form, always return string type ](https://stackoverflow.com/questions/61782355/react-hook-form-always-return-string-type-value)\\n\"\n        }), \"\\n\"]\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://stackoverflow.com/questions/68112196/uncontrolled-input-to-controlled-input-warning-in-react-hook-form-and-material-u\",\n        children: \"Uncontrolled Input to Controlled Input Warning in React Hook Form and Material UI's TextField\"\n      }), \"\\nfield default value should be \\\"\\\" (e.g. for MUI-Select)\\nnote also direct \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"<Input {...register(\\\"input\\\")} />\"\n      }), \" on controlled MUI\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"// v7    \\n// for controller to get onChange event on controlled element (e.g. MUI), p2 any better way?\\n    onChange={(e) => {\\n        renderProps.field.onChange(e);\\n        // custom process as needed\\n    }}\\n\"\n      })\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = {\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {\n    ...props,\n    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {\n      ...props\n    })\n  }) : _createMdxContent(props);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL215L3B1YmxpYy9zb2Z0d2FyZS9KYXZhU2NyaXB0L1JlYWN0L2Zvcm0ubWQiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jdXNhdXJ1cy8uL2RvY3MvbXkvcHVibGljL3NvZnR3YXJlL0phdmFTY3JpcHQvUmVhY3QvZm9ybS5tZD82OTIzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7fTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQge2RlZmF1bHQgYXMgbWV0YWRhdGF9IGZyb20gJ0BzaXRlLy5kb2N1c2F1cnVzL2RvY3VzYXVydXMtcGx1Z2luLWNvbnRlbnQtZG9jcy9kZWZhdWx0L3NpdGUtZG9jcy1teS1wdWJsaWMtc29mdHdhcmUtamF2YS1zY3JpcHQtcmVhY3QtZm9ybS1tZC1lNjkuanNvbidcbmV4cG9ydCBjb25zdCBhc3NldHMgPSB7XG5cbn07XG5cbmltcG9ydCB7RnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4c30gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQge3VzZU1EWENvbXBvbmVudHMgYXMgX3Byb3ZpZGVDb21wb25lbnRzfSBmcm9tIFwiQG1keC1qcy9yZWFjdFwiO1xuZXhwb3J0IGNvbnN0IHRvYyA9IFt7XG4gIFwidmFsdWVcIjogXCJzaW1wbGVcIixcbiAgXCJpZFwiOiBcInNpbXBsZVwiLFxuICBcImxldmVsXCI6IDNcbn0sIHtcbiAgXCJ2YWx1ZVwiOiBcIlJlYWN0IEhvb2sgRm9ybVwiLFxuICBcImlkXCI6IFwicmVhY3QtaG9vay1mb3JtXCIsXG4gIFwibGV2ZWxcIjogM1xufSwge1xuICBcInZhbHVlXCI6IFwidGlwc1wiLFxuICBcImlkXCI6IFwidGlwc1wiLFxuICBcImxldmVsXCI6IDRcbn1dO1xuZnVuY3Rpb24gX2NyZWF0ZU1keENvbnRlbnQocHJvcHMpIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSB7XG4gICAgYTogXCJhXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCIsXG4gICAgY2l0ZTogXCJjaXRlXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgaDM6IFwiaDNcIixcbiAgICBoNDogXCJoNFwiLFxuICAgIGluczogXCJpbnNcIixcbiAgICBwOiBcInBcIixcbiAgICBwcmU6IFwicHJlXCIsXG4gICAgLi4uX3Byb3ZpZGVDb21wb25lbnRzKCksXG4gICAgLi4ucHJvcHMuY29tcG9uZW50c1xuICB9O1xuICByZXR1cm4gX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFtfanN4KF9jb21wb25lbnRzLmgzLCB7XG4gICAgICBpZDogXCJzaW1wbGVcIixcbiAgICAgIGNoaWxkcmVuOiBcInNpbXBsZVwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vcmVhY3QuZGV2L2xlYXJuL3JldXNpbmctbG9naWMtd2l0aC1jdXN0b20taG9va3NcIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9yZWFjdC5kZXYvbGVhcm4vcmV1c2luZy1sb2dpYy13aXRoLWN1c3RvbS1ob29rc1wiXG4gICAgICB9KVxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLnByZSwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuY29kZSwge1xuICAgICAgICBjaGlsZHJlbjogXCIgICBjb25zdCBuYW1lUHJvcHMgPSB1c2VGb3JtSW5wdXQoJycpO1xcbiAgIDxpbnB1dCB7Li4ubmFtZVByb3BzfSAvPlxcblwiXG4gICAgICB9KVxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmgzLCB7XG4gICAgICBpZDogXCJyZWFjdC1ob29rLWZvcm1cIixcbiAgICAgIGNoaWxkcmVuOiBcIlJlYWN0IEhvb2sgRm9ybVwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJnb29kIG92ZXJ2aWV3ICBcIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cucmVhY3QtaG9vay1mb3JtLmNvbS9nZXQtc3RhcnRlZC9cIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly93d3cucmVhY3QtaG9vay1mb3JtLmNvbS9nZXQtc3RhcnRlZC9cIlxuICAgICAgfSksIFwiXFxubm90ZSBSZWFjdCBvZmZpY2lhbCBcIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9yZWFjdC5kZXYvcmVmZXJlbmNlL3JlYWN0LWRvbS9ob29rcy91c2VGb3JtU3RhdGVcIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9yZWFjdC5kZXYvcmVmZXJlbmNlL3JlYWN0LWRvbS9ob29rcy91c2VGb3JtU3RhdGVcIlxuICAgICAgfSldXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLmJsb2NrcXVvdGUsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMuY2l0ZSwge1xuICAgICAgICBjaGlsZHJlbjogW1wiIFwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LnJlYWN0LWhvb2stZm9ybS5jb20vZmFxcy9cIixcbiAgICAgICAgICBjaGlsZHJlbjogXCIgMjAyMy0xMi0wNCAgXCJcbiAgICAgICAgfSksIFwiIFwiXVxuICAgICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW1wiXFxuUmVhY3QgSG9vayBGb3JtIGlzIGZvY3VzaW5nIG9uIHVuY29udHJvbGxlZCBpbnB1dHMsIHdoaWNoIG1lYW5zIHlvdVxcbmRvbid0IG5lZWQgdG8gY2hhbmdlIHRoZSBpbnB1dCB2YWx1ZSB2aWEgc3RhdGUgdmlhIG9uQ2hhbmdlLiBJbiBmYWN0LFxcbnlvdSBkb24ndCBuZWVkIHZhbHVlIGF0IGFsbC4gWW91IG9ubHkgbmVlZCB0byBzZXQgZGVmYXVsdFZhbHVlIGZvciB0aGVcXG5pbml0aWFsIGlucHV0IHZhbHVlLlxcblwiLCBfanN4KF9jb21wb25lbnRzLmlucywge1xuICAgICAgICAgIGNoaWxkcmVuOiBcIlxcbkFjY29yZGluZyB0byBpdHMgdGFibGUsIFJlYWN0IEhvb2sgRm9ybSBzZWVtcyBiZXR0ZXIgdGhhbiBGb3JtaWsgb3IgUmVkdXggRm9ybS5cXG5cIlxuICAgICAgICB9KSwgXCJcXG5cIl1cbiAgICAgIH0pLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICAgIGNoaWxkcmVuOiBbX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5yZWFjdC1ob29rLWZvcm0uY29tL2FwaS91c2Vjb250cm9sbGVyL1wiLFxuICAgICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vd3d3LnJlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWNvbnRyb2xsZXIvXCJcbiAgICAgICAgfSksIFwiXFxuQ29udHJvbGxlcidzIGpvYiBpcyB0byBzcHkgb24gdGhlIGlucHV0LCByZXBvcnQsIGFuZCBzZXQgaXRzIHZhbHVlLlwiXVxuICAgICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge30pLCBcIlxcblwiXVxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmg0LCB7XG4gICAgICBpZDogXCJ0aXBzXCIsXG4gICAgICBjaGlsZHJlbjogXCJ0aXBzXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogXCIyMDI0LTA0LTA1XFxuaXQgc2VlbXMgdGhhdCBtYW51YWwgbWFya2luZyBvZiByZXF1aXJlZCBmaWVsZHMgaXMgbmVlZGVkIChlLmcuIGFuIGFzdGVyaXNrKVwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLmJsb2NrcXVvdGUsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMuY2l0ZSwge1xuICAgICAgICBjaGlsZHJlbjogW1wiIFwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LnJlYWN0LWhvb2stZm9ybS5jb20vYWR2YW5jZWQtdXNhZ2UvXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFwiIDIwMjMtMTItMDcgIFwiXG4gICAgICAgIH0pLCBcIiBcIl1cbiAgICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgY2hpbGRyZW46IFtcIlxcblRoZSBuYXRpdmUgaW5wdXQgcmV0dXJucyB0aGUgdmFsdWUgaW4gc3RyaW5nIGZvcm1hdCB1bmxlc3MgaW52b2tlZFxcbndpdGggdmFsdWVBc051bWJlciBvciB2YWx1ZUFzRGF0ZVxcbml0J3Mgbm90IHBlcmZlY3QuIFdlIHN0aWxsIGhhdmUgdG8gZGVhbCB3aXRoIGlzTmFOIG9yIG51bGwgdmFsdWVzXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuaW5zLCB7XG4gICAgICAgICAgY2hpbGRyZW46IFwiIFxcblsyMDIwIHJlYWN0LWhvb2stZm9ybSwgYWx3YXlzIHJldHVybiBzdHJpbmcgdHlwZSBdKGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYxNzgyMzU1L3JlYWN0LWhvb2stZm9ybS1hbHdheXMtcmV0dXJuLXN0cmluZy10eXBlLXZhbHVlKVxcblwiXG4gICAgICAgIH0pLCBcIlxcblwiXVxuICAgICAgfSksIFwiXFxuXCJdXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjgxMTIxOTYvdW5jb250cm9sbGVkLWlucHV0LXRvLWNvbnRyb2xsZWQtaW5wdXQtd2FybmluZy1pbi1yZWFjdC1ob29rLWZvcm0tYW5kLW1hdGVyaWFsLXVcIixcbiAgICAgICAgY2hpbGRyZW46IFwiVW5jb250cm9sbGVkIElucHV0IHRvIENvbnRyb2xsZWQgSW5wdXQgV2FybmluZyBpbiBSZWFjdCBIb29rIEZvcm0gYW5kIE1hdGVyaWFsIFVJJ3MgVGV4dEZpZWxkXCJcbiAgICAgIH0pLCBcIlxcbmZpZWxkIGRlZmF1bHQgdmFsdWUgc2hvdWxkIGJlIFxcXCJcXFwiIChlLmcuIGZvciBNVUktU2VsZWN0KVxcbm5vdGUgYWxzbyBkaXJlY3QgXCIsIF9qc3goX2NvbXBvbmVudHMuY29kZSwge1xuICAgICAgICBjaGlsZHJlbjogXCI8SW5wdXQgey4uLnJlZ2lzdGVyKFxcXCJpbnB1dFxcXCIpfSAvPlwiXG4gICAgICB9KSwgXCIgb24gY29udHJvbGxlZCBNVUlcIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wcmUsIHtcbiAgICAgIGNoaWxkcmVuOiBfanN4KF9jb21wb25lbnRzLmNvZGUsIHtcbiAgICAgICAgY2hpbGRyZW46IFwiLy8gdjcgICAgXFxuLy8gZm9yIGNvbnRyb2xsZXIgdG8gZ2V0IG9uQ2hhbmdlIGV2ZW50IG9uIGNvbnRyb2xsZWQgZWxlbWVudCAoZS5nLiBNVUkpLCBwMiBhbnkgYmV0dGVyIHdheT9cXG4gICAgb25DaGFuZ2U9eyhlKSA9PiB7XFxuICAgICAgICByZW5kZXJQcm9wcy5maWVsZC5vbkNoYW5nZShlKTtcXG4gICAgICAgIC8vIGN1c3RvbSBwcm9jZXNzIGFzIG5lZWRlZFxcbiAgICB9fVxcblwiXG4gICAgICB9KVxuICAgIH0pXVxuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IHtcbiAgICAuLi5fcHJvdmlkZUNvbXBvbmVudHMoKSxcbiAgICAuLi5wcm9wcy5jb21wb25lbnRzXG4gIH07XG4gIHJldHVybiBNRFhMYXlvdXQgPyBfanN4KE1EWExheW91dCwge1xuICAgIC4uLnByb3BzLFxuICAgIGNoaWxkcmVuOiBfanN4KF9jcmVhdGVNZHhDb250ZW50LCB7XG4gICAgICAuLi5wcm9wc1xuICAgIH0pXG4gIH0pIDogX2NyZWF0ZU1keENvbnRlbnQocHJvcHMpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/my/public/software/JavaScript/React/form.md\n");

/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),\n/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/react/index.js\");\n/**\n * @import {MDXComponents} from 'mdx/types.js'\n * @import {Component, ReactElement, ReactNode} from 'react'\n */\n\n/**\n * @callback MergeComponents\n *   Custom merge function.\n * @param {Readonly<MDXComponents>} currentComponents\n *   Current components from the context.\n * @returns {MDXComponents}\n *   Additional components.\n *\n * @typedef Props\n *   Configuration for `MDXProvider`.\n * @property {ReactNode | null | undefined} [children]\n *   Children (optional).\n * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @property {boolean | null | undefined} [disableParentContext=false]\n *   Turn off outer component context (default: `false`).\n */\n\n\n\n/** @type {Readonly<MDXComponents>} */\nconst emptyComponents = {}\n\nconst MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)\n\n/**\n * Get current components from the MDX Context.\n *\n * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @returns {MDXComponents}\n *   Current components.\n */\nfunction useMDXComponents(components) {\n  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)\n\n  // Memoize to avoid unnecessary top-level context changes\n  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(\n    function () {\n      // Custom merge via a function prop\n      if (typeof components === 'function') {\n        return components(contextComponents)\n      }\n\n      return {...contextComponents, ...components}\n    },\n    [contextComponents, components]\n  )\n}\n\n/**\n * Provider for MDX context.\n *\n * @param {Readonly<Props>} properties\n *   Properties.\n * @returns {ReactElement}\n *   Element.\n * @satisfies {Component}\n */\nfunction MDXProvider(properties) {\n  /** @type {Readonly<MDXComponents>} */\n  let allComponents\n\n  if (properties.disableParentContext) {\n    allComponents =\n      typeof properties.components === 'function'\n        ? properties.components(emptyComponents)\n        : properties.components || emptyComponents\n  } else {\n    allComponents = useMDXComponents(properties.components)\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\n    MDXContext.Provider,\n    {value: allComponents},\n    properties.children\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3VzYXVydXMvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanM/MTE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mdx-js/react/lib/index.js\n");

/***/ }),

/***/ "./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-java-script-react-form-md-e69.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"id":"my/public/software/JavaScript/React/form","title":"form","description":"simple","source":"@site/docs/my/public/software/JavaScript/React/form.md","sourceDirName":"my/public/software/JavaScript/React","slug":"/my/public/software/JavaScript/React/form","permalink":"/note/docs/my/public/software/JavaScript/React/form","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mySidebar","previous":{"title":"bug","permalink":"/note/docs/my/public/software/JavaScript/React/bug"},"next":{"title":"native","permalink":"/note/docs/my/public/software/JavaScript/React/native"}}');

/***/ })

}]);