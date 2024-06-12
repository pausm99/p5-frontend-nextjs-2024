
import AgendaContacts from "@/components/AgendaContacts"
import { dbGetAgenda } from "@/db/agenda"

import { notFound } from "next/navigation"

type PageProps = {
  params: {
    agendaId: number
  }
}

export default async function AgendaPage({ params }: PageProps) {

  const { agendaId } = params
  const agendaNum = Number(agendaId)


  if (Number.isNaN(agendaNum)) {
    notFound()
  }

  const agenda = await dbGetAgenda(agendaNum)

  if (!agenda) {
    notFound()
  }

  return (
    <AgendaContacts key={agenda.id} name={agenda.name} agendaId={agendaNum}></AgendaContacts>
  )
}
