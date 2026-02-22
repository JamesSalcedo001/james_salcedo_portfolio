import Container from "./Container";

export default function Section({ id, title, subtitle, children }) {
    return (
        <section id={id} className="py-12">
            <Container>
                <div className="space-y-1">
                    {title && <h2 className="text-xl font-semibold">{title}</h2>}
                    {subtitle && (
                        <p className="text-sm text-neutral-600 mt-2">{subtitle}</p>
                    )}
                </div>

                <div className="mt-1">
                    {children}
                </div>
            </Container>
        </section>
    )
}