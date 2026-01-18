"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface UpvoteButtonProps {
  excuseId: string;
}

export function UpvoteButton({ excuseId }: UpvoteButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await fetch(`/api/excuses/${excuseId}/upvote`, { method: "PATCH" });
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      type="button"
      className="upvote-btn"
      onClick={handleClick}
      disabled={isLoading}
      aria-label="Upvote"
    >
      {isLoading ? "…" : "▲"} Upvote
    </button>
  );
}
