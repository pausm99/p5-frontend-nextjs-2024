import ContactComponent from "@/components/Contact";
import GoBackButton from "@/components/GoBackButton";
import { dbGetContact } from "@/db/contact";
import { Contact } from "@/interfaces/Contact";
import { notFound } from "next/navigation";

type ContactProps = {
  params: {
    agendaId: number;
    contactId: number;
  };
};

export default async function ContactPage({ params }: ContactProps) {
  const { contactId } = params;
  const contactNum = Number(contactId);

  if (Number.isNaN(contactNum)) {
    notFound();
  }

  const contact: Contact = await dbGetContact(contactNum);

  if (!contact) {
    notFound();
  }

  return (
    <div className="relative">
      <ContactComponent key={contactId} contact={contact}></ContactComponent>
      <GoBackButton />
    </div>
  );
}
