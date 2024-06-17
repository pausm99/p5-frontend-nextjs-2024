import { dbGetContactsFromAgenda } from "@/db/contact"
import { Contact } from "@/interfaces/Contact"
import Actions from "./Actions"
import ContactList from "./ContactList"
import GoBackButton from "./GoBackButton"

type AgendaProps = {
    agendaId: number
    name: string
}

export default async function AgendaContacts({ agendaId, name }: AgendaProps) {
    const contacts: Contact[] = await dbGetContactsFromAgenda(agendaId)

    return (
        <div className="relative flex flex-col">
            <h1>{name}</h1>
            {
                contacts.length > 0 ? <ContactList contacts={contacts} /> : 'Not contacts'
            }
            <GoBackButton />
            <Actions agendaId={agendaId} name={name}/>
        </div>
    )
}
