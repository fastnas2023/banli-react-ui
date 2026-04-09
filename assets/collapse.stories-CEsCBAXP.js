import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./collapse-DDlC7Cdy.js";var o,s,c,l,u,d,f,p;t((()=>{o=e(n(),1),i(),s=r(),c={title:`UI/Collapse`},l=[{key:`a`,label:`What is Banli UI?`,content:(0,s.jsx)(`div`,{children:`Banli UI 是一个面向营销站/后台的 React 组件库示例，强调一致的 API（value/defaultValue/onChange）与可访问性。`})},{key:`b`,label:`Design tokens?`,content:(0,s.jsx)(`div`,{children:`基于 Tailwind 变量与主题色，支持快速定制。`})},{key:`c`,label:`Disabled item`,disabled:!0,content:(0,s.jsx)(`div`,{children:`你不应该能打开它。`})}],u={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{items:l,defaultValue:[`a`]})})},d={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{items:l,multiple:!1,defaultValue:[`a`]})})},f={render:()=>{function e(){let[e,t]=o.useState([`a`]);return(0,s.jsxs)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:[(0,s.jsxs)(`div`,{className:`mb-4 text-sm text-aivent-text/70`,children:[`展开项：`,e.join(`, `)||`(none)`]}),(0,s.jsx)(a,{items:l,value:e,onChange:t})]})}return(0,s.jsx)(e,{})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Collapse items={items} defaultValue={['a']} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Collapse items={items} multiple={false} defaultValue={['a']} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [v, setV] = React.useState<string[]>(['a']);
      return <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="mb-4 text-sm text-aivent-text/70">展开项：{v.join(', ') || '(none)'}</div>
          <Collapse items={items} value={v} onChange={setV} />
        </div>;
    }
    return <Demo />;
  }
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`Accordion`,`Controlled`]}))();export{d as Accordion,u as Basic,f as Controlled,p as __namedExportsOrder,c as default};