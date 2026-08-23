import type { NavFn } from "@/types"

import { skillCategories } from "@/data/skills"
import { certifications } from "@/data/certification"
import { CONTACT_LINKS } from "@/data/contact"
import Shell from "@/components/Shell"
import SectionTitle from "@/components/SectionTitle"
import SkillCard from "@/components/SkillCard"
import CertificationCard from "@/components/CertificationCard"
import ContactLink from "@/components/ContactLink"

const FACTS = [
    ["ROLE", "Frontend Developer / Project Manager"],
    ["BASE", "Saitama, JP"],
    ["LEARNING", "Since 2018"],
    ["FOCUS", "PM / Web Apps"],
    ["STATUS", "Open to Opportunities"],
] as const

export default function HomeView({ typedText, nav }: { typedText: string; nav: NavFn }) {
    return (
        <Shell>
            {/* Hero */}
            <section className="hero">
                <div className="hero-label">
                    <span className="hero-label-dot" />
                    IT STUDENT / CURRENTLY LEARNING
                </div>

                <h1 className="hero-title">Rino Kudo</h1>

                <div className="hero-typed">
                    {typedText}
                    <span className="hero-cursor" />
                </div>

                <p className="hero-description">
                    アイデアを形にする過程が好きで、PMとフロントエンドの両方に取り組んでいます。
                    個人制作とチーム開発、それぞれの経験を活かしてプロダクトづくりをしています。
                </p>

                <div className="hero-buttons">
                    <button onClick={() => nav("projects")} className="button">View Projects</button>
                    <button onClick={() => nav("home", "contact")} className="button">Get in touch</button>
                </div>
            </section>

            {/* About */}
            <section className="section" id="about">
                <SectionTitle path="~/about" title="About" />

                <div className="about-grid">
                    <div>
                        <p className="about-text">
                            <strong>工藤 輪乃（Rino Kudo）</strong>
                        </p>

                        <p className="about-text">
                            <strong>2025年</strong>から
                            Web制作・開発を本格的に始め、現在は専門学校でプロジェクトマネジメントを中心に学んでいます。
                        </p>

                        <p className="about-text">
                            学生プロジェクトではPMとして要件整理や進行管理、顧客対応を経験し、改善を重ねながら進める大切さを学びました。
                            現在はその経験をもとに、PM業務を支援するWebアプリを個人開発しています。
                            技術だけでなく、利用者やチームとのコミュニケーションを大切にしています。
                        </p>
                    </div>

                    <div className="about-facts">
                        {FACTS.map(([label, value], i) => (
                            <div key={label} className="about-fact-row">
                                <span className="about-fact-label">{label}</span>
                                <span className="about-fact-value">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Skills */}
            <section className="section" id="skills">
                <SectionTitle path="~/skills" title="Skills" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
                    {skillCategories.map((cat) => (
                        <SkillCard key={cat.title} {...cat} />
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section className="section" id="certifications">
                <SectionTitle path="~/certifications" title="Certifications" />

                <div className="cert-list">
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.seal} {...cert} />
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="section" id="contact">
                <SectionTitle path="~/contact" title="Contact" />

                <div className="contact-layout">
                    <p className="contact-text">
                        ご覧いただきありがとうございます。
                        <br />
                        就職活動に関するご連絡や、ポートフォリオや制作物についてのご質問、ご感想などがございましたら、お気軽にご連絡ください。
                    </p>

                    <div className="contact-links">
                        {CONTACT_LINKS.map((contact) => (
                            <ContactLink
                                key={contact.label}
                                contact={contact}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <footer className="footer">
                <span>© 2026 Rino Kudo</span>
                <span>crafted with React & TypeScript</span>
            </footer>
        </Shell>
    )
}
