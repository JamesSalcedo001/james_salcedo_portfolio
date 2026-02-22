import Card from "./Card"
import Badge from "./Badge"
import { projects } from "../data/projects.js"

function ProjectLinks({ links }) {
    return (
        <div className="mt-4 flex flex-wrap gap-2">
            {links?.live ? (
                <a
                    href={links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md shadow-lg bg-emerald-500 px-3 py-1.5 text-sm text-white hover:bg-emerald-300 hover:text-gray-500"
                >
                    Live
                </a>
            ) : null}

            {links?.github ? (
                <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md shadow px-3 py-1 text-sm hover:bg-neutral-50"
                >
                    Code
                </a>
            ) : null}
        </div>
    )
}



export default function ProjectsGrid() {
    return (
        <div className="grid gap-8 md:grid-cols-2 mt-6">
            {projects.map((p) => (
                <Card key={p.slug}>
                    <div className="flex h-full flex-col">
                        <div className="flex-1">
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold">{p.title}</h3>
                                <p className="text-sm text-neutral-700 leading-6">
                                    {p.description}
                                </p>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <Badge key={t}>{t}</Badge>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto">
                            <ProjectLinks links={p.links} />
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}