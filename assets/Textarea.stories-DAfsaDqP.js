import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./cn-By5PeHD1.js";var o,s,c,l=t((()=>{o=e(n(),1),i(),s=r(),c=o.forwardRef(({className:e,size:t=`md`,disabled:n,loading:r,invalid:i,"aria-invalid":o,...c},l)=>{let u=!!(n||r),d=!!(i||o);return(0,s.jsx)(`textarea`,{ref:l,disabled:u,"aria-busy":r||void 0,"aria-invalid":d||void 0,"data-loading":r?``:void 0,"data-invalid":d?``:void 0,className:a(`w-full rounded-lg border bg-black/20 text-white outline-none transition placeholder:text-white/30 focus-visible:ring-2 focus-visible:ring-aivent-secondary/60 disabled:pointer-events-none disabled:opacity-50`,{sm:`min-h-[96px] px-3 py-2 text-sm`,md:`min-h-[140px] px-3 py-3 text-sm`,lg:`min-h-[180px] px-4 py-3 text-base`}[t],d?`border-red-500/70 focus:border-red-500`:`border-aivent-border focus:border-aivent-secondary/70`,r?`cursor-wait`:``,e),...c})}),c.displayName=`Textarea`,c.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``},invalid:{required:!1,tsType:{name:`boolean`},description:``}}}})),u,d,f,p,m,h,g,_,v,y;t((()=>{u=e(n(),1),l(),d=r(),f={title:`Primitives/Textarea`,component:c,args:{placeholder:`Your message`,defaultValue:``}},p={},m={args:{defaultValue:`disabled`,disabled:!0}},h={args:{defaultValue:`loading...`,loading:!0}},g={args:{defaultValue:`bad message`,invalid:!0}},_={render:()=>(0,d.jsxs)(`div`,{className:`grid gap-3 bg-aivent-bg p-6`,children:[(0,d.jsx)(c,{size:`sm`,placeholder:`Small`}),(0,d.jsx)(c,{size:`md`,placeholder:`Medium`}),(0,d.jsx)(c,{size:`lg`,placeholder:`Large`})]})},v={render:()=>{function e(){let[e,t]=u.useState(`hello`);return(0,d.jsxs)(`div`,{className:`grid gap-2 bg-aivent-bg p-6`,children:[(0,d.jsx)(c,{"aria-label":`controlled`,value:e,onChange:e=>t(e.target.value),placeholder:`Type here`}),(0,d.jsxs)(`div`,{className:`text-xs text-aivent-muted`,children:[`value: `,e]})]})}return(0,d.jsx)(e,{})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'disabled',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'loading...',
    loading: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'bad message',
    invalid: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-3 bg-aivent-bg p-6">
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [value, setValue] = React.useState('hello');
      return <div className="grid gap-2 bg-aivent-bg p-6">
          <Textarea aria-label="controlled" value={value} onChange={e => setValue(e.target.value)} placeholder="Type here" />
          <div className="text-xs text-aivent-muted">value: {value}</div>
        </div>;
    }
    return <Demo />;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Disabled`,`Loading`,`Invalid`,`Sizes`,`Controlled`]}))();export{v as Controlled,p as Default,m as Disabled,g as Invalid,h as Loading,_ as Sizes,y as __namedExportsOrder,f as default};