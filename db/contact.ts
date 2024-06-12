import db from "@/db/db";

export const dbGetContactsFromAgenda = async (agendaId: number) => {
  const contacts = await db.contact.findMany({
    where: { agendaId },
  });
  return contacts;
};
