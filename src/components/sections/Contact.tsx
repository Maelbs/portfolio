"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
export function Contact() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setMessage(t("successDesc"));
      } else {
        setStatus("error");
        setMessage(result.error || t("error"));
      }
    } catch (error) {
      setStatus("error");
      setMessage(t("error"));
    }
  }
  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto min-h-[70vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">
        <div className="flex flex-col">
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-6 font-medium">
            {t("idea")}
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold uppercase tracking-tighter leading-[1.1] text-foreground mb-12 break-words">
            {t("title")}
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button href="https://fr.linkedin.com/in/maël-bouvier-sobrino-6aaa20364" target="_blank" variant="secondary">
              <i className="fa-brands fa-linkedin text-lg" />
              LinkedIn
            </Button>
            <Button href="https://github.com/Maelbs" target="_blank" variant="secondary">
              <i className="fa-brands fa-github text-lg" />
              GitHub
            </Button>
            <Button href="mailto:maelbouviersobrino@hotmail.com" variant="secondary">
              <i className="fa-solid fa-envelope text-lg" />
              Email
            </Button>
          </div>
        </div>
        <div className="relative w-full p-8 md:p-12 rounded-[2.5rem] bg-foreground/[0.02] border border-foreground/10 shadow-2xl shadow-black/5 backdrop-blur-xl overflow-hidden group hover:border-accent/30 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen"></div>
          <div className="relative z-10">
            {status === "success" ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(var(--accent),0.3)]">
                  <i className="fas fa-check text-3xl text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t("success")}</h3>
                <p className="text-foreground/70">{message}</p>
                <button onClick={() => setStatus("idle")} className="mt-8 text-sm uppercase tracking-widest text-accent font-bold hover:underline">
                  {t("sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 group/input">
                    <label htmlFor="name" className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-foreground/50 transition-colors group-focus-within/input:text-accent pl-1">{t("name")}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className="fa-regular fa-user text-foreground/40 group-focus-within/input:text-accent transition-colors"></i>
                      </div>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        disabled={status === "loading"}
                        className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl pl-11 pr-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent focus:bg-foreground/[0.05] hover:border-foreground/20 hover:bg-foreground/[0.04] disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 group/input">
                    <label htmlFor="email" className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-foreground/50 transition-colors group-focus-within/input:text-accent pl-1">{t("email")}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className="fa-regular fa-envelope text-foreground/40 group-focus-within/input:text-accent transition-colors"></i>
                      </div>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        disabled={status === "loading"}
                        className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl pl-11 pr-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent focus:bg-foreground/[0.05] hover:border-foreground/20 hover:bg-foreground/[0.04] disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 group/input">
                  <label htmlFor="message" className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-foreground/50 transition-colors group-focus-within/input:text-accent pl-1">{t("message")}</label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 flex pointer-events-none">
                      <i className="fa-regular fa-comment-dots text-foreground/40 group-focus-within/input:text-accent transition-colors"></i>
                    </div>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      disabled={status === "loading"}
                      rows={5}
                      className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl pl-11 pr-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent focus:bg-foreground/[0.05] hover:border-foreground/20 hover:bg-foreground/[0.04] resize-none disabled:opacity-50"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium pl-1">{message}</p>
                )}
                <div className="mt-4 flex justify-end">
                  <Button type="submit" variant="primary" disabled={status === "loading"} className="w-full sm:w-auto min-w-[160px]">
                    {status === "loading" ? (
                      <i className="fa-solid fa-circle-notch fa-spin"></i>
                    ) : (
                      <>
                        {t("send")}
                        <i className="fa-solid fa-paper-plane group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
