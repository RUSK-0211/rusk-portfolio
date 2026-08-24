import type { Project } from "@/types"

export default function ProjectCard({
    thumb,
    thumbImage,
    thumbVariant = "icon",
    name,
    desc,
    content,
    tags,
    techStack,
    role,
    period,
    teamSize,
    links,
}: Project) {
    const isBanner = thumbVariant === "banner"

    const cardClassName = isBanner
        ? "project-card project-card--banner"
        : "project-card"

    const thumbClassName = [
        "project-card-thumb",
        thumbImage && "project-card-thumb--image",
    ]
        .filter(Boolean)
        .join(" ")

    return (
        <div className={cardClassName}>
            <div className={thumbClassName}>
                {thumbImage ? (
                    <img
                        src={thumbImage}
                        alt={`${name} のサムネイル`}
                        className="project-card-thumb-img"
                    />
                ) : (
                    thumb
                )}
            </div>
            <div className="project-card-body">
                <div className="project-card-title">{name}</div>

                {/* 概要 */}
                {desc && (
                    <div className="project-section">
                        <h4 className="project-section-title">概要</h4>
                        <p className="project-section-body">{desc}</p>
                    </div>
                )}

                {/* 詳細 */}
                {content && (
                    <div className="project-section">
                        <h4 className="project-section-title">役割・工夫</h4>
                        <p className="project-section-body">{content}</p>
                    </div>
                )}


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