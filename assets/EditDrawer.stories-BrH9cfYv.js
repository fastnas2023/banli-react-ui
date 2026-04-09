import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./cn-nhk1yNpb.js";import{n as o,t as s}from"./Spinner-DKFmGCPJ.js";import{n as c,t as l}from"./Input-WH5GRkc0.js";import{a as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v}from"./Form-Dk54ZAF0.js";import{n as y,t as b}from"./Button-DMc61E-T.js";import{n as x,t as S}from"./Textarea-ctqxyY2m.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./drawer-CNiRJtC4.js";import{a as A,i as j,n as M,o as N,r as P,t as F}from"./toast-CszxFndz.js";function I({trigger:e,title:t,description:n,defaultValues:r,renderFields:i,onSubmit:o,submitText:c=`保存`,cancelText:l=`取消`,toastCopy:u,contentClassName:d}){let[f,m]=L.useState(!1),[h,g]=L.useState(!1),[_,y]=L.useState(`success`),x=p({defaultValues:r,mode:`onBlur`}),S=x.handleSubmit(async e=>{try{await o(e),y(`success`),g(!0),m(!1),x.reset(e)}catch{y(`error`),g(!0)}}),O={successTitle:u?.successTitle??`已保存`,successDescription:u?.successDescription??`你的修改已成功提交。`,errorTitle:u?.errorTitle??`保存失败`,errorDescription:u?.errorDescription??`请稍后重试，或检查表单字段。`},N=x.formState.isSubmitting;return(0,R.jsxs)(P,{swipeDirection:`right`,children:[(0,R.jsxs)(k,{open:f,onOpenChange:m,children:[(0,R.jsx)(E,{asChild:!0,children:e}),(0,R.jsxs)(D,{className:a(d),children:[(0,R.jsx)(C,{children:t}),n?(0,R.jsx)(w,{children:n}):null,(0,R.jsx)(`div`,{className:`mt-6`,children:(0,R.jsx)(v,{...x,children:(0,R.jsxs)(`form`,{className:`grid gap-4`,onSubmit:S,children:[i(x),(0,R.jsxs)(`div`,{className:`mt-4 flex items-center justify-end gap-3`,children:[(0,R.jsx)(T,{asChild:!0,children:(0,R.jsx)(b,{variant:`ghost`,type:`button`,disabled:N,children:l})}),(0,R.jsx)(b,{type:`submit`,disabled:N,children:N?(0,R.jsxs)(`span`,{className:`inline-flex items-center gap-2`,children:[(0,R.jsx)(s,{size:`sm`,label:`Saving`}),`保存中…`]}):c})]})]})})})]})]}),(0,R.jsx)(F,{open:h,onOpenChange:g,duration:3500,children:(0,R.jsxs)(`div`,{className:`grid gap-1`,children:[(0,R.jsx)(j,{children:_===`success`?O.successTitle:O.errorTitle}),(0,R.jsx)(M,{children:_===`success`?O.successDescription:O.errorDescription})]})}),(0,R.jsx)(A,{})]})}var L,R,z=t((()=>{L=e(n(),1),d(),i(),y(),o(),_(),O(),N(),R=r(),I.__docgenInfo={description:`EditDrawer（后台编辑抽屉模板）

