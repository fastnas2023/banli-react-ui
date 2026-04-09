import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./cn-By5PeHD1.js";import{n as o,t as s}from"./Spinner-BDY9axWt.js";import{n as c,t as l}from"./Input-98QYAOYW.js";function u(e,t,n){let[r,i]=_.useState(t),a=e!==void 0;return[a?e:r,_.useCallback(t=>{if(!a){i(e=>{let r=typeof t==`function`?t(e):t;return n?.(r),r});return}let r=typeof t==`function`?t(e):t;n?.(r)},[e,a,n])]}function d(e){return typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(d).join(``):_.isValidElement(e)?d(e.props?.children):``}function f(e,t){return d(t.title).toLowerCase().includes(e.toLowerCase())}function p(e,t,n){return e.map(e=>e.key===t?{...e,children:n}:e.children?{...e,children:p(e.children,t,n)}:e)}function m(e){return Array.isArray(e.children)&&e.children.length>0}function h(e,t){return e.isLeaf?!1:m(e)||!!t}function g({data:e,className:t,showSearch:n=!1,searchValue:r,defaultSearchValue:i,onSearchValueChange:o,filterOption:c,loadData:g,loadingKeys:y,defaultLoadingKeys:b,onLoadingKeysChange:x,expandedKeys:S,defaultExpandedKeys:C,onExpandedKeysChange:w,selectedKey:T,defaultSelectedKey:E,onSelectedKeyChange:D}){let[O,k]=_.useState(e);_.useEffect(()=>k(e),[e]);let[A,j]=u(r,i??``,o),[M,N]=u(S,C??[],w),[P,F]=u(y,b??[],x),[I,L]=u(T,E,D),R=_.useRef(new Set),z=_.useRef(new Map),B=c??f,{filteredData:V,autoExpandKeys:H}=_.useMemo(()=>{let e=A.trim();if(!e)return{filteredData:O,autoExpandKeys:new Set};let t=new Set;function n(r){let i=[];for(let a of r){let r=B(e,a),o=a.children?n(a.children):void 0;if(r){i.push({...a,children:o??a.children});continue}o&&o.length>0&&(t.add(a.key),i.push({...a,children:o}))}return i}return{filteredData:n(O),autoExpandKeys:t}},[B,O,A]),U=_.useMemo(()=>new Set(M),[M]),W=_.useMemo(()=>{if(!A.trim())return U;let e=new Set(U);for(let t of H)e.add(t);return e},[H,U,A]),G=_.useMemo(()=>new Set(P),[P]),K=_.useMemo(()=>{let e=[];function t(n,r,i){for(let a of n)e.push({key:a.key,node:a,level:r,parentKey:i}),W.has(a.key)&&a.children&&a.children.length>0&&t(a.children,r+1,a.key)}return t(V,1,void 0),e},[W,V]),q=_.useMemo(()=>{let e=new Map;for(let t of K)e.set(t.key,t);return e},[K]),J=_.useRef(new Map),[Y,X]=_.useState(K[0]?.key);_.useEffect(()=>{Y&&q.has(Y)||X(K[0]?.key)},[Y,K,q]);let Z=_.useCallback(e=>{X(e),queueMicrotask(()=>{J.current.get(e)?.focus()})},[X]),Q=_.useCallback(async(e,t)=>{let n=q.get(e);if(!n||!h(n.node,g))return;let r=U.has(e),i=t??!r;if(N(i?Array.from(new Set([...M,e])):M.filter(t=>t!==e)),!i||!g||n.node.isLeaf||m(n.node)||R.current.has(e)||z.current.has(e))return;F(Array.from(new Set([...P,e])));let a=(async()=>{try{let t=await g(n.node);R.current.add(e),Array.isArray(t)&&k(n=>p(n,e,t))}finally{z.current.delete(e),F(t=>t.filter(t=>t!==e))}})();z.current.set(e,a)},[U,g,M,P,q,N,F]),$=_.useCallback(async(e,t)=>{let n=K.findIndex(e=>e.key===t);if(n<0)return;let r=K[n];switch(e.key){case`ArrowDown`:{e.preventDefault();let t=K[n+1];t&&Z(t.key);return}case`ArrowUp`:{e.preventDefault();let t=K[n-1];t&&Z(t.key);return}case`ArrowRight`:{if(e.preventDefault(),!h(r.node,g))return;if(!W.has(t)){await Q(t,!0);return}let i=K[n+1];i&&i.parentKey===t&&Z(i.key);return}case`ArrowLeft`:if(e.preventDefault(),W.has(t)&&h(r.node,g)){await Q(t,!1);return}r.parentKey&&Z(r.parentKey);return;case`Enter`:case` `:e.preventDefault(),h(r.node,g)?await Q(t):L(t);return}},[W,K,Z,g,L,Q]);return(0,v.jsxs)(`div`,{className:a(`grid gap-2`,t),children:[n?(0,v.jsx)(l,{"aria-label":`tree search`,placeholder:`Search`,value:A,onChange:e=>j(e.target.value)}):null,(0,v.jsx)(`div`,{role:`tree`,"aria-label":`tree`,className:`grid gap-1`,children:K.length===0?(0,v.jsx)(`div`,{className:`text-sm text-aivent-muted`,children:`No data`}):K.map(({key:e,node:t,level:n})=>{let r=W.has(e),i=h(t,g),o=I===e,c=G.has(e);return(0,v.jsxs)(`div`,{ref:t=>{J.current.set(e,t)},role:`treeitem`,"aria-label":d(t.title)||void 0,"aria-level":n,"aria-expanded":i?r:void 0,"aria-selected":o,tabIndex:Y===e?0:-1,"data-tree-key":e,onFocus:()=>X(e),onKeyDown:t=>$(t,e),onClick:()=>{t.disabled||(Z(e),L(e))},className:a(`flex items-center gap-2 rounded-md px-2 py-1 text-sm outline-none`,`focus-visible:ring-2 focus-visible:ring-aivent-primary/60`,t.disabled?`cursor-not-allowed opacity-60`:`cursor-default`,o?`bg-aivent-primary/10`:`hover:bg-aivent-primary/5`),style:{paddingLeft:(n-1)*16+8},children:[i?(0,v.jsx)(`button`,{type:`button`,tabIndex:-1,"aria-label":r?`Collapse`:`Expand`,disabled:t.disabled,onClick:async t=>{t.stopPropagation(),await Q(e)},className:a(`inline-flex h-5 w-5 items-center justify-center rounded text-aivent-muted hover:bg-aivent-primary/10`),children:c?(0,v.jsx)(s,{size:`sm`,variant:`muted`,label:`Loading children`}):(0,v.jsx)(`span`,{"aria-hidden":`true`,children:r?`▾`:`▸`})}):(0,v.jsx)(`span`,{"aria-hidden":`true`,className:`inline-flex h-5 w-5 items-center justify-center opacity-0`,children:`▸`}),(0,v.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:t.title})]},e)})})]})}var _,v,y=t((()=>{_=e(n(),1),i(),c(),o(),v=r(),g.__docgenInfo={description:``,methods:[],displayName:`Tree`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  key: string
  title: React.ReactNode
  children?: TreeNode[]
  /**
   * 显式标记为叶子节点（即使 loadData 存在，也不会尝试异步加载）。
   */
  isLeaf?: boolean
  disabled?: boolean
}`,signature:{properties:[{key:`key`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`children`,value:{name:`Array`,elements:[{name:`TreeNode`}],raw:`TreeNode[]`,required:!1}},{key:`isLeaf`,value:{name:`boolean`,required:!1},description:`显式标记为叶子节点（即使 loadData 存在，也不会尝试异步加载）。`},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`TreeNode[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},showSearch:{required:!1,tsType:{name:`boolean`},description:`是否渲染搜索框（否则仅支持通过传入 searchValue/defaultSearchValue 来过滤）。`,defaultValue:{value:`false`,computed:!1}},searchValue:{required:!1,tsType:{name:`string`},description:``},defaultSearchValue:{required:!1,tsType:{name:`string`},description:``},onSearchValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: string) => void`,signature:{arguments:[{type:{name:`string`},name:`next`}],return:{name:`void`}}},description:``},filterOption:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(searchValue: string, node: TreeNode) => boolean`,signature:{arguments:[{type:{name:`string`},name:`searchValue`},{type:{name:`signature`,type:`object`,raw:`{
  key: string
  title: React.ReactNode
  children?: TreeNode[]
  /**
   * 显式标记为叶子节点（即使 loadData 存在，也不会尝试异步加载）。
   */
  isLeaf?: boolean
  disabled?: boolean
}`,signature:{properties:[{key:`key`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`children`,value:{name:`Array`,elements:[{name:`TreeNode`}],raw:`TreeNode[]`,required:!1}},{key:`isLeaf`,value:{name:`boolean`,required:!1},description:`显式标记为叶子节点（即使 loadData 存在，也不会尝试异步加载）。`},{key:`disabled`,value:{name:`boolean`,required:!1}}]}},name:`node`}],return:{name:`boolean`}}},description:``},loadData:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(node: TreeNode) => Promise<TreeNode[] | void>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  key: string
  title: React.ReactNode
  children?: TreeNode[]
  /**
   * 显式标记为叶子节点（即使 loadData 存在，也不会尝试异步加载）。
   */
  isLeaf?: boolean
  disabled?: boolean
}`,signature:{properties:[{key:`key`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`children`,value:{name:`Array`,elements:[{name:`TreeNode`}],raw:`TreeNode[]`,required:!1}},{key:`isLeaf`,value:{name:`boolean`,required:!1},description:`显式标记为叶子节点（即使 loadData 存在，也不会尝试异步加载）。`},{key:`disabled`,value:{name:`boolean`,required:!1}}]}},name:`node`}],return:{name:`Promise`,elements:[{name:`union`,raw:`TreeNode[] | void`,elements:[{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  key: string
  title: React.ReactNode
  children?: TreeNode[]
  /**
   * 显式标记为叶子节点（即使 loadData 存在，也不会尝试异步加载）。
   */
  isLeaf?: boolean
  disabled?: boolean
}`,signature:{properties:[{key:`key`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`children`,value:{name:`Array`,elements:[{name:`TreeNode`}],raw:`TreeNode[]`,required:!1}},{key:`isLeaf`,value:{name:`boolean`,required:!1},description:`显式标记为叶子节点（即使 loadData 存在，也不会尝试异步加载）。`},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`TreeNode[]`},{name:`void`}]}],raw:`Promise<TreeNode[] | void>`}}},description:`异步加载子节点：在展开且节点未加载时调用。
- 若 resolve 返回 TreeNode[]，会被写入到该节点的 children 中并触发渲染
- 若 resolve 返回 void，视为“已加载但无子节点”，不会重复调用`},loadingKeys:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`受控/非受控：加载中的 key 列表（用于展示 loading 指示）。`},defaultLoadingKeys:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},onLoadingKeysChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`next`}],return:{name:`void`}}},description:``},expandedKeys:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`展开状态（用于键盘左右键与异步加载）。`},defaultExpandedKeys:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},onExpandedKeysChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`next`}],return:{name:`void`}}},description:``},selectedKey:{required:!1,tsType:{name:`string`},description:`单选选中（用于 aria-selected）。`},defaultSelectedKey:{required:!1,tsType:{name:`string`},description:``},onSelectedKeyChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next?: string) => void`,signature:{arguments:[{type:{name:`string`},name:`next`}],return:{name:`void`}}},description:``}}}})),b,x,S,C,w,T,E,D;t((()=>{b=e(n(),1),y(),x=r(),S={title:`Data/Tree`,component:g,args:{showSearch:!0}},C=[{key:`1`,title:`Applications`,children:[{key:`1-1`,title:`Calendar`},{key:`1-2`,title:`Chrome`},{key:`1-3`,title:`Webstorm`}]},{key:`2`,title:`Documents`,children:[{key:`2-1`,title:`Material UI`},{key:`2-2`,title:`React`}]}],w={args:{data:C,defaultExpandedKeys:[`1`]},render:e=>(0,x.jsx)(`div`,{className:`max-w-md bg-aivent-bg p-6 text-aivent-fg`,children:(0,x.jsx)(g,{...e})})},T={render:()=>{function e(){let[e,t]=b.useState(`react`);return(0,x.jsxs)(`div`,{className:`max-w-md bg-aivent-bg p-6 text-aivent-fg`,children:[(0,x.jsx)(g,{data:C,showSearch:!0,searchValue:e,onSearchValueChange:t,defaultExpandedKeys:[`1`]}),(0,x.jsxs)(`div`,{className:`mt-2 text-xs text-aivent-muted`,children:[`searchValue: `,e]})]})}return(0,x.jsx)(e,{})}},E={render:()=>{let e=[{key:`p`,title:`Lazy parent`}];function t(){let[t,n]=b.useState(e);return(0,x.jsx)(`div`,{className:`max-w-md bg-aivent-bg p-6 text-aivent-fg`,children:(0,x.jsx)(g,{data:t,defaultExpandedKeys:[],loadData:async e=>{await new Promise(e=>setTimeout(e,800));let t=[{key:`${e.key}-1`,title:`Loaded child 1`},{key:`${e.key}-2`,title:`Loaded child 2`}];return n(n=>n.map(n=>n.key===e.key?{...n,children:t}:n)),t}})})}return(0,x.jsx)(t,{})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: demoData,
    defaultExpandedKeys: ['1']
  },
  render: args => <div className="max-w-md bg-aivent-bg p-6 text-aivent-fg">{<Tree {...args} />}</div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Search`,`AsyncLoad`]}))();export{E as AsyncLoad,w as Default,T as Search,D as __namedExportsOrder,S as default};