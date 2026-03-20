import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact — Link Up",
  description:
    "Get in touch with Frank Kelechi Oge. Available for freelance projects, full-time positions, and interesting collaborations.",
  alternates: { canonical: "https://frankoge.com/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
