import { Contact } from "@/interfaces/Contact"
import { dbGetContactsFromAgenda } from "@/lib/contact"

type AgendaProps = {
    agendaId: number
    name: string
}

export default async function Agenda({ agendaId, name }: AgendaProps) {
    const contacts: Contact[] = await dbGetContactsFromAgenda(agendaId)
    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {contacts.map(contact => (
                    <li>{contact.name}</li>
                ))}
            </ul>
        </div>
    )
}
