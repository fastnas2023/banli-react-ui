import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./radio-group-B-KiQuDk.js";var o,s,c,l,u,d;t((()=>{o=e(n(),1),i(),s=r(),c={title:`UI/RadioGroup`},l={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{defaultValue:`a`,options:[{label:`Option A`,value:`a`},{label:`Option B`,value:`b`},{label:`Disabled`,value:`c`,disabled:!0}]})})},u={render:()=>{let[e,t]=o.useState(`a`);return(0,s.jsxs)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:[(0,s.jsx)(a,{value:e,onChange:t,options:[{label:`Option A`,value:`a`},{label:`Option B`,value:`b`}]}),(0,s.jsxs)(`div`,{className:`mt-4 text-sm text-aivent-muted`,children:[`value: `,e]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <RadioGroup defaultValue="a" options={[{
      label: 'Option A',
      value: 'a'
    }, {
      label: 'Option B',
      value: 'b'
    }, {
      label: 'Disabled',
      value: 'c',
      disabled: true
    }]} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = React.useState('a');
    return <div className="bg-aivent-bg p-16 text-aivent-text">
        <RadioGroup value={v} onChange={setV} options={[{
        label: 'Option A',
        value: 'a'
      }, {
        label: 'Option B',
        value: 'b'
      }]} />
        <div className="mt-4 text-sm text-aivent-muted">value: {v}</div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Basic`,`Controlled`]}))();export{l as Basic,u as Controlled,d as __namedExportsOrder,c as default};