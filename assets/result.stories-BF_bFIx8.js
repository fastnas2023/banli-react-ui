import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./Button-DMc61E-T.js";import{n as i,t as a}from"./result-1Zq2VFhi.js";var o,s,c,l,u,d,f;e((()=>{n(),i(),o=t(),s={title:`UI/Result`},c={render:()=>(0,o.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,o.jsx)(a,{title:`操作完成`,description:`你的请求已处理完成。`})})},l={render:()=>(0,o.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,o.jsxs)(`div`,{className:`grid gap-6 md:grid-cols-2`,children:[(0,o.jsx)(a,{status:`info`,title:`信息`,description:`这是一条提示信息。`}),(0,o.jsx)(a,{status:`success`,title:`成功`,description:`已保存你的更改。`}),(0,o.jsx)(a,{status:`warning`,title:`警告`,description:`请检查输入内容后再提交。`}),(0,o.jsx)(a,{status:`error`,title:`失败`,description:`服务器开小差了，请稍后重试。`})]})})},u={render:()=>(0,o.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,o.jsx)(a,{status:`error`,title:`提交失败`,description:`网络异常导致请求失败。`,actions:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`重试`}),(0,o.jsx)(r,{variant:`ghost`,children:`返回`})]})})})},d={render:()=>(0,o.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,o.jsx)(a,{status:`success`,icon:(0,o.jsx)(`svg`,{width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M12 2l2.5 6.5L21 9l-5 4.5L17 20l-5-3-5 3 1-6.5L3 9l6.5-.5L12 2Z`,stroke:`currentColor`,strokeWidth:`2.25`,strokeLinejoin:`round`})}),title:`自定义图标`,description:`icon props 会覆盖默认 status 图标。`})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Result title="操作完成" description="你的请求已处理完成。" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="grid gap-6 md:grid-cols-2">
        <Result status="info" title="信息" description="这是一条提示信息。" />
        <Result status="success" title="成功" description="已保存你的更改。" />
        <Result status="warning" title="警告" description="请检查输入内容后再提交。" />
        <Result status="error" title="失败" description="服务器开小差了，请稍后重试。" />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Result status="error" title="提交失败" description="网络异常导致请求失败。" actions={<>
            <Button>重试</Button>
            <Button variant="ghost">返回</Button>
          </>} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Result status="success" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2l2.5 6.5L21 9l-5 4.5L17 20l-5-3-5 3 1-6.5L3 9l6.5-.5L12 2Z" stroke="currentColor" strokeWidth="2.25" strokeLinejoin="round" />
          </svg>} title="自定义图标" description="icon props 会覆盖默认 status 图标。" />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`Statuses`,`WithActions`,`CustomIcon`]}))();export{c as Basic,d as CustomIcon,l as Statuses,u as WithActions,f as __namedExportsOrder,s as default};