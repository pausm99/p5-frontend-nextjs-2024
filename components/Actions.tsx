import React from 'react'
import DeleteAgenda from './DeleteAgenda'
import { AgendaForm } from './forms/AgendaForm'

type ActionsProps = {
    agendaId: number;
    name: string;
}

export default function Actions({ agendaId, name }: ActionsProps) {
    return (
        <div className="absolute top-0 right-0 flex justify-between items-center gap-2">
            <DeleteAgenda id={agendaId}></DeleteAgenda>
            <AgendaForm agendaId={agendaId} name={name}></AgendaForm>
        </div>
    )
}
