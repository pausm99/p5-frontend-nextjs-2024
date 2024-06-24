import { Contact } from "@/interfaces/Contact"
import ContactCard from "./ContactCard"

type ContactListProps = {
    contacts: Contact[]
}

export default function ContactList({ contacts }: ContactListProps) {
    return (
        <ul id="contactList" className="overflow-y-scroll flex flex-col gap-2 border border-black rounded-lg p-8">
            {contacts.map(contact => (
                <li key={contact.id}>
                    <ContactCard contact={contact}></ContactCard>
                </li>
            ))}
        </ul>
    )
}
