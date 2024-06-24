import db from "@/db/db";

const agendas = await createAgendas();
const firstAgenda = agendas[0];
const contacts = await createContacts(firstAgenda.id);
console.log(
  `Created agenda ${firstAgenda.id} with ${contacts.count} contacts.`
);

async function createAgendas() {
  return await db.agenda.createManyAndReturn({
    data: [
      { name: "Dunder Mifflin's agenda" },
      { name: "HR Contacts" },
      { name: "Clients agenda" },
      { name: "Personal agenda" },
    ],
  });
}

async function createContacts(agendaId: number) {
  const contacts = await db.contact.createMany({
    data: [
      {
        name: "Michael Scott",
        prefix: 1,
        number: "5345607472",
        agendaId,
        notes: "World's best boss",
        birthDate: "1968-01-19",
        email: "michael.scott@dundermifflin.com",
      },
      {
        name: "Jim Halpert",
        prefix: 1,
        number: "5345607473",
        agendaId,
        notes: "Prankster",
        birthDate: "1978-10-01",
        email: "jim.halpert@dundermifflin.com",
      },
      {
        name: "Pam Beesly",
        prefix: 1,
        number: "5345607474",
        agendaId,
        notes: "Receptionist and artist",
        birthDate: "1979-03-25",
        email: "pam.beesly@dundermifflin.com",
      },
      {
        name: "Dwight Schrute",
        prefix: 1,
        number: "5345607475",
        agendaId,
        notes: "Assistant to the Regional Manager",
        birthDate: "1970-01-20",
        email: "dwight.schrute@dundermifflin.com",
      },
      {
        name: "Angela Martin",
        prefix: 1,
        number: "5345607476",
        agendaId,
        notes: "Loves cats",
        birthDate: "1971-06-25",
        email: "angela.martin@dundermifflin.com",
      },
      {
        name: "Kevin Malone",
        prefix: 1,
        number: "5345607477",
        agendaId,
        notes: "Accountant",
        birthDate: "1970-06-01",
        email: "kevin.malone@dundermifflin.com",
      },
      {
        name: "Creed Bratton",
        prefix: 1,
        number: "5345123477",
        agendaId,
        notes: "No comments...",
        birthDate: "1952-06-01",
        email: "creed.bratton@dundermifflin.com",
      },
    ],
  });

  return contacts;
}
