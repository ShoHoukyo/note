"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6007],{12013:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(24246),r=n(71670);const s={},i=void 0,c={id:"my/public/software/Google/ChromeOS/linux",title:"linux",description:"2023-11-27 Back up & restore your Linux files and apps - Chromebook Help",source:"@site/docs/my/public/software/Google/ChromeOS/linux.md",sourceDirName:"my/public/software/Google/ChromeOS",slug:"/my/public/software/Google/ChromeOS/linux",permalink:"/note/docs/my/public/software/Google/ChromeOS/linux",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"backup",permalink:"/note/docs/my/public/software/Google/ChromeOS/backup"},next:{title:"drive",permalink:"/note/docs/my/public/software/Google/drive"}},a={},d=[];function u(e){const o={a:"a",blockquote:"blockquote",cite:"cite",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.blockquote,{children:["\n  ",(0,t.jsx)(o.p,{style:{},children:"\n  "}),"\n",(0,t.jsx)(o.a,{href:"https://support.google.com/chromebook/answer/9592813?hl=en&ref_topic=3415446&sjid=13946737286281156788-AP",children:" 2023-11-27 Back up & restore your Linux files and apps - Chromebook Help "}),"\n  ",(0,t.jsxs)(o.cite,{children:["\n",(0,t.jsx)(o.a,{href:"https://support.google.com/chromebook/answer/9145439?hl=en",children:" 2023-11-27 Set up Linux on your Chromebook - Chromebook Help "}),"\n  "]}),"\n"]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n  ",(0,t.jsx)(o.p,{style:{},children:"\n"}),(0,t.jsx)(o.p,{children:"Linux support in ChromeOS is offered as an LXC container running\ninside a KVM instance that is RO. The VM image is stored inside the\nuser profile so it is also encrypted by eCrypt per the documentation."}),"\n",(0,t.jsx)(o.p,{children:"Linux filesystem itself to be encrypted:\nThe VM container is not privileged and therefore cannot add kernel\nmodules or access LXC host devices directly, which would likely be\nneeded to use such encryption."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://www.reddit.com/r/Crostini/comments/8ca8fm/q_does_crostini_encrypt_the_virtual_machines_disks/",children:"https://www.reddit.com/r/Crostini/comments/8ca8fm/q_does_crostini_encrypt_the_virtual_machines_disks/"}),"\nyes, encrypted\nSpecifically, each user's account has its own encryption that is tied\nto the user's Google password. If you forget your password, local\nfiles on the Chromebook cannot be recovered, including your data in Crostini.\n",(0,t.jsx)(o.a,{href:"https://www.reddit.com/r/Crostini/comments/abqd99/newbie_crostini_and_chromebook_encryption/",children:"https://www.reddit.com/r/Crostini/comments/abqd99/newbie_crostini_and_chromebook_encryption/"})]}),"\n",(0,t.jsxs)(o.p,{children:["Technical info:\n",(0,t.jsx)(o.a,{href:"https://chromium.googlesource.com/chromiumos/docs/+/HEAD/disk_format.md",children:"https://chromium.googlesource.com/chromiumos/docs/+/HEAD/disk_format.md"}),"\n",(0,t.jsx)(o.a,{href:"https://www.chromium.org/chromium-os/chromiumos-design-docs/protecting-cached-user-data/",children:"https://www.chromium.org/chromium-os/chromiumos-design-docs/protecting-cached-user-data/"})]}),"\n  ",(0,t.jsx)(o.p,{}),"\n  ",(0,t.jsx)(o.cite,{children:"\nhttps://www.reddit.com/r/chromeos/comments/w9iu2s/is_the_linux_partition_on_chromeos_encrypted/\n  "}),"\n"]})]})}function l(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},71670:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>i});var t=n(27378);const r={},s=t.createContext(r);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);