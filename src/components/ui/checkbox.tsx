import * as React from "react";
import * as CheckboxPrimitive from "../primitives/checkbox";

import { FontAwesome6 } from "@expo/vector-icons";
import { Platform } from "react-native";
import { cn } from "../../lib/utils";

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<CheckboxPrimitive.Root
			ref={ref}
			className={cn(
				"web:peer native:h-[20] native:w-[20] native:rounded h-4 w-4 shrink-0 rounded-sm border border-primary disabled:cursor-not-allowed disabled:opacity-50 web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
				props.checked && "bg-primary",
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				className={cn("h-full w-full items-center justify-center")}
			>
				<FontAwesome6
					name="check"
					size={12}
					strokeWidth={Platform.OS === "web" ? 2.5 : 3.5}
					className="text-primary-foreground"
				/>
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
