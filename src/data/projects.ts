import type { Project } from "@/types"
import PortfolioIcon from "@/assets/images/portfolio_icon.png"
import OverseasThumb from "@/assets/images/Overseas_thumb.png"
import DroneImage from "@/assets/images/Drone_thumb.jpg"
import LiveFxImage from "@/assets/images/LiveFx_thumb.jpg"
import QuizThumb from "@/assets/images/FE_Speed_Quiz_thumb.png"

export const personalProjects: Project[] = [
    {
        id: "portfolio-website",
        thumb: "PORTFOLIO",
        thumbImage: PortfolioIcon,
        thumbVariant: "icon",
        name: "Portfolio Website",
        desc: "React + TypeScript + Vite で構築した個人ポートフォリオサイトです。",
        content: "私はデザインに自信が無いため、AIを利用してより良いデザインを追求しました。",
        tags: ["React", "TypeScript", "Vite"],
        techStack: ["React", "TypeScript", "Vite", "Git / GitHub"],
        role: "Frontend / UI設計",
        period: "2026年 約3週間",
        teamSize: 1,
        links: [{ label: "Code", href: "https://github.com/RUSK-0211/rusk-portfolio" }],
    },
    {
        id: "overseas-training-site",
        thumb: "OVERSEAS",
        thumbImage: OverseasThumb,
        thumbVariant: "banner",
        name: "Overseas Training Site",
        desc: "海外研修で訪れた施設や観光地、学びを紹介するWebサイトです。",
        content: "報告会で使用するため、短期間で必要な情報を整理し、シンプルで見やすい構成で制作しました。",
        tags: ["HTML", "CSS", "JavaScript"],
        techStack: ["HTML", "CSS", "JavaScript", "Git / GitHub"],
        role: "Frontend",
        period: "2025年 約1週間",
        teamSize: 1,
        links: [
            { label: "Demo", href: "https://rusk-0211.github.io/overseas-training-site-24010011/" },
            { label: "Code", href: "https://github.com/RUSK-0211/overseas-training-site-24010011" },
        ],
    },
    {
        id: "python-othello",
        thumb: "OTHELLO",
        thumbVariant: "icon",
        name: "Python Othello",
        desc: "1年次に制作したPythonのオセロゲームを、3年次に学んだ知識を活かしてリファクタリングした作品です。",
        content: "制作当時の講評を振り返り、盤面表示や操作性を改善するとともに、機能ごとにモジュールを整理しました。また、効果音をゲーム内のイベントに合わせて再設計し、より遊びやすいゲームを目指しました。",
        tags: ["Python", "Refactoring", "CLI"],
        techStack: ["Python", "pygame", "HTML / CSS", "Git / GitHub"],
        role: "設計 / 実装 / UI改善",
        period: "2026年 約1週間",
        teamSize: 1,
        links: [
            { label: "Code", href: "https://github.com/RUSK-0211/OthelloGame" }
        ],
    }

]

export const collaborativeProjects: Project[] = [
    {
        id: "drone",
        thumb: "DRONE",
        thumbImage: DroneImage,
        thumbVariant: "banner",
        name: "ドロカツ",
        desc: "ドローン「CoDrone EDU」を使用し、プログラミング技術と操縦技術を競う大会にチーム「ARMY」として出場しました。東日本大会を勝ち抜き、第2回全国大会にも出場しました。",
        content: "4人チームのうち、1名が操縦担当、私を含む3名がプログラミング担当として参加しました。学年・学科が異なるメンバーで構成されたチームだったため、情報共有や役割分担を工夫し、チームで円滑に開発を進められるよう取り組みました。",
        tags: ["Python"],
        techStack: ["Python"],
        role: "Programmer / Backend",
        period: "2024.11 - 2025.03（約4ヶ月間）",
        teamSize: 4,
        links: [
            { label: "Link", href: "https://www.drokatsu.com/" },
            { label: "YouTube", href: "https://youtu.be/JGNaSYs9ybo?si=XtfOqpVRbPrFQTY2" }
        ],
    },
    {
        id: "livefx",
        thumb: "LiveFx",
        thumbImage: LiveFxImage,
        thumbVariant: "banner",
        name: "LiveFx",
        desc: "ライブパフォーマンス向けの双方向インタラクティブシステムです。入学式では約3,000人の同時接続を実現し、スマートフォンとコントロールPCを連携させ、リアルタイムで視覚効果を配信する仕組みを構築しました。",
        content: "私は「参加者一人ひとりの入力が演出として可視化される体験」を重視し、演出の企画段階から関わりました。入学生の「希望」を桜の花びらに見立て、各自の入力が集まることでスクリーン上の桜が満開になる演出を提案・実現しました。",
        tags: ["React", "TypeScript", "Vite", "WebSocket", "Socket.IO"],
        techStack: ["React", "TypeScript", "Vite", "WebSocket (Socket.IO Client)", "リアルタイム描画処理", "Git / GitHub"],
        role: "Frontend",
        period: "2025.12 - 2026.04（約2ヶ月間）",
        teamSize: 11,
        links: [{ label: "Code", href: "https://github.com/SIWLiveFX/LiveFx" }],
    },
    {
        id: "shift-app",
        thumb: "SHIFT",
        thumbVariant: "icon",
        name: "保育園シフト希望管理システム",
        desc: "保育園職員の出勤希望・休暇申請を効率的に管理するための Google Apps Script ベースの Web アプリです。",
        content: "園長・職員へのヒアリングをもとに要件を整理し、希望ログ、カレンダー生成、認証、管理メニューなどの機能を設計しました。私はPMとして約1年間、9名チームの進行管理を担当しました。",
        tags: ["Google Apps Script", "JavaScript", "HTML", "CSS", "clasp"],
        techStack: ["Google Apps Script (GAS)", "JavaScript", "HTML / CSS", "Google スプレッドシート API", "clasp", "Node.js（開発環境）", "Git / GitHub"],
        role: "PM",
        period: "2025.07 - 2026.06（約1年間）",
        teamSize: 9,
        links: [{ label: "Code", href: "https://github.com/SIW-ShiftSystem/shift-app-public" }],
    },
    {
        id: "fe-speed-quiz",
        thumb: "QUIZ",
        thumbImage: QuizThumb,
        thumbVariant: "banner",
        name: "FE Speed Quiz",
        desc: "基本情報技術者試験の学習効率を高めるために制作した早押しクイズアプリです。",
        content: "一問一答形式でテンポよく問題を解けるよう設計し、短時間で繰り返し学習できることを重視しました。",
        tags: ["HTML", "CSS", "JavaScript"],
        techStack: ["HTML", "CSS", "JavaScript", "Git / GitHub"],
        role: "Frontend / Presentation（資料作成・発表）",
        period: "2025.12 - 2026.01（約2ヶ月間）",
        teamSize: 6,
        links: [{ label: "Code", href: "https://github.com/shogo-snsw/fe-speed-quiz" }],
    },
]
