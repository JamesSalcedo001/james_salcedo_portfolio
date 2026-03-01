import Container from "./Container";

const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
];


export default function SiteHeader() {
    
    function handleNavClick(e, href) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <header className="sticky top-0 bg-white/30 border-b-[0.09px] backdrop-blur">
            <Container size="wide">
                <div className="flex h-14 items-center justify-between">
                    <a href="#top" className="font-semibold" onClick={(e) => handleNavClick(e, "#top")}>
                        James Salcedo
                    </a>

                    <nav className="flex gap-2">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-md px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100"
                                onClick={(e) => handleNavClick(e, link.href)}
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