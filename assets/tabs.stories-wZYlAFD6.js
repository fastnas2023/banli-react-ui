import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./tabs-BRTvXabz.js";var o,s,c,l,u,d;t((()=>{o=e(n(),1),i(),s=r(),c={title:`UI/Tabs`},l={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{defaultValue:`overview`,options:[{label:`Overview`,value:`overview`,content:(0,s.jsx)(`div`,{children:`Overview content`})},{label:`Specs`,value:`specs`,content:(0,s.jsx)(`div`,{children:`Specs content`})},{label:`Disabled`,value:`disabled`,content:(0,s.jsx)(`div`,{children:`Disabled content`}),disabled:!0}]})})},u={render:()=>{function e(){let[e,t]=o.useState(`overview`);return(0,s.jsxs)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:[(0,s.jsx)(a,{value:e,onChange:t,options:[{label:`Overview`,value:`overview`,content:(0,s.jsx)(`div`,{children:`Overview content`})},{label:`Specs`,value:`specs`,content:(0,s.jsx)(`div`,{children:`Specs content`})}]}),(0,s.jsxs)(`div`,{className:`mt-4 text-sm text-aivent-muted`,children:[`value: `,e]})]})}return(0,s.jsx)(e,{})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Tabs defaultValue="overview" options={[{
      label: 'Overview',
      value: 'overview',
      content: <div>Overview content</div>
    }, {
      label: 'Specs',
      value: 'specs',
      content: <div>Specs content</div>
    }, {
      label: 'Disabled',
      value: 'disabled',
      content: <div>Disabled content</div>,
      disabled: true
    }]} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [v, setV] = React.useState('overview');
      return <div className="bg-aivent-bg p-16 text-aivent-text">
          <Tabs value={v} onChange={setV} options={[{
          label: 'Overview',
          value: 'overview',
          content: <div>Overview content</div>
        }, {
          label: 'Specs',
          value: 'specs',
          content: <div>Specs content</div>
        }]} />
          <div className="mt-4 text-sm text-aivent-muted">value: {v}</div>
        </div>;
    }
    return <Demo />;
  }
}`,...u.parameters?.docs?.source}}},d=[`Basic`,`Controlled`]}))();export{l as Basic,u as Controlled,d as __namedExportsOrder,c as default};