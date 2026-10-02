"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Contact() {
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
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setMessage("Message sent successfully! I will get back to you soon.");
      } else {
        setStatus("error");
        setMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send message. Make sure the site is hosted on a PHP server.");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto min-h-[70vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">
        {/* Left Column: Text & Socials */}
        <div className="flex flex-col">
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-6 font-medium">
            Have an idea?
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-[5.5rem] font-bold uppercase tracking-tighter leading-[1.1] text-foreground mb-12">
            Let's work together
          </h2>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Button href="https://www.linkedin.com/" target="_blank" variant="secondary">
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

        {/* Right Column: Form */}
        <div className="w-full bg-foreground/[0.02] border border-foreground/10 p-8 md:p-10 rounded-3xl shadow-2xl shadow-black/5 backdrop-blur-md">
          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-2xl text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
              <p className="text-foreground/70">{message}</p>
              <button onClick={() => setStatus("idle")} className="mt-8 text-sm uppercase tracking-widest text-accent font-bold hover:underline">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-foreground/70">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    disabled={status === "loading"}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-foreground/70">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    disabled={status === "loading"}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-foreground/70">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  disabled={status === "loading"}
                  rows={4}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              {status === "error" && (
                <p className="text-red-500 text-sm font-medium">{message}</p>
              )}

              <div className="mt-2 flex justify-end">
                <Button type="submit" variant="primary" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
