import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./pagination-B4meKfQO.js";var o,s,c,l,u,d,f;t((()=>{o=e(n(),1),i(),s=r(),c={title:`UI/Pagination`},l={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{total:128,pageSize:10,defaultValue:1})})},u={render:()=>{function e(){let[e,t]=o.useState(3);return(0,s.jsxs)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:[(0,s.jsxs)(`div`,{className:`mb-4 text-sm text-aivent-text/70`,children:[`当前页：`,e]}),(0,s.jsx)(a,{total:999,pageSize:10,value:e,onChange:t})]})}return(0,s.jsx)(e,{})}},d={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{total:128,pageSize:10,defaultValue:4,disabled:!0})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Pagination total={128} pageSize={10} defaultValue={1} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [page, setPage] = React.useState(3);
      return <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="mb-4 text-sm text-aivent-text/70">当前页：{page}</div>
          <Pagination total={999} pageSize={10} value={page} onChange={setPage} />
        </div>;
    }
    return <Demo />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Pagination total={128} pageSize={10} defaultValue={4} disabled />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`Controlled`,`Disabled`]}))();export{l as Basic,u as Controlled,d as Disabled,f as __namedExportsOrder,c as default};