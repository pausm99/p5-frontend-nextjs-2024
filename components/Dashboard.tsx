import { Agenda } from "@/interfaces/Agenda"
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
        <div>
            <h1>Dashboard</h1>
            {agendas.map(agenda => (
                <Agenda id={agenda.id} name={agenda.name}></Agenda>
            ))}
        </div>
    )
}
