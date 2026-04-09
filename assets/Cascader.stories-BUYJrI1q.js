import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./react-dom-yG66feid.js";import{n as a,t as o}from"./cn-By5PeHD1.js";function s({value:e,defaultValue:t,onChange:n}){let[r,i]=m.useState(t),a=e!==void 0;return[a?e:r,m.useCallback(e=>{a||i(e),n?.(e)},[a,n])]}function c(e,t){let n=e.trim().toLowerCase();return n?t.map(e=>{let t=e.label;return typeof t==`string`?t:typeof t==`number`?String(t):e.value}).join(` / `).toLowerCase().includes(n):!0}function l(e){return e.find(e=>!e.disabled)}function u(e,t){let n=[],r=e;for(let e of t){let t=r.find(t=>t.value===e);if(!t)break;n.push(t),r=t.children??[]}return n}function ee(e,t){let n=[e],r=e;for(let e=0;e<t.length;e++){let i=t[e],a=r.find(e=>e.value===i);if(!a)break;if(a.children&&a.children.length>0)n.push(a.children),r=a.children;else break}return n}function d(e){return e.map(e=>{let t=e.label;return typeof t==`string`||typeof t==`number`?String(t):e.value}).join(` / `)}function f(e,t,n){let r=[],i=(e,a)=>{for(let o of e){let e=[...a,o];t(n,e)&&r.push({values:e.map(e=>e.value),path:e,text:d(e)}),o.children&&o.children.length&&i(o.children,e)}};return i(e,[]),r}function p({options:e,value:t,defaultValue:n,onChange:r,placeholder:i=`请选择`,disabled:a=!1,showSearch:p=!1,searchValue:_,defaultSearchValue:v,onSearchValueChange:y,filterOption:b=c,loadData:x,className:S,...C}){let w=t!==void 0,[T,E]=m.useState(n??[]),D=w?t:T,[O,k]=m.useState(!1),[A,j]=m.useState(0),[M,N]=m.useState(e),[P,te]=s({value:_,defaultValue:v??``,onChange:y}),[F,I]=m.useState(0),L=m.useRef(null),R=m.useRef(null),z=m.useRef(null),[B,V]=m.useState([]),[H,U]=m.useState(0);m.useEffect(()=>{N(e)},[e]),m.useEffect(()=>{if(!O)return;let e=e=>{let t=e.target;L.current?.contains(t)||R.current?.contains(t)||k(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[O]);let W=m.useMemo(()=>u(M,D),[M,A,D]),G=W.length?d(W):null,K=m.useMemo(()=>ee(M,B),[B,M,A]),q=p&&P.trim().length>0,J=m.useMemo(()=>q?f(M,b,P):[],[b,M,q,P]);m.useEffect(()=>{q&&I(0)},[q,P]);let Y=m.useCallback(e=>{w||E(e.values),r?.(e.values,e.path),k(!1),L.current?.focus()},[w,r]),X=m.useCallback((e,t)=>{let n=R.current;if(!n)return;let r=t?`[data-cascader-option="true"][data-depth="${e}"][data-value="${CSS.escape(t)}"]`:`[data-cascader-option="true"][data-depth="${e}"]:not([data-disabled="true"])`;n.querySelector(r)?.focus()},[]);m.useEffect(()=>{O&&(U(0),V(e=>{if(e.length)return e;if(D.length)return D;let t=l(M);return t?[t.value]:[]}),queueMicrotask(()=>{if(p){z.current?.focus();return}X(0,D.length?D[0]:l(M)?.value)}))},[X,M,O,D,p]);let Z=m.useCallback(async e=>{if(!x)return;let t=e[e.length-1];if(t&&!t.children?.length&&t.isLeaf!==!0){t.loading=!0,j(e=>e+1);try{await x(e)}finally{t.loading=!1,N(e=>[...e]),j(e=>e+1)}}},[x]),Q=m.useCallback(async(e,t,{focusNext:n})=>{if(t.disabled)return;V(n=>{let r=n.slice(0,e);return r[e]=t.value,r});let r=u(M,(()=>{let n=B.slice(0,e);return n[e]=t.value,n})()),i=!!t.children?.length,a=!!x&&!i&&t.isLeaf!==!0;if(t.isLeaf===!0||!i&&!a){Y({values:r.map(e=>e.value),path:r});return}a&&await Z(r);let o=l(r[r.length-1]?.children??[]);o&&(V(n=>{let r=n.slice(0,e+1);return r[e]=t.value,r[e+1]=o.value,r}),n&&(U(e+1),queueMicrotask(()=>X(e+1,o.value))))},[B,Y,Z,X,M,x]),$=m.useCallback(async e=>{if(e.key===`Escape`){e.preventDefault(),k(!1),L.current?.focus();return}if(q){if(e.key===`ArrowDown`){e.preventDefault(),I(e=>Math.min(J.length-1,e+1));return}if(e.key===`ArrowUp`){e.preventDefault(),I(e=>Math.max(0,e-1));return}if(e.key===`Enter`){let t=J[F];t&&(e.preventDefault(),Y({values:t.values,path:t.path}));return}return}let t=Math.max(0,Math.min(H,K.length-1)),n=K[t]??[];if(!n.length)return;let r=B[t]??l(n)?.value,i=r?n.findIndex(e=>e.value===r):-1;i<0&&(i=n.findIndex(e=>!e.disabled));let a=n[i];if(!a)return;let o=(e,t)=>{let r=e;for(;;){if(r+=t,r<0||r>=n.length)return e;if(!n[r].disabled)return r}};if(e.key===`ArrowDown`){e.preventDefault();let r=n[o(i,1)];r&&(V(e=>{let n=e.slice(0,t);return n[t]=r.value,n}),queueMicrotask(()=>X(t,r.value)));return}if(e.key===`ArrowUp`){e.preventDefault();let r=n[o(i,-1)];r&&(V(e=>{let n=e.slice(0,t);return n[t]=r.value,n}),queueMicrotask(()=>X(t,r.value)));return}if(e.key===`ArrowLeft`){e.preventDefault(),t>0&&(U(t-1),V(e=>e.slice(0,t)),queueMicrotask(()=>X(t-1,B[t-1])));return}if(e.key===`ArrowRight`||e.key===`Enter`){e.preventDefault(),await Q(t,a,{focusNext:!0});return}},[Q,B,K,Y,H,X,q,F,J]),ne=O?(0,g.jsxs)(`div`,{ref:R,className:o(`z-50 mt-2 min-w-72 overflow-hidden rounded-xl2 border border-aivent-border bg-aivent-panel text-sm text-aivent-text shadow-glow outline-none`,`focus-visible:ring-2 focus-visible:ring-white/20`),onKeyDown:$,children:[p?(0,g.jsx)(`div`,{className:`border-b border-aivent-border p-2`,children:(0,g.jsx)(`input`,{ref:z,value:P,onChange:e=>te(e.target.value),className:o(`h-9 w-full rounded-lg border border-aivent-border bg-transparent px-3 text-sm outline-none`,`focus-visible:ring-2 focus-visible:ring-white/20`),placeholder:`搜索`,"aria-label":`搜索`,onKeyDown:$})}):null,q?(0,g.jsx)(`div`,{role:`listbox`,"aria-label":`Cascader search results`,className:`max-h-72 overflow-auto p-1`,children:J.length?J.map((e,t)=>(0,g.jsx)(`button`,{type:`button`,role:`option`,"aria-selected":t===F,tabIndex:-1,className:o(`flex w-full cursor-default select-none items-center rounded-lg px-3 py-2 text-left outline-none transition`,t===F?`bg-white/10 text-white`:`hover:bg-white/5`),onMouseEnter:()=>I(t),onClick:()=>Y({values:e.values,path:e.path}),children:(0,g.jsx)(`span`,{className:`truncate`,children:e.text})},e.values.join(`>`))):(0,g.jsx)(`div`,{className:`px-3 py-2 text-aivent-muted`,children:`无匹配项`})}):(0,g.jsx)(`div`,{className:`flex max-h-72 min-w-72 overflow-auto`,children:K.map((e,t)=>(0,g.jsx)(`div`,{role:`listbox`,"aria-label":`Cascader column ${t+1}`,className:o(`min-w-44 border-r border-aivent-border p-1 last:border-r-0`),children:e.map(e=>{let n=B[t]===e.value,r=!!e.children?.length,i=!!x&&!r&&e.isLeaf!==!0,a=r||i;return(0,g.jsxs)(`button`,{type:`button`,role:`option`,"aria-selected":n,"aria-disabled":e.disabled||void 0,tabIndex:-1,"data-cascader-option":`true`,"data-depth":t,"data-value":e.value,"data-disabled":e.disabled?`true`:`false`,disabled:e.disabled,className:o(`flex w-full cursor-default select-none items-center justify-between gap-3 rounded-lg px-3 py-2 text-left outline-none transition`,n?`bg-white/10 text-white`:`hover:bg-white/5`,e.disabled?`opacity-40`:``),onMouseEnter:()=>{e.disabled||V(n=>{let r=n.slice(0,t);return r[t]=e.value,r})},onClick:async()=>{await Q(t,e,{focusNext:!0})},children:[(0,g.jsx)(`span`,{className:`truncate`,children:e.label}),e.loading?(0,g.jsx)(`span`,{"aria-hidden":`true`,className:`ml-2 text-white/70`,children:`…`}):a?(0,g.jsx)(`span`,{"aria-hidden":`true`,className:`ml-2 text-white/60`,children:`▸`}):null]},e.value)})},t))})]}):null;return(0,g.jsxs)(`div`,{className:o(`inline-flex`,S),...C,children:[(0,g.jsxs)(`button`,{ref:L,type:`button`,"aria-haspopup":`listbox`,"aria-expanded":O,"aria-disabled":a||void 0,disabled:a,className:o(`inline-flex min-w-44 items-center justify-between gap-3 rounded-lg border border-aivent-border bg-aivent-panel px-3.5 py-2 text-sm text-aivent-text outline-none transition`,`focus-visible:ring-2 focus-visible:ring-white/20`,a?`opacity-50`:`hover:bg-white/5`),onClick:()=>{a||k(e=>{let t=!e;return t&&V([]),t})},onKeyDown:e=>{a||((e.key===`Enter`||e.key===` `)&&(e.preventDefault(),k(!0)),e.key===`ArrowDown`&&(e.preventDefault(),k(!0)))},children:[(0,g.jsx)(`span`,{className:o(`truncate text-left`,G?`text-aivent-text`:`text-aivent-muted`),children:G??i}),(0,g.jsx)(`span`,{"aria-hidden":`true`,className:`text-white/60`,children:`▾`})]}),O?(0,h.createPortal)(ne,document.body):null]})}var m,h,g,_=t((()=>{m=e(n(),1),h=e(i(),1),a(),g=r(),p.__docgenInfo={description:``,methods:[],displayName:`Cascader`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string
  label: React.ReactNode
  disabled?: boolean
  /** 显式标记为叶子节点（没有下一列） */
  isLeaf?: boolean
  /** 子节点（若为空且 isLeaf !== true，可通过 loadData 异步加载） */
  children?: CascaderOption[]
  /** 异步加载时用于展示 loading */
  loading?: boolean
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}},{key:`isLeaf`,value:{name:`boolean`,required:!1},description:`显式标记为叶子节点（没有下一列）`},{key:`children`,value:{name:`Array`,elements:[{name:`CascaderOption`}],raw:`CascaderOption[]`,required:!1},description:`子节点（若为空且 isLeaf !== true，可通过 loadData 异步加载）`},{key:`loading`,value:{name:`boolean`,required:!1},description:`异步加载时用于展示 loading`}]}}],raw:`CascaderOption[]`},description:``},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[], selectedOptions: CascaderOption[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`},{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string
  label: React.ReactNode
  disabled?: boolean
  /** 显式标记为叶子节点（没有下一列） */
  isLeaf?: boolean
  /** 子节点（若为空且 isLeaf !== true，可通过 loadData 异步加载） */
  children?: CascaderOption[]
  /** 异步加载时用于展示 loading */
  loading?: boolean
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}},{key:`isLeaf`,value:{name:`boolean`,required:!1},description:`显式标记为叶子节点（没有下一列）`},{key:`children`,value:{name:`Array`,elements:[{name:`CascaderOption`}],raw:`CascaderOption[]`,required:!1},description:`子节点（若为空且 isLeaf !== true，可通过 loadData 异步加载）`},{key:`loading`,value:{name:`boolean`,required:!1},description:`异步加载时用于展示 loading`}]}}],raw:`CascaderOption[]`},name:`selectedOptions`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``,defaultValue:{value:`'请选择'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},showSearch:{required:!1,tsType:{name:`boolean`},description:`显示搜索输入框（仅支持基础字符串过滤）`,defaultValue:{value:`false`,computed:!1}},searchValue:{required:!1,tsType:{name:`string`},description:``},defaultSearchValue:{required:!1,tsType:{name:`string`},description:``},onSearchValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(v: string) => void`,signature:{arguments:[{type:{name:`string`},name:`v`}],return:{name:`void`}}},description:``},filterOption:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(inputValue: string, path: CascaderOption[]) => boolean`,signature:{arguments:[{type:{name:`string`},name:`inputValue`},{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string
  label: React.ReactNode
  disabled?: boolean
  /** 显式标记为叶子节点（没有下一列） */
  isLeaf?: boolean
  /** 子节点（若为空且 isLeaf !== true，可通过 loadData 异步加载） */
  children?: CascaderOption[]
  /** 异步加载时用于展示 loading */
  loading?: boolean
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}},{key:`isLeaf`,value:{name:`boolean`,required:!1},description:`显式标记为叶子节点（没有下一列）`},{key:`children`,value:{name:`Array`,elements:[{name:`CascaderOption`}],raw:`CascaderOption[]`,required:!1},description:`子节点（若为空且 isLeaf !== true，可通过 loadData 异步加载）`},{key:`loading`,value:{name:`boolean`,required:!1},description:`异步加载时用于展示 loading`}]}}],raw:`CascaderOption[]`},name:`path`}],return:{name:`boolean`}}},description:``,defaultValue:{value:`function defaultFilterOption(inputValue: string, path: CascaderOption[]) {
  const needle = inputValue.trim().toLowerCase()
  if (!needle) return true
  const text = path
    .map((o) => {
      const v = o.label
      if (typeof v === 'string') return v
      if (typeof v === 'number') return String(v)
      return o.value
    })
    .join(' / ')
    .toLowerCase()
  return text.includes(needle)
}`,computed:!1}},loadData:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selectedOptions: CascaderOption[]) => void | Promise<void>`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string
  label: React.ReactNode
  disabled?: boolean
  /** 显式标记为叶子节点（没有下一列） */
  isLeaf?: boolean
  /** 子节点（若为空且 isLeaf !== true，可通过 loadData 异步加载） */
  children?: CascaderOption[]
  /** 异步加载时用于展示 loading */
  loading?: boolean
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}},{key:`isLeaf`,value:{name:`boolean`,required:!1},description:`显式标记为叶子节点（没有下一列）`},{key:`children`,value:{name:`Array`,elements:[{name:`CascaderOption`}],raw:`CascaderOption[]`,required:!1},description:`子节点（若为空且 isLeaf !== true，可通过 loadData 异步加载）`},{key:`loading`,value:{name:`boolean`,required:!1},description:`异步加载时用于展示 loading`}]}}],raw:`CascaderOption[]`},name:`selectedOptions`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`异步加载下一列：通常在 selectedOptions 最末级上补齐 children`}}}})),v,y,b,x,S,C,w,T;t((()=>{v=e(n(),1),_(),y=r(),b={title:`Data/Cascader`},x=[{label:`浙江`,value:`zj`,children:[{label:`杭州`,value:`hz`,children:[{label:`西湖`,value:`xihu`},{label:`余杭`,value:`yuhang`}]},{label:`宁波`,value:`nb`,children:[{label:`海曙`,value:`haishu`}]}]},{label:`江苏`,value:`js`,children:[{label:`南京`,value:`nj`},{label:`苏州`,value:`sz`}]}],S={render:()=>(0,y.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,y.jsx)(p,{options:x,placeholder:`请选择`})})},C={render:()=>(0,y.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,y.jsx)(p,{options:x,showSearch:!0,placeholder:`可搜索：西湖 / 苏州`})})},w={render:()=>{let[e,t]=v.useState([{label:`浙江`,value:`zj`,isLeaf:!1},{label:`江苏`,value:`js`,isLeaf:!1}]);return(0,y.jsx)(`div`,{className:`bg-aivent-bg p-16 text-aivent-text`,children:(0,y.jsx)(p,{options:e,placeholder:`异步加载下一列`,loadData:async e=>{await new Promise(e=>setTimeout(e,300));let n=e[e.length-1];n&&(n.children=[{label:`${n.label} - 子项 A`,value:`${n.value}-a`},{label:`${n.label} - 子项 B`,value:`${n.value}-b`}],t(e=>[...e]))}})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Cascader options={options} placeholder="请选择" />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-16 text-aivent-text">
      <Cascader options={options} showSearch placeholder="可搜索：西湖 / 苏州" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
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
          label: \`\${last.label as string} - 子项 A\`,
          value: \`\${last.value}-a\`
        }, {
          label: \`\${last.label as string} - 子项 B\`,
          value: \`\${last.value}-b\`
        }];
        // 为了触发重渲染，创建新数组（也兼容原地 mutation 场景）
        setOpts(prev => [...prev]);
      }} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Basic`,`Search`,`AsyncLoad`]}))();export{w as AsyncLoad,S as Basic,C as Search,T as __namedExportsOrder,b as default};