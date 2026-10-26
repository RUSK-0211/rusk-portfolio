import type { HomeViewProps } from "@/types"
import { skillCategories } from "@/data/skills"
import { certifications } from "@/data/certification"
import { CONTACT_LINKS } from "@/data/contact"
import Shell from "@/components/Shell"
import SectionTitle from "@/components/SectionTitle"
import SkillCard from "@/components/SkillCard"
import CertificationCard from "@/components/CertificationCard"
import ContactLink from "@/components/ContactLink"

export default function HomeView({nav}: HomeViewProps) {
    return (
        <Shell>
            {/* Hero */}
            <section className="hero">
                <div className="hero-label">
                    <span className="hero-label-dot"/>
                    IT STUDENT / CURRENTLY LEARNING
                </div>

                <h1 className="hero-title">Rino Kudo</h1>

                <div className="hero-typed">
                    Frontend Developer / Project Manager
                    <span className="hero-cursor"/>
                </div>

                <p className="hero-description">
                    私は「ユーザーにとって価値のあるプロダクトを届けること」を軸に、プロジェクトマネジメントとフロントエンドの両面から、ものづくりについて学んでいます。
                </p>
                <p className="hero-description">
                    アイデアを形にしていく過程が好きで、技術だけでなく企画や設計、進め方まで含めてプロダクトを考えることを大切にしています。
                </p>

                <div className="hero-buttons">
                    <button onClick={() => nav("projects")} className="button">View Projects</button>
                    <button onClick={() => nav("home", "contact")} className="button">Get in touch</button>
                </div>
            </section>

            {/* About */}
            <section className="section" id="about">
                <SectionTitle path="~/about" title="About" />

                <div className="about-body">
                    <h3 className="about-name">工藤 輪乃 （Rino Kudo）</h3>
                    <p className="about-meta">
                        <span>IT系 4年制 専門学校</span>
                        <span className="about-meta-sep" aria-hidden="true">/</span>
                        <span>28卒</span>
                    </p>

                    <p className="about-text">
                        2018年にITに触れ始め、2025年からWeb制作・開発を本格的に始めました。
                    </p>
                    <p className="about-text">
                        現在は開発だけでなく、チームで成果を生み出すための進め方にも関心を広げ、<strong>プロジェクトマネジメント</strong>を中心に学んでいます。
                    </p>
                    <p className="about-text">
                        参加したプロジェクトでPMを担当し、要件整理や進行管理、顧客対応を経験しました。
                        試行錯誤を重ねる中で、チームで協力しながらプロジェクトを進めることの難しさと、利用者の声を取り入れながら改善していく大切さを学びました。
                    </p>
                </div>
            </section>

            {/* Skills */}
            <section className="section" id="skills">
                <SectionTitle path="~/skills" title="Skills" />
                <div className="skills-grid">
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
                <span>Last Updated: 2026-10-19</span>
            </footer>

        </Shell>
    )
}
