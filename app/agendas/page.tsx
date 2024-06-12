import Dashboard from '@/components/Dashboard';
import { dbGetAgendas } from '@/db/agenda';

export default async function Agendas() {
  const agendas = await dbGetAgendas();
  return (
    <Dashboard agendas={agendas}></Dashboard>
  )
}
