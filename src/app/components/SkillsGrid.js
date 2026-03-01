import Card from "./Card";
import Badge from "./Badge";
import { skills } from "../data/skills";

export default function SkillsGrid() {
    return (
        <div className="grid gap-10 md:grid-cols-2">
            {skills.map((g) => (
                <Card key={g.group}>
                    <h3 className="text-base font-semibold">{g.group}</h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {g.items.map((item) => (
                            <Badge key={item}>{item}</Badge>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    );
}