import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/utils/utils"; // Função utilitária para combinar classes

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, ...props }, ref) => {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(
        "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500",
        "data-[state=checked]:bg-indigo-600 data-[state=unchecked]:bg-zinc-700",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-300",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = "Switch";
