import { HOME_LINKS } from "@/data/navigation"
import type { NavFn, View } from "@/types"

export default function Header({ view, nav }: { view: View; nav: NavFn }) {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-logo">
                    Rino.Kudo
                    <span className="header-logo-faint">/portfolio</span>
                </div>

                <nav className="header-nav">
                    {HOME_LINKS.map((label) => (
                        <a
                            key={label}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                nav("home", label.toLowerCase())
                            }}
                            className={`header-link ${
                                view === "home"
                                    ? "header-link-active"
                                    : "header-link-inactive"
                            }`}
                        >
                            {label}
                        </a>
                    ))}

                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            nav("projects")
                        }}
                        className={`header-link ${
                            view === "projects"
                                ? "header-link-active header-link-projects-active"
                                : "header-link-inactive"
                        }`}
                    >
                        Projects
                    </a>
                </nav>
            </div>
        </header>
    )
}
