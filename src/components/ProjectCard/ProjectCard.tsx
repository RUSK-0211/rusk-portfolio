import type { Project } from "@/types"

export default function ProjectCard({
    thumb,
    thumbImage,
    name,
    desc,
    tags,
    techStack,
    role,
    period,
    teamSize,
    links,
}: Project) {
    return (
        <div className="project-card">
            <div
                className={
                    thumbImage
                        ? "project-card-thumb project-card-thumb--image"
                        : "project-card-thumb"
                }
            >
                {thumbImage ? (
                    <img
                        src={thumbImage}
                        alt={`${name} のロゴ`}
                        className="project-card-thumb-img"
                    />
                ) : (
                    thumb
                )}
            </div>
            <div className="project-card-body">
                <div className="project-card-title">{name}</div>

                <p className="project-card-desc">{desc}</p>

                <div className="project-card-meta">
                    <div><strong>役割:</strong> {role}</div>
                    <div><strong>期間:</strong> {period}</div>
                    {teamSize && <div><strong>チーム人数:</strong> {teamSize}人</div>}
                </div>

                <div className="project-card-tags">
                    {tags.map((t) => (
                        <span key={t} className="project-card-tag">{t}</span>
                    ))}
                </div>

                <div className="project-card-tech">
                    {techStack.map((t) => (
                        <span key={t} className="project-card-tech-item">{t}</span>
                    ))}
                </div>

                <div className="project-card-links">
                    {links.map((l) => (
                        <a key={l.label} href={l.href} className="project-card-link">
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
