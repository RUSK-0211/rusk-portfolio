import type { DirSectionProps } from "@/types"
import ProjectCard from "@/components/ProjectCard"

export default function DirSection({ label, desc, cards, bordered }: DirSectionProps) {
    return (
        <div className={`dir-section ${bordered ? "dir-section-bordered" : ""}`}>
            <div className="dir-label">
                <span className="dir-label-arrow">▸</span>
                {label}
            </div>

            <p className="dir-desc">{desc}</p>

            <div className="dir-grid">
                {cards.map((card) => (
                    <ProjectCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}

