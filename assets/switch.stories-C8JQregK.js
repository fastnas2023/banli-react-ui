import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./switch-DkDg2HPt.js";var o,s,c,l,u,d;t((()=>{o=e(n(),1),i(),s=r(),c={title:`UI/Switch`},l={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsx)(a,{defaultValue:!0}),(0,s.jsx)(a,{defaultValue:!0,disabled:!0}),(0,s.jsx)(a,{defaultValue:!0,status:`error`})]})})},u={render:()=>{let[e,t]=o.useState(!1);return(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,s.jsx)(a,{value:e,onChange:t}),(0,s.jsx)(`span`,{className:`text-sm text-aivent-muted`,children:String(e)})]})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="flex flex-col gap-4">
        <Switch defaultValue />
        <Switch defaultValue disabled />
        <Switch defaultValue status="error" />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = React.useState(false);
    return <div className="bg-aivent-bg p-16 text-aivent-text">
        <div className="flex items-center gap-4">
          <Switch value={v} onChange={setV} />
          <span className="text-sm text-aivent-muted">{String(v)}</span>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Basic`,`Controlled`]}))();export{l as Basic,u as Controlled,d as __namedExportsOrder,c as default};