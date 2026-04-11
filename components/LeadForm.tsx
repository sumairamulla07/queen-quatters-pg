"use client";

import { useState } from "react";
import { Phone, MessageCircle, CalendarCheck, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { PHONE, waLink } from "@/lib/utils";

const WA_BASE = `https://wa.me/${PHONE}`;

type FormState = {
  name: string;
  phone: string;
  college: string;
  sharing: string;
  moveIn: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  college: "",
  sharing: "",
  moveIn: "",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit phone number";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const formData = {
      access_key: "e28dc8c1-630a-49be-9be9-3c20139d7519",
      subject: "New Room Enquiry – Queen Quatters",
      name: form.name,
      phone: form.phone,
      college: form.college,
      sharing: form.sharing,
      moveIn: form.moveIn,
      message: form.message,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } else {
      alert("Something went wrong. Please try WhatsApp or Call instead.");
    }
  };


  const waMsg = waLink(
    `Hi, I'm ${form.name || "[Name]"}, interested in ${
      form.sharing || "a room"
    } at Queen Quatters. Phone: ${form.phone || "[Phone]"}. ${form.message || ""}`
  );

  if (submitted) {
    return (
      <section
        id="contact"
        className="section-padding gradient-gold"
        aria-label="Contact Queen Quatters"
      >
        <div className="container-narrow flex flex-col items-center justify-center text-center py-10">
          <CheckCircle
            className="w-16 h-16 text-green-500 mb-4"
            aria-hidden="true"
          />
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Enquiry Submitted! 🎉
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            Thank you! We&apos;ll get back to you shortly. You can also reach us
            directly on WhatsApp for instant replies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:+${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Us Now
            </a>
            <a
              href={WA_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-600/40 text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-sm text-muted-foreground underline hover:text-foreground transition-colors"
          >
            Submit another enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="section-padding gradient-gold"
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            Enquire About Rooms Now
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground">
            Fill in your details and we&apos;ll get back to you within hours.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-lg mx-auto bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
          <form onSubmit={handleSubmit} noValidate aria-label="Room enquiry form">
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Your Name <span aria-hidden="true" className="text-rose">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  maxLength={100}
                  required
                  aria-required="true"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full px-3 py-2.5 rounded-lg border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.name ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-destructive mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Phone Number <span aria-hidden="true" className="text-rose">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                    })
                  }
                  maxLength={10}
                  required
                  aria-required="true"
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={`w-full px-3 py-2.5 rounded-lg border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.phone ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-xs text-destructive mt-1" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* College */}
              <div>
                <label
                  htmlFor="college"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  College / Course
                </label>
                <input
                  id="college"
                  type="text"
                  placeholder="e.g. PCCOE – Computer Engineering"
                  value={form.college}
                  onChange={(e) =>
                    setForm({ ...form, college: e.target.value })
                  }
                  maxLength={100}
                  className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
              </div>

              {/* Sharing Type */}
              <div>
                <label
                  htmlFor="sharing"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Preferred Sharing Type
                </label>
                <select
                  id="sharing"
                  value={form.sharing}
                  onChange={(e) =>
                    setForm({ ...form, sharing: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                >
                  <option value="">Select sharing type</option>
                  <option value="Double Sharing">Double Sharing (2 persons)</option>
                  <option value="Triple Sharing">Triple Sharing (3 persons)</option>
                  <option value="4 Sharing">4 Sharing (4 persons)</option>
                </select>
              </div>

              {/* Move-in Date */}
              <div>
                <label
                  htmlFor="moveIn"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Expected Move-in Date
                </label>
                <input
                  id="moveIn"
                  type="date"
                  value={form.moveIn}
                  onChange={(e) =>
                    setForm({ ...form, moveIn: e.target.value })
                  }
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Any Questions?
                </label>
                <textarea
                  id="message"
                  placeholder="Any specific questions or requirements..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  maxLength={500}
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                />
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                  Check Availability
                </button>
                <a
                  href={`tel:+${PHONE}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-primary/30 text-primary text-sm font-medium rounded-lg hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Us
                </a>
                <a
                  href={waMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-green-600/30 text-green-700 text-sm font-medium rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600"
                  aria-label="Send enquiry via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
