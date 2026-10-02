"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  className,
  ...props
}: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  
  const isPrimary = variant === "primary";

  // Accent color (Purple/Violet) for Primary
  const edgeColorPrimary = "bg-[linear-gradient(to_left,#4c1d95_0%,#6d28d9_8%,#6d28d9_92%,#4c1d95_100%)]";
  // Light monochrome (Foreground) for Secondary
  const edgeColorSecondary = "bg-[linear-gradient(to_left,#737373_0%,#a3a3a3_8%,#a3a3a3_92%,#737373_100%)]";

  const edgeColor = isPrimary ? edgeColorPrimary : edgeColorSecondary;
  const frontColor = isPrimary ? "bg-accent text-white" : "bg-foreground text-background";

  const content = (
    <>
      <span className="absolute top-0 left-0 w-full h-full rounded-xl bg-black/40 transform translate-y-[2px] transition-transform duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] group-hover/btn:translate-y-[4px] group-hover/btn:duration-[250ms] group-hover/btn:ease-[cubic-bezier(.3,.7,.4,1.5)] group-active/btn:translate-y-[1px] group-active/btn:duration-[34ms] will-change-transform"></span>

      <span className={cn("absolute top-0 left-0 w-full h-full rounded-xl", edgeColor)}></span>

      <span className={cn("block relative w-full h-full px-[24px] py-[12px] rounded-xl text-xs font-bold uppercase tracking-widest transform -translate-y-[4px] transition-transform duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] group-hover/btn:-translate-y-[6px] group-hover/btn:duration-[250ms] group-hover/btn:ease-[cubic-bezier(.3,.7,.4,1.5)] group-active/btn:-translate-y-[2px] group-active/btn:duration-[34ms] will-change-transform flex items-center justify-center gap-2", frontColor)}>
        {children}
      </span>
    </>
  );

  const containerClasses = cn(
    "group/btn hoverable relative border-none bg-transparent p-0 cursor-pointer outline-offset-4 select-none touch-manipulation transition-[filter] duration-[250ms] hover:brightness-110 inline-block w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:brightness-100",
    className
  );

  if (href) {
    return (
      <a href={href} className={containerClasses} {...(props as any)}>
        {content}
      </a>
    );
  }

  return (
    <button className={containerClasses} {...(props as any)}>
      {content}
    </button>
  );
}
