import db from "@/db/db";

export const dbGetAgendas = async () => {
  const agendas = await db.agenda.findMany();
  return agendas;
};

export const dbGetAgenda = async (agendaId: number) => {
  const agenda = await db.agenda.findUnique({
    where: { id: agendaId }
  });
  return agenda;
};

export const dbCreateAgenda = async (name: string) => {
  const agenda = await db.agenda.create({
    data: { name }
  })
  return agenda
}
