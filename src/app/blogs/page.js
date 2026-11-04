import PageHeader from "@/components/PageHeader";
import { BookOpen } from "lucide-react";

export default function Blogs() {
  return (
    <div className="page-stack">
      <PageHeader title="Blogs" description="Notes and perspectives on computing and research." />
      <section className="empty-state">
        <span className="empty-state-icon"><BookOpen size={28} aria-hidden="true" /></span>
        <h2>Coming soon</h2>
        <p>I am currently working on writing some interesting blogs. Stay tuned!</p>
      </section>
    </div>
  );
}
