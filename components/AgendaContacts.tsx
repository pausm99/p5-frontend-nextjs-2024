import { dbGetContactsFromAgenda } from "@/db/contact"
import { Contact } from "@/interfaces/Contact"
import GoBackButton from "./GoBackButton"
import DeleteAgenda from "./DeleteAgenda"

type AgendaProps = {
    agendaId: number
    name: string
}

export default async function AgendaContacts({ agendaId, name }: AgendaProps) {
    const contacts: Contact[] = await dbGetContactsFromAgenda(agendaId)

    return (
        <div className="relative">
            <h1>{name}</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>{contact.name}</li>
                ))}
            </ul>
            <GoBackButton></GoBackButton>
            <DeleteAgenda id={agendaId}></DeleteAgenda>
        </div>
    )
}