import { Agenda } from "@/interfaces/Agenda"
import { cn } from "@/lib/utils";
import Link from "next/link";

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
                {name}
            </Link>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Dashboard</h1>
            {agendas.map(agenda => (
                <Agenda key={agenda.id} id={agenda.id} name={agenda.name}></Agenda>
            ))}
        </div>
    )
}
