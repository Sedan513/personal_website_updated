import Script from "next/script";

export default function ClientLibraries() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        strategy="afterInteractive"
      />
      <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
    </>
  );
}