- Drawer（Radix Dialog）作为容器
- react-hook-form + Form 组件族用于表单与校验
- Toast（Radix Toast）用于保存结果反馈`,methods:[],displayName:`EditDrawer`,props:{trigger:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},title:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},defaultValues:{required:!0,tsType:{name:`TFieldValues`},description:``},renderFields:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(form: UseFormReturn<TFieldValues>) => React.ReactNode`,signature:{arguments:[{type:{name:`UseFormReturn`,elements:[{name:`TFieldValues`}],raw:`UseFormReturn<TFieldValues>`},name:`form`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:`由调用方提供字段渲染（使用 FormField/FormItem/FormControl/FormMessage 等）。`},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(values: TFieldValues) => void | Promise<void>`,signature:{arguments:[{type:{name:`TFieldValues`},name:`values`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`保存逻辑（支持 async）。抛错会触发 error toast。`},submitText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'保存'`,computed:!1}},cancelText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'取消'`,computed:!1}},toastCopy:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  successTitle?: string
  successDescription?: string
  errorTitle?: string
  errorDescription?: string
}`,signature:{properties:[{key:`successTitle`,value:{name:`string`,required:!1}},{key:`successDescription`,value:{name:`string`,required:!1}},{key:`errorTitle`,value:{name:`string`,required:!1}},{key:`errorDescription`,value:{name:`string`,required:!1}}]}},description:``},contentClassName:{required:!1,tsType:{name:`string`},description:`DrawerContent 自定义 className（例如宽度、padding）。`}}}})),B,V,H,U;t((()=>{n(),z(),y(),c(),x(),_(),B=r(),V={title:`Templates/Admin/EditDrawer`,parameters:{layout:`fullscreen`}},H={render:()=>{function e(){return(0,B.jsx)(`div`,{className:`min-h-screen bg-aivent-bg p-10 text-aivent-text`,children:(0,B.jsxs)(`div`,{className:`mx-auto max-w-4xl rounded-xl border border-aivent-border bg-aivent-panel p-6`,children:[(0,B.jsx)(`div`,{className:`text-lg font-bold text-white`,children:`编辑抽屉（EditDrawer 模板示例）`}),(0,B.jsx)(`div`,{className:`mt-2 text-sm text-aivent-muted`,children:`包含：Drawer + react-hook-form 校验 + Toast（提交成功/失败反馈）。`}),(0,B.jsx)(`div`,{className:`mt-6`,children:(0,B.jsx)(I,{title:`编辑用户`,description:`示例表单：必填校验、邮箱格式校验，以及提交后的 Toast。`,trigger:(0,B.jsx)(b,{variant:`ghost`,children:`打开编辑抽屉`}),defaultValues:{name:``,email:``,note:``},toastCopy:{successTitle:`保存成功`,successDescription:`用户信息已更新。`,errorTitle:`保存失败`,errorDescription:`模拟错误：当姓名包含 “error” 时触发。`},onSubmit:async e=>{if(await new Promise(e=>setTimeout(e,800)),e.name.toLowerCase().includes(`error`))throw Error(`mock error`)},renderFields:e=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(g,{control:e.control,name:`name`,rules:{required:`姓名为必填项`},render:({field:e})=>(0,B.jsxs)(f,{children:[(0,B.jsx)(u,{className:`text-white`,children:`姓名`}),(0,B.jsx)(m,{children:(0,B.jsx)(l,{placeholder:`请输入姓名（包含 error 将触发失败 toast）`,...e})}),(0,B.jsx)(h,{})]})}),(0,B.jsx)(g,{control:e.control,name:`email`,rules:{required:`邮箱为必填项`,pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:`请输入合法邮箱地址`}},render:({field:e})=>(0,B.jsxs)(f,{children:[(0,B.jsx)(u,{className:`text-white`,children:`邮箱`}),(0,B.jsx)(m,{children:(0,B.jsx)(l,{placeholder:`you@example.com`,...e})}),(0,B.jsx)(h,{})]})}),(0,B.jsx)(g,{control:e.control,name:`note`,rules:{maxLength:{value:120,message:`备注最多 120 字`}},render:({field:e})=>(0,B.jsxs)(f,{children:[(0,B.jsx)(u,{className:`text-white`,children:`备注`}),(0,B.jsx)(m,{children:(0,B.jsx)(S,{placeholder:`可选填写（最多 120 字）`,...e})}),(0,B.jsx)(h,{})]})})]})})})]})})}return(0,B.jsx)(e,{})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      return <div className="min-h-screen bg-aivent-bg p-10 text-aivent-text">
          <div className="mx-auto max-w-4xl rounded-xl border border-aivent-border bg-aivent-panel p-6">
            <div className="text-lg font-bold text-white">编辑抽屉（EditDrawer 模板示例）</div>
            <div className="mt-2 text-sm text-aivent-muted">
              包含：Drawer + react-hook-form 校验 + Toast（提交成功/失败反馈）。
            </div>

            <div className="mt-6">
              <EditDrawer<Values> title="编辑用户" description="示例表单：必填校验、邮箱格式校验，以及提交后的 Toast。" trigger={<Button variant="ghost">打开编辑抽屉</Button>} defaultValues={{
              name: '',
              email: '',
              note: ''
            }} toastCopy={{
              successTitle: '保存成功',
              successDescription: '用户信息已更新。',
              errorTitle: '保存失败',
              errorDescription: '模拟错误：当姓名包含 “error” 时触发。'
            }} onSubmit={async values => {
              await new Promise(r => setTimeout(r, 800));
              if (values.name.toLowerCase().includes('error')) {
                throw new Error('mock error');
              }
            }} renderFields={form => <>
                    <FormField control={form.control} name="name" rules={{
                required: '姓名为必填项'
              }} render={({
                field
              }) => <FormItem>
                          <FormLabel className="text-white">姓名</FormLabel>
                          <FormControl>
                            <Input placeholder="请输入姓名（包含 error 将触发失败 toast）" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="email" rules={{
                required: '邮箱为必填项',
                pattern: {
                  value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                  message: '请输入合法邮箱地址'
                }
              }} render={({
                field
              }) => <FormItem>
                          <FormLabel className="text-white">邮箱</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="note" rules={{
                maxLength: {
                  value: 120,
                  message: '备注最多 120 字'
                }
              }} render={({
                field
              }) => <FormItem>
                          <FormLabel className="text-white">备注</FormLabel>
                          <FormControl>
                            <Textarea placeholder="可选填写（最多 120 字）" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </>} />
            </div>
          </div>
        </div>;
    }
    return <Demo />;
  }
}`,...H.parameters?.docs?.source}}},U=[`Basic`]}))();export{H as Basic,U as __namedExportsOrder,V as default};