export function Footer() {
  return (
    <footer id="contact" className="py-32 md:py-48 px-4 md:px-8 flex flex-col items-center justify-center min-h-[70vh] border-t border-foreground/10 bg-white/[0.01]">
      <div className="flex flex-col items-center text-center w-full max-w-7xl mx-auto mb-24">
        <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-8 font-medium">
          Have an idea?
        </p>
        <a 
          href="mailto:contact@maelbouviersobrino.com"
          className="group relative font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-bold uppercase tracking-tighter hoverable leading-[1.1] block w-full text-center"
        >
          <span className="relative z-10 text-foreground transition-all duration-500 group-hover:text-accent">
            Let's work together
          </span>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent transition-all duration-500 ease-out group-hover:w-full"></span>
        </a>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-xs uppercase tracking-widest font-bold text-foreground/60 border-t border-foreground/10 pt-12">
        <p>© {new Date().getFullYear()} Maël Bouvier Sobrino</p>
        
        <ul className="flex flex-wrap justify-center gap-8">
          <li>
            <a href="https://github.com/Maelbs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hoverable">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hoverable">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
