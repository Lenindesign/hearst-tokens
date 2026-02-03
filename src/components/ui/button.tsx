import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "shadow",
        destructive: "shadow-sm",
        outline: "shadow-sm",
        secondary: "shadow-sm",
        ghost: "",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Get variant-specific styles using CSS variables
function getVariantStyles(variant: string | null | undefined): React.CSSProperties {
  switch (variant) {
    case 'destructive':
      return {
        backgroundColor: 'var(--destructive)',
        color: 'var(--destructive-foreground)',
      }
    case 'outline':
      return {
        border: '1px solid var(--input)',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }
    case 'secondary':
      return {
        backgroundColor: 'var(--secondary)',
        color: 'var(--secondary-foreground)',
      }
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: 'var(--foreground)',
      }
    case 'link':
      return {
        backgroundColor: 'transparent',
        color: 'var(--primary)',
      }
    default: // 'default'
      return {
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
      }
  }
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const variantStyles = getVariantStyles(variant)
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={{
          borderRadius: 'var(--radius)',
          ...variantStyles,
          ...style,
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
