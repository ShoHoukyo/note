"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9969],{26520:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=o(24246),r=o(71670);const a={},s=void 0,c={id:"my/public/software/JavaScript/React/form",title:"form",description:"React Hook Form",source:"@site/docs/my/public/software/JavaScript/React/form.md",sourceDirName:"my/public/software/JavaScript/React",slug:"/my/public/software/JavaScript/React/form",permalink:"/note/docs/my/public/software/JavaScript/React/form",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"index",permalink:"/note/docs/my/public/software/JavaScript/"},next:{title:"native",permalink:"/note/docs/my/public/software/JavaScript/React/native"}},i={},l=[{value:"React Hook Form",id:"react-hook-form",level:3},{value:"tips",id:"tips",level:4}];function d(e){const t={a:"a",blockquote:"blockquote",cite:"cite",code:"code",h3:"h3",h4:"h4",ins:"ins",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"react-hook-form",children:"React Hook Form"}),"\n",(0,n.jsxs)(t.p,{children:["good overview  ",(0,n.jsx)(t.a,{href:"https://www.react-hook-form.com/get-started/",children:"https://www.react-hook-form.com/get-started/"}),"\nnote React official ",(0,n.jsx)(t.a,{href:"https://react.dev/reference/react-dom/hooks/useFormState",children:"https://react.dev/reference/react-dom/hooks/useFormState"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.cite,{children:[" ",(0,n.jsx)(t.a,{href:"https://www.react-hook-form.com/faqs/",children:" 2023-12-04  "})," "]}),"\n",(0,n.jsxs)(t.p,{style:{},children:["\nReact Hook Form is focusing on uncontrolled inputs, which means you\ndon't need to change the input value via state via onChange. In fact,\nyou don't need value at all. You only need to set defaultValue for the\ninitial input value.\n",(0,n.jsx)(t.ins,{children:"\nAccording to its table, React Hook Form seems better than Formik or Redux Form.\n"}),"\n"]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.react-hook-form.com/api/usecontroller/",children:"https://www.react-hook-form.com/api/usecontroller/"}),"\nController's job is to spy on the input, report, and set its value."]}),"\n",(0,n.jsx)(t.p,{}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"tips",children:"tips"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.cite,{children:[" ",(0,n.jsx)(t.a,{href:"https://www.react-hook-form.com/advanced-usage/",children:" 2023-12-07  "})," "]}),"\n",(0,n.jsxs)(t.p,{style:{},children:["\nThe native input returns the value in string format unless invoked\nwith valueAsNumber or valueAsDate\nit's not perfect. We still have to deal with isNaN or null values\n",(0,n.jsx)(t.ins,{children:" \n[2020 react-hook-form, always return string type ](https://stackoverflow.com/questions/61782355/react-hook-form-always-return-string-type-value)\n"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/68112196/uncontrolled-input-to-controlled-input-warning-in-react-hook-form-and-material-u",children:"Uncontrolled Input to Controlled Input Warning in React Hook Form and Material UI's TextField"}),'\nfield default value should be "" (e.g. for MUI-Select)\nnote also direct ',(0,n.jsx)(t.code,{children:'<Input {...register("input")} />'})," on controlled MUI"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"// v7    \n// for controller to get onChange event on controlled element (e.g. MUI), p2 any better way?\n    onChange={(e) => {\n        renderProps.field.onChange(e);\n        // custom process as needed\n    }}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},71670:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>s});var n=o(27378);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);