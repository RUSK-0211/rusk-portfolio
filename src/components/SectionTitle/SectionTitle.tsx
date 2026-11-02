export default function SectionTitle({
    title,
}: {
    title: string
}) {
    return (
        <div className="section-title">
            <h2 className="section-title-text">{title}</h2>
            <span className="section-title-line" />
        </div>
    )
}
