import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value = 0, ...props }, ref) => {
  const [currentValue, setCurrentValue] = React.useState(0);

  React.useEffect(() => {
    const interval = 16.67;
    const step = 1.64;

    const updateValue = () => {
      if (value)
        setCurrentValue((prev) => {
          if (prev < value) {
            return Math.min(prev + step, value);
          } else if (prev > value) {
            return Math.max(prev - step, value);
          } else {
            return prev;
          }
        });
    };

    const intervalId = setInterval(updateValue, interval);

    return () => clearInterval(intervalId);
  }, [value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-6 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="flex pr-[15px] text-[#022C2A] text-sm font-semibold items-center justify-end h-full w-full flex-1 bg-primary transition-transform duration-500 ease-linear rounded-full bg-gradient-to-r from-[#10C78F] to-[#42F9C1]"
        style={{ transform: `translateX(-${100 - currentValue}%)` }}
      >
        {currentValue.toFixed(1).replace(".", ",")}%
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
