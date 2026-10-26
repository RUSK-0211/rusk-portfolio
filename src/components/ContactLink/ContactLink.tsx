import { useState } from "react"
import type { Contact } from "@/types"

export default function ContactLink({ contact }: { contact: Contact }) {
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
                className="contact-link-anchor"
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