import Dashboard from '@/components/Dashboard';
import { dbGetAgendas } from '@/lib/agenda';

export default async function Agendas() {
  const agendas = await dbGetAgendas();
  return (
    <main>
        <Dashboard agendas={agendas}></Dashboard>
    </main>
  )
}
