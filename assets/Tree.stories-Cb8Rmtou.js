import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./Tree-CZPJj6FQ.js";var o,s,c,l,u,d,f,p;t((()=>{o=e(n(),1),i(),s=r(),c={title:`Data/Tree`,component:a,args:{showSearch:!0}},l=[{key:`1`,title:`Applications`,children:[{key:`1-1`,title:`Calendar`},{key:`1-2`,title:`Chrome`},{key:`1-3`,title:`Webstorm`}]},{key:`2`,title:`Documents`,children:[{key:`2-1`,title:`Material UI`},{key:`2-2`,title:`React`}]}],u={args:{data:l,defaultExpandedKeys:[`1`]},render:e=>(0,s.jsx)(`div`,{className:`max-w-md bg-aivent-bg p-6 text-aivent-fg`,children:(0,s.jsx)(a,{...e})})},d={render:()=>{function e(){let[e,t]=o.useState(`react`);return(0,s.jsxs)(`div`,{className:`max-w-md bg-aivent-bg p-6 text-aivent-fg`,children:[(0,s.jsx)(a,{data:l,showSearch:!0,searchValue:e,onSearchValueChange:t,defaultExpandedKeys:[`1`]}),(0,s.jsxs)(`div`,{className:`mt-2 text-xs text-aivent-muted`,children:[`searchValue: `,e]})]})}return(0,s.jsx)(e,{})}},f={render:()=>{let e=[{key:`p`,title:`Lazy parent`}];function t(){let[t,n]=o.useState(e);return(0,s.jsx)(`div`,{className:`max-w-md bg-aivent-bg p-6 text-aivent-fg`,children:(0,s.jsx)(a,{data:t,defaultExpandedKeys:[],loadData:async e=>{await new Promise(e=>setTimeout(e,800));let t=[{key:`${e.key}-1`,title:`Loaded child 1`},{key:`${e.key}-2`,title:`Loaded child 2`}];return n(n=>n.map(n=>n.key===e.key?{...n,children:t}:n)),t}})})}return(0,s.jsx)(t,{})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: demoData,
    defaultExpandedKeys: ['1']
  },
  render: args => <div className="max-w-md bg-aivent-bg p-6 text-aivent-fg">{<Tree {...args} />}</div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [sv, setSv] = React.useState('react');
      return <div className="max-w-md bg-aivent-bg p-6 text-aivent-fg">
          <Tree data={demoData} showSearch searchValue={sv} onSearchValueChange={setSv} defaultExpandedKeys={['1']} />
          <div className="mt-2 text-xs text-aivent-muted">searchValue: {sv}</div>
        </div>;
    }
    return <Demo />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const initial: TreeNode[] = [{
      key: 'p',
      title: 'Lazy parent'
    }];
    function Demo() {
      const [data, setData] = React.useState<TreeNode[]>(initial);
      return <div className="max-w-md bg-aivent-bg p-6 text-aivent-fg">
          <Tree data={data} defaultExpandedKeys={[]} loadData={async node => {
          await new Promise(r => setTimeout(r, 800));
          const children: TreeNode[] = [{
            key: \`\${node.key}-1\`,
            title: 'Loaded child 1'
          }, {
            key: \`\${node.key}-2\`,
            title: 'Loaded child 2'
          }];
          // 也可通过返回值写入 children；这里同时演示外部 data 变化也能同步渲染
          setData(prev => prev.map(n => n.key === node.key ? {
            ...n,
            children
          } : n));
          return children;
        }} />
        </div>;
    }
    return <Demo />;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Search`,`AsyncLoad`]}))();export{f as AsyncLoad,u as Default,d as Search,p as __namedExportsOrder,c as default};