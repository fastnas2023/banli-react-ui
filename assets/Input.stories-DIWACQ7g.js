import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./Input-98QYAOYW.js";var o,s,c,l,u,d,f,p,m,h;t((()=>{o=e(n(),1),i(),s=r(),c={title:`Primitives/Input`,component:a,args:{placeholder:`Email`,defaultValue:``}},l={},u={args:{defaultValue:`disabled`,disabled:!0}},d={args:{defaultValue:`loading...`,loading:!0}},f={args:{defaultValue:`bad input`,invalid:!0}},p={render:()=>(0,s.jsxs)(`div`,{className:`grid gap-3 bg-aivent-bg p-6`,children:[(0,s.jsx)(a,{size:`sm`,placeholder:`Small`}),(0,s.jsx)(a,{size:`md`,placeholder:`Medium`}),(0,s.jsx)(a,{size:`lg`,placeholder:`Large`})]})},m={render:()=>{function e(){let[e,t]=o.useState(`hello`);return(0,s.jsxs)(`div`,{className:`grid gap-2 bg-aivent-bg p-6`,children:[(0,s.jsx)(a,{"aria-label":`controlled`,value:e,onChange:e=>t(e.target.value),placeholder:`Type here`}),(0,s.jsxs)(`div`,{className:`text-xs text-aivent-muted`,children:[`value: `,e]})]})}return(0,s.jsx)(e,{})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'disabled',
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'loading...',
    loading: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'bad input',
    invalid: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-3 bg-aivent-bg p-6">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [value, setValue] = React.useState('hello');
      return <div className="grid gap-2 bg-aivent-bg p-6">
          <Input aria-label="controlled" value={value} onChange={e => setValue(e.target.value)} placeholder="Type here" />
          <div className="text-xs text-aivent-muted">value: {value}</div>
        </div>;
    }
    return <Demo />;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Disabled`,`Loading`,`Invalid`,`Sizes`,`Controlled`]}))();export{m as Controlled,l as Default,u as Disabled,f as Invalid,d as Loading,p as Sizes,h as __namedExportsOrder,c as default};