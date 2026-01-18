"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SubmitExcuseForm() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const trimmed = text.trim();
    if (!trimmed) {
      setError("Excuse text is required");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/excuses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setText("");
        router.refresh();
      } else if (res.status === 400 && typeof data.error === "string") {
        setError(data.error);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="excuse-form" onSubmit={handleSubmit}>
      <label htmlFor="excuse-text">Excuse</label>
      <textarea
        id="excuse-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        maxLength={500}
        placeholder="Your creative excuse for a late assignment..."
        rows={3}
        disabled={isSubmitting}
      />
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit excuse"}
      </button>
    </form>
  );
}
