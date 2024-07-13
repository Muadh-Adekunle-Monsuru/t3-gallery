import { db } from "~/server/db";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-5">
        {[...images, ...images].map((obj, index) => (
          <div
            key={obj.id + "-" + index}
            className="flex h-36 w-48 flex-col gap-5"
          >
            <div className="h-24 w-full overflow-hidden border-2 border-gray-600">
              <img src={obj.url} className="h-full w-full object-cover" />
            </div>
            <div>{obj.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
