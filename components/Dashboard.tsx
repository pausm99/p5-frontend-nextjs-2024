import { Agenda } from "@/interfaces/Agenda"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { AgendaForm } from "./forms/AgendaForm";

type DashboardProps = {
    agendas: Agenda[]
}

export default function Dashboard({ agendas }: DashboardProps) {

    const Agenda = ({ id, name }: Agenda) => {
        const path = `agendas/${id}`;
        return (
            <Link
                key={id}
                href={path}
            >
                <Card className="text-center bg-white shadow-md rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl">
                    <CardContent className="gap-4 p-6">
                        <div className="space-y-1">
                            <h2 className="text-lg font-semibold">{name}</h2>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        )
    }

    return (
        <div>
            <h1>My agendas</h1>
            <ul className="flex flex-wrap gap-4">
                {agendas.map(agenda => (
                    <li key={agenda.id} className="flex-1">
                        <Agenda key={agenda.id} id={agenda.id} name={agenda.name}></Agenda>
                    </li>
                ))}
            </ul>
            <AgendaForm></AgendaForm>
        </div>
    )
}
