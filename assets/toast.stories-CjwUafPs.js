import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./Button-DMc61E-T.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./toast-Bxiv6rTB.js";var f,p,m,h,g;t((()=>{f=e(n(),1),i(),l(),p=r(),m={title:`UI/Toast`},h={render:()=>{let[e,t]=f.useState(!1);return(0,p.jsx)(`div`,{className:`bg-aivent-bg p-16`,children:(0,p.jsxs)(u,{swipeDirection:`right`,children:[(0,p.jsx)(a,{onClick:()=>t(!0),children:`Show toast`}),(0,p.jsx)(d,{open:e,onOpenChange:t,duration:3e3,children:(0,p.jsxs)(`div`,{className:`grid gap-1`,children:[(0,p.jsx)(s,{children:`Saved`}),(0,p.jsx)(c,{children:`Your changes have been stored.`})]})}),(0,p.jsx)(o,{})]})})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="bg-aivent-bg p-16">
        <ToastProvider swipeDirection="right">
          <Button onClick={() => setOpen(true)}>Show toast</Button>
          <Toast open={open} onOpenChange={setOpen} duration={3000}>
            <div className="grid gap-1">
              <ToastTitle>Saved</ToastTitle>
              <ToastDescription>Your changes have been stored.</ToastDescription>
            </div>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Basic`]}))();export{h as Basic,g as __namedExportsOrder,m as default};