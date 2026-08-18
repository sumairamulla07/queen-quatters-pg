"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwG6VNifVQC_pahfCx5odc_Qhp7jpaHUWS9OXQsD8L_5xmOh7UyjlLurTV7SXUIZmLSOw/exec";

// Helper: convert File to base64 string
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]); // strip "data:...;base64,"
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function InformationPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isMinor, setIsMinor] = useState(false);

  const [form, setForm] = useState({
    fullName: "", contactNumber: "", dob: "", emergencyContact: "",
    fatherName: "", fatherContact: "", fatherOccupation: "",
    motherName: "", motherContact: "",
    street1: "", street2: "", city: "", state: "", pinCode: "",
    guardianName: "", guardianContact: "", guardianAddress: "",
    residentType: "", roomSharing: "", agreement: "",
  });

  const photoRef        = useRef<HTMLInputElement>(null);
  const aadharRef       = useRef<HTMLInputElement>(null);
  const panRef          = useRef<HTMLInputElement>(null);
  const certRef         = useRef<HTMLInputElement>(null);
  const guardianPhotoRef  = useRef<HTMLInputElement>(null);
  const guardianAadharRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

  try {
      async function encodeFile(ref: React.RefObject<HTMLInputElement>) {
        const file = ref.current?.files?.[0];
        if (!file) return { data: null, ext: null, mime: null };
        const base64 = await fileToBase64(file);
        const ext = file.name.split(".").pop();
        return { data: base64, ext, mime: file.type };
      }

      const passport    = await encodeFile(photoRef);
      const aadhar      = await encodeFile(aadharRef);
      const panOrCert   = await encodeFile(isMinor ? certRef : panRef);
      const guardPhoto  = await encodeFile(guardianPhotoRef);
      const guardAadhar = await encodeFile(guardianAadharRef);

      const payload = {
        ...form,
        passportPhoto:      passport.data,
        passportPhotoExt:   passport.ext,
        passportPhotoMime:  passport.mime,
        aadharCard:         aadhar.data,
        aadharCardExt:      aadhar.ext,
        aadharCardMime:     aadhar.mime,
        panOrCert:          panOrCert.data,
        panOrCertExt:       panOrCert.ext,
        panOrCertMime:      panOrCert.mime,
        guardianPhoto:      guardPhoto.data,
        guardianPhotoExt:   guardPhoto.ext,
        guardianPhotoMime:  guardPhoto.mime,
        guardianAadhar:     guardAadhar.data,
        guardianAadharExt:  guardAadhar.ext,
        guardianAadharMime: guardAadhar.mime,
      };

      // Use a form POST via hidden iframe to avoid CORS
      const form_el = document.createElement("form");
      form_el.method = "POST";
      form_el.action = GOOGLE_SCRIPT_URL;
      form_el.target = "hidden_iframe";

      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "data";
      input.value = JSON.stringify(payload);
      form_el.appendChild(input);

      const iframe = document.createElement("iframe");
      iframe.name = "hidden_iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      document.body.appendChild(form_el);
      form_el.submit();

      // Clean up after submit
      setTimeout(() => {
        document.body.removeChild(form_el);
        document.body.removeChild(iframe);
      }, 3000);

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 gradient-rose min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="text-5xl mb-4">✅</div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-3">Information Submitted!</h1>
            <p className="text-muted-foreground mb-6">Thank you. Your resident information and documents have been received successfully.</p>
            <Link href="/" className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 gradient-rose min-h-screen">
        <div className="container-narrow px-4 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
              ← Back to Home
            </Link>
            <p className="text-sm font-semibold uppercase tracking-widest text-rose">Queen Quatters</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">Resident Information Form</h1>
            <div className="gold-divider" />
            <p className="text-muted-foreground mt-4 text-sm">Please fill in all details accurately. Documents will be securely saved.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-2xl shadow-sm border border-border p-6 md:p-10 space-y-8">

            {/* Personal Info */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                  <input name="fullName" required value={form.fullName} onChange={handleChange} placeholder="Enter full name" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Date of Birth *</label>
                  <input name="dob" required type="date" value={form.dob} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Contact Number *</label>
                  <input name="contactNumber" required value={form.contactNumber} onChange={handleChange} placeholder="10-digit mobile number" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Emergency Contact Number *</label>
                  <input name="emergencyContact" required value={form.emergencyContact} onChange={handleChange} placeholder="Emergency contact number" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Resident Type *</label>
                  <select name="residentType" required value={form.residentType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select type</option>
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Room Sharing *</label>
                  <select name="roomSharing" required value={form.roomSharing} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select sharing type</option>
                    <option value="2 Sharing">2 Sharing</option>
                    <option value="3 Sharing">3 Sharing</option>
                    <option value="4 Sharing">4 Sharing</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1">11-Month Agreement *</label>
                  <select name="agreement" required value={form.agreement} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select option</option>
                    <option value="Yes">Yes, I agree to 11-month agreement</option>
                    <option value="No">No, not required</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Father */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Father's Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Father's Name *</label>
                  <input name="fatherName" required value={form.fatherName} onChange={handleChange} placeholder="Father's full name" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Father's Contact Number *</label>
                  <input name="fatherContact" required value={form.fatherContact} onChange={handleChange} placeholder="Father's mobile number" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1">Father's Occupation *</label>
                  <input name="fatherOccupation" required value={form.fatherOccupation} onChange={handleChange} placeholder="e.g. Business, Government Job, Farmer" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
            </section>

            {/* Mother */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Mother's Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Mother's Name *</label>
                  <input name="motherName" required value={form.motherName} onChange={handleChange} placeholder="Mother's full name" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Mother's Contact Number *</label>
                  <input name="motherContact" required value={form.motherContact} onChange={handleChange} placeholder="Mother's mobile number" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
            </section>

            {/* Address */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Permanent Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1">Street Address Line 1 *</label>
                  <input name="street1" required value={form.street1} onChange={handleChange} placeholder="House no., Street, Area" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1">Street Address Line 2</label>
                  <input name="street2" value={form.street2} onChange={handleChange} placeholder="Landmark, Colony (optional)" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">City *</label>
                  <input name="city" required value={form.city} onChange={handleChange} placeholder="City" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">State *</label>
                  <input name="state" required value={form.state} onChange={handleChange} placeholder="State" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">PIN Code *</label>
                  <input name="pinCode" required value={form.pinCode} onChange={handleChange} placeholder="6-digit PIN code" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
            </section>

            {/* Guardian */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-1 pb-2 border-b border-border">Local Guardian in Pune <span className="text-muted-foreground text-base font-normal">(if any)</span></h2>
              <p className="text-xs text-muted-foreground mb-4">Fill this only if there is a guardian staying in Pune</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Guardian's Name</label>
                  <input name="guardianName" value={form.guardianName} onChange={handleChange} placeholder="Guardian's full name" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Guardian's Contact</label>
                  <input name="guardianContact" value={form.guardianContact} onChange={handleChange} placeholder="Guardian's mobile number" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1">Guardian's Address in Pune</label>
                  <textarea name="guardianAddress" value={form.guardianAddress} onChange={handleChange} placeholder="Guardian's full address in Pune" rows={2} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                </div>
              </div>
            </section>

            {/* Documents */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-1 pb-2 border-b border-border">Document Uploads</h2>
              <p className="text-xs text-muted-foreground mb-4">Accepted: JPG, PNG, PDF — Max 10MB each. Files are securely saved to Google Drive.</p>

              <div className="mb-4">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer">
                  <input type="checkbox" checked={isMinor} onChange={(e) => setIsMinor(e.target.checked)} className="w-4 h-4 accent-primary" />
                  Resident is below 18 years of age
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border border-border rounded-xl p-4">
                  <label className="block text-sm font-medium text-foreground mb-1">Passport Size Photo *</label>
                  <p className="text-xs text-muted-foreground mb-2">Recent passport size photo of resident</p>
                  <input ref={photoRef} type="file" accept="image/jpg,image/jpeg,image/png" className="w-full text-sm text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer" />
                </div>

                <div className="border border-border rounded-xl p-4">
                  <label className="block text-sm font-medium text-foreground mb-1">Aadhar Card *</label>
                  <p className="text-xs text-muted-foreground mb-2">Resident's Aadhar card (both sides if possible)</p>
                  <input ref={aadharRef} type="file" accept=".pdf,image/jpg,image/jpeg,image/png" className="w-full text-sm text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer" />
                </div>

                {!isMinor ? (
                  <div className="border border-border rounded-xl p-4">
                    <label className="block text-sm font-medium text-foreground mb-1">PAN Card *</label>
                    <p className="text-xs text-muted-foreground mb-2">Required for residents above 18</p>
                    <input ref={panRef} type="file" accept=".pdf,image/jpg,image/jpeg,image/png" className="w-full text-sm text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer" />
                  </div>
                ) : (
                  <div className="border border-border rounded-xl p-4">
                    <label className="block text-sm font-medium text-foreground mb-1">Admission / CAP Certificate *</label>
                    <p className="text-xs text-muted-foreground mb-2">Required for residents below 18</p>
                    <input ref={certRef} type="file" accept=".pdf,image/jpg,image/jpeg,image/png" className="w-full text-sm text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer" />
                  </div>
                )}

                {form.guardianName && (
                  <>
                    <div className="border border-border rounded-xl p-4">
                      <label className="block text-sm font-medium text-foreground mb-1">Guardian's Passport Photo</label>
                      <p className="text-xs text-muted-foreground mb-2">Passport size photo of local guardian</p>
                      <input ref={guardianPhotoRef} type="file" accept="image/jpg,image/jpeg,image/png" className="w-full text-sm text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer" />
                    </div>
                    <div className="border border-border rounded-xl p-4">
                      <label className="block text-sm font-medium text-foreground mb-1">Guardian's Aadhar Card</label>
                      <p className="text-xs text-muted-foreground mb-2">Local guardian's Aadhar card</p>
                      <input ref={guardianAadharRef} type="file" accept=".pdf,image/jpg,image/jpeg,image/png" className="w-full text-sm text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer" />
                    </div>
                  </>
                )}
              </div>
            </section>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Uploading & Submitting... Please wait" : "Submit Resident Information"}
            </button>

            <p className="text-xs text-center text-muted-foreground">
              Your documents are securely stored in Google Drive. Only the PG owner has access.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
