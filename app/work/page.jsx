import Work from "@/components/Work";

export const metadata = {
  title: "Work — Afzal",
  description:
    "Selected AI systems: diffusion try-on, news summarization pipelines, RAG assistants, and discovery engines.",
};

export default function WorkPage() {
  return (
    <main className="relative pt-24">
      <Work />
    </main>
  );
}
