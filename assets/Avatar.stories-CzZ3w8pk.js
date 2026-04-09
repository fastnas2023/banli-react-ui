import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./cn-By5PeHD1.js";import{n as o,t as s}from"./Space-BCPAcS3S.js";var c,l=t((()=>{c=`/banli-react-ui/assets/1-DlYA18fi.webp`}));function u(e){return e?e.trim().split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()).join(``):``}var d,f,p,m,h,g=t((()=>{d=e(n(),1),i(),f=r(),p={sm:28,md:40,lg:56},m={circle:`rounded-full`,rounded:`rounded-xl`,square:`rounded-none`},h=d.forwardRef(function({className:e,src:t,alt:n,fallback:r,size:i=`md`,variant:o=`circle`,style:s,...c},l){let[h,g]=d.useState(!1),_=typeof i==`number`?i:p[i],v=!!t&&!h,y=r===void 0?u(n):``;return(0,f.jsx)(`span`,{ref:l,className:a(`inline-flex shrink-0 items-center justify-center overflow-hidden border border-aivent-border bg-white/10 text-xs font-semibold text-white`,m[o],e),style:{width:_,height:_,...s},...c,children:v?(0,f.jsx)(`img`,{src:t,alt:n??``,"aria-hidden":n?void 0:!0,className:`h-full w-full object-cover`,onError:()=>g(!0)}):(0,f.jsx)(`span`,{role:`img`,"aria-label":n||`Avatar`,className:`select-none`,children:r??(y||`•`)})})}),h.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{src:{required:!1,tsType:{name:`string`},description:``},alt:{required:!1,tsType:{name:`string`},description:``},fallback:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`无图片或加载失败时展示的内容。若不传，会自动从 alt 生成首字母。`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg' | number`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`number`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'circle' | 'rounded' | 'square'`,elements:[{name:`literal`,value:`'circle'`},{name:`literal`,value:`'rounded'`},{name:`literal`,value:`'square'`}]},description:``,defaultValue:{value:`'circle'`,computed:!1}}}}})),_,v,y,b,x,S;t((()=>{l(),g(),o(),_=r(),v={title:`Primitives/Avatar`,component:h,args:{alt:`Jane Doe`}},y={args:{src:c}},b={args:{src:void 0,alt:`Jason Zhang`}},x={render:()=>(0,_.jsx)(`div`,{className:`bg-aivent-bg p-6`,children:(0,_.jsxs)(s,{size:`lg`,align:`center`,children:[(0,_.jsx)(h,{src:c,alt:`Circle`,size:`sm`,variant:`circle`}),(0,_.jsx)(h,{src:c,alt:`Rounded`,size:`md`,variant:`rounded`}),(0,_.jsx)(h,{src:c,alt:`Square`,size:`lg`,variant:`square`}),(0,_.jsx)(h,{alt:`Custom`,size:72,fallback:`CU`})]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    src: avatarImg
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    src: undefined,
    alt: 'Jason Zhang'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-6">
      <Space size="lg" align="center">
        <Avatar src={avatarImg} alt="Circle" size="sm" variant="circle" />
        <Avatar src={avatarImg} alt="Rounded" size="md" variant="rounded" />
        <Avatar src={avatarImg} alt="Square" size="lg" variant="square" />
        <Avatar alt="Custom" size={72} fallback="CU" />
      </Space>
    </div>
}`,...x.parameters?.docs?.source}}},S=[`WithImage`,`Fallback`,`SizesAndShapes`]}))();export{b as Fallback,x as SizesAndShapes,y as WithImage,S as __namedExportsOrder,v as default};