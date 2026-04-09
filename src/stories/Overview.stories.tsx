import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
  Avatar,
  Badge,
  Button,
  Cascader,
  DatePicker,
  Divider,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  Select,
  Space,
  Spinner,
  Switch,
  Table,
  Tabs,
  Text,
  Textarea,
  Title,
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Tree,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components'
import { useForm } from 'react-hook-form'
import type { ColumnDef } from '@tanstack/react-table'

const meta: Meta = {
  title: 'BanLi/Overview',
  parameters: {
    docs: {
      description: {
        component:
          'BanLi UI 组件总览：用于快速检查 “全家桶” 是否齐全、基础交互与风格是否一致。每个组件仍以各自 stories 为准。',
      },
    },
  },
}

export default meta
type Story = StoryObj

export const KitchenSink: Story = {
  render: () => {
    const [toastOpen, setToastOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(new Date('2026-01-15'))
    const [uploadFiles, setUploadFiles] = React.useState<File[]>([])
    const [treeSearch, setTreeSearch] = React.useState('')
    const [cascaderValue, setCascaderValue] = React.useState<string[]>(['zj', 'hz'])

    const form = useForm<{ email: string }>({ defaultValues: { email: '' } })

    const columns = React.useMemo<ColumnDef<{ name: string; role: string }>[]>(
      () => [
        { header: 'Name', accessorKey: 'name' },
        { header: 'Role', accessorKey: 'role' },
      ],
      []
    )

    return (
      <div className="space-y-10 p-8">
        <div className="space-y-2">
          <Title level={2}>BANLI UI</Title>
          <Text tone="muted">快速总览（docs / a11y / 受控&非受控示例）。</Text>
        </div>

        <Divider />

        <div className="space-y-4">
          <Title level={3}>Primitives</Title>
          <Space size="md" wrap align="center">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Badge>Badge</Badge>
            <Spinner label="Loading" />
            <Icon name="check" title="check" variant="primary" />
            <Avatar fallback="BZ" />
          </Space>
          <div className="grid gap-3 md:grid-cols-2">
            <Input placeholder="Input" />
            <Textarea placeholder="Textarea" />
          </div>
        </div>

        <Divider />

        <div className="space-y-4">
          <Title level={3}>Controls</Title>
          <Space size="lg" wrap align="center">
            <Switch defaultValue />
            <RadioGroup
              defaultValue="a"
              options={[
                { label: 'A', value: 'a' },
                { label: 'B', value: 'b' },
              ]}
            />
            <Select
              defaultValue="a"
              options={[
                { label: 'Option A', value: 'a' },
                { label: 'Option B', value: 'b' },
              ]}
            />
            <Tabs
              defaultValue="tab1"
              options={[
                { label: 'Tab 1', value: 'tab1' },
                { label: 'Tab 2', value: 'tab2' },
              ]}
            />
          </Space>
        </div>

        <Divider />

        <div className="space-y-4">
          <Title level={3}>Overlays</Title>
          <Space size="md" wrap align="center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">Tooltip</Button>
              </TooltipTrigger>
              <TooltipContent>Tooltip content</TooltipContent>
            </Tooltip>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">Popover content</PopoverContent>
            </Popover>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Dropdown</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Item A</DropdownMenuItem>
                <DropdownMenuItem>Item B</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ToastProvider>
              <Button onClick={() => setToastOpen(true)}>Toast</Button>
              <Toast open={toastOpen} onOpenChange={setToastOpen}>
                <ToastTitle>Saved</ToastTitle>
                <ToastDescription>All good</ToastDescription>
              </Toast>
              <ToastViewport />
            </ToastProvider>
          </Space>
        </div>

        <Divider />

        <div className="space-y-4">
          <Title level={3}>Data</Title>
          <Table
            columns={columns}
            data={[
              { name: 'Jason', role: 'Author' },
              { name: 'BanLi', role: 'UI Kit' },
            ]}
          />

          <Space size="md" wrap align="center">
            <DatePicker value={date} onChange={setDate} />
          </Space>

          <Space size="md" wrap align="center">
            <Upload value={uploadFiles} onChange={setUploadFiles} />
          </Space>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Text tone="muted">Tree（搜索 + 异步加载示例见 Tree.stories）</Text>
              <Tree
                data={[
                  { key: 'p', title: 'Parent', children: [{ key: 'c', title: 'Child' }] },
                  { key: 'o', title: 'Other' },
                ]}
                showSearch
                searchValue={treeSearch}
                onSearchValueChange={setTreeSearch}
              />
            </div>

            <div className="space-y-2">
              <Text tone="muted">Cascader（搜索 + 异步加载示例见 Cascader.stories）</Text>
              <Cascader
                showSearch
                options={[
                  { label: 'Zhejiang', value: 'zj', children: [{ label: 'Hangzhou', value: 'hz' }] },
                  { label: 'Jiangsu', value: 'js', children: [{ label: 'Nanjing', value: 'nj' }] },
                ]}
                value={cascaderValue}
                onChange={(v) => setCascaderValue(v)}
              />
            </div>
          </div>
        </div>

        <Divider />

        <div className="space-y-4">
          <Title level={3}>Form</Title>
          <form
            onSubmit={form.handleSubmit(() => {
              // demo
            })}
            className="max-w-md space-y-4"
          >
            <Form {...form}>
              <FormField
                name="email"
                control={form.control}
                rules={{ required: 'Email is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@cn111.net" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    )
  },
}

