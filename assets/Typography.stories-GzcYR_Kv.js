import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./cn-By5PeHD1.js";var o,s,c,l,u,d,f=t((()=>{o=e(n(),1),i(),s=r(),c={h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,h6:`h6`,body:`p`,muted:`p`,small:`span`,code:`code`},l={h1:`text-4xl font-bold tracking-tight text-white md:text-6xl`,h2:`text-3xl font-bold tracking-tight text-white md:text-4xl`,h3:`text-2xl font-bold tracking-tight text-white md:text-3xl`,h4:`text-xl font-semibold text-white`,h5:`text-lg font-semibold text-white`,h6:`text-base font-semibold text-white`,body:`text-sm leading-relaxed text-white md:text-base`,muted:`text-sm leading-relaxed text-aivent-muted md:text-base`,small:`text-xs text-aivent-muted`,code:`rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-white`},u={xs:`text-xs`,sm:`text-sm`,md:`text-base`,lg:`text-lg`},d=o.forwardRef(function({as:e,className:t,variant:n=`body`,size:r,...i},o){return(0,s.jsx)(e??c[n],{ref:o,className:a(l[n],r?u[r]:void 0,t),...i})}),d.__docgenInfo={description:"Typography：文本语义与样式的最小抽象。\n- 默认根据 `variant` 选择语义标签（可用 `as` 覆盖）\n- `variant` 决定主样式；`size` 可用于微调字号",methods:[],displayName:`Typography`,props:{as:{required:!1,tsType:{name:`JSX.IntrinsicElements`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'body'
| 'muted'
| 'small'
| 'code'`,elements:[{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'h4'`},{name:`literal`,value:`'h5'`},{name:`literal`,value:`'h6'`},{name:`literal`,value:`'body'`},{name:`literal`,value:`'muted'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'code'`}]},description:``,defaultValue:{value:`'body'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``}}}})),p,m,h,g,_,v;t((()=>{f(),p=r(),m={title:`Primitives/Typography`,component:d,args:{children:`Hello Aivent`,variant:`body`}},h={},g={render:()=>(0,p.jsxs)(`div`,{className:`space-y-4 bg-aivent-bg p-6`,children:[(0,p.jsx)(d,{variant:`h1`,children:`H1 Heading`}),(0,p.jsx)(d,{variant:`h2`,children:`H2 Heading`}),(0,p.jsx)(d,{variant:`h3`,children:`H3 Heading`}),(0,p.jsx)(d,{variant:`h4`,children:`H4 Heading`}),(0,p.jsx)(d,{variant:`muted`,children:`Muted paragraph text, typically used for descriptions.`}),(0,p.jsxs)(d,{variant:`body`,children:[`Body text with `,(0,p.jsx)(d,{as:`span`,variant:`code`,children:`code`}),` inline.`]}),(0,p.jsx)(d,{variant:`small`,children:`Small helper text`})]})},_={render:()=>(0,p.jsxs)(`div`,{className:`space-y-3 bg-aivent-bg p-6`,children:[(0,p.jsx)(d,{size:`xs`,children:`Size XS`}),(0,p.jsx)(d,{size:`sm`,children:`Size SM`}),(0,p.jsx)(d,{size:`md`,children:`Size MD`}),(0,p.jsx)(d,{size:`lg`,children:`Size LG`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 bg-aivent-bg p-6">
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="muted">
        Muted paragraph text, typically used for descriptions.
      </Typography>
      <Typography variant="body">
        Body text with <Typography as="span" variant="code">{\`code\`}</Typography> inline.
      </Typography>
      <Typography variant="small">Small helper text</Typography>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 bg-aivent-bg p-6">
      <Typography size="xs">Size XS</Typography>
      <Typography size="sm">Size SM</Typography>
      <Typography size="md">Size MD</Typography>
      <Typography size="lg">Size LG</Typography>
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Variants`,`Sizes`]}))();export{h as Playground,_ as Sizes,g as Variants,v as __namedExportsOrder,m as default};