"use client";

import { actionHandleAgenda } from "@/actions/agenda";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";

type AgendaFormProps = {
    agendaId?: number;
    name?: string
}

export function AgendaForm({ agendaId, name }: AgendaFormProps) {
    let edit = false;
    if (agendaId) edit = true;

    const formRef = useRef<HTMLFormElement>(null);
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [agendaName, setAgendaName] = useState(name || "");

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);
        if (!isOpen) {
            setErrorMessage("");
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgendaName(e.target.value);
    };

    const actionAgenda = async (formData: FormData) => {
        formData.set('name', agendaName);
        const result = await actionHandleAgenda(formData, edit, agendaId)

        if (result.success) {
            formRef.current?.reset();
            setOpen(false)
            setErrorMessage("")
        }
        else {
            setErrorMessage(result.message || 'Error, try again')
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button size="icon">
                    {
                        edit
                        ?  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2-2.92l9.06-9.06l.92.92L5.92 19H5zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"></path></svg>
                        : '+'
                    }
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="gap-2">
                    <DialogTitle>{!edit ? 'Create new' : 'Edit'} agenda</DialogTitle>
                    <DialogDescription>
                        {!edit ? 'Add a name to identify' : 'Edit the name that identifies'} your agenda. Click save when you are done.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <form ref={formRef} action={actionAgenda}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-center">
                                    Name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="My agenda"
                                    className="col-span-3"
                                    value={edit ? agendaName : undefined}
                                    onChange={handleNameChange}
                                />
                                {errorMessage && <p className="text-red-500 text-xs col-start-2 col-span-4">{errorMessage}</p>}
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save</Button>
                        </DialogFooter>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
