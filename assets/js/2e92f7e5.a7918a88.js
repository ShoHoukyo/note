"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5134],{62672:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(24246),o=n(71670);const i={},r=void 0,a={id:"my/public/software/encryption/linux",title:"linux",description:"ubuntu",source:"@site/docs/my/public/software/encryption/linux.md",sourceDirName:"my/public/software/encryption",slug:"/my/public/software/encryption/linux",permalink:"/note/docs/my/public/software/encryption/linux",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"drive",permalink:"/note/docs/my/public/software/encryption/drive"},next:{title:"ffmpeg",permalink:"/note/docs/my/public/software/ffmpeg"}},u={},l=[{value:"ubuntu",id:"ubuntu",level:2}];function c(t){const e={a:"a",blockquote:"blockquote",cite:"cite",h2:"h2",ins:"ins",li:"li",p:"p",ul:"ul",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"ubuntu",children:"ubuntu"}),"\n",(0,s.jsx)(e.p,{children:"as of 2023-10-17"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"wait for FDE to mature in next version  23.2?"}),"\n",(0,s.jsx)(e.li,{children:"or check for home dir encryption comeback"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{style:{},children:"\nubuntu 22.04   \noptions:\n- LVM  (guess compatible with other linux installs)\n- ZFS  (take over whole device?)\n"}),(0,s.jsxs)(e.p,{children:["The option to encrypt the /home/$USER/ folder in Ubuntu was deprecated due to security issues.\n",(0,s.jsx)(e.a,{href:"https://askubuntu.com/questions/1409307/encrypt-the-home-directory-in-ubuntu-22-04",children:"https://askubuntu.com/questions/1409307/encrypt-the-home-directory-in-ubuntu-22-04"})]}),"\n",(0,s.jsxs)(e.p,{children:["If you already have a running instance of Ubuntu 22.04 and you want to\nenable full disk encryption, you\u2019re required to reinstall it. You\ncannot fully encrypt it once it is installed. You can only encrypt\ndirectories or partitions post-installation.\nonly possible with \u201cErase disk and install Ubuntu\u201d\n",(0,s.jsx)(e.a,{href:"https://www.tecmint.com/encrypt-disk-installing-ubuntu/",children:"https://www.tecmint.com/encrypt-disk-installing-ubuntu/"}),"\n",(0,s.jsx)(e.ins,{children:" too complex, brittle? "})]}),"\n",(0,s.jsxs)(e.p,{children:["ubuntu 22.04   ZFS   encrypt\np4 worth trying, someone said it just worked\n",(0,s.jsx)(e.ins,{children:" for home use, it may be proper (stability, encryption)\nbetter do on blank drive\n"})]}),"\n",(0,s.jsxs)(e.p,{children:["data partition is not encrypted, he eventually moved to LVM with encryption\n",(0,s.jsx)(e.a,{href:"https://askubuntu.com/questions/1407249/should-ubuntu-22-04-zfs-with-encryption-also-encrypt-the-data-partion",children:"https://askubuntu.com/questions/1407249/should-ubuntu-22-04-zfs-with-encryption-also-encrypt-the-data-partion"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://discourse.ubuntu.com/t/future-of-zfs-on-ubuntu-desktop/33001",children:"https://discourse.ubuntu.com/t/future-of-zfs-on-ubuntu-desktop/33001"}),"\nAfter a very energetic initial push with ZFS on the desktop and\ntooling, the initiative seems to have fizzled out as of late. It is\nimpossible at the moment to create an encrypted ZFS desktop\ninstallation on 22.10 for instance, and the new installer for 23.04\ndoesn\u2019t have the option at all. Ubuntu server\u2019s installer doesn\u2019t even\noffer it as an option."]}),"\n",(0,s.jsx)(e.p,{}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n  ",(0,s.jsx)(e.p,{style:{},children:"\nTPM-backed full disk encryption to classic Ubuntu Desktop systems as well, starting with Ubuntu 23.10 (Mantic Minotaur) \u2013 where it will be available as an experimental feature. This means that passphrases will no longer be needed on supported platforms, and that the secret used to decrypt the encrypted data will be protected by a TPM and recovered automatically only by early boot software\n"}),(0,s.jsx)(e.p,{children:"These hashes create a chain of trust that allows for remote\nattestation, ensuring the integrity and authenticity of the system."}),"\n",(0,s.jsx)(e.p,{children:"the installer will give you two installation paths to choose from:"}),"\n",(0,s.jsx)(e.p,{children:"TPM-backed FDE: this will Install a classic desktop system that gets its kernel and bootloader assets from snaps instead of debs.\nNon TPM-backed FDE  2: this will Install an entirely deb-based classic desktop system, with the same layout as the first option, in order to facilitate potential upgrade paths. This will be the default installation option and isn\u2019t going anywhere."}),"\n",(0,s.jsx)(e.p,{children:"A word of caution resonates here: we strongly advise that you only venture into this feature exclusively with hardware you\u2019re prepared to wipe completely, and to be fully  aware of the dangerous risks that come with testing it."}),"\n",(0,s.jsxs)(e.ins,{children:[" \nTPM chip seems a good idea\n",(0,s.jsxs)(e.p,{children:["but do see ",(0,s.jsx)(e.a,{href:"http://www.gnu.org/philosophy/can-you-trust.html",children:"http://www.gnu.org/philosophy/can-you-trust.html"}),"  on remote attestation\n"]}),"\n  ",(0,s.jsx)(e.p,{}),"\n  ",(0,s.jsxs)(e.cite,{children:["\n",(0,s.jsx)(e.a,{href:"https://ubuntu.com/blog/tpm-backed-full-disk-encryption-is-coming-to-ubuntu",children:" 2023-10-17 TPM-backed Full Disk Encryption is coming to Ubuntu | Ubuntu "}),"\n  "]}),"\n"]})]})]})}function d(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},71670:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var s=n(27378);const o={},i=s.createContext(o);function r(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);