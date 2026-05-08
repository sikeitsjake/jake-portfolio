interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubURL: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubURL,
}: ProjectCardProps) {
  return (
    <a
      href={githubURL}
      target="_blank"
      rel="noopener noreferrer"
      className="block group p-6 border rounded-lg bg-card hover:border-primary transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold group-hover:text-primary">{title}</h3>
        {/* You can add a small icon here later */}
        <span className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </span>
      </div>

      <p className="text-muted-foreground mt-2">{description}</p>

      <div className="flex gap-2 mt-4 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider px-2 py-0.5 border rounded-full bg-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
