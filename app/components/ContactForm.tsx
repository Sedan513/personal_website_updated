"use client";

import { useActionState, useEffect, useMemo, useState } from "react";

type EmailJsConfig = {
  publicKey: string;
  serviceId: string;
  templateId: string;
};

type EmailJsTemplateParams = {
  from_name: string;
  from_email: string;
  message: string;
};

type EmailJsResponse = {
  status: number;
  text: string;
};

type EmailJsSdk = {
  init: (publicKey: string) => void;
  send: (
    serviceId: string,
    templateId: string,
    templateParams: EmailJsTemplateParams,
  ) => Promise<EmailJsResponse>;
};

declare global {
  interface Window {
    EMAILJS_CONFIG?: EmailJsConfig;
    emailjs?: EmailJsSdk;
    lucide?: {
      createIcons: (options?: { icons?: NodeListOf<Element> | Element[] }) => void;
    };
  }
}

const isValidEmailJsConfig = (config: unknown): config is EmailJsConfig => {
  if (!config || typeof config !== "object") {
    return false;
  }

  const candidate = config as Record<string, unknown>;

  return (
    typeof candidate.publicKey === "string" &&
    typeof candidate.serviceId === "string" &&
    typeof candidate.templateId === "string"
  );
};

export default function ContactForm() {
  const [emailJsConfig, setEmailJsConfig] = useState<EmailJsConfig | null>(null);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [, formAction, isSubmitting] = useActionState(async () => {
    if (!window.emailjs) {
      window.alert("Contact form is temporarily unavailable. Please email me directly.");
      return null;
    }

    if (!emailJsConfig) {
      window.alert("Contact form is not configured on this deployment yet. Please email me directly.");
      return null;
    }

    try {
      const response = await window.emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formValues,
      );
      console.log("SUCCESS!", response.status, response.text);
      setToastMessage("Message sent successfully.");
      setFormValues({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.log("FAILED...", error);
      window.alert("Failed to send message. Please try again.");
    }

    return null;
  }, null);

  const toastClassName = useMemo(
    () => (isToastVisible ? "is-visible" : ""),
    [isToastVisible],
  );

  useEffect(() => {
    const initializeEmailJs = async () => {
      if (!window.emailjs) {
        console.warn("EmailJS SDK is not available on the window object");
        //console.error("EmailJS SDK failed to load");
        return;
      }

      const inlineConfig = window.EMAILJS_CONFIG;
      if (isValidEmailJsConfig(inlineConfig)) {
        window.emailjs.init(inlineConfig.publicKey);
        setEmailJsConfig(inlineConfig);
        return;
      }

      try {
        const response = await fetch("/api/config");
        if (!response.ok) {
          throw new Error(`Config endpoint returned ${response.status}`);
        }

        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          throw new Error("Config endpoint did not return JSON");
        }

        const config = await response.json();
        if (!isValidEmailJsConfig(config)) {
          throw new Error("Missing contact form configuration");
        }

        window.emailjs.init(config.publicKey);
        setEmailJsConfig(config);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        console.warn("Skipping server config for contact form:", message);
      }
    };

    initializeEmailJs();
  }, []);

  useEffect(() => {
    let toastTimeoutId: number | undefined;
    let hideTimeoutId: number | undefined;

    if (toastMessage) {
      setIsToastVisible(true);

      if (window.lucide) {
        window.lucide.createIcons();
      }

      toastTimeoutId = window.setTimeout(() => {
        setIsToastVisible(false);
        hideTimeoutId = window.setTimeout(() => {
          setToastMessage("");
        }, 220);
      }, 3000);
    }

    return () => {
      if (toastTimeoutId) {
        window.clearTimeout(toastTimeoutId);
      }
      if (hideTimeoutId) {
        window.clearTimeout(hideTimeoutId);
      }
    };
  }, [toastMessage]);

  return (
    <>
      <div id="toast-root" className={toastClassName} aria-live="polite" aria-atomic="true">
        {toastMessage ? (
          <div className="toast toast-success" role="status">
            <span className="toast-icon" aria-hidden="true">
              <i data-lucide="check" />
            </span>
            <span className="toast-message">{toastMessage}</span>
          </div>
        ) : null}
      </div>

      <form id="contact-form" className="contact-form" action={formAction}>
        <h3 className="contact-subheading">Send Me a Message</h3>

        <div className="form-group">
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your Name"
            required
            value={formValues.from_name}
            onChange={(event) =>
              setFormValues((current) => ({
                ...current,
                from_name: event.target.value,
              }))
            }
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Your Email"
            required
            value={formValues.from_email}
            onChange={(event) =>
              setFormValues((current) => ({
                ...current,
                from_email: event.target.value,
              }))
            }
          />
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            value={formValues.message}
            onChange={(event) =>
              setFormValues((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}
