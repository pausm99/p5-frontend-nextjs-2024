import { Agenda } from "@/interfaces/Agenda";
import { AgendaForm } from "./forms/AgendaForm";
import AgendaComponent from "./Agenda";

type DashboardProps = {
    agendas: Agenda[]
}

export default function Dashboard({ agendas }: DashboardProps) {
    return (
        <div>
            <h1>My agendas</h1>
            <ul className="flex flex-wrap gap-4">
                {agendas.map(agenda => (
                    <li key={agenda.id} className="flex-1">
                        <AgendaComponent id={agenda.id} name={agenda.name}></AgendaComponent>
                    </li>
                ))}
            </ul>
            <div className="absolute top-0 right-0">
                <AgendaForm></AgendaForm>
            </div>
        </div>
    )
}
