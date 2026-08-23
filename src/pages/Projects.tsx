import type { NavFn } from "@/types"
import { personalProjects, collaborativeProjects } from "@/data/projects"
import Shell from "@/components/Shell"
import DirSection from "@/components/DirSection"

export default function ProjectsView({ nav }: { nav: NavFn }) {
    return (
        <Shell>
            <div className="projects-header">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        nav("home")
                    }}
                    className="projects-back"
                >
                    ← ~/home
                </a>

                <h1 className="projects-title">Projects</h1>

                <p className="projects-desc">
                    個人制作と参加プロジェクトについてご紹介します。
                </p>
            </div>

            <DirSection
                label="/projects/personal"
                desc="個人制作 — 企画・設計・実装をすべて担当したプロジェクト"
                cards={personalProjects}
                bordered
            />

            <DirSection
                label="/projects/collaborative"
                desc="参加プロジェクト — チームの一員として開発に関わったもの"
                cards={collaborativeProjects}
                bordered={false}
            />
        </Shell>
    )
}
