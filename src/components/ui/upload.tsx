import * as React from 'react'
import { useDropzone, type Accept } from 'react-dropzone'
import { cn } from '../../lib/cn'

export type UploadProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'> & {
  disabled?: boolean
  multiple?: boolean
  accept?: Accept
  maxSize?: number
  /**
   * 文件拖拽/选择后的回调（仅 acceptedFiles）
   */
  onDrop?: (files: File[]) => void
  children?: React.ReactNode
}

export function Upload({
  disabled = false,
  multiple = true,
  accept,
  maxSize,
  onDrop,
  className,
  children,
  ...props
}: UploadProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    disabled,
    multiple,
    accept,
    maxSize,
    onDrop: (acceptedFiles) => {
      onDrop?.(acceptedFiles)
    },
  })

  const inputProps = getInputProps({ disabled })

  return (
    <div
      {...getRootProps({
        role: 'button',
        'aria-disabled': disabled || undefined,
        className: cn(
          'flex min-h-28 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl2 border border-dashed bg-aivent-panel px-4 py-4 text-center outline-none transition',
          'focus-visible:ring-2 focus-visible:ring-white/20',
          disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-white/5',
          isDragActive ? 'border-aivent-secondary/70 bg-white/5' : 'border-aivent-border',
          isDragReject ? 'border-red-500/70' : '',
          className
        ),
        ...props,
      })}
    >
      <input {...inputProps} />
      {children ?? (
        <>
          <div className="text-sm font-semibold text-aivent-text">上传文件</div>
          <div className="text-xs text-aivent-muted">
            {disabled ? '当前不可上传' : isDragActive ? '松开以上传' : '拖拽文件到此处，或点击选择文件'}
          </div>
        </>
      )}
    </div>
  )
}
