import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "gradient"
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-morphism rounded-xl p-6 transition-all duration-200",
          {
            "glass-morphism-hover": variant === "hover",
            "gradient-border": variant === "gradient",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = "GlassCard"

export { GlassCard }