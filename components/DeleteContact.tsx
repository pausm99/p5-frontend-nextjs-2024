"use client";

import { actionDeleteContact } from "@/actions/contact";
import { useRouter } from "next/navigation";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

type DeleteContactProps = {
    id: number
    agendaId: number
}


export default function DeleteContact({ id, agendaId }: DeleteContactProps) {
    const router = useRouter()
    const { toast } = useToast()

    const deleteContact = async () => {
        const result = await actionDeleteContact(id)
        if (result.success) {
            router.push(`/agendas/${agendaId}`)
            router.refresh();
        }
        else {
            toast({
                variant: "destructive",
                title: "Error",
                description: result.message
            })
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">DELETE</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        contact.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={deleteContact}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
