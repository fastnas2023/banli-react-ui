import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./Input-WH5GRkc0.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p,t as m}from"./Form-Dk54ZAF0.js";import{n as h,t as g}from"./Button-DMc61E-T.js";var _,v,y,b,x;t((()=>{_=e(n(),1),s(),i(),h(),p(),v=r(),y={title:`Form/Form`},b={render:()=>{function e(){let e=l({defaultValues:{email:``}}),[t,n]=_.useState(null);return(0,v.jsx)(`div`,{className:`bg-aivent-bg p-10 text-aivent-text`,children:(0,v.jsx)(m,{...e,children:(0,v.jsxs)(`form`,{className:`grid max-w-md gap-4 rounded-xl border border-aivent-border bg-aivent-panel p-6`,onSubmit:e.handleSubmit(e=>n(e)),children:[(0,v.jsx)(f,{control:e.control,name:`email`,rules:{required:`Email is required`},render:({field:e})=>(0,v.jsxs)(c,{children:[(0,v.jsx)(o,{className:`text-white`,children:`Email`}),(0,v.jsx)(u,{children:(0,v.jsx)(a,{placeholder:`you@example.com`,...e})}),(0,v.jsx)(d,{})]})}),(0,v.jsx)(g,{type:`submit`,children:`Submit`}),t?(0,v.jsxs)(`div`,{className:`text-xs text-aivent-muted`,children:[`submitted: `,t.email]}):null]})})})}return(0,v.jsx)(e,{})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const form = useForm<Values>({
        defaultValues: {
          email: ''
        }
      });
      const [submitted, setSubmitted] = React.useState<Values | null>(null);
      return <div className="bg-aivent-bg p-10 text-aivent-text">
          <Form {...form}>
            <form className="grid max-w-md gap-4 rounded-xl border border-aivent-border bg-aivent-panel p-6" onSubmit={form.handleSubmit(v => setSubmitted(v))}>
              <FormField control={form.control} name="email" rules={{
              required: 'Email is required'
            }} render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <Button type="submit">Submit</Button>

              {submitted ? <div className="text-xs text-aivent-muted">submitted: {submitted.email}</div> : null}
            </form>
          </Form>
        </div>;
    }
    return <Demo />;
  }
}`,...b.parameters?.docs?.source}}},x=[`Basic`]}))();export{b as Basic,x as __namedExportsOrder,y as default};