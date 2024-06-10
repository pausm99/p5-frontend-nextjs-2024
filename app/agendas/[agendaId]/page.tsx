import Agenda from "@/components/Agenda"
import { dbGetAgenda } from "@/lib/agenda"
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
    <div>
      <Agenda name={agenda.name} agendaId={agendaNum}></Agenda>
    </div>
  )
}
