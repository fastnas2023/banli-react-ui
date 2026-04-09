import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./Button-DMc61E-T.js";import{n as o,t as s}from"./empty-CURked_a.js";var c,l,u,d,f,p,m,h,g;t((()=>{c=e(n(),1),i(),o(),l=r(),u={title:`UI/Empty`},d=(0,l.jsx)(`svg`,{width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`none`,children:(0,l.jsx)(`path`,{d:`M4 7h16M4 12h10M4 17h16`,stroke:`currentColor`,strokeWidth:`2.25`,strokeLinecap:`round`,strokeLinejoin:`round`})}),f={render:()=>(0,l.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,l.jsx)(s,{title:`暂无数据`,description:`你可以调整筛选条件，或者稍后再试。`})})},p={render:()=>(0,l.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,l.jsx)(s,{icon:d,title:`列表为空`,description:`当前没有任何记录。你可以新建一条，或刷新试试。`,actions:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{children:`新建`}),(0,l.jsx)(a,{variant:`ghost`,children:`刷新`})]})})})},m={render:()=>(0,l.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,l.jsxs)(`div`,{className:`grid gap-6`,children:[(0,l.jsx)(s,{size:`small`,icon:d,title:`Small`,description:`small size`}),(0,l.jsx)(s,{size:`middle`,icon:d,title:`Middle`,description:`middle size`}),(0,l.jsx)(s,{size:`large`,icon:d,title:`Large`,description:`large size`})]})})},h={render:()=>{function e(){let[e,t]=c.useState(`还没有更新`);return(0,l.jsxs)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:[(0,l.jsxs)(`div`,{className:`mb-4 text-sm text-aivent-text/70`,children:[`提示：`,e]}),(0,l.jsx)(s,{useStatusRole:!0,title:`空状态（role=status）`,description:`点击按钮会更新一段读屏友好的状态文本。`,actions:(0,l.jsx)(a,{onClick:()=>t(`已刷新`),children:`刷新`})})]})}return(0,l.jsx)(e,{})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Empty title="暂无数据" description="你可以调整筛选条件，或者稍后再试。" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Empty icon={DemoIcon} title="列表为空" description="当前没有任何记录。你可以新建一条，或刷新试试。" actions={<>
            <Button>新建</Button>
            <Button variant="ghost">刷新</Button>
          </>} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="grid gap-6">
        <Empty size="small" icon={DemoIcon} title="Small" description="small size" />
        <Empty size="middle" icon={DemoIcon} title="Middle" description="middle size" />
        <Empty size="large" icon={DemoIcon} title="Large" description="large size" />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [msg, setMsg] = React.useState('还没有更新');
      return <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="mb-4 text-sm text-aivent-text/70">提示：{msg}</div>
          <Empty useStatusRole title="空状态（role=status）" description="点击按钮会更新一段读屏友好的状态文本。" actions={<Button onClick={() => setMsg('已刷新')}>刷新</Button>} />
        </div>;
    }
    return <Demo />;
  }
}`,...h.parameters?.docs?.source}}},g=[`Basic`,`WithIconAndActions`,`Sizes`,`StatusRoleOptIn`]}))();export{f as Basic,m as Sizes,h as StatusRoleOptIn,p as WithIconAndActions,g as __namedExportsOrder,u as default};