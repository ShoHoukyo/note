"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkdocusaurus"] = globalThis["webpackChunkdocusaurus"] || []).push([["content---note-docs-my-public-software-cloud-aws-cloudwatch-52-b-177"],{

/***/ "./docs/my/public/software/cloud/AWS/cloudwatch.md":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assets: () => (/* binding */ assets),\n/* harmony export */   contentTitle: () => (/* binding */ contentTitle),\n/* harmony export */   \"default\": () => (/* binding */ MDXContent),\n/* harmony export */   frontMatter: () => (/* binding */ frontMatter),\n/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_cloud_aws_cloudwatch_md_52b_json__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   toc: () => (/* binding */ toc)\n/* harmony export */ });\n/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_cloud_aws_cloudwatch_md_52b_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-cloud-aws-cloudwatch-md-52b.json\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@mdx-js/react/lib/index.js\");\n\n\nconst frontMatter = {};\nconst contentTitle = undefined;\n\nconst assets = {\n\n};\n\n\n\nconst toc = [];\nfunction _createMdxContent(props) {\n  const _components = {\n    a: \"a\",\n    blockquote: \"blockquote\",\n    cite: \"cite\",\n    code: \"code\",\n    ins: \"ins\",\n    li: \"li\",\n    p: \"p\",\n    pre: \"pre\",\n    ul: \"ul\",\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"<a href=\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-basic-detailed.html%3EBasic\",\n        children: \"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-basic-detailed.html>Basic\"\n      }), \" monitoring and detailed monitoring\\nIn different AWS services, detailed monitoring also has different\\nnames. For example, in Amazon EC2 it is called detailed monitoring, in\\nAWS Elastic Beanstalk it is called enhanced monitoring, and in Amazon\\nS3 it is called request metrics.\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"<a href=\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html%3EPublish\",\n        children: \"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html>Publish\"\n      }), \" custom metrics - CloudWatch doesn't pull metrics from applications, it only receives \"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {\n      children: [\"\\n  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.cite, {\n        children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html\",\n          children: \" source \"\n        }), \"\\n  \"]\n      }), \"\\n  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.pre, {\n        children: [\"You can embed custom metrics alongside detailed log event data, and\\nCloudWatch automatically extracts the custom metrics\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n          children: \"No setup is required to use the embedded metric format. Either\"\n        }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n          children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n            children: \"structure logs by following the Embedded metric format specification\"\n          }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n            children: [\"generate them using AWS client libraries\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n              children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n                  href: \"https://github.com/awslabs/aws-embedded-metrics-node\",\n                  children: \"https://github.com/awslabs/aws-embedded-metrics-node\"\n                })\n              }), \"\\n\"]\n            }), \"\\n\"]\n          }), \"\\n\"]\n        }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n            href: \"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format_Specification.html\",\n            children: \"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format_Specification.html\"\n          }), \"\\nIf you unintentionally create metrics based on high-cardinality\\ndimensions (such as requestId), the embedded metric format will by\\ndesign create a custom metric corresponding to each unique dimension\\ncombination.\"]\n        }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.ins, {\n          children: \"\\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension\\ndimension is dangerous\\n\"\n        }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n          children: \"you can retrieve statistics for these combinations of dimensions:\\nServer=Prod,Domain=Frankfurt\\nServer=Prod,Domain=Rio\\nServer=Beta,Domain=Frankfurt\\nServer=Beta,Domain=Rio\"\n        }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n          children: [\"You can't retrieve statistics for:\\nServer=Prod\\nServer=Beta\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.ins, {\n            children: \" stupid design \"\n          })]\n        }), \"\\n  \"]\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {\n      children: [\"\\n  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.cite, {\n        children: [\" \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://www.reddit.com/r/aws/comments/1dirzcp/cloudwatch_log_group_management/\",\n          children: \"Cloudwatch Log Group management : r/aws\"\n        }), \" 2024-10 \"]\n      }), \"\\n  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.pre, {\n        children: [\"Short version: Do CloudWatch log groups get recreated by their\\nrespective executed service if the log group was previously deleted?\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n          children: \"Long Version: We need to manage our log groups better. I want to\\nremove log groups that have no corresponding service anymore, or\\nhaven't been used in awhile (e.g. 0 stored bytes). But some of these\\nservices might get used again and someone would need their logs and I\\nwant to make sure they get recreated properly.\"\n        }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n          children: \"Some services like Lambda for example, will automatically create the\\nlog group the next time logs need to be written if it doesn't already\\nexist. Some services expect you to manually create the log group, so\\nthose ones wouldn't come back on their own. And presumably some\\nservices will only create the log group as part of some initial\\nprovisioning event.\"\n        }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n          children: [\"So basically if you just delete all the log groups, you're likely to\\nbreak some things\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.ins, {\n            children: \"\\n\"\n          }), \"\\n\"]\n        })]\n      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {}), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"# as of 2024-10-30\\nLambdaLogGroup:\\n  Type: AWS::Logs::LogGroup\\n  # not delete logs (useful for debugging), \\n  # but after 90 days the empty-loggroup itself remains (no solution yet)\\n  DeletionPolicy: Retain\\n  UpdateReplacePolicy: Retain\\n  Properties:\\n    RetentionInDays: 90\\n\"\n      })\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = {\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {\n    ...props,\n    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {\n      ...props\n    })\n  }) : _createMdxContent(props);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL215L3B1YmxpYy9zb2Z0d2FyZS9jbG91ZC9BV1MvY2xvdWR3YXRjaC5tZCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2N1c2F1cnVzLy4vZG9jcy9teS9wdWJsaWMvc29mdHdhcmUvY2xvdWQvQVdTL2Nsb3Vkd2F0Y2gubWQ/YmYzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge307XG5leHBvcnQgY29uc3QgY29udGVudFRpdGxlID0gdW5kZWZpbmVkO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1ldGFkYXRhfSBmcm9tICdAc2l0ZS8uZG9jdXNhdXJ1cy9kb2N1c2F1cnVzLXBsdWdpbi1jb250ZW50LWRvY3MvZGVmYXVsdC9zaXRlLWRvY3MtbXktcHVibGljLXNvZnR3YXJlLWNsb3VkLWF3cy1jbG91ZHdhdGNoLW1kLTUyYi5qc29uJ1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuaW1wb3J0IHtGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7dXNlTURYQ29tcG9uZW50cyBhcyBfcHJvdmlkZUNvbXBvbmVudHN9IGZyb20gXCJAbWR4LWpzL3JlYWN0XCI7XG5leHBvcnQgY29uc3QgdG9jID0gW107XG5mdW5jdGlvbiBfY3JlYXRlTWR4Q29udGVudChwcm9wcykge1xuICBjb25zdCBfY29tcG9uZW50cyA9IHtcbiAgICBhOiBcImFcIixcbiAgICBibG9ja3F1b3RlOiBcImJsb2NrcXVvdGVcIixcbiAgICBjaXRlOiBcImNpdGVcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBpbnM6IFwiaW5zXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBwOiBcInBcIixcbiAgICBwcmU6IFwicHJlXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICAuLi5fcHJvdmlkZUNvbXBvbmVudHMoKSxcbiAgICAuLi5wcm9wcy5jb21wb25lbnRzXG4gIH07XG4gIHJldHVybiBfanN4cyhfRnJhZ21lbnQsIHtcbiAgICBjaGlsZHJlbjogW19qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCI8YSBocmVmPVwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vQW1hem9uQ2xvdWRXYXRjaC9sYXRlc3QvbW9uaXRvcmluZy9jbG91ZHdhdGNoLW1ldHJpY3MtYmFzaWMtZGV0YWlsZWQuaHRtbCUzRUJhc2ljXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BbWF6b25DbG91ZFdhdGNoL2xhdGVzdC9tb25pdG9yaW5nL2Nsb3Vkd2F0Y2gtbWV0cmljcy1iYXNpYy1kZXRhaWxlZC5odG1sPkJhc2ljXCJcbiAgICAgIH0pLCBcIiBtb25pdG9yaW5nIGFuZCBkZXRhaWxlZCBtb25pdG9yaW5nXFxuSW4gZGlmZmVyZW50IEFXUyBzZXJ2aWNlcywgZGV0YWlsZWQgbW9uaXRvcmluZyBhbHNvIGhhcyBkaWZmZXJlbnRcXG5uYW1lcy4gRm9yIGV4YW1wbGUsIGluIEFtYXpvbiBFQzIgaXQgaXMgY2FsbGVkIGRldGFpbGVkIG1vbml0b3JpbmcsIGluXFxuQVdTIEVsYXN0aWMgQmVhbnN0YWxrIGl0IGlzIGNhbGxlZCBlbmhhbmNlZCBtb25pdG9yaW5nLCBhbmQgaW4gQW1hem9uXFxuUzMgaXQgaXMgY2FsbGVkIHJlcXVlc3QgbWV0cmljcy5cXG5cIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFtcIjxhIGhyZWY9XCIsIF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BbWF6b25DbG91ZFdhdGNoL2xhdGVzdC9tb25pdG9yaW5nL3B1Ymxpc2hpbmdNZXRyaWNzLmh0bWwlM0VQdWJsaXNoXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BbWF6b25DbG91ZFdhdGNoL2xhdGVzdC9tb25pdG9yaW5nL3B1Ymxpc2hpbmdNZXRyaWNzLmh0bWw+UHVibGlzaFwiXG4gICAgICB9KSwgXCIgY3VzdG9tIG1ldHJpY3MgLSBDbG91ZFdhdGNoIGRvZXNuJ3QgcHVsbCBtZXRyaWNzIGZyb20gYXBwbGljYXRpb25zLCBpdCBvbmx5IHJlY2VpdmVzIFwiXVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5ibG9ja3F1b3RlLCB7XG4gICAgICBjaGlsZHJlbjogW1wiXFxuICBcIiwgX2pzeHMoX2NvbXBvbmVudHMuY2l0ZSwge1xuICAgICAgICBjaGlsZHJlbjogW1wiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FtYXpvbkNsb3VkV2F0Y2gvbGF0ZXN0L21vbml0b3JpbmcvQ2xvdWRXYXRjaF9FbWJlZGRlZF9NZXRyaWNfRm9ybWF0Lmh0bWxcIixcbiAgICAgICAgICBjaGlsZHJlbjogXCIgc291cmNlIFwiXG4gICAgICAgIH0pLCBcIlxcbiAgXCJdXG4gICAgICB9KSwgXCJcXG4gIFwiLCBfanN4cyhfY29tcG9uZW50cy5wcmUsIHtcbiAgICAgICAgY2hpbGRyZW46IFtcIllvdSBjYW4gZW1iZWQgY3VzdG9tIG1ldHJpY3MgYWxvbmdzaWRlIGRldGFpbGVkIGxvZyBldmVudCBkYXRhLCBhbmRcXG5DbG91ZFdhdGNoIGF1dG9tYXRpY2FsbHkgZXh0cmFjdHMgdGhlIGN1c3RvbSBtZXRyaWNzXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgICAgIGNoaWxkcmVuOiBcIk5vIHNldHVwIGlzIHJlcXVpcmVkIHRvIHVzZSB0aGUgZW1iZWRkZWQgbWV0cmljIGZvcm1hdC4gRWl0aGVyXCJcbiAgICAgICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnVsLCB7XG4gICAgICAgICAgY2hpbGRyZW46IFtcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmUgbG9ncyBieSBmb2xsb3dpbmcgdGhlIEVtYmVkZGVkIG1ldHJpYyBmb3JtYXQgc3BlY2lmaWNhdGlvblwiXG4gICAgICAgICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW1wiZ2VuZXJhdGUgdGhlbSB1c2luZyBBV1MgY2xpZW50IGxpYnJhcmllc1xcblwiLCBfanN4cyhfY29tcG9uZW50cy51bCwge1xuICAgICAgICAgICAgICBjaGlsZHJlbjogW1wiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hd3NsYWJzL2F3cy1lbWJlZGRlZC1tZXRyaWNzLW5vZGVcIixcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hd3NsYWJzL2F3cy1lbWJlZGRlZC1tZXRyaWNzLW5vZGVcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pLCBcIlxcblwiXVxuICAgICAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICAgICAgY2hpbGRyZW46IFtfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FtYXpvbkNsb3VkV2F0Y2gvbGF0ZXN0L21vbml0b3JpbmcvQ2xvdWRXYXRjaF9FbWJlZGRlZF9NZXRyaWNfRm9ybWF0X1NwZWNpZmljYXRpb24uaHRtbFwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FtYXpvbkNsb3VkV2F0Y2gvbGF0ZXN0L21vbml0b3JpbmcvQ2xvdWRXYXRjaF9FbWJlZGRlZF9NZXRyaWNfRm9ybWF0X1NwZWNpZmljYXRpb24uaHRtbFwiXG4gICAgICAgICAgfSksIFwiXFxuSWYgeW91IHVuaW50ZW50aW9uYWxseSBjcmVhdGUgbWV0cmljcyBiYXNlZCBvbiBoaWdoLWNhcmRpbmFsaXR5XFxuZGltZW5zaW9ucyAoc3VjaCBhcyByZXF1ZXN0SWQpLCB0aGUgZW1iZWRkZWQgbWV0cmljIGZvcm1hdCB3aWxsIGJ5XFxuZGVzaWduIGNyZWF0ZSBhIGN1c3RvbSBtZXRyaWMgY29ycmVzcG9uZGluZyB0byBlYWNoIHVuaXF1ZSBkaW1lbnNpb25cXG5jb21iaW5hdGlvbi5cIl1cbiAgICAgICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuaW5zLCB7XG4gICAgICAgICAgY2hpbGRyZW46IFwiXFxuaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FtYXpvbkNsb3VkV2F0Y2gvbGF0ZXN0L21vbml0b3JpbmcvY2xvdWR3YXRjaF9jb25jZXB0cy5odG1sI0RpbWVuc2lvblxcbmRpbWVuc2lvbiBpcyBkYW5nZXJvdXNcXG5cIlxuICAgICAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICAgICAgY2hpbGRyZW46IFwieW91IGNhbiByZXRyaWV2ZSBzdGF0aXN0aWNzIGZvciB0aGVzZSBjb21iaW5hdGlvbnMgb2YgZGltZW5zaW9uczpcXG5TZXJ2ZXI9UHJvZCxEb21haW49RnJhbmtmdXJ0XFxuU2VydmVyPVByb2QsRG9tYWluPVJpb1xcblNlcnZlcj1CZXRhLERvbWFpbj1GcmFua2Z1cnRcXG5TZXJ2ZXI9QmV0YSxEb21haW49UmlvXCJcbiAgICAgICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgICAgICBjaGlsZHJlbjogW1wiWW91IGNhbid0IHJldHJpZXZlIHN0YXRpc3RpY3MgZm9yOlxcblNlcnZlcj1Qcm9kXFxuU2VydmVyPUJldGFcXG5cIiwgX2pzeChfY29tcG9uZW50cy5pbnMsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBcIiBzdHVwaWQgZGVzaWduIFwiXG4gICAgICAgICAgfSldXG4gICAgICAgIH0pLCBcIlxcbiAgXCJdXG4gICAgICB9KSwgXCJcXG5cIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMuYmxvY2txdW90ZSwge1xuICAgICAgY2hpbGRyZW46IFtcIlxcbiAgXCIsIF9qc3hzKF9jb21wb25lbnRzLmNpdGUsIHtcbiAgICAgICAgY2hpbGRyZW46IFtcIiBcIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5yZWRkaXQuY29tL3IvYXdzL2NvbW1lbnRzLzFkaXJ6Y3AvY2xvdWR3YXRjaF9sb2dfZ3JvdXBfbWFuYWdlbWVudC9cIixcbiAgICAgICAgICBjaGlsZHJlbjogXCJDbG91ZHdhdGNoIExvZyBHcm91cCBtYW5hZ2VtZW50IDogci9hd3NcIlxuICAgICAgICB9KSwgXCIgMjAyNC0xMCBcIl1cbiAgICAgIH0pLCBcIlxcbiAgXCIsIF9qc3hzKF9jb21wb25lbnRzLnByZSwge1xuICAgICAgICBjaGlsZHJlbjogW1wiU2hvcnQgdmVyc2lvbjogRG8gQ2xvdWRXYXRjaCBsb2cgZ3JvdXBzIGdldCByZWNyZWF0ZWQgYnkgdGhlaXJcXG5yZXNwZWN0aXZlIGV4ZWN1dGVkIHNlcnZpY2UgaWYgdGhlIGxvZyBncm91cCB3YXMgcHJldmlvdXNseSBkZWxldGVkP1xcblwiLCBfanN4KF9jb21wb25lbnRzLnAsIHtcbiAgICAgICAgICBjaGlsZHJlbjogXCJMb25nIFZlcnNpb246IFdlIG5lZWQgdG8gbWFuYWdlIG91ciBsb2cgZ3JvdXBzIGJldHRlci4gSSB3YW50IHRvXFxucmVtb3ZlIGxvZyBncm91cHMgdGhhdCBoYXZlIG5vIGNvcnJlc3BvbmRpbmcgc2VydmljZSBhbnltb3JlLCBvclxcbmhhdmVuJ3QgYmVlbiB1c2VkIGluIGF3aGlsZSAoZS5nLiAwIHN0b3JlZCBieXRlcykuIEJ1dCBzb21lIG9mIHRoZXNlXFxuc2VydmljZXMgbWlnaHQgZ2V0IHVzZWQgYWdhaW4gYW5kIHNvbWVvbmUgd291bGQgbmVlZCB0aGVpciBsb2dzIGFuZCBJXFxud2FudCB0byBtYWtlIHN1cmUgdGhleSBnZXQgcmVjcmVhdGVkIHByb3Blcmx5LlwiXG4gICAgICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLnAsIHtcbiAgICAgICAgICBjaGlsZHJlbjogXCJTb21lIHNlcnZpY2VzIGxpa2UgTGFtYmRhIGZvciBleGFtcGxlLCB3aWxsIGF1dG9tYXRpY2FsbHkgY3JlYXRlIHRoZVxcbmxvZyBncm91cCB0aGUgbmV4dCB0aW1lIGxvZ3MgbmVlZCB0byBiZSB3cml0dGVuIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeVxcbmV4aXN0LiBTb21lIHNlcnZpY2VzIGV4cGVjdCB5b3UgdG8gbWFudWFsbHkgY3JlYXRlIHRoZSBsb2cgZ3JvdXAsIHNvXFxudGhvc2Ugb25lcyB3b3VsZG4ndCBjb21lIGJhY2sgb24gdGhlaXIgb3duLiBBbmQgcHJlc3VtYWJseSBzb21lXFxuc2VydmljZXMgd2lsbCBvbmx5IGNyZWF0ZSB0aGUgbG9nIGdyb3VwIGFzIHBhcnQgb2Ygc29tZSBpbml0aWFsXFxucHJvdmlzaW9uaW5nIGV2ZW50LlwiXG4gICAgICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICAgICAgY2hpbGRyZW46IFtcIlNvIGJhc2ljYWxseSBpZiB5b3UganVzdCBkZWxldGUgYWxsIHRoZSBsb2cgZ3JvdXBzLCB5b3UncmUgbGlrZWx5IHRvXFxuYnJlYWsgc29tZSB0aGluZ3NcXG5cIiwgX2pzeChfY29tcG9uZW50cy5pbnMsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBcIlxcblwiXG4gICAgICAgICAgfSksIFwiXFxuXCJdXG4gICAgICAgIH0pXVxuICAgICAgfSksIF9qc3goX2NvbXBvbmVudHMucCwge30pLCBcIlxcblwiXVxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLnByZSwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuY29kZSwge1xuICAgICAgICBjaGlsZHJlbjogXCIjIGFzIG9mIDIwMjQtMTAtMzBcXG5MYW1iZGFMb2dHcm91cDpcXG4gIFR5cGU6IEFXUzo6TG9nczo6TG9nR3JvdXBcXG4gICMgbm90IGRlbGV0ZSBsb2dzICh1c2VmdWwgZm9yIGRlYnVnZ2luZyksIFxcbiAgIyBidXQgYWZ0ZXIgOTAgZGF5cyB0aGUgZW1wdHktbG9nZ3JvdXAgaXRzZWxmIHJlbWFpbnMgKG5vIHNvbHV0aW9uIHlldClcXG4gIERlbGV0aW9uUG9saWN5OiBSZXRhaW5cXG4gIFVwZGF0ZVJlcGxhY2VQb2xpY3k6IFJldGFpblxcbiAgUHJvcGVydGllczpcXG4gICAgUmV0ZW50aW9uSW5EYXlzOiA5MFxcblwiXG4gICAgICB9KVxuICAgIH0pXVxuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IHtcbiAgICAuLi5fcHJvdmlkZUNvbXBvbmVudHMoKSxcbiAgICAuLi5wcm9wcy5jb21wb25lbnRzXG4gIH07XG4gIHJldHVybiBNRFhMYXlvdXQgPyBfanN4KE1EWExheW91dCwge1xuICAgIC4uLnByb3BzLFxuICAgIGNoaWxkcmVuOiBfanN4KF9jcmVhdGVNZHhDb250ZW50LCB7XG4gICAgICAuLi5wcm9wc1xuICAgIH0pXG4gIH0pIDogX2NyZWF0ZU1keENvbnRlbnQocHJvcHMpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/my/public/software/cloud/AWS/cloudwatch.md\n");

/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),\n/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/react/index.js\");\n/**\n * @import {MDXComponents} from 'mdx/types.js'\n * @import {Component, ReactElement, ReactNode} from 'react'\n */\n\n/**\n * @callback MergeComponents\n *   Custom merge function.\n * @param {Readonly<MDXComponents>} currentComponents\n *   Current components from the context.\n * @returns {MDXComponents}\n *   Additional components.\n *\n * @typedef Props\n *   Configuration for `MDXProvider`.\n * @property {ReactNode | null | undefined} [children]\n *   Children (optional).\n * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @property {boolean | null | undefined} [disableParentContext=false]\n *   Turn off outer component context (default: `false`).\n */\n\n\n\n/** @type {Readonly<MDXComponents>} */\nconst emptyComponents = {}\n\nconst MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)\n\n/**\n * Get current components from the MDX Context.\n *\n * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @returns {MDXComponents}\n *   Current components.\n */\nfunction useMDXComponents(components) {\n  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)\n\n  // Memoize to avoid unnecessary top-level context changes\n  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(\n    function () {\n      // Custom merge via a function prop\n      if (typeof components === 'function') {\n        return components(contextComponents)\n      }\n\n      return {...contextComponents, ...components}\n    },\n    [contextComponents, components]\n  )\n}\n\n/**\n * Provider for MDX context.\n *\n * @param {Readonly<Props>} properties\n *   Properties.\n * @returns {ReactElement}\n *   Element.\n * @satisfies {Component}\n */\nfunction MDXProvider(properties) {\n  /** @type {Readonly<MDXComponents>} */\n  let allComponents\n\n  if (properties.disableParentContext) {\n    allComponents =\n      typeof properties.components === 'function'\n        ? properties.components(emptyComponents)\n        : properties.components || emptyComponents\n  } else {\n    allComponents = useMDXComponents(properties.components)\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\n    MDXContext.Provider,\n    {value: allComponents},\n    properties.children\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3VzYXVydXMvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanM/MTE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mdx-js/react/lib/index.js\n");

/***/ }),

/***/ "./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-cloud-aws-cloudwatch-md-52b.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"id":"my/public/software/cloud/AWS/cloudwatch","title":"cloudwatch","description":"Basic monitoring and detailed monitoring","source":"@site/docs/my/public/software/cloud/AWS/cloudwatch.md","sourceDirName":"my/public/software/cloud/AWS","slug":"/my/public/software/cloud/AWS/cloudwatch","permalink":"/note/docs/my/public/software/cloud/AWS/cloudwatch","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mySidebar","previous":{"title":"cloudformation","permalink":"/note/docs/my/public/software/cloud/AWS/cloudformation"},"next":{"title":"codebuild","permalink":"/note/docs/my/public/software/cloud/AWS/codebuild"}}');

/***/ })

}]);