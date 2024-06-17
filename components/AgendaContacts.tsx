import { dbGetContactsFromAgenda } from "@/db/contact"
import { Contact } from "@/interfaces/Contact"
import GoBackButton from "./GoBackButton"
import DeleteAgenda from "./DeleteAgenda"
import ContactList from "./ContactList"

type AgendaProps = {
    agendaId: number
    name: string
}

export default async function AgendaContacts({ agendaId, name }: AgendaProps) {
    const contacts: Contact[] = await dbGetContactsFromAgenda(agendaId)

    return (
        <div className="relative flex flex-col">
            <h1>{name}</h1>
            <ContactList contacts={contacts}/>
            <GoBackButton />
            <DeleteAgenda id={agendaId}></DeleteAgenda>
        </div>
    )
}
