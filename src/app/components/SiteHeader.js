import Container from "./Container";

const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
];


export default function SiteHeader() {
    return (
        <header className="sticky top-0 border-b bg-white/80 backdrop-blur">
            <Container>
                <div className="flex h-14 items-center justify-between">
                    <a href="#" className="font-semibold">
                        James Salcedo
                    </a>

                    <nav className="flex gap-2">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-md px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    )
}