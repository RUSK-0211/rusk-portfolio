import type { SkillCategory } from "@/types"

export default function SkillCard({ title, items }: SkillCategory) {
    return (
        <div className="skill-card">
            <h3 className="skill-card-title">{title}</h3>

            {items.map((item, i) => (
                <div key={item.name} className="skill-item">
                    <div className="skill-item-header">
                        <span className="skill-name">{item.name}</span>
                        <span className="skill-level">{item.level}</span>
                    </div>

                    <div className="skill-bar">
                        <div
                            className="skill-bar-fill"
                            style={{ width: `${item.pct}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
