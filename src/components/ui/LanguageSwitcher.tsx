"use client";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
export function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params.locale as string) || "en";
  const changeLanguage = (locale: "fr" | "en" | "es") => {
    if (currentLocale === locale) return;
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale }
      );
    });
  };
  const locales: Array<{ code: "fr" | "en" | "es", label: string }> = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "es", label: "ES" }
  ];
  return (
    <div className={`flex items-center gap-3 text-xs font-bold uppercase tracking-widest ${isPending ? 'opacity-50 pointer-events-none' : ''} transition-opacity`}>
      {locales.map((loc, index) => (
        <div key={loc.code} className="flex items-center gap-3">
          <button
            onClick={() => changeLanguage(loc.code)}
            disabled={isPending}
            className={`transition-colors hoverable ${
              currentLocale === loc.code 
                ? "text-accent" 
                : "text-foreground/50 hover:text-foreground"
            }`}
          >
            {loc.label}
          </button>
          {index < locales.length - 1 && (
            <span className="w-1 h-1 rounded-full bg-foreground/20"></span>
          )}
        </div>
      ))}
    </div>
  );
}
