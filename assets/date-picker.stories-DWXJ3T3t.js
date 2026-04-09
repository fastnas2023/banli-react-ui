import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./date-picker-B114QyJT.js";var o,s,c,l,u,d;t((()=>{o=e(n(),1),i(),s=r(),c={title:`UI/DatePicker`},l={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{dayPickerProps:{defaultMonth:new Date(2026,0,1)}})})},u={render:()=>{function e(){let[e,t]=o.useState(new Date(2026,0,15));return(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,s.jsx)(a,{value:e,onChange:t,dayPickerProps:{defaultMonth:new Date(2026,0,1)}}),(0,s.jsxs)(`span`,{className:`text-sm text-aivent-muted`,children:[`value: `,e?e.toDateString():`undefined`]})]})})}return(0,s.jsx)(e,{})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <DatePicker dayPickerProps={{
      defaultMonth: new Date(2026, 0, 1)
    }} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [v, setV] = React.useState<Date | undefined>(new Date(2026, 0, 15));
      return <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="flex items-center gap-4">
            <DatePicker value={v} onChange={setV} dayPickerProps={{
            defaultMonth: new Date(2026, 0, 1)
          }} />
            <span className="text-sm text-aivent-muted">value: {v ? v.toDateString() : 'undefined'}</span>
          </div>
        </div>;
    }
    return <Demo />;
  }
}`,...u.parameters?.docs?.source}}},d=[`Basic`,`Controlled`]}))();export{l as Basic,u as Controlled,d as __namedExportsOrder,c as default};