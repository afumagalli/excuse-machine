import { prisma } from "@/lib/prisma";
import { SubmitExcuseForm } from "@/app/components/SubmitExcuseForm";
import { UpvoteButton } from "@/app/components/UpvoteButton";

export default async function Home() {
  const excuses = await prisma.excuse.findMany({
    orderBy: { upvotes: "desc" },
  });

  return (
    <main>
      <header style={{ marginBottom: "2rem" }}>
        <h1>Welcome to The Excuse Machine</h1>
        <p>Submit your best excuses, see what others have come up with.</p>
      </header>

      <section aria-label="Submit an excuse" style={{ marginBottom: "3rem" }}>
        <SubmitExcuseForm />
      </section>

      <section aria-label="Excuses ranked by votes">
        <h2>Excuses</h2>
        {excuses.length === 0 ? (
          <p className="excuse-list-empty">
            No excuses yet. Be the first to submit one!
          </p>
        ) : (
          <ul className="excuse-list" role="list">
            {excuses.map((excuse) => (
              <li key={excuse.id} className="excuse-item">
                <span className="excuse-text">{excuse.text}</span>
                <span className="excuse-votes">{excuse.upvotes} votes</span>
                <UpvoteButton excuseId={excuse.id} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
