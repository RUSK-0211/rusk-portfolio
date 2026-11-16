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
                    プロジェクトマネジメント について勉強中...
                    <span className="hero-cursor"/>
                </div>

                <p className="hero-description">
                    私は「ユーザーにとって価値のあるプロダクトを届けること」を軸に、プロジェクトマネジメントの視点から、ものづくりについて学んでいます。
                </p>

                <div className="hero-buttons">
                    <button onClick={() => nav("projects")} className="button">作品を見る</button>
                    <button onClick={() => nav("home", "contact")} className="button">ご連絡</button>
                </div>
            </section>

            {/* About */}
            <section className="section" id="about">
                <SectionTitle title="About" />

                <div className="about-body">
                    <h3 className="about-name">工藤 輪乃 （Rino Kudo）</h3>
                    <p className="about-meta">
                        <span>IT系 4年制 専門学校</span>
                        <span className="about-meta-sep" aria-hidden="true">/</span>
                        <span>28卒</span>
                    </p>

                    <p className="about-text">
                        学内で参加したプロジェクトで、9人チームのPMとしてシフト管理システムを開発・提案しました。
                    </p>
                    <p className="about-text">
                        お客様へのヒアリングを通じて要望や運用上の課題を整理し、要件の検討、タスク分担、進捗管理、定期的な打ち合わせの進行などを行いました。
                        また、メンバー間で意見や認識が異なる場面では、議論を整理しながらチームとして前に進めることを意識しました。
                    </p>
                    <p className="about-text">
                        この経験から、利用者の要望をそのまま形にするのではなく、背景にある課題や実際の運用を理解したうえで、チームと協力して解決策を考えることを大切にしています。
                    </p>
                </div>
            </section>

            {/* Skills */}
            <section className="section" id="skills">
                <SectionTitle title="Skills" />
                <p className="skills-intro">※各スキルの習熟度は、学習・制作経験をもとにした自己評価です。</p>
                <div className="skills-grid">
                    {skillCategories.map((cat) => (
                        <SkillCard key={cat.title} {...cat} />
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section className="section" id="certifications">
                <SectionTitle title="Certifications" />

                <div className="cert-list">
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.seal} {...cert} />
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="section" id="contact">
                <SectionTitle title="Contact" />

                <div className="contact-layout">
                    <p className="contact-text">
                        ご覧いただきありがとうございます。
                        <br />
                        お気軽にご連絡ください。
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
                <span>Last Updated: 2026-11-16</span>
            </footer>

        </Shell>
    )
}
