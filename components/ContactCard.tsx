"use client";

import { Contact } from "@/interfaces/Contact";
import { getInitials } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type ContactCardProps = {
    contact: Contact
}

export default function ContactCard({ contact }: ContactCardProps) {

    const pathName = usePathname()
    const path = `${pathName}/contacts/${contact.id}`

    return (
        <Card className="w-[350px]">
            <CardHeader className="flex flex-row gap-3 items-center">
                <Avatar>
                    <AvatarImage src={""} alt={contact.name} />
                    <AvatarFallback>{getInitials(contact.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 flex justify-between items-center">
                    <div>
                        <CardTitle>{contact.name}</CardTitle>
                        <CardDescription>+{contact.prefix} {contact.number}</CardDescription>
                    </div>
                    <CardContent className="p-0">
                        <Link href={path}>
                            <Button variant="ghost" size="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"></path>
                                </svg>
                            </Button>
                        </Link>
                    </CardContent>
                </div>
            </CardHeader>
        </Card>
    );
}
