import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { EditDrawer } from '../../components/pages/templates/EditDrawer'
import { Button } from '../../components/primitives/Button'
import { Input } from '../../components/primitives/Input'
import { Textarea } from '../../components/primitives/Textarea'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/form/Form'

type Values = {
  name: string
  email: string
  note: string
}

const meta: Meta = {
  title: 'Templates/Admin/EditDrawer',
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => {
    function Demo() {
      return (
        <div className="min-h-screen bg-aivent-bg p-10 text-aivent-text">
          <div className="mx-auto max-w-4xl rounded-xl border border-aivent-border bg-aivent-panel p-6">
            <div className="text-lg font-bold text-white">编辑抽屉（EditDrawer 模板示例）</div>
            <div className="mt-2 text-sm text-aivent-muted">
              包含：Drawer + react-hook-form 校验 + Toast（提交成功/失败反馈）。
            </div>

            <div className="mt-6">
              <EditDrawer<Values>
                title="编辑用户"
                description="示例表单：必填校验、邮箱格式校验，以及提交后的 Toast。"
                trigger={<Button variant="ghost">打开编辑抽屉</Button>}
                defaultValues={{ name: '', email: '', note: '' }}
                toastCopy={{
                  successTitle: '保存成功',
                  successDescription: '用户信息已更新。',
                  errorTitle: '保存失败',
                  errorDescription: '模拟错误：当姓名包含 “error” 时触发。',
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 800))
                  if (values.name.toLowerCase().includes('error')) {
                    throw new Error('mock error')
                  }
                }}
                renderFields={(form) => (
                  <>
                    <FormField
                      control={form.control}
                      name="name"
                      rules={{ required: '姓名为必填项' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">姓名</FormLabel>
                          <FormControl>
                            <Input placeholder="请输入姓名（包含 error 将触发失败 toast）" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      rules={{
                        required: '邮箱为必填项',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: '请输入合法邮箱地址',
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">邮箱</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="note"
                      rules={{ maxLength: { value: 120, message: '备注最多 120 字' } }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">备注</FormLabel>
                          <FormControl>
                            <Textarea placeholder="可选填写（最多 120 字）" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              />
            </div>
          </div>
        </div>
      )
    }

    return <Demo />
  },
}

