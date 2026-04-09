import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./Cascader-2IGHdgLK.js";var o,s,c,l,u,d,f,p;t((()=>{o=e(n(),1),i(),s=r(),c={title:`Data/Cascader`},l=[{label:`浙江`,value:`zj`,children:[{label:`杭州`,value:`hz`,children:[{label:`西湖`,value:`xihu`},{label:`余杭`,value:`yuhang`}]},{label:`宁波`,value:`nb`,children:[{label:`海曙`,value:`haishu`}]}]},{label:`江苏`,value:`js`,children:[{label:`南京`,value:`nj`},{label:`苏州`,value:`sz`}]}],u={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{options:l,placeholder:`请选择`})})},d={render:()=>(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{options:l,showSearch:!0,placeholder:`可搜索：西湖 / 苏州`})})},f={render:()=>{function e(){let[e,t]=o.useState([{label:`浙江`,value:`zj`,isLeaf:!1},{label:`江苏`,value:`js`,isLeaf:!1}]);return(0,s.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,s.jsx)(a,{options:e,placeholder:`异步加载下一列`,loadData:async e=>{await new Promise(e=>setTimeout(e,300));let n=e[e.length-1];n&&(n.children=[{label:`${String(n.label)} - 子项 A`,value:`${n.value}-a`},{label:`${String(n.label)} - 子项 B`,value:`${n.value}-b`}],t(e=>[...e]))}})})}return(0,s.jsx)(e,{})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Cascader options={options} placeholder="请选择" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Cascader options={options} showSearch placeholder="可搜索：西湖 / 苏州" />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [opts, setOpts] = React.useState<CascaderOption[]>([{
        label: '浙江',
        value: 'zj',
        isLeaf: false
      }, {
        label: '江苏',
        value: 'js',
        isLeaf: false
      }]);
      return <div className="bg-aivent-bg p-16 text-aivent-text">
          <Cascader options={opts} placeholder="异步加载下一列" loadData={async selected => {
          await new Promise(r => setTimeout(r, 300));
          const last = selected[selected.length - 1];
          if (!last) return;
          last.children = [{
            label: \`\${String(last.label)} - 子项 A\`,
            value: \`\${last.value}-a\`
          }, {
            label: \`\${String(last.label)} - 子项 B\`,
            value: \`\${last.value}-b\`
          }];
          // 为了触发重渲染，创建新数组（也兼容原地 mutation 场景）
          setOpts(prev => [...prev]);
        }} />
        </div>;
    }
    return <Demo />;
  }
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`Search`,`AsyncLoad`]}))();export{f as AsyncLoad,u as Basic,d as Search,p as __namedExportsOrder,c as default};