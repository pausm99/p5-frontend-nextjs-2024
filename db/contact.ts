import db from "@/db/db";

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const dbGetContactsFromAgenda = async (agendaId: number) => {
  await sleep(1000)
  const contacts = await db.contact.findMany({
    where: { agendaId },
  });
  return contacts;
};
