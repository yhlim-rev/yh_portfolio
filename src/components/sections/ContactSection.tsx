"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialIcon from "@/components/ui/SocialIcon";
import Button from "@/components/ui/Button";

const contactInfo = [
  { icon: Mail, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, value: siteConfig.location, href: null },
  { icon: Globe, value: siteConfig.website, href: `https://${siteConfig.website}` },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., Resend, Formspree, Netlify Forms)
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full bg-stone-900/60 border border-stone-800 rounded px-3 py-2.5 text-stone-300 text-sm placeholder:text-stone-600 focus:outline-none focus:border-copper-700 focus:ring-1 focus:ring-copper-700/30 transition-colors";

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: contact info */}
        <div className="lg:col-span-1">
          <SectionTitle className="mb-6">Contact Me</SectionTitle>
          <div className="space-y-4 mb-8">
            {contactInfo.map(({ icon: Icon, value, href }) => (
              <div key={value} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-copper-600">
                  <Icon size={14} />
                </div>
                {href ? (
                  <a
                    href={href}
                    className="text-stone-400 hover:text-copper-400 text-sm transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-stone-400 text-sm">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Middle: form */}
        <div className="lg:col-span-1">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                className={inputClass}
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className={inputClass}
                placeholder="Your Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <input
              className={inputClass}
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              className={`${inputClass} resize-none h-28`}
              placeholder="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            <Button
              variant="primary"
              size="md"
              onClick={handleSubmit}
              className="w-full justify-center"
            >
              {sent ? "Message Sent!" : (
                <>
                  Send Message <Send size={14} />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Right: let's connect */}
        <div className="lg:col-span-1 flex flex-col justify-end lg:justify-start gap-4">
          <div>
            <h3 className="font-display text-xl text-stone-200 mb-1">Let&apos;s Connect</h3>
            <p className="text-stone-600 text-xs">Follow me on social media</p>
          </div>
          <div className="flex gap-2">
            <SocialIcon type="github" href={siteConfig.socials.github} />
            <SocialIcon type="linkedin" href={siteConfig.socials.linkedin} />
            <SocialIcon type="email" href={siteConfig.socials.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
