"use client";

import { actionCreateAgenda } from "@/actions/agenda";
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

export function AgendaForm() {

    const formRef = useRef<HTMLFormElement>(null);
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const createAgenda = async (formData: FormData) => {
        const result = await actionCreateAgenda(formData)
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
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="absolute top-0 right-0" size="icon">+</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create new agenda</DialogTitle>
                    <DialogDescription>
                        Add a name to identify your agenda. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <form ref={formRef} action={createAgenda}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="My agenda"
                                    className="col-span-3"
                                />
                                {errorMessage && <p className="text-red-500 col-span-4">{errorMessage}</p>}
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
