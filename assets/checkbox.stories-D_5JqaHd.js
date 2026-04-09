import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./checkbox-C-Ly2wn1.js";var o,s,c,l,u,d;t((()=>{o=e(n(),1),i(),s=r(),c={title:`UI/Checkbox`},l={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsx)(a,{defaultValue:!0,children:`Default`}),(0,s.jsx)(a,{defaultValue:!0,disabled:!0,children:`Disabled`}),(0,s.jsx)(a,{defaultValue:!0,status:`error`,children:`Error`}),(0,s.jsx)(a,{defaultValue:!0,status:`warning`,children:`Warning`})]})})},u={render:()=>{let[e,t]=o.useState(!1);return(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsxs)(a,{value:e,onChange:t,children:[`Controlled: `,String(e)]})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="flex flex-col gap-4">
        <Checkbox defaultValue>Default</Checkbox>
        <Checkbox defaultValue disabled>
          Disabled
        </Checkbox>
        <Checkbox defaultValue status="error">
          Error
        </Checkbox>
        <Checkbox defaultValue status="warning">
          Warning
        </Checkbox>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = React.useState(false);
    return <div className="bg-aivent-bg p-16 text-aivent-text">
        <Checkbox value={v} onChange={setV}>
          Controlled: {String(v)}
        </Checkbox>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Basic`,`Controlled`]}))();export{l as Basic,u as Controlled,d as __namedExportsOrder,c as default};