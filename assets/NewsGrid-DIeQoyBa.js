import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-B_0iYUWB.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{n as r,t as i}from"./cn-By5PeHD1.js";import{a,i as o,n as s,t as c}from"./Container-7vxKWxSs.js";import{n as l,t as u}from"./Section-BQRTVIlv.js";function d({items:e=p,onSelect:t}){let n=a().sections.news;return(0,f.jsx)(u,{children:(0,f.jsxs)(c,{children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-sm font-semibold text-aivent-secondary`,children:n.eyebrow}),(0,f.jsx)(`h2`,{className:`mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl`,children:n.title})]}),(0,f.jsx)(`div`,{className:`mt-10 grid gap-4 md:grid-cols-3`,children:e.map(e=>(0,f.jsxs)(`article`,{className:i(`group overflow-hidden rounded-xl2 border border-aivent-border bg-white/5`,t&&`cursor-pointer`),onClick:()=>t?.(e),children:[(0,f.jsxs)(`div`,{className:`relative aspect-[16/10] overflow-hidden`,children:[(0,f.jsx)(`img`,{src:e.cover,alt:e.title,className:`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]`}),(0,f.jsx)(`div`,{className:`absolute left-4 top-4 rounded-lg bg-aivent-primary/80 px-3 py-1 text-xs font-bold text-white`,children:e.date})]}),(0,f.jsxs)(`div`,{className:`p-5`,children:[(0,f.jsx)(`h3`,{className:`text-base font-bold text-white`,children:e.title}),(0,f.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed text-aivent-muted`,children:e.excerpt})]})]},e.title))})]})})}var f,p,m=e((()=>{t(),r(),o(),s(),l(),f=n(),p=[{title:`Global Design Minds to Converge at 2025 Design Expo Conference`,date:`May 28`,cover:new URL(`/banli-react-ui/assets/s1-CygizNZE.webp`,``+import.meta.url).toString(),excerpt:`A quick overview of the most anticipated talks, demos, and workshops.`},{title:`From Transformers to Multimodal: What’s Next in 2025`,date:`May 27`,cover:new URL(`/banli-react-ui/assets/s2-BRuh19UL.webp`,``+import.meta.url).toString(),excerpt:`Scaling, memory optimization, and frontier applications beyond text.`},{title:`AI Policy & Governance: A Global Overview`,date:`May 26`,cover:new URL(`/banli-react-ui/assets/s3-CDl6-ckq.webp`,``+import.meta.url).toString(),excerpt:`Frameworks for privacy, bias mitigation, and accountability in deployment.`}],d.__docgenInfo={description:``,methods:[],displayName:`NewsGrid`,props:{items:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  title: string
  date: string
  cover: string
  excerpt: string
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`date`,value:{name:`string`,required:!0}},{key:`cover`,value:{name:`string`,required:!0}},{key:`excerpt`,value:{name:`string`,required:!0}}]}}],raw:`NewsItem[]`},description:``,defaultValue:{value:`[
  {
    title: 'Global Design Minds to Converge at 2025 Design Expo Conference',
    date: 'May 28',
    cover: new URL('../../../assets/images/news/s1.webp', import.meta.url).toString(),
    excerpt: 'A quick overview of the most anticipated talks, demos, and workshops.',
  },
  {
    title: 'From Transformers to Multimodal: What’s Next in 2025',
    date: 'May 27',
    cover: new URL('../../../assets/images/news/s2.webp', import.meta.url).toString(),
    excerpt: 'Scaling, memory optimization, and frontier applications beyond text.',
  },
  {
    title: 'AI Policy & Governance: A Global Overview',
    date: 'May 26',
    cover: new URL('../../../assets/images/news/s3.webp', import.meta.url).toString(),
    excerpt: 'Frameworks for privacy, bias mitigation, and accountability in deployment.',
  },
]`,computed:!1}},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: NewsItem) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  title: string
  date: string
  cover: string
  excerpt: string
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`date`,value:{name:`string`,required:!0}},{key:`cover`,value:{name:`string`,required:!0}},{key:`excerpt`,value:{name:`string`,required:!0}}]}},name:`item`}],return:{name:`void`}}},description:``}}}}));export{m as n,d as t};