import Script from "next/script";

export default function ClientLibraries() {
  return (
    <>
      <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
    </>
  );
}
