export function FeaturedBadge({ featured }: { featured: boolean }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        featured ? "bg-primary/15 text-primary" : "bg-blue-100 text-blue-50"
      }`}
    >
      {featured ? "Featured" : "No"}
    </span>
  );
}
