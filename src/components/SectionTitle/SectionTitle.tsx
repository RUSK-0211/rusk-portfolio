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
            <h2 className="section-title-text">{title}</h2>
            <span className="section-title-line" />
        </div>
    )
}
