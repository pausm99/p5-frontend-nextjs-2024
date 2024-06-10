import db from "@/db/db";

export const dbGetAgendas = async () => {
  const agendas = await db.agenda.findMany();
  return agendas;
};
