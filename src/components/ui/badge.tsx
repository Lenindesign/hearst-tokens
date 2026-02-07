import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "shadow",
        secondary: "",
        destructive: "shadow",
        outline: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Get variant-specific styles using CSS variables
function getVariantStyles(variant: string | null | undefined): React.CSSProperties {
  switch (variant) {
    case 'secondary':
      return {
        backgroundColor: 'var(--secondary)',
        color: 'var(--secondary-foreground)',
        border: '1px solid transparent',
      }
    case 'destructive':
      return {
        backgroundColor: 'var(--destructive)',
        color: 'var(--destructive-foreground)',
        border: '1px solid transparent',
      }
    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: 'var(--foreground)',
        border: '1px solid var(--border)',
      }
    default: // 'default'
      return {
        backgroundColor: 'var(--accent)',
        color: 'var(--accent-foreground)',
        border: '1px solid transparent',
      }
  }
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, style, ...props }: BadgeProps) {
  const variantStyles = getVariantStyles(variant)
  
  return (
    <div 
      className={cn(badgeVariants({ variant }), className)} 
      style={{
        borderRadius: 'var(--radius)',
        ...variantStyles,
        ...style,
      }}
      {...props} 
    />
  )
}

export { Badge, badgeVariants }
