import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./Button-DMc61E-T.js";import{n as i,t as a}from"./confirm-dialog-CG9vFWSB.js";var o,s,c,l,u,d;e((()=>{n(),i(),o=t(),s={title:`UI/ConfirmDialog`},c={render:()=>(0,o.jsx)(`div`,{className:`bg-aivent-bg p-16`,children:(0,o.jsx)(a,{trigger:(0,o.jsx)(r,{children:`Open confirm`}),title:`Confirm action`,description:`This is a component wrapper built on top of Dialog.`,onConfirm:()=>{},children:(0,o.jsx)(`div`,{className:`text-sm text-aivent-text`,children:`Optional content area.`})})})},l={render:()=>(0,o.jsx)(`div`,{className:`bg-aivent-bg p-16`,children:(0,o.jsx)(a,{danger:!0,trigger:(0,o.jsx)(r,{className:`bg-red-600 hover:bg-red-500`,children:`Delete`}),title:`Delete item`,description:`This action cannot be undone.`,confirmText:`Delete`,cancelText:`Cancel`,onConfirm:()=>{}})})},u={render:()=>(0,o.jsx)(`div`,{className:`bg-aivent-bg p-16`,children:(0,o.jsx)(a,{trigger:(0,o.jsx)(r,{children:`Async confirm`}),title:`Async confirm`,description:`Confirm button will show loading until the promise resolves.`,confirmText:`Confirm`,onConfirm:()=>new Promise(e=>setTimeout(e,1200)),children:(0,o.jsx)(`div`,{className:`text-sm text-aivent-muted`,children:`Try clicking outside while loading (it will be blocked).`})})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16">
      <ConfirmDialog trigger={<Button>Open confirm</Button>} title="Confirm action" description="This is a component wrapper built on top of Dialog." onConfirm={() => {
      // noop
    }}>
        <div className="text-sm text-aivent-text">Optional content area.</div>
      </ConfirmDialog>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16">
      <ConfirmDialog danger trigger={<Button className="bg-red-600 hover:bg-red-500">Delete</Button>} title="Delete item" description="This action cannot be undone." confirmText="Delete" cancelText="Cancel" onConfirm={() => {
      // noop
    }} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16">
      <ConfirmDialog trigger={<Button>Async confirm</Button>} title="Async confirm" description="Confirm button will show loading until the promise resolves." confirmText="Confirm" onConfirm={() => new Promise(resolve => setTimeout(resolve, 1200))}>
        <div className="text-sm text-aivent-muted">Try clicking outside while loading (it will be blocked).</div>
      </ConfirmDialog>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Basic`,`Danger`,`AsyncConfirm`]}))();export{u as AsyncConfirm,c as Basic,l as Danger,d as __namedExportsOrder,s as default};