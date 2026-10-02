import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full px-4 md:px-8 py-8 border-t border-foreground/10 bg-background/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest font-bold text-foreground/50">
        <p>Maël Bouvier Sobrino</p>
        
        <div className="flex items-center gap-4 text-right">
          <span>{currentYear}</span>
          <span className="w-1 h-1 rounded-full bg-foreground/30"></span>
          <span>Next.js • Tailwind CSS • PHP</span>
        </div>
      </div>
    </footer>
  );
}
