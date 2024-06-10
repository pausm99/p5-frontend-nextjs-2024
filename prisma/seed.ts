import db from "@/db/db";

const agenda = await createAgenda();
const contacts = await createContacts(agenda.id);
console.log(`Created agenda ${agenda.id} with ${contacts.count} contacts.`);

async function createAgenda() {
  return await db.agenda.create({
    data: {
      name: "User's agenda",
    },
  });
}

async function createContacts(agendaId: number) {
  const contacts = await db.contact.createMany({
    data: [
      {
        name: "Michael Scott",
        prefix: 1,
        number: 5345607472,
        agendaId,
        notes: "World's best boss",
        birthDate: "1968-01-19T00:00:00Z",
      },
      {
        name: "Jim Halpert",
        prefix: 1,
        number: 5345607473,
        agendaId,
        notes: "Prankster",
        birthDate: "1978-10-01T00:00:00Z",
      },
      {
        name: "Pam Beesly",
        prefix: 1,
        number: 5345607474,
        agendaId,
        notes: "Receptionist and artist",
        birthDate: "1979-03-25T00:00:00Z",
      },
      {
        name: "Dwight Schrute",
        prefix: 1,
        number: 5345607475,
        agendaId,
        notes: "Assistant to the Regional Manager",
        birthDate: "1970-01-20T00:00:00Z",
      },
      {
        name: "Angela Martin",
        prefix: 1,
        number: 5345607476,
        agendaId,
        notes: "Loves cats",
        birthDate: "1971-06-25T00:00:00Z",
      },
      {
        name: "Kevin Malone",
        prefix: 1,
        number: 5345607477,
        agendaId,
        notes: "Accountant",
        birthDate: "1970-06-01T00:00:00Z",
      },
    ],
  });

  return contacts;
}
