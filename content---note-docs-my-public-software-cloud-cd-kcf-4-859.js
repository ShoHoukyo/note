"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkdocusaurus"] = globalThis["webpackChunkdocusaurus"] || []).push([["content---note-docs-my-public-software-cloud-cd-kcf-4-859"],{

/***/ "./docs/my/public/software/cloud/CDK.md":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assets: () => (/* binding */ assets),\n/* harmony export */   contentTitle: () => (/* binding */ contentTitle),\n/* harmony export */   \"default\": () => (/* binding */ MDXContent),\n/* harmony export */   frontMatter: () => (/* binding */ frontMatter),\n/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_cloud_cdk_md_cf4_json__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   toc: () => (/* binding */ toc)\n/* harmony export */ });\n/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_cloud_cdk_md_cf4_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-cloud-cdk-md-cf4.json\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@mdx-js/react/lib/index.js\");\n\n\nconst frontMatter = {};\nconst contentTitle = undefined;\n\nconst assets = {\n\n};\n\n\n\nconst toc = [{\n  \"value\": \"pros\",\n  \"id\": \"pros\",\n  \"level\": 2\n}, {\n  \"value\": \"migrate to CDK\",\n  \"id\": \"migrate-to-cdk\",\n  \"level\": 2\n}, {\n  \"value\": \"ref\",\n  \"id\": \"ref\",\n  \"level\": 2\n}, {\n  \"value\": \"use\",\n  \"id\": \"use\",\n  \"level\": 2\n}, {\n  \"value\": \"ref\",\n  \"id\": \"ref-1\",\n  \"level\": 2\n}];\nfunction _createMdxContent(props) {\n  const _components = {\n    a: \"a\",\n    blockquote: \"blockquote\",\n    cite: \"cite\",\n    code: \"code\",\n    h2: \"h2\",\n    img: \"img\",\n    ins: \"ins\",\n    li: \"li\",\n    p: \"p\",\n    pre: \"pre\",\n    ul: \"ul\",\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://docs.aws.amazon.com/cdk/v2/guide/home.html\",\n        children: \"https://docs.aws.amazon.com/cdk/v2/guide/home.html\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {\n        src: \"https://docs.aws.amazon.com/images/cdk/v2/guide/images/AppStacks.png\",\n        alt: \"\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {\n      id: \"pros\",\n      children: \"pros\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"a common CDK idiom, iterating over a list and instantiating a construct with values from each item in the list, simply isn't possible using AWS CloudFormation expressions.\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://docs.aws.amazon.com/cdk/v2/guide/best-practices.html\",\n        children: \"https://docs.aws.amazon.com/cdk/v2/guide/best-practices.html\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"NestedStack construct offers a way around the AWS CloudFormation 500-resource limit\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://docs.aws.amazon.com/cdk/v2/guide/stacks.html\",\n        children: \"https://docs.aws.amazon.com/cdk/v2/guide/stacks.html\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.ins, {\n        children: \" it works differently from CloudFormation and has different work style \"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {\n      id: \"migrate-to-cdk\",\n      children: \"migrate to CDK\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://garbe.io/blog/2019/09/11/hey-cdk-how-to-migrate/\",\n        children: \"options, not easy, starting with CDK is much better\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"cdk import\"\n      }), \"  hassle\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {\n      children: [\"\\n  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.cite, {\n        children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://github.com/phillip-le/phillip-le.github.io/blob/b0d7d06de12d80dbf947c7606f9a724a460d863b/src/content/docs/articles/migrating-to-cdk.md\",\n          children: \" \\noverrall process (no automatic conversion)\\n\"\n        }), \"\\n  \"]\n      }), \"\\n  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n        children: \"[AWS CDK CLI Migrate Command Guide](https://docs.aws.amazon.com/cdk/v2/guide/migrate.html#migrate-intro)\\n  \"\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {\n      id: \"ref\",\n      children: \"ref\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"Hierarchy:\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"App\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [\"Stack  (CloudFormation stack, may reference other in same App)\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n          children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: \"relates to Environment (Account, Region)\"\n          }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: \"may write all environments in same .js, single-app-multi-stack-regions work 2023\"\n          }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: \"bootstrap each environment\"\n          }), \"\\n\"]\n        }), \"\\n\"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [\"Construct\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n          children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: \"may contain Construct, Resource or even Stack\"\n          }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: \"generally composition is preferred over inheritance\"\n          }), \"\\n\"]\n        }), \"\\n\"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"Resource\"\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://docs.aws.amazon.com/cdk/v2/guide/apps.html#lifecycle\",\n        children: \"https://docs.aws.amazon.com/cdk/v2/guide/apps.html#lifecycle\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"CloudFormation (deploy-time) parameters discouraged, use CDK (synth-time)\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://docs.aws.amazon.com/cdk/v2/guide/stacks.html\",\n        children: \"https://docs.aws.amazon.com/cdk/v2/guide/stacks.html\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"when creating an AWS CDK app with cross-environment references, physical names are required for the AWS CDK to function correctly\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {\n      id: \"use\",\n      children: \"use\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"put code in single repo. (different dir?)\\npros:\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"// BUCKET_NAME should be a constant in both Lambda and CDK code\\nnew lambda.Function(this, 'MyLambda', {\\n  // ...\\n  environment: {\\n    BUCKET_NAME: bucket.bucketName,\\n  },\\n});\\n\\nnew Table(this, 'CarTable', {\\n      partitionKey: { name: 'licenseplate', type: AttributeType.STRING },\\n      tableName: 'cardata-cars',\\n\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {\n      id: \"ref-1\",\n      children: \"ref\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"# 2024-06-16 seems very limited\\n# see https://github.com/aws-samples/aws-cdk-examples\\ncdk init --list\\nnpx aws-cdk init --language typescript\\n\\ncdk bootstrap aws://ACCOUNT-NUMBER/REGION\\n\\nimport * as cdk from 'aws-cdk-lib';\\n\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"npm aws-cdk-lib: collection of constructs organized by AWS\"\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = {\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {\n    ...props,\n    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {\n      ...props\n    })\n  }) : _createMdxContent(props);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL215L3B1YmxpYy9zb2Z0d2FyZS9jbG91ZC9DREsubWQiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jdXNhdXJ1cy8uL2RvY3MvbXkvcHVibGljL3NvZnR3YXJlL2Nsb3VkL0NESy5tZD9lNjY4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7fTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQge2RlZmF1bHQgYXMgbWV0YWRhdGF9IGZyb20gJ0BzaXRlLy5kb2N1c2F1cnVzL2RvY3VzYXVydXMtcGx1Z2luLWNvbnRlbnQtZG9jcy9kZWZhdWx0L3NpdGUtZG9jcy1teS1wdWJsaWMtc29mdHdhcmUtY2xvdWQtY2RrLW1kLWNmNC5qc29uJ1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuaW1wb3J0IHtGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7dXNlTURYQ29tcG9uZW50cyBhcyBfcHJvdmlkZUNvbXBvbmVudHN9IGZyb20gXCJAbWR4LWpzL3JlYWN0XCI7XG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgXCJ2YWx1ZVwiOiBcInByb3NcIixcbiAgXCJpZFwiOiBcInByb3NcIixcbiAgXCJsZXZlbFwiOiAyXG59LCB7XG4gIFwidmFsdWVcIjogXCJtaWdyYXRlIHRvIENES1wiLFxuICBcImlkXCI6IFwibWlncmF0ZS10by1jZGtcIixcbiAgXCJsZXZlbFwiOiAyXG59LCB7XG4gIFwidmFsdWVcIjogXCJyZWZcIixcbiAgXCJpZFwiOiBcInJlZlwiLFxuICBcImxldmVsXCI6IDJcbn0sIHtcbiAgXCJ2YWx1ZVwiOiBcInVzZVwiLFxuICBcImlkXCI6IFwidXNlXCIsXG4gIFwibGV2ZWxcIjogMlxufSwge1xuICBcInZhbHVlXCI6IFwicmVmXCIsXG4gIFwiaWRcIjogXCJyZWYtMVwiLFxuICBcImxldmVsXCI6IDJcbn1dO1xuZnVuY3Rpb24gX2NyZWF0ZU1keENvbnRlbnQocHJvcHMpIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSB7XG4gICAgYTogXCJhXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCIsXG4gICAgY2l0ZTogXCJjaXRlXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgaDI6IFwiaDJcIixcbiAgICBpbWc6IFwiaW1nXCIsXG4gICAgaW5zOiBcImluc1wiLFxuICAgIGxpOiBcImxpXCIsXG4gICAgcDogXCJwXCIsXG4gICAgcHJlOiBcInByZVwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgLi4uX3Byb3ZpZGVDb21wb25lbnRzKCksXG4gICAgLi4ucHJvcHMuY29tcG9uZW50c1xuICB9O1xuICByZXR1cm4gX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFtfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW19qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jZGsvdjIvZ3VpZGUvaG9tZS5odG1sXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jZGsvdjIvZ3VpZGUvaG9tZS5odG1sXCJcbiAgICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmltZywge1xuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2ltYWdlcy9jZGsvdjIvZ3VpZGUvaW1hZ2VzL0FwcFN0YWNrcy5wbmdcIixcbiAgICAgICAgYWx0OiBcIlwiXG4gICAgICB9KV1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5oMiwge1xuICAgICAgaWQ6IFwicHJvc1wiLFxuICAgICAgY2hpbGRyZW46IFwicHJvc1wiXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJhIGNvbW1vbiBDREsgaWRpb20sIGl0ZXJhdGluZyBvdmVyIGEgbGlzdCBhbmQgaW5zdGFudGlhdGluZyBhIGNvbnN0cnVjdCB3aXRoIHZhbHVlcyBmcm9tIGVhY2ggaXRlbSBpbiB0aGUgbGlzdCwgc2ltcGx5IGlzbid0IHBvc3NpYmxlIHVzaW5nIEFXUyBDbG91ZEZvcm1hdGlvbiBleHByZXNzaW9ucy5cXG5cIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2Nkay92Mi9ndWlkZS9iZXN0LXByYWN0aWNlcy5odG1sXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jZGsvdjIvZ3VpZGUvYmVzdC1wcmFjdGljZXMuaHRtbFwiXG4gICAgICB9KV1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogXCJOZXN0ZWRTdGFjayBjb25zdHJ1Y3Qgb2ZmZXJzIGEgd2F5IGFyb3VuZCB0aGUgQVdTIENsb3VkRm9ybWF0aW9uIDUwMC1yZXNvdXJjZSBsaW1pdFwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2Nkay92Mi9ndWlkZS9zdGFja3MuaHRtbFwiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vY2RrL3YyL2d1aWRlL3N0YWNrcy5odG1sXCJcbiAgICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmlucywge1xuICAgICAgICBjaGlsZHJlbjogXCIgaXQgd29ya3MgZGlmZmVyZW50bHkgZnJvbSBDbG91ZEZvcm1hdGlvbiBhbmQgaGFzIGRpZmZlcmVudCB3b3JrIHN0eWxlIFwiXG4gICAgICB9KV1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5oMiwge1xuICAgICAgaWQ6IFwibWlncmF0ZS10by1jZGtcIixcbiAgICAgIGNoaWxkcmVuOiBcIm1pZ3JhdGUgdG8gQ0RLXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFtfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL2dhcmJlLmlvL2Jsb2cvMjAxOS8wOS8xMS9oZXktY2RrLWhvdy10by1taWdyYXRlL1wiLFxuICAgICAgICBjaGlsZHJlbjogXCJvcHRpb25zLCBub3QgZWFzeSwgc3RhcnRpbmcgd2l0aCBDREsgaXMgbXVjaCBiZXR0ZXJcIlxuICAgICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuY29kZSwge1xuICAgICAgICBjaGlsZHJlbjogXCJjZGsgaW1wb3J0XCJcbiAgICAgIH0pLCBcIiAgaGFzc2xlXCJdXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLmJsb2NrcXVvdGUsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJcXG4gIFwiLCBfanN4cyhfY29tcG9uZW50cy5jaXRlLCB7XG4gICAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vcGhpbGxpcC1sZS9waGlsbGlwLWxlLmdpdGh1Yi5pby9ibG9iL2IwZDdkMDZkZTEyZDgwZGJmOTQ3Yzc2MDZmOWE3MjRhNDYwZDg2M2Ivc3JjL2NvbnRlbnQvZG9jcy9hcnRpY2xlcy9taWdyYXRpbmctdG8tY2RrLm1kXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFwiIFxcbm92ZXJyYWxsIHByb2Nlc3MgKG5vIGF1dG9tYXRpYyBjb252ZXJzaW9uKVxcblwiXG4gICAgICAgIH0pLCBcIlxcbiAgXCJdXG4gICAgICB9KSwgXCJcXG4gIFwiLCBfanN4KF9jb21wb25lbnRzLnByZSwge1xuICAgICAgICBjaGlsZHJlbjogXCJbQVdTIENESyBDTEkgTWlncmF0ZSBDb21tYW5kIEd1aWRlXShodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vY2RrL3YyL2d1aWRlL21pZ3JhdGUuaHRtbCNtaWdyYXRlLWludHJvKVxcbiAgXCJcbiAgICAgIH0pLCBcIlxcblwiXVxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmgyLCB7XG4gICAgICBpZDogXCJyZWZcIixcbiAgICAgIGNoaWxkcmVuOiBcInJlZlwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFwiSGllcmFyY2h5OlwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnVsLCB7XG4gICAgICBjaGlsZHJlbjogW1wiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFwiQXBwXCJcbiAgICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5saSwge1xuICAgICAgICBjaGlsZHJlbjogW1wiU3RhY2sgIChDbG91ZEZvcm1hdGlvbiBzdGFjaywgbWF5IHJlZmVyZW5jZSBvdGhlciBpbiBzYW1lIEFwcClcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMudWwsIHtcbiAgICAgICAgICBjaGlsZHJlbjogW1wiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBcInJlbGF0ZXMgdG8gRW52aXJvbm1lbnQgKEFjY291bnQsIFJlZ2lvbilcIlxuICAgICAgICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogXCJtYXkgd3JpdGUgYWxsIGVudmlyb25tZW50cyBpbiBzYW1lIC5qcywgc2luZ2xlLWFwcC1tdWx0aS1zdGFjay1yZWdpb25zIHdvcmsgMjAyM1wiXG4gICAgICAgICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBcImJvb3RzdHJhcCBlYWNoIGVudmlyb25tZW50XCJcbiAgICAgICAgICB9KSwgXCJcXG5cIl1cbiAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFtcIkNvbnN0cnVjdFxcblwiLCBfanN4cyhfY29tcG9uZW50cy51bCwge1xuICAgICAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5saSwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFwibWF5IGNvbnRhaW4gQ29uc3RydWN0LCBSZXNvdXJjZSBvciBldmVuIFN0YWNrXCJcbiAgICAgICAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5saSwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFwiZ2VuZXJhbGx5IGNvbXBvc2l0aW9uIGlzIHByZWZlcnJlZCBvdmVyIGluaGVyaXRhbmNlXCJcbiAgICAgICAgICB9KSwgXCJcXG5cIl1cbiAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5saSwge1xuICAgICAgICBjaGlsZHJlbjogXCJSZXNvdXJjZVwiXG4gICAgICB9KSwgXCJcXG5cIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2Nkay92Mi9ndWlkZS9hcHBzLmh0bWwjbGlmZWN5Y2xlXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jZGsvdjIvZ3VpZGUvYXBwcy5odG1sI2xpZmVjeWNsZVwiXG4gICAgICB9KVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW1wiQ2xvdWRGb3JtYXRpb24gKGRlcGxveS10aW1lKSBwYXJhbWV0ZXJzIGRpc2NvdXJhZ2VkLCB1c2UgQ0RLIChzeW50aC10aW1lKVxcblwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vY2RrL3YyL2d1aWRlL3N0YWNrcy5odG1sXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jZGsvdjIvZ3VpZGUvc3RhY2tzLmh0bWxcIlxuICAgICAgfSldXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFwid2hlbiBjcmVhdGluZyBhbiBBV1MgQ0RLIGFwcCB3aXRoIGNyb3NzLWVudmlyb25tZW50IHJlZmVyZW5jZXMsIHBoeXNpY2FsIG5hbWVzIGFyZSByZXF1aXJlZCBmb3IgdGhlIEFXUyBDREsgdG8gZnVuY3Rpb24gY29ycmVjdGx5XCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5oMiwge1xuICAgICAgaWQ6IFwidXNlXCIsXG4gICAgICBjaGlsZHJlbjogXCJ1c2VcIlxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBcInB1dCBjb2RlIGluIHNpbmdsZSByZXBvLiAoZGlmZmVyZW50IGRpcj8pXFxucHJvczpcIlxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLnByZSwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuY29kZSwge1xuICAgICAgICBjaGlsZHJlbjogXCIvLyBCVUNLRVRfTkFNRSBzaG91bGQgYmUgYSBjb25zdGFudCBpbiBib3RoIExhbWJkYSBhbmQgQ0RLIGNvZGVcXG5uZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdNeUxhbWJkYScsIHtcXG4gIC8vIC4uLlxcbiAgZW52aXJvbm1lbnQ6IHtcXG4gICAgQlVDS0VUX05BTUU6IGJ1Y2tldC5idWNrZXROYW1lLFxcbiAgfSxcXG59KTtcXG5cXG5uZXcgVGFibGUodGhpcywgJ0NhclRhYmxlJywge1xcbiAgICAgIHBhcnRpdGlvbktleTogeyBuYW1lOiAnbGljZW5zZXBsYXRlJywgdHlwZTogQXR0cmlidXRlVHlwZS5TVFJJTkcgfSxcXG4gICAgICB0YWJsZU5hbWU6ICdjYXJkYXRhLWNhcnMnLFxcblwiXG4gICAgICB9KVxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmgyLCB7XG4gICAgICBpZDogXCJyZWYtMVwiLFxuICAgICAgY2hpbGRyZW46IFwicmVmXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wcmUsIHtcbiAgICAgIGNoaWxkcmVuOiBfanN4KF9jb21wb25lbnRzLmNvZGUsIHtcbiAgICAgICAgY2hpbGRyZW46IFwiIyAyMDI0LTA2LTE2IHNlZW1zIHZlcnkgbGltaXRlZFxcbiMgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hd3Mtc2FtcGxlcy9hd3MtY2RrLWV4YW1wbGVzXFxuY2RrIGluaXQgLS1saXN0XFxubnB4IGF3cy1jZGsgaW5pdCAtLWxhbmd1YWdlIHR5cGVzY3JpcHRcXG5cXG5jZGsgYm9vdHN0cmFwIGF3czovL0FDQ09VTlQtTlVNQkVSL1JFR0lPTlxcblxcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XFxuXCJcbiAgICAgIH0pXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFwibnBtIGF3cy1jZGstbGliOiBjb2xsZWN0aW9uIG9mIGNvbnN0cnVjdHMgb3JnYW5pemVkIGJ5IEFXU1wiXG4gICAgfSldXG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0ge1xuICAgIC4uLl9wcm92aWRlQ29tcG9uZW50cygpLFxuICAgIC4uLnByb3BzLmNvbXBvbmVudHNcbiAgfTtcbiAgcmV0dXJuIE1EWExheW91dCA/IF9qc3goTURYTGF5b3V0LCB7XG4gICAgLi4ucHJvcHMsXG4gICAgY2hpbGRyZW46IF9qc3goX2NyZWF0ZU1keENvbnRlbnQsIHtcbiAgICAgIC4uLnByb3BzXG4gICAgfSlcbiAgfSkgOiBfY3JlYXRlTWR4Q29udGVudChwcm9wcyk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./docs/my/public/software/cloud/CDK.md\n");

/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),\n/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/react/index.js\");\n/**\n * @import {MDXComponents} from 'mdx/types.js'\n * @import {Component, ReactElement, ReactNode} from 'react'\n */\n\n/**\n * @callback MergeComponents\n *   Custom merge function.\n * @param {Readonly<MDXComponents>} currentComponents\n *   Current components from the context.\n * @returns {MDXComponents}\n *   Additional components.\n *\n * @typedef Props\n *   Configuration for `MDXProvider`.\n * @property {ReactNode | null | undefined} [children]\n *   Children (optional).\n * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @property {boolean | null | undefined} [disableParentContext=false]\n *   Turn off outer component context (default: `false`).\n */\n\n\n\n/** @type {Readonly<MDXComponents>} */\nconst emptyComponents = {}\n\nconst MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)\n\n/**\n * Get current components from the MDX Context.\n *\n * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @returns {MDXComponents}\n *   Current components.\n */\nfunction useMDXComponents(components) {\n  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)\n\n  // Memoize to avoid unnecessary top-level context changes\n  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(\n    function () {\n      // Custom merge via a function prop\n      if (typeof components === 'function') {\n        return components(contextComponents)\n      }\n\n      return {...contextComponents, ...components}\n    },\n    [contextComponents, components]\n  )\n}\n\n/**\n * Provider for MDX context.\n *\n * @param {Readonly<Props>} properties\n *   Properties.\n * @returns {ReactElement}\n *   Element.\n * @satisfies {Component}\n */\nfunction MDXProvider(properties) {\n  /** @type {Readonly<MDXComponents>} */\n  let allComponents\n\n  if (properties.disableParentContext) {\n    allComponents =\n      typeof properties.components === 'function'\n        ? properties.components(emptyComponents)\n        : properties.components || emptyComponents\n  } else {\n    allComponents = useMDXComponents(properties.components)\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\n    MDXContext.Provider,\n    {value: allComponents},\n    properties.children\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3VzYXVydXMvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanM/MTE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mdx-js/react/lib/index.js\n");

/***/ }),

/***/ "./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-cloud-cdk-md-cf4.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"id":"my/public/software/cloud/CDK","title":"CDK","description":"https://docs.aws.amazon.com/cdk/v2/guide/home.html","source":"@site/docs/my/public/software/cloud/CDK.md","sourceDirName":"my/public/software/cloud","slug":"/my/public/software/cloud/CDK","permalink":"/note/docs/my/public/software/cloud/CDK","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mySidebar","previous":{"title":"service","permalink":"/note/docs/my/public/software/cloud/Azure/service"},"next":{"title":"Terraform","permalink":"/note/docs/my/public/software/cloud/Terraform"}}');

/***/ })

}]);