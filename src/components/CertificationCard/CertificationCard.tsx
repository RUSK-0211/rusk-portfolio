import type { Certification } from "@/types";

export default function CertificationCard({
    seal,
    name,
    issuer,
    date,
    category,
    status,
}: Certification) {
    return (
        <div className="cert-card">
            <div className="cert-seal">{seal}</div>

            <div className="cert-divider"></div>

            <div className="cert-info">
                <div className="cert-name">{name}</div>
                <div className="cert-issuer">{issuer}</div>
                <div className="cert-meta">
                    <span>{date}</span>
                    <span className="dot">•</span>
                    <span>{category}</span>
                </div>
            </div>

            <div className="cert-status">
                {status === "passed" && "✓ 合格"}
                {status === "failed" && "✗ 不合格"}
                {status === "pending" && "… 受験予定"}
            </div>
        </div>
    );
}
