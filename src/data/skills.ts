import type { SkillCategory } from "@/types"

export const skillCategories: SkillCategory[] = [
    {
        title: "FRONTEND",
        items: [
            { name: "HTML / CSS", pct: 80 },
            { name: "JavaScript", pct: 75 },
            { name: "TypeScript", pct: 60 },
            { name: "React", pct: 65 },
            { name: "Tailwind CSS", pct: 50 },
        ],
    },
    {
        title: "BACKEND",
        items: [
            { name: "Python", pct: 70 },
            { name: "FastAPI", pct: 40 },
            { name: "Node.js", pct: 30 },
            { name: "Express", pct: 20 },
        ],
    },
    {
        title: "CLOUD / INFRASTRUCTURE",
        items: [
            { name: "AWS", pct: 50 },
            { name: "Docker", pct: 35 },
            { name: "Kubernetes", pct: 25 },
            { name: "Linux", pct: 30 },
        ],
    },
    {
        title: "DESIGN",
        items: [
            { name: "Figma", pct: 60 },
            { name: "FigJam", pct: 30 },
            { name: "Canva", pct: 75 },
        ],
    },
    {
        title: "DATABASE",
        items: [
            { name: "MySQL", pct: 85 },
            { name: "SQLite", pct: 20 },
        ],
    },
    {
        title: "TOOLING",
        items: [
            { name: "Git / GitHub", pct: 85 },
        ],
    },
]
