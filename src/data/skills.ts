import type { SkillCategory } from "@/types"

export const skillCategories: SkillCategory[] = [
    {
        title: "FRONTEND",
        items: [
            { name: "HTML / CSS", level: "ADVANCED", pct: 80 },
            { name: "JavaScript", level: "INTERMEDIATE", pct: 75 },
            { name: "TypeScript", level: "INTERMEDIATE", pct: 60 },
            { name: "React", level: "INTERMEDIATE", pct: 65 },
            { name: "Tailwind CSS", level: "INTERMEDIATE", pct: 50 },
        ],
    },
    {
        title: "BACKEND",
        items: [
            { name: "Python", level: "INTERMEDIATE", pct: 70 },
            { name: "FastAPI", level: "INTERMEDIATE", pct: 40 },
            { name: "Node.js", level: "BASIC", pct: 30 },
            { name: "Express", level: "BASIC", pct: 20 },
        ],
    },
    {
        title: "CLOUD / INFRASTRUCTURE",
        items: [
            { name: "AWS", level: "INTERMEDIATE", pct: 50 },
            { name: "Docker", level: "BASIC", pct: 35 },
            { name: "Kubernetes", level: "BASIC", pct: 25 },
            { name: "Linux", level: "BASIC", pct: 30 },
        ],
    },
    {
        title: "DESIGN",
        items: [
            { name: "Figma", level: "INTERMEDIATE", pct: 60 },
            { name: "FigJam", level: "BASIC", pct: 30 },
            { name: "Canva", level: "INTERMEDIATE", pct: 75 },
        ],
    },
    {
        title: "DATABASE",
        items: [
            { name: "MySQL", level: "ADVANCED", pct: 85 },
            { name: "SQLite", level: "BASIC", pct: 20 },
        ],
    },
    {
        title: "TOOLING",
        items: [
            { name: "Git / GitHub", level: "ADVANCED", pct: 85 },
        ],
    },
]
