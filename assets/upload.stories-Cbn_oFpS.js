import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./upload-mNcgT9Dc.js";var o,s,c,l,u,d;t((()=>{o=e(n(),1),i(),s=r(),c={title:`UI/Upload`},l={render:()=>{function e(){let[e,t]=o.useState([]);return(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsxs)(`div`,{className:`max-w-xl space-y-4`,children:[(0,s.jsx)(a,{onDrop:t}),(0,s.jsxs)(`div`,{className:`text-xs text-aivent-muted`,children:[`files: `,e.map(e=>e.name).join(`, `)||`(none)`]})]})})}return(0,s.jsx)(e,{})}},u={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(`div`,{className:`max-w-xl`,children:(0,s.jsx)(a,{disabled:!0})})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [files, setFiles] = React.useState<File[]>([]);
      return <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="max-w-xl space-y-4">
            <Upload onDrop={setFiles} />
            <div className="text-xs text-aivent-muted">files: {files.map(f => f.name).join(', ') || '(none)'}</div>
          </div>
        </div>;
    }
    return <Demo />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="max-w-xl">
        <Upload disabled />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Basic`,`Disabled`]}))();export{l as Basic,u as Disabled,d as __namedExportsOrder,c as default};