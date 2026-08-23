export default function SectionTitle({
    path,
    title,
}: {
    path: string
    title: string
}) {
    return (
        <div className="section-title">
            <span className="section-title-path">{path}</span>
            <span className="section-title-text">{title}</span>
            <span className="section-title-line" />
        </div>
    )
}
