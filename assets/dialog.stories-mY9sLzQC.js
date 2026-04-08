import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,r as a}from"./provider-GOL9Z1Jh.js";import{n as o,t as s}from"./cn-nhk1yNpb.js";import{n as c,t as l}from"./Button-Clai44lA.js";import{a as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v}from"./dist-mRqdMY84.js";var y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{y=e(n(),1),p(),o(),i(),b=r(),x=h,S=d,C=v,w=u,T=y.forwardRef(({className:e,...t},n)=>(0,b.jsx)(f,{ref:n,className:s(`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm`,e),...t})),T.displayName=`DialogOverlay`,E=y.forwardRef(({className:e,...t},n)=>(0,b.jsxs)(w,{children:[(0,b.jsx)(T,{}),(0,b.jsx)(D,{ref:n,className:e,...t})]})),E.displayName=`DialogContent`,D=y.forwardRef(({className:e,...t},n)=>{let r=a();return(0,b.jsx)(m,{ref:n,className:s(`fixed left-1/2 top-1/2 z-50 w-[min(520px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl2 border border-aivent-border bg-aivent-panel p-6 text-aivent-text shadow-glow outline-none`,r.enabled?`animate-in fade-in-0 zoom-in-95`:``,e),...t})}),D.displayName=`DialogContentInner`,O=y.forwardRef(({className:e,...t},n)=>(0,b.jsx)(_,{ref:n,className:s(`text-lg font-bold text-white`,e),...t})),O.displayName=`DialogTitle`,k=y.forwardRef(({className:e,...t},n)=>(0,b.jsx)(g,{ref:n,className:s(`mt-2 text-sm text-aivent-muted`,e),...t})),k.displayName=`DialogDescription`,T.__docgenInfo={description:``,methods:[],displayName:`DialogOverlay`},E.__docgenInfo={description:``,methods:[],displayName:`DialogContent`},O.__docgenInfo={description:``,methods:[],displayName:`DialogTitle`},k.__docgenInfo={description:``,methods:[],displayName:`DialogDescription`}})),j,M,N,P;t((()=>{c(),A(),j=r(),M={title:`UI/Dialog`},N={render:()=>(0,j.jsx)(`div`,{className:`bg-aivent-bg p-16`,children:(0,j.jsxs)(x,{children:[(0,j.jsx)(S,{asChild:!0,children:(0,j.jsx)(l,{children:`Open dialog`})}),(0,j.jsxs)(E,{children:[(0,j.jsx)(O,{children:`Dialog title`}),(0,j.jsx)(k,{children:`This is a Radix Dialog with Tailwind styling.`}),(0,j.jsxs)(`div`,{className:`mt-6 flex justify-end gap-2`,children:[(0,j.jsx)(C,{asChild:!0,children:(0,j.jsx)(l,{variant:`ghost`,children:`Cancel`})}),(0,j.jsx)(l,{children:`Confirm`})]})]})]})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>This is a Radix Dialog with Tailwind styling.</DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button>Confirm</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
}`,...N.parameters?.docs?.source}}},P=[`Basic`]}))();export{N as Basic,P as __namedExportsOrder,M as default};