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
      { name: "HQ Contacts" },
      { name: "Main agenda" },
      { name: "Clients agenda" },
      { name: "Personal agenda" },
      { name: "My agenda" },
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
        birthDate: "1968-01-19T00:00:00Z",
        email: "michael.scott@dundermifflin.com",
      },
      {
        name: "Jim Halpert",
        prefix: 1,
        number: "5345607473",
        agendaId,
        notes: "Prankster",
        birthDate: "1978-10-01T00:00:00Z",
        email: "jim.halpert@dundermifflin.com",
      },
      {
        name: "Pam Beesly",
        prefix: 1,
        number: "5345607474",
        agendaId,
        notes: "Receptionist and artist",
        birthDate: "1979-03-25T00:00:00Z",
        email: "pam.beesly@dundermifflin.com",
      },
      {
        name: "Dwight Schrute",
        prefix: 1,
        number: "5345607475",
        agendaId,
        notes: "Assistant to the Regional Manager",
        birthDate: "1970-01-20T00:00:00Z",
        email: "dwight.schrute@dundermifflin.com",
      },
      {
        name: "Angela Martin",
        prefix: 1,
        number: "5345607476",
        agendaId,
        notes: "Loves cats",
        birthDate: "1971-06-25T00:00:00Z",
        email: "angela.martin@dundermifflin.com",
      },
      {
        name: "Kevin Malone",
        prefix: 1,
        number: "5345607477",
        agendaId,
        notes: "Accountant",
        birthDate: "1970-06-01T00:00:00Z",
        email: "kevin.malone@dundermifflin.com",
      },
    ],
  });

  return contacts;
}
