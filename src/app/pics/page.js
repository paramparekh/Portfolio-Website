import PageHeader from "@/components/PageHeader";
import { Camera } from "lucide-react";

export default function Pics() {
  return (
    <div className="page-stack">
      <PageHeader title="Pics" description="Moments beyond research." />
      <section className="empty-state">
        <span className="empty-state-icon"><Camera size={28} aria-hidden="true" /></span>
        <h2>Coming soon</h2>
        <p>A gallery of my moments and photography will be available here soon.</p>
      </section>
    </div>
  );
}
