export type View = 'home' | 'projects'

export type NavFn = (view: View, scrollId?: string) => void

export type SkillItem = {
    name: string
    level: string
    pct: number
}

export type SkillCategory = {
    title: string
    items: SkillItem[]
}

export type Certification = {
    seal: string;
    name: string;
    issuer: string; 
    date: string;
    category: string;
    status: "passed" | "failed" | "pending";
};

export type Contact =
    | { type: "email"; value: string; label: string }
    | { type: "link"; href: string; label: string }

export type DirSectionProps = {
    label: string
    desc: string
    cards: Project[]
    bordered: boolean
}

export type ProjectLink = {
    label: string
    href: string
}

export type Project = {
    id: string
    thumb: string
    thumbImage?: string
    thumbVariant?: "icon" | "banner"
    name: string
    desc: string
    tags: string[]
    techStack: string[]
    role: string
    period: string
    teamSize?: number
    links: ProjectLink[]
}