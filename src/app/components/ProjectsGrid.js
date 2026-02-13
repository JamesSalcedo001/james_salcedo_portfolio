import Card from "./Card"
import Badge from "./Badge"


function ProjectLinks({ links }) {
    return (
        <div className="mt-4 flex flex-wrap gap-2">
            {links?.live ? (
                <a
                    href={links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-neutral-900 px-3 py-1.5 text-sm text-white hover:bg-neutral-800"
                >
                    Live
                </a>
            ) : null}

            {links?.github ? (
                <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border px-3 py-1.5 text-sm hover:bg-neutral-50"
                >
                    Code
                </a>
            ) : null}
        </div>
    )
}



export default function ProjectsGrid() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
                <Card key={p.slug}>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold">{p.title}</h3>
                        <p className="text-sm text-neutral-700 leading-6">
                            {p.description}
                        </p>
                    </div>

                    <div className="mt-4 flex-flex-wrap gap-2">
                        {p.tags.map((t) => (
                            <Badge key={t}>{t}</Badge>
                        ))}
                    </div>

                    <ProjectLinks links={p.links} />
                </Card>
            ))}
        </div>
    )
}