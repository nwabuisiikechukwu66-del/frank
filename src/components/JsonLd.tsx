export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Frank Kelechi Oge",
    alternateName: ["frankdotdev", "hacker virus"],
    url: "https://frankoge.com",
    image: "https://frankoge.com/images/frank2.png",
    jobTitle: "Software Developer & Founder",
    description:
      "Software Developer, AI integrator, Web3 enthusiast, and Founder of Hackverse Software Solutions. Building intelligent, scalable solutions across Web2, Web3, and AI.",
    worksFor: {
      "@type": "Organization",
      name: "Hackverse Software Solutions",
      url: "https://frankoge.com",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Caritas University",
      address: { "@type": "PostalAddress", addressLocality: "Enugu", addressCountry: "NG" },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Enugu",
      addressCountry: "NG",
    },
    sameAs: [
      "https://github.com/frankdotdev",
      "https://linkedin.com/in/frank-kelechi-oge",
      "https://x.com/frankdotdev",
      "https://instagram.com/frankdotdev",
      "https://medium.com/@frankdotdev",
      "https://tiktok.com/@frankdotdev_",
      "https://facebook.com/frankdotdev",
      "https://linktr.ee/frankdotdev",
    ],
    knowsAbout: [
      "Software Development",
      "Artificial Intelligence",
      "Web3 Development",
      "Blockchain",
      "Python",
      "React",
      "Next.js",
      "FastAPI",
      "Django",
      "Rust",
      "Solidity",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
