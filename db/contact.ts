import db from "@/db/db";
import { Contact } from "@/interfaces/Contact";

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const dbGetContactsFromAgenda = async (agendaId: number) => {
  await sleep(1000);
  const contacts = await db.contact.findMany({
    where: { agendaId },
  });
  return contacts;
};

export const dbGetContact = async (contactId: number) => {
  const contact = await db.contact.findUnique({
    where: { id: contactId },
  });
  return contact;
};

export const dbCreateContact = async (payload: Contact) => {
  const createdContact = await db.contact.create({
    data: payload
  });
  return createdContact;
};

export const dbDeleteContact = async (id: number) => {
  const deletedContact = db.contact.delete({ where: { id } });
  return deletedContact;
};
