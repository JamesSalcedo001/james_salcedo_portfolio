import Container from "./Container";

export default function Section({ id, title, subtitle, children }) {
    return (
        <section id={id} className="py-12">
            <Container>
                <div className="space-y-1"></div>
            </Container>
        </section>
    )
}