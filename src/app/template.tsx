"use client";
import { useState } from "react";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingOverlay onComplete={() => setLoading(false)} />}
      {children}
    </>
  );
}
