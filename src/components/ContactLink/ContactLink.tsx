import { useState } from "react"
import type { Contact } from "@/types"

export default function ContactLink({ contact }: { contact: Contact }) {
    const [hovered, setHovered] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleClick = async (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        if (contact.type !== "email") return

        e.preventDefault()

        await navigator.clipboard.writeText(contact.value)

        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }

    return (
        <div className="contact-link">
            <a
                href={
                    contact.type === "email"
                        ? `mailto:${contact.value}`
                        : contact.href
                }
                {...(contact.type === "link" && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                })}
                onClick={handleClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    color: hovered ? "var(--accent)" : "var(--ink)",
                    fontFamily: "var(--mono)",
                    padding: "4px 0",
                    borderBottom: hovered
                        ? "1px solid var(--accent)"
                        : "1px solid transparent",
                    transition: "color .15s ease, border-color .15s ease",
                }}
            >
                {contact.label}
            </a>

            {copied && (
                <div className="toast">
                    コピーしました！
                </div>
            )}
        </div>
    )
}