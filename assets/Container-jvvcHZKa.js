import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./cn-By5PeHD1.js";function o(e,t){if(!t)return e;let n=Array.isArray(e)?[...e]:{...e};for(let r of Object.keys(t)){let i=t[r];if(i===void 0)continue;let a=e[r];if(Array.isArray(a)&&Array.isArray(i)){n[r]=i;continue}if(a&&typeof a==`object`&&!Array.isArray(a)&&i&&typeof i==`object`&&!Array.isArray(i)){n[r]=o(a,i);continue}n[r]=i}return n}var s=t((()=>{})),c,l=t((()=>{c={header:{ctaLabel:`Get Tickets`,openMenuAriaLabel:`Open menu`,menuTitle:`MENU`,closeMenuAriaLabel:`Close menu`,nav:{home:`Home`,about:`About`,speakers:`Speakers`,schedule:`Schedule`,tickets:`Tickets`,news:`News`,contact:`Contact`}},footer:{brand:`BanLi`,description:`A modern event template, rebuilt as a reusable React component library.`,columns:{event:`Event`,resources:`Resources`},links:{about:`About`,speakers:`Speakers`,schedule:`Schedule`,tickets:`Tickets`,news:`News`,contact:`Contact`},rights:`All rights reserved.`,builtWith:`Built with React + Tailwind + Storybook.`},hero:{badge:`AI Summit`,primaryCta:`Get Tickets`,secondaryCta:`View Schedule`},sections:{whyAttend:{eyebrow:`Why Attend`,title:`What you’ll gain`},speakers:{eyebrow:`Speakers`,title:`Meet the visionaries`},schedule:{eyebrow:`Schedule`,title:`5 Days of AI excellence`},tickets:{eyebrow:`Tickets`,title:`Choose your pass`,subtitle:`Pricing for teams, builders, and leaders. Upgrade anytime.`,popular:`Popular`,buyPrefix:`Buy`,style2Title:`Ticket Style 2`,style2Subtitle:`A compact layout suitable for checkout-style sections.`,select:`Select`,cart:`Cart`,vat:`VAT`,total:`Total`,checkout:`Checkout`},news:{eyebrow:`News`,title:`Latest updates`},contact:{eyebrow:`Contact`,title:`Let’s talk`,intro:`Want to partner, sponsor, or ask about tickets? Leave us a message.`}},contactForm:{fields:{name:`Name`,email:`Email`,message:`Message`},placeholders:{name:`Your name`,email:`you@example.com`,message:`How can we help?`},errors:{nameRequired:`Name is required`,emailRequired:`Email is required`,emailInvalid:`Email format is invalid`,messageRequired:`Message is required`},submit:{sending:`Sending…`,send:`Send Message`},helper:`Submitting will call the onSubmit callback so you can wire up your API.`},contactInfo:{locationLabel:`Location`,emailLabel:`Email`,phoneLabel:`Phone`}}}));function u({messages:e,children:t}){let n=f.useMemo(()=>({messages:o(c,e)}),[e]);return(0,p.jsx)(m.Provider,{value:n,children:t})}function d(){return f.useContext(m).messages}var f,p,m,h=t((()=>{f=e(n(),1),s(),l(),p=r(),m=f.createContext({messages:c}),u.__docgenInfo={description:``,methods:[],displayName:`AiventI18nProvider`,props:{messages:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  [K in keyof T]?: T[K] extends (infer U)[]
    ? PartialDeep<U>[]
    : T[K] extends object
      ? PartialDeep<T[K]>
      : T[K]
}`,signature:{properties:[{key:{name:`signature`,type:`object`,raw:`{
  header: {
    ctaLabel: string
    openMenuAriaLabel: string
    menuTitle: string
    closeMenuAriaLabel: string
    nav: {
      home: string
      about: string
      speakers: string
      schedule: string
      tickets: string
      news: string
      contact: string
    }
  }
  footer: {
    brand: string
    description: string
    columns: { event: string; resources: string }
    links: {
      about: string
      speakers: string
      schedule: string
      tickets: string
      news: string
      contact: string
    }
    rights: string
    builtWith: string
  }
  hero: {
    badge: string
    primaryCta: string
    secondaryCta: string
  }
  sections: {
    whyAttend: { eyebrow: string; title: string }
    speakers: { eyebrow: string; title: string }
    schedule: { eyebrow: string; title: string }
    tickets: {
      eyebrow: string
      title: string
      subtitle: string
      popular: string
      buyPrefix: string
      style2Title: string
      style2Subtitle: string
      select: string
      cart: string
      vat: string
      total: string
      checkout: string
    }
    news: { eyebrow: string; title: string }
    contact: { eyebrow: string; title: string; intro: string }
  }
  contactForm: {
    fields: { name: string; email: string; message: string }
    placeholders: { name: string; email: string; message: string }
    errors: { nameRequired: string; emailRequired: string; emailInvalid: string; messageRequired: string }
    submit: { sending: string; send: string }
    helper: string
  }
  contactInfo: {
    locationLabel: string
    emailLabel: string
    phoneLabel: string
  }
}`,signature:{properties:[{key:`header`,value:{name:`signature`,type:`object`,raw:`{
  ctaLabel: string
  openMenuAriaLabel: string
  menuTitle: string
  closeMenuAriaLabel: string
  nav: {
    home: string
    about: string
    speakers: string
    schedule: string
    tickets: string
    news: string
    contact: string
  }
}`,signature:{properties:[{key:`ctaLabel`,value:{name:`string`,required:!0}},{key:`openMenuAriaLabel`,value:{name:`string`,required:!0}},{key:`menuTitle`,value:{name:`string`,required:!0}},{key:`closeMenuAriaLabel`,value:{name:`string`,required:!0}},{key:`nav`,value:{name:`signature`,type:`object`,raw:`{
  home: string
  about: string
  speakers: string
  schedule: string
  tickets: string
  news: string
  contact: string
}`,signature:{properties:[{key:`home`,value:{name:`string`,required:!0}},{key:`about`,value:{name:`string`,required:!0}},{key:`speakers`,value:{name:`string`,required:!0}},{key:`schedule`,value:{name:`string`,required:!0}},{key:`tickets`,value:{name:`string`,required:!0}},{key:`news`,value:{name:`string`,required:!0}},{key:`contact`,value:{name:`string`,required:!0}}]},required:!0}}]},required:!0}},{key:`footer`,value:{name:`signature`,type:`object`,raw:`{
  brand: string
  description: string
  columns: { event: string; resources: string }
  links: {
    about: string
    speakers: string
    schedule: string
    tickets: string
    news: string
    contact: string
  }
  rights: string
  builtWith: string
}`,signature:{properties:[{key:`brand`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`columns`,value:{name:`signature`,type:`object`,raw:`{ event: string; resources: string }`,signature:{properties:[{key:`event`,value:{name:`string`,required:!0}},{key:`resources`,value:{name:`string`,required:!0}}]},required:!0}},{key:`links`,value:{name:`signature`,type:`object`,raw:`{
  about: string
  speakers: string
  schedule: string
  tickets: string
  news: string
  contact: string
}`,signature:{properties:[{key:`about`,value:{name:`string`,required:!0}},{key:`speakers`,value:{name:`string`,required:!0}},{key:`schedule`,value:{name:`string`,required:!0}},{key:`tickets`,value:{name:`string`,required:!0}},{key:`news`,value:{name:`string`,required:!0}},{key:`contact`,value:{name:`string`,required:!0}}]},required:!0}},{key:`rights`,value:{name:`string`,required:!0}},{key:`builtWith`,value:{name:`string`,required:!0}}]},required:!0}},{key:`hero`,value:{name:`signature`,type:`object`,raw:`{
  badge: string
  primaryCta: string
  secondaryCta: string
}`,signature:{properties:[{key:`badge`,value:{name:`string`,required:!0}},{key:`primaryCta`,value:{name:`string`,required:!0}},{key:`secondaryCta`,value:{name:`string`,required:!0}}]},required:!0}},{key:`sections`,value:{name:`signature`,type:`object`,raw:`{
  whyAttend: { eyebrow: string; title: string }
  speakers: { eyebrow: string; title: string }
  schedule: { eyebrow: string; title: string }
  tickets: {
    eyebrow: string
    title: string
    subtitle: string
    popular: string
    buyPrefix: string
    style2Title: string
    style2Subtitle: string
    select: string
    cart: string
    vat: string
    total: string
    checkout: string
  }
  news: { eyebrow: string; title: string }
  contact: { eyebrow: string; title: string; intro: string }
}`,signature:{properties:[{key:`whyAttend`,value:{name:`signature`,type:`object`,raw:`{ eyebrow: string; title: string }`,signature:{properties:[{key:`eyebrow`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}}]},required:!0}},{key:`speakers`,value:{name:`signature`,type:`object`,raw:`{ eyebrow: string; title: string }`,signature:{properties:[{key:`eyebrow`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}}]},required:!0}},{key:`schedule`,value:{name:`signature`,type:`object`,raw:`{ eyebrow: string; title: string }`,signature:{properties:[{key:`eyebrow`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}}]},required:!0}},{key:`tickets`,value:{name:`signature`,type:`object`,raw:`{
  eyebrow: string
  title: string
  subtitle: string
  popular: string
  buyPrefix: string
  style2Title: string
  style2Subtitle: string
  select: string
  cart: string
  vat: string
  total: string
  checkout: string
}`,signature:{properties:[{key:`eyebrow`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`subtitle`,value:{name:`string`,required:!0}},{key:`popular`,value:{name:`string`,required:!0}},{key:`buyPrefix`,value:{name:`string`,required:!0}},{key:`style2Title`,value:{name:`string`,required:!0}},{key:`style2Subtitle`,value:{name:`string`,required:!0}},{key:`select`,value:{name:`string`,required:!0}},{key:`cart`,value:{name:`string`,required:!0}},{key:`vat`,value:{name:`string`,required:!0}},{key:`total`,value:{name:`string`,required:!0}},{key:`checkout`,value:{name:`string`,required:!0}}]},required:!0}},{key:`news`,value:{name:`signature`,type:`object`,raw:`{ eyebrow: string; title: string }`,signature:{properties:[{key:`eyebrow`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}}]},required:!0}},{key:`contact`,value:{name:`signature`,type:`object`,raw:`{ eyebrow: string; title: string; intro: string }`,signature:{properties:[{key:`eyebrow`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`intro`,value:{name:`string`,required:!0}}]},required:!0}}]},required:!0}},{key:`contactForm`,value:{name:`signature`,type:`object`,raw:`{
  fields: { name: string; email: string; message: string }
  placeholders: { name: string; email: string; message: string }
  errors: { nameRequired: string; emailRequired: string; emailInvalid: string; messageRequired: string }
  submit: { sending: string; send: string }
  helper: string
}`,signature:{properties:[{key:`fields`,value:{name:`signature`,type:`object`,raw:`{ name: string; email: string; message: string }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`email`,value:{name:`string`,required:!0}},{key:`message`,value:{name:`string`,required:!0}}]},required:!0}},{key:`placeholders`,value:{name:`signature`,type:`object`,raw:`{ name: string; email: string; message: string }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`email`,value:{name:`string`,required:!0}},{key:`message`,value:{name:`string`,required:!0}}]},required:!0}},{key:`errors`,value:{name:`signature`,type:`object`,raw:`{ nameRequired: string; emailRequired: string; emailInvalid: string; messageRequired: string }`,signature:{properties:[{key:`nameRequired`,value:{name:`string`,required:!0}},{key:`emailRequired`,value:{name:`string`,required:!0}},{key:`emailInvalid`,value:{name:`string`,required:!0}},{key:`messageRequired`,value:{name:`string`,required:!0}}]},required:!0}},{key:`submit`,value:{name:`signature`,type:`object`,raw:`{ sending: string; send: string }`,signature:{properties:[{key:`sending`,value:{name:`string`,required:!0}},{key:`send`,value:{name:`string`,required:!0}}]},required:!0}},{key:`helper`,value:{name:`string`,required:!0}}]},required:!0}},{key:`contactInfo`,value:{name:`signature`,type:`object`,raw:`{
  locationLabel: string
  emailLabel: string
  phoneLabel: string
}`,signature:{properties:[{key:`locationLabel`,value:{name:`string`,required:!0}},{key:`emailLabel`,value:{name:`string`,required:!0}},{key:`phoneLabel`,value:{name:`string`,required:!0}}]},required:!0}}]},required:!1},value:{name:`unknown`}}]}},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function g({className:e,...t}){return(0,_.jsx)(`div`,{className:a(`mx-auto w-full max-w-content px-4 md:px-6`,e),...t})}var _,v=t((()=>{n(),i(),_=r(),g.__docgenInfo={description:``,methods:[],displayName:`Container`}}));export{d as a,s as c,h as i,v as n,l as o,u as r,o as s,g as t};