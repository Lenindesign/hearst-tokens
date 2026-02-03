import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, style, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        style={{
          display: 'flex',
          height: 36,
          width: '100%',
          borderRadius: 'var(--radius, 4px)',
          border: '1px solid var(--input, #e5e5e5)',
          backgroundColor: 'var(--background, #ffffff)',
          padding: '4px 12px',
          fontSize: 14,
          color: 'var(--foreground, #222222)',
          outline: 'none',
          ...style,
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
