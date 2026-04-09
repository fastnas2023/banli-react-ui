import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-B_0iYUWB.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{n as r,t as i}from"./Input-WH5GRkc0.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./Form-Dk54ZAF0.js";import{n as m,t as h}from"./Button-DMc61E-T.js";import{a as g,i as _,n as v,r as y,t as b}from"./form-layout-Dm5nDuTk.js";var x,S,C,w,T,E;e((()=>{t(),o(),r(),m(),f(),g(),x=n(),S={title:`UI/FormLayout`},C={render:()=>(0,x.jsx)(`div`,{className:`bg-aivent-bg p-10 text-aivent-text`,children:(0,x.jsx)(`div`,{className:`max-w-2xl rounded-xl border border-aivent-border bg-aivent-panel p-6`,children:(0,x.jsx)(v,{layout:`vertical`,children:(0,x.jsx)(_,{children:(0,x.jsxs)(y,{children:[(0,x.jsx)(b,{label:`Email`,children:(0,x.jsx)(i,{placeholder:`you@example.com`})}),(0,x.jsx)(b,{label:`Name`,children:(0,x.jsx)(i,{placeholder:`Your name`})})]})})})})})},w={render:()=>{function e(){let e=c({defaultValues:{email:``,name:``}});return(0,x.jsx)(`div`,{className:`bg-aivent-bg p-10 text-aivent-text`,children:(0,x.jsx)(p,{...e,children:(0,x.jsxs)(`form`,{className:`grid max-w-2xl gap-4 rounded-xl border border-aivent-border bg-aivent-panel p-6`,children:[(0,x.jsx)(v,{layout:`horizontal`,labelWidth:120,children:(0,x.jsx)(_,{children:(0,x.jsxs)(y,{className:`gap-6`,children:[(0,x.jsx)(d,{control:e.control,name:`email`,rules:{required:`Email is required`},render:({field:e})=>(0,x.jsx)(b,{asItem:!0,children:(0,x.jsxs)(s,{children:[(0,x.jsx)(a,{children:`Email`}),(0,x.jsx)(l,{children:(0,x.jsx)(i,{placeholder:`you@example.com`,...e})}),(0,x.jsx)(u,{})]})})}),(0,x.jsx)(d,{control:e.control,name:`name`,render:({field:e})=>(0,x.jsx)(b,{asItem:!0,children:(0,x.jsxs)(s,{children:[(0,x.jsx)(a,{children:`Name`}),(0,x.jsx)(l,{children:(0,x.jsx)(i,{placeholder:`Your name`,...e})}),(0,x.jsx)(u,{})]})})})]})})}),(0,x.jsx)(`div`,{className:`mt-2 flex items-center justify-end gap-3`,children:(0,x.jsx)(h,{type:`submit`,children:`Submit`})})]})})})}return(0,x.jsx)(e,{})}},T={render:()=>(0,x.jsx)(`div`,{className:`bg-aivent-bg p-10 text-aivent-text`,children:(0,x.jsx)(`div`,{className:`max-w-3xl rounded-xl border border-aivent-border bg-aivent-panel p-6`,children:(0,x.jsx)(v,{layout:`inline`,labelWidth:88,children:(0,x.jsxs)(y,{children:[(0,x.jsx)(b,{label:`关键词`,children:(0,x.jsx)(i,{placeholder:`Search…`})}),(0,x.jsx)(b,{label:`作者`,children:(0,x.jsx)(i,{placeholder:`Author`})}),(0,x.jsxs)(`div`,{className:`ml-auto flex items-center gap-3`,children:[(0,x.jsx)(h,{variant:`ghost`,type:`button`,children:`Reset`}),(0,x.jsx)(h,{type:`button`,children:`Search`})]})]})})})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-10 text-aivent-text">
      <div className="max-w-2xl rounded-xl border border-aivent-border bg-aivent-panel p-6">
        <FormLayout layout="vertical">
          <FormSection>
            <FormRow>
              <FormCol label="Email">
                <Input placeholder="you@example.com" />
              </FormCol>
              <FormCol label="Name">
                <Input placeholder="Your name" />
              </FormCol>
            </FormRow>
          </FormSection>
        </FormLayout>
      </div>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const form = useForm<Values>({
        defaultValues: {
          email: '',
          name: ''
        }
      });
      return <div className="bg-aivent-bg p-10 text-aivent-text">
          <Form {...form}>
            <form className="grid max-w-2xl gap-4 rounded-xl border border-aivent-border bg-aivent-panel p-6">
              <FormLayout layout="horizontal" labelWidth={120}>
                <FormSection>
                  <FormRow className="gap-6">
                    <FormField control={form.control} name="email" rules={{
                    required: 'Email is required'
                  }} render={({
                    field
                  }) => <FormCol asItem>
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </FormCol>} />

                    <FormField control={form.control} name="name" render={({
                    field
                  }) => <FormCol asItem>
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </FormCol>} />
                  </FormRow>
                </FormSection>
              </FormLayout>

              <div className="mt-2 flex items-center justify-end gap-3">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>;
    }
    return <Demo />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-aivent-bg p-10 text-aivent-text">
      <div className="max-w-3xl rounded-xl border border-aivent-border bg-aivent-panel p-6">
        <FormLayout layout="inline" labelWidth={88}>
          <FormRow>
            <FormCol label="关键词">
              <Input placeholder="Search…" />
            </FormCol>
            <FormCol label="作者">
              <Input placeholder="Author" />
            </FormCol>
            <div className="ml-auto flex items-center gap-3">
              <Button variant="ghost" type="button">
                Reset
              </Button>
              <Button type="button">Search</Button>
            </div>
          </FormRow>
        </FormLayout>
      </div>
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Vertical`,`HorizontalWithRHF`,`Inline`]}))();export{w as HorizontalWithRHF,T as Inline,C as Vertical,E as __namedExportsOrder,S as default};