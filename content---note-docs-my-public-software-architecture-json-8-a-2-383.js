"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkdocusaurus"] = globalThis["webpackChunkdocusaurus"] || []).push([["content---note-docs-my-public-software-architecture-json-8-a-2-383"],{

/***/ "./docs/my/public/software/architecture/json.md":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assets: () => (/* binding */ assets),\n/* harmony export */   contentTitle: () => (/* binding */ contentTitle),\n/* harmony export */   \"default\": () => (/* binding */ MDXContent),\n/* harmony export */   frontMatter: () => (/* binding */ frontMatter),\n/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_architecture_json_md_8a2_json__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   toc: () => (/* binding */ toc)\n/* harmony export */ });\n/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_my_public_software_architecture_json_md_8a2_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-architecture-json-md-8a2.json\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@mdx-js/react/lib/index.js\");\n\n\nconst frontMatter = {};\nconst contentTitle = undefined;\n\nconst assets = {\n\n};\n\n\n\nconst toc = [{\n  \"value\": \"tranform to valid json\",\n  \"id\": \"tranform-to-valid-json\",\n  \"level\": 4\n}, {\n  \"value\": \"query\",\n  \"id\": \"query\",\n  \"level\": 4\n}, {\n  \"value\": \"json to xml\",\n  \"id\": \"json-to-xml\",\n  \"level\": 4\n}, {\n  \"value\": \"xml to json\",\n  \"id\": \"xml-to-json\",\n  \"level\": 4\n}];\nfunction _createMdxContent(props) {\n  const _components = {\n    a: \"a\",\n    blockquote: \"blockquote\",\n    cite: \"cite\",\n    code: \"code\",\n    h4: \"h4\",\n    li: \"li\",\n    p: \"p\",\n    pre: \"pre\",\n    ul: \"ul\",\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://en.m.wikipedia.org/wiki/JSON5#Supersets\",\n        children: \"https://en.m.wikipedia.org/wiki/JSON5#Supersets\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"JSON5 (sqlite)\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://code.visualstudio.com/docs/languages/json#_json-with-comments\",\n          children: \"JSONC\"\n        }), \"   \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://deno.land/std@0.204.0/jsonc/mod.ts\",\n          children: \"Deno std\"\n        })]\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {\n      id: \"tranform-to-valid-json\",\n      children: \"tranform to valid json\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"json format is very picky (e.g. quote)\\nvalid JS code can be transformed in file.json with deno fmt\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {\n      id: \"query\",\n      children: \"query\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"make sense to use JMESPath since AWS uses it\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://github.com/Kong/insomnia/discussions/4883\",\n        children: \"Use JMESPath (JSONPath sucks)\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://jmespath.org/\",\n        children: \"https://jmespath.org/\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"JMESPath a bit like LINQ for json-data\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://github.com/jmespath/jmespath.js\",\n          children: \"https://github.com/jmespath/jmespath.js\"\n        }), \"  no TS\"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {\n        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://github.com/nanoporetech/jmespath-ts\",\n          children: \"https://github.com/nanoporetech/jmespath-ts\"\n        }), \"  (by community, Fully compliant)\"]\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://github.com/jmespath/jp\",\n          children: \"https://github.com/jmespath/jp\"\n        })\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n          href: \"https://github.com/jmespath/jmespath.py\",\n          children: \"https://github.com/jmespath/jmespath.py\"\n        })\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://en.m.wikipedia.org/wiki/JSONPath\",\n        children: \"https://en.m.wikipedia.org/wiki/JSONPath\"\n      }), \"\\nwidespread \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"jq\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"jq\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"2024-10-23 not sure what syntax it uses\"\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"see also \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://www.sqlite.org/json1.html\",\n        children: \"https://www.sqlite.org/json1.html\"\n      }), \"\\nJSON Path (mimic MySQL)\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"begins with exactly 1 '$' character followed by 0 or more of \\\".objectlabel\\\" or \\\"[arrayindex]\\\"   \\\"#-N\\\"  N-th from the right\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {\n      id: \"json-to-xml\",\n      children: \"json to xml\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"2024-08  seems not popular practice at all online\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"things to keep in mind:\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"wsdl may not spell out all details, some might be in comment\"\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://stackoverflow.com/questions/67695207\",\n        children: \"Node.js convert JSON to XML\"\n      }), \"\\nmany different packages for XML serialization\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"Most of them enforce a specific XML and JSON mapping convention.\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"Others require you to build the XML document in code.\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"some use decorators\"\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"npm package soap v1.1.1  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"wsdl.objectToXML(obj: any\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {\n      children: [\"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"no detail typing for obj (acceptable)\"\n      }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {\n        children: \"it does not seem to do validation?  (e.g. \\\"xsd enumeration\\\")\"\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://oozcitak.github.io/xmlbuilder2/serialization.html\",\n        children: \"https://oozcitak.github.io/xmlbuilder2/serialization.html\"\n      }), \"\\nconvert between json, yaml, xml (though xml centric)\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://github.com/Leonidas-from-XIV/node-xml2js\",\n        children: \"https://github.com/Leonidas-from-XIV/node-xml2js\"\n      }), \"\\nbased on older xmlbuilder, seems inferior quality, source in coffeeScript\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: \"note difference between XSD and JavaScript:\\nvalid JavaScript float for parseFloat: '0x1A', 'Infinity', '10e5', ' 10.123 '\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {\n      children: [\"\\n  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.cite, {\n        children: \" https://www.w3.org/TR/xmlschema-0/ \"\n      }), \"\\n  \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n        children: \" -1E4, 1267.43233E12, 12.78e-2, 12 , -0, 0 and INF are all legal literals for float.\\n -1.23, 12678967.543233, +100000.00, 210 for decimal\\n  \"\n      }), \"\\n\"]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {\n      children: [\"annoying:\\nxsd:sequence  order matters in XML but not inherently in JS object\\nso make sure to \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://devdocs.io/javascript/statements/for...in\",\n        children: \"create Json fields in order\"\n      }), \" or somehow control order in conversion\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://gist.github.com/scottoffen/58dd16d0b8408b713140\",\n        children: \"XML Element without Ordering may be hassle\"\n      })]\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {\n      id: \"xml-to-json\",\n      children: \"xml to json\"\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {\n        href: \"https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString\",\n        children: \"https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString\"\n      })\n    }), \"\\n\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {\n      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {\n        children: \"// model.configItem should be object or array? (have to check XSD or some spec)\\n    <model>\\n      <configItem>\\n        <name>pc101</name>\\n      </configItem>\\n    </model>\\n\"\n      })\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = {\n    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),\n    ...props.components\n  };\n  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {\n    ...props,\n    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {\n      ...props\n    })\n  }) : _createMdxContent(props);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL215L3B1YmxpYy9zb2Z0d2FyZS9hcmNoaXRlY3R1cmUvanNvbi5tZCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2N1c2F1cnVzLy4vZG9jcy9teS9wdWJsaWMvc29mdHdhcmUvYXJjaGl0ZWN0dXJlL2pzb24ubWQ/ODg3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge307XG5leHBvcnQgY29uc3QgY29udGVudFRpdGxlID0gdW5kZWZpbmVkO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1ldGFkYXRhfSBmcm9tICdAc2l0ZS8uZG9jdXNhdXJ1cy9kb2N1c2F1cnVzLXBsdWdpbi1jb250ZW50LWRvY3MvZGVmYXVsdC9zaXRlLWRvY3MtbXktcHVibGljLXNvZnR3YXJlLWFyY2hpdGVjdHVyZS1qc29uLW1kLThhMi5qc29uJ1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuaW1wb3J0IHtGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7dXNlTURYQ29tcG9uZW50cyBhcyBfcHJvdmlkZUNvbXBvbmVudHN9IGZyb20gXCJAbWR4LWpzL3JlYWN0XCI7XG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgXCJ2YWx1ZVwiOiBcInRyYW5mb3JtIHRvIHZhbGlkIGpzb25cIixcbiAgXCJpZFwiOiBcInRyYW5mb3JtLXRvLXZhbGlkLWpzb25cIixcbiAgXCJsZXZlbFwiOiA0XG59LCB7XG4gIFwidmFsdWVcIjogXCJxdWVyeVwiLFxuICBcImlkXCI6IFwicXVlcnlcIixcbiAgXCJsZXZlbFwiOiA0XG59LCB7XG4gIFwidmFsdWVcIjogXCJqc29uIHRvIHhtbFwiLFxuICBcImlkXCI6IFwianNvbi10by14bWxcIixcbiAgXCJsZXZlbFwiOiA0XG59LCB7XG4gIFwidmFsdWVcIjogXCJ4bWwgdG8ganNvblwiLFxuICBcImlkXCI6IFwieG1sLXRvLWpzb25cIixcbiAgXCJsZXZlbFwiOiA0XG59XTtcbmZ1bmN0aW9uIF9jcmVhdGVNZHhDb250ZW50KHByb3BzKSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0ge1xuICAgIGE6IFwiYVwiLFxuICAgIGJsb2NrcXVvdGU6IFwiYmxvY2txdW90ZVwiLFxuICAgIGNpdGU6IFwiY2l0ZVwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIGg0OiBcImg0XCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBwOiBcInBcIixcbiAgICBwcmU6IFwicHJlXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICAuLi5fcHJvdmlkZUNvbXBvbmVudHMoKSxcbiAgICAuLi5wcm9wcy5jb21wb25lbnRzXG4gIH07XG4gIHJldHVybiBfanN4cyhfRnJhZ21lbnQsIHtcbiAgICBjaGlsZHJlbjogW19qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvSlNPTjUjU3VwZXJzZXRzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvSlNPTjUjU3VwZXJzZXRzXCJcbiAgICAgIH0pXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnVsLCB7XG4gICAgICBjaGlsZHJlbjogW1wiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFwiSlNPTjUgKHNxbGl0ZSlcIlxuICAgICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgIGNoaWxkcmVuOiBbX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgaHJlZjogXCJodHRwczovL2NvZGUudmlzdWFsc3R1ZGlvLmNvbS9kb2NzL2xhbmd1YWdlcy9qc29uI19qc29uLXdpdGgtY29tbWVudHNcIixcbiAgICAgICAgICBjaGlsZHJlbjogXCJKU09OQ1wiXG4gICAgICAgIH0pLCBcIiAgIFwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjIwNC4wL2pzb25jL21vZC50c1wiLFxuICAgICAgICAgIGNoaWxkcmVuOiBcIkRlbm8gc3RkXCJcbiAgICAgICAgfSldXG4gICAgICB9KSwgXCJcXG5cIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5oNCwge1xuICAgICAgaWQ6IFwidHJhbmZvcm0tdG8tdmFsaWQtanNvblwiLFxuICAgICAgY2hpbGRyZW46IFwidHJhbmZvcm0gdG8gdmFsaWQganNvblwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFwianNvbiBmb3JtYXQgaXMgdmVyeSBwaWNreSAoZS5nLiBxdW90ZSlcXG52YWxpZCBKUyBjb2RlIGNhbiBiZSB0cmFuc2Zvcm1lZCBpbiBmaWxlLmpzb24gd2l0aCBkZW5vIGZtdFwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuaDQsIHtcbiAgICAgIGlkOiBcInF1ZXJ5XCIsXG4gICAgICBjaGlsZHJlbjogXCJxdWVyeVwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJtYWtlIHNlbnNlIHRvIHVzZSBKTUVTUGF0aCBzaW5jZSBBV1MgdXNlcyBpdFxcblwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vS29uZy9pbnNvbW5pYS9kaXNjdXNzaW9ucy80ODgzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcIlVzZSBKTUVTUGF0aCAoSlNPTlBhdGggc3Vja3MpXCJcbiAgICAgIH0pXVxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL2ptZXNwYXRoLm9yZy9cIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9qbWVzcGF0aC5vcmcvXCJcbiAgICAgIH0pXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnVsLCB7XG4gICAgICBjaGlsZHJlbjogW1wiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFwiSk1FU1BhdGggYSBiaXQgbGlrZSBMSU5RIGZvciBqc29uLWRhdGFcIlxuICAgICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgIGNoaWxkcmVuOiBbX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vam1lc3BhdGgvam1lc3BhdGguanNcIixcbiAgICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL2dpdGh1Yi5jb20vam1lc3BhdGgvam1lc3BhdGguanNcIlxuICAgICAgICB9KSwgXCIgIG5vIFRTXCJdXG4gICAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFtfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uYW5vcG9yZXRlY2gvam1lc3BhdGgtdHNcIixcbiAgICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL2dpdGh1Yi5jb20vbmFub3BvcmV0ZWNoL2ptZXNwYXRoLXRzXCJcbiAgICAgICAgfSksIFwiICAoYnkgY29tbXVuaXR5LCBGdWxseSBjb21wbGlhbnQpXCJdXG4gICAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5saSwge1xuICAgICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vam1lc3BhdGgvanBcIixcbiAgICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL2dpdGh1Yi5jb20vam1lc3BhdGgvanBcIlxuICAgICAgICB9KVxuICAgICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ptZXNwYXRoL2ptZXNwYXRoLnB5XCIsXG4gICAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9naXRodWIuY29tL2ptZXNwYXRoL2ptZXNwYXRoLnB5XCJcbiAgICAgICAgfSlcbiAgICAgIH0pLCBcIlxcblwiXVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW19qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvSlNPTlBhdGhcIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9KU09OUGF0aFwiXG4gICAgICB9KSwgXCJcXG53aWRlc3ByZWFkIFwiLCBfanN4KF9jb21wb25lbnRzLmNvZGUsIHtcbiAgICAgICAgY2hpbGRyZW46IFwianFcIlxuICAgICAgfSldXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuY29kZSwge1xuICAgICAgICBjaGlsZHJlbjogXCJqcVwiXG4gICAgICB9KVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy51bCwge1xuICAgICAgY2hpbGRyZW46IFtcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcIjIwMjQtMTAtMjMgbm90IHN1cmUgd2hhdCBzeW50YXggaXQgdXNlc1wiXG4gICAgICB9KSwgXCJcXG5cIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFtcInNlZSBhbHNvIFwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5zcWxpdGUub3JnL2pzb24xLmh0bWxcIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9qc29uMS5odG1sXCJcbiAgICAgIH0pLCBcIlxcbkpTT04gUGF0aCAobWltaWMgTXlTUUwpXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuY29kZSwge1xuICAgICAgICBjaGlsZHJlbjogXCJiZWdpbnMgd2l0aCBleGFjdGx5IDEgJyQnIGNoYXJhY3RlciBmb2xsb3dlZCBieSAwIG9yIG1vcmUgb2YgXFxcIi5vYmplY3RsYWJlbFxcXCIgb3IgXFxcIlthcnJheWluZGV4XVxcXCIgICBcXFwiIy1OXFxcIiAgTi10aCBmcm9tIHRoZSByaWdodFwiXG4gICAgICB9KV1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5oNCwge1xuICAgICAgaWQ6IFwianNvbi10by14bWxcIixcbiAgICAgIGNoaWxkcmVuOiBcImpzb24gdG8geG1sXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogXCIyMDI0LTA4ICBzZWVtcyBub3QgcG9wdWxhciBwcmFjdGljZSBhdCBhbGwgb25saW5lXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogXCJ0aGluZ3MgdG8ga2VlcCBpbiBtaW5kOlwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnVsLCB7XG4gICAgICBjaGlsZHJlbjogW1wiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFwid3NkbCBtYXkgbm90IHNwZWxsIG91dCBhbGwgZGV0YWlscywgc29tZSBtaWdodCBiZSBpbiBjb21tZW50XCJcbiAgICAgIH0pLCBcIlxcblwiXVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW19qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY3Njk1MjA3XCIsXG4gICAgICAgIGNoaWxkcmVuOiBcIk5vZGUuanMgY29udmVydCBKU09OIHRvIFhNTFwiXG4gICAgICB9KSwgXCJcXG5tYW55IGRpZmZlcmVudCBwYWNrYWdlcyBmb3IgWE1MIHNlcmlhbGl6YXRpb25cIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeHMoX2NvbXBvbmVudHMudWwsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5saSwge1xuICAgICAgICBjaGlsZHJlbjogXCJNb3N0IG9mIHRoZW0gZW5mb3JjZSBhIHNwZWNpZmljIFhNTCBhbmQgSlNPTiBtYXBwaW5nIGNvbnZlbnRpb24uXCJcbiAgICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcIk90aGVycyByZXF1aXJlIHlvdSB0byBidWlsZCB0aGUgWE1MIGRvY3VtZW50IGluIGNvZGUuXCJcbiAgICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcInNvbWUgdXNlIGRlY29yYXRvcnNcIlxuICAgICAgfSksIFwiXFxuXCJdXG4gICAgfSksIFwiXFxuXCIsIF9qc3hzKF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBbXCJucG0gcGFja2FnZSBzb2FwIHYxLjEuMSAgXCIsIF9qc3goX2NvbXBvbmVudHMuY29kZSwge1xuICAgICAgICBjaGlsZHJlbjogXCJ3c2RsLm9iamVjdFRvWE1MKG9iajogYW55XCJcbiAgICAgIH0pXVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy51bCwge1xuICAgICAgY2hpbGRyZW46IFtcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLmxpLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcIm5vIGRldGFpbCB0eXBpbmcgZm9yIG9iaiAoYWNjZXB0YWJsZSlcIlxuICAgICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMubGksIHtcbiAgICAgICAgY2hpbGRyZW46IFwiaXQgZG9lcyBub3Qgc2VlbSB0byBkbyB2YWxpZGF0aW9uPyAgKGUuZy4gXFxcInhzZCBlbnVtZXJhdGlvblxcXCIpXCJcbiAgICAgIH0pLCBcIlxcblwiXVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW19qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vb296Y2l0YWsuZ2l0aHViLmlvL3htbGJ1aWxkZXIyL3NlcmlhbGl6YXRpb24uaHRtbFwiLFxuICAgICAgICBjaGlsZHJlbjogXCJodHRwczovL29vemNpdGFrLmdpdGh1Yi5pby94bWxidWlsZGVyMi9zZXJpYWxpemF0aW9uLmh0bWxcIlxuICAgICAgfSksIFwiXFxuY29udmVydCBiZXR3ZWVuIGpzb24sIHlhbWwsIHhtbCAodGhvdWdoIHhtbCBjZW50cmljKVxcblwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vTGVvbmlkYXMtZnJvbS1YSVYvbm9kZS14bWwyanNcIixcbiAgICAgICAgY2hpbGRyZW46IFwiaHR0cHM6Ly9naXRodWIuY29tL0xlb25pZGFzLWZyb20tWElWL25vZGUteG1sMmpzXCJcbiAgICAgIH0pLCBcIlxcbmJhc2VkIG9uIG9sZGVyIHhtbGJ1aWxkZXIsIHNlZW1zIGluZmVyaW9yIHF1YWxpdHksIHNvdXJjZSBpbiBjb2ZmZWVTY3JpcHRcIl1cbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogXCJub3RlIGRpZmZlcmVuY2UgYmV0d2VlbiBYU0QgYW5kIEphdmFTY3JpcHQ6XFxudmFsaWQgSmF2YVNjcmlwdCBmbG9hdCBmb3IgcGFyc2VGbG9hdDogJzB4MUEnLCAnSW5maW5pdHknLCAnMTBlNScsICcgMTAuMTIzICdcIlxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5ibG9ja3F1b3RlLCB7XG4gICAgICBjaGlsZHJlbjogW1wiXFxuICBcIiwgX2pzeChfY29tcG9uZW50cy5jaXRlLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcIiBodHRwczovL3d3dy53My5vcmcvVFIveG1sc2NoZW1hLTAvIFwiXG4gICAgICB9KSwgXCJcXG4gIFwiLCBfanN4KF9jb21wb25lbnRzLnByZSwge1xuICAgICAgICBjaGlsZHJlbjogXCLCoC0xRTQsIDEyNjcuNDMyMzNFMTIsIDEyLjc4ZS0yLCAxMsKgLCAtMCwgMMKgYW5kwqBJTkbCoGFyZSBhbGwgbGVnYWwgbGl0ZXJhbHMgZm9ywqBmbG9hdC5cXG7CoC0xLjIzLCAxMjY3ODk2Ny41NDMyMzMsICsxMDAwMDAuMDAsIDIxMCBmb3IgZGVjaW1hbFxcbiAgXCJcbiAgICAgIH0pLCBcIlxcblwiXVxuICAgIH0pLCBcIlxcblwiLCBfanN4cyhfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogW1wiYW5ub3lpbmc6XFxueHNkOnNlcXVlbmNlICBvcmRlciBtYXR0ZXJzIGluIFhNTCBidXQgbm90IGluaGVyZW50bHkgaW4gSlMgb2JqZWN0XFxuc28gbWFrZSBzdXJlIHRvIFwiLCBfanN4KF9jb21wb25lbnRzLmEsIHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL2RldmRvY3MuaW8vamF2YXNjcmlwdC9zdGF0ZW1lbnRzL2Zvci4uLmluXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImNyZWF0ZSBKc29uIGZpZWxkcyBpbiBvcmRlclwiXG4gICAgICB9KSwgXCIgb3Igc29tZWhvdyBjb250cm9sIG9yZGVyIGluIGNvbnZlcnNpb25cXG5cIiwgX2pzeChfY29tcG9uZW50cy5hLCB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2NvdHRvZmZlbi81OGRkMTZkMGI4NDA4YjcxMzE0MFwiLFxuICAgICAgICBjaGlsZHJlbjogXCJYTUwgRWxlbWVudCB3aXRob3V0IE9yZGVyaW5nIG1heSBiZSBoYXNzbGVcIlxuICAgICAgfSldXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuaDQsIHtcbiAgICAgIGlkOiBcInhtbC10by1qc29uXCIsXG4gICAgICBjaGlsZHJlbjogXCJ4bWwgdG8ganNvblwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IF9qc3goX2NvbXBvbmVudHMuYSwge1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01QYXJzZXIvcGFyc2VGcm9tU3RyaW5nXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01QYXJzZXIvcGFyc2VGcm9tU3RyaW5nXCJcbiAgICAgIH0pXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucHJlLCB7XG4gICAgICBjaGlsZHJlbjogX2pzeChfY29tcG9uZW50cy5jb2RlLCB7XG4gICAgICAgIGNoaWxkcmVuOiBcIi8vIG1vZGVsLmNvbmZpZ0l0ZW0gc2hvdWxkIGJlIG9iamVjdCBvciBhcnJheT8gKGhhdmUgdG8gY2hlY2sgWFNEIG9yIHNvbWUgc3BlYylcXG4gICAgPG1vZGVsPlxcbiAgICAgIDxjb25maWdJdGVtPlxcbiAgICAgICAgPG5hbWU+cGMxMDE8L25hbWU+XFxuICAgICAgPC9jb25maWdJdGVtPlxcbiAgICA8L21vZGVsPlxcblwiXG4gICAgICB9KVxuICAgIH0pXVxuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IHtcbiAgICAuLi5fcHJvdmlkZUNvbXBvbmVudHMoKSxcbiAgICAuLi5wcm9wcy5jb21wb25lbnRzXG4gIH07XG4gIHJldHVybiBNRFhMYXlvdXQgPyBfanN4KE1EWExheW91dCwge1xuICAgIC4uLnByb3BzLFxuICAgIGNoaWxkcmVuOiBfanN4KF9jcmVhdGVNZHhDb250ZW50LCB7XG4gICAgICAuLi5wcm9wc1xuICAgIH0pXG4gIH0pIDogX2NyZWF0ZU1keENvbnRlbnQocHJvcHMpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/my/public/software/architecture/json.md\n");

/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),\n/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/react/index.js\");\n/**\n * @import {MDXComponents} from 'mdx/types.js'\n * @import {Component, ReactElement, ReactNode} from 'react'\n */\n\n/**\n * @callback MergeComponents\n *   Custom merge function.\n * @param {Readonly<MDXComponents>} currentComponents\n *   Current components from the context.\n * @returns {MDXComponents}\n *   Additional components.\n *\n * @typedef Props\n *   Configuration for `MDXProvider`.\n * @property {ReactNode | null | undefined} [children]\n *   Children (optional).\n * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @property {boolean | null | undefined} [disableParentContext=false]\n *   Turn off outer component context (default: `false`).\n */\n\n\n\n/** @type {Readonly<MDXComponents>} */\nconst emptyComponents = {}\n\nconst MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)\n\n/**\n * Get current components from the MDX Context.\n *\n * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]\n *   Additional components to use or a function that creates them (optional).\n * @returns {MDXComponents}\n *   Current components.\n */\nfunction useMDXComponents(components) {\n  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)\n\n  // Memoize to avoid unnecessary top-level context changes\n  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(\n    function () {\n      // Custom merge via a function prop\n      if (typeof components === 'function') {\n        return components(contextComponents)\n      }\n\n      return {...contextComponents, ...components}\n    },\n    [contextComponents, components]\n  )\n}\n\n/**\n * Provider for MDX context.\n *\n * @param {Readonly<Props>} properties\n *   Properties.\n * @returns {ReactElement}\n *   Element.\n * @satisfies {Component}\n */\nfunction MDXProvider(properties) {\n  /** @type {Readonly<MDXComponents>} */\n  let allComponents\n\n  if (properties.disableParentContext) {\n    allComponents =\n      typeof properties.components === 'function'\n        ? properties.components(emptyComponents)\n        : properties.components || emptyComponents\n  } else {\n    allComponents = useMDXComponents(properties.components)\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\n    MDXContext.Provider,\n    {value: allComponents},\n    properties.children\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3VzYXVydXMvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanM/MTE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mdx-js/react/lib/index.js\n");

/***/ }),

/***/ "./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-my-public-software-architecture-json-md-8a2.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"id":"my/public/software/architecture/json","title":"json","description":"https://en.m.wikipedia.org/wiki/JSON5#Supersets","source":"@site/docs/my/public/software/architecture/json.md","sourceDirName":"my/public/software/architecture","slug":"/my/public/software/architecture/json","permalink":"/note/docs/my/public/software/architecture/json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mySidebar","previous":{"title":"graphql","permalink":"/note/docs/my/public/software/architecture/graphql"},"next":{"title":"local-first","permalink":"/note/docs/my/public/software/architecture/local-first"}}');

/***/ })

}]);