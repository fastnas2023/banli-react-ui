import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./breadcrumb-B89zvzqx.js";var o,s,c,l,u,d,f;t((()=>{o=e(n(),1),i(),s=r(),c={title:`UI/Breadcrumb`},l={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{items:[{label:`Home`,href:`#`},{label:`Marketing`,href:`#`},{label:`Landing Page`}]})})},u={render:()=>{function e(){let[e,t]=o.useState(`Landing Page`);return(0,s.jsxs)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:[(0,s.jsxs)(`div`,{className:`mb-4 text-sm text-aivent-text/70`,children:[`最后点击：`,e]}),(0,s.jsx)(a,{separator:`>`,items:[{label:`Home`,onClick:()=>t(`Home`)},{label:`Marketing`,onClick:()=>t(`Marketing`)},{label:`Landing Page`}]})]})}return(0,s.jsx)(e,{})}},d={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{disabled:!0,items:[{label:`Home`,href:`#`},{label:`Landing Page`}]})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Breadcrumb items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Marketing',
      href: '#'
    }, {
      label: 'Landing Page'
    }]} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [last, setLast] = React.useState('Landing Page');
      return <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="mb-4 text-sm text-aivent-text/70">最后点击：{last}</div>
          <Breadcrumb separator=">" items={[{
          label: 'Home',
          onClick: () => setLast('Home')
        }, {
          label: 'Marketing',
          onClick: () => setLast('Marketing')
        }, {
          label: 'Landing Page'
        }]} />
        </div>;
    }
    return <Demo />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Breadcrumb disabled items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Landing Page'
    }]} />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`WithActions`,`Disabled`]}))();export{l as Basic,d as Disabled,u as WithActions,f as __namedExportsOrder,c as default};