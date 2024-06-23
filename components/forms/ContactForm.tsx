"use client";

import { actionHandleContact } from "@/actions/contact";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useRef, useState } from "react";
import { Contact } from "@/interfaces/Contact";

type ContactFormProps = {
  agendaId: number;
  contact?: Contact;
};

export default function ContactForm({ agendaId, contact }: ContactFormProps) {
  const edit = !!contact?.id;

  const initialFormValues = {
    name: contact?.name || "",
    email: contact?.email || "",
    prefix: contact?.prefix?.toString() || "", // Convertir a cadena
    number: contact?.number || "",
    birthDate: contact?.birthDate || undefined,
    notes: contact?.notes || "",
  };

  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    prefix: "",
    number: "",
    birthDate: "",
    notes: "",
  });

  useEffect(() => {
    if (open) {
      setFormValues({
        name: contact?.name || "",
        email: contact?.email || "",
        prefix: contact?.prefix?.toString() || "",
        number: contact?.number || "",
        birthDate: contact?.birthDate || undefined,
        notes: contact?.notes || "",
      });

      setErrors({
        name: "",
        email: "",
        prefix: "",
        number: "",
        birthDate: "",
        notes: "",
      });
    }
  }, [open, contact]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormValues(initialFormValues);
    setErrors({
      name: "",
      email: "",
      prefix: "",
      number: "",
      birthDate: "",
      notes: "",
    });
    formRef.current?.reset();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (formData: FormData) => {
    const result = !edit
      ? await actionHandleContact(formData, agendaId)
      : await actionHandleContact(formData, agendaId, contact!.id);

    if (!result.success) {
      const validationErrors: any = {};
      result.message?.forEach((error: any) => {
        validationErrors[error.path[0]] = error.message;
      });
      setErrors(validationErrors);
    } else {
      handleClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {edit ? (
          <Button onClick={handleOpen}>EDIT</Button>
        ) : (
          <Button size="icon" onClick={handleOpen}>
            +
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="gap-2">
          <DialogTitle>{edit ? "Edit" : "Create new"} contact</DialogTitle>
          <DialogDescription>
            {edit ? "Edit the" : "Add a"} contact. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div>
          <form ref={formRef} action={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-center">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="col-span-3"
                  value={formValues.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="col-span-4 text-red-500 text-xs col-start-2">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-center">
                  Email
                </Label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="mail@example.com"
                  className="col-span-3"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="col-span-4 text-red-500 text-xs col-start-2">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-12 items-center gap-4">
                <Label htmlFor="number" className="col-span-3 text-center">
                  Number
                </Label>
                <span className="col-span-1">+</span>
                <Input
                  type="text"
                  id="prefix"
                  name="prefix"
                  placeholder="34"
                  className="col-span-3"
                  value={formValues.prefix}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="605682361"
                  className="col-span-5"
                  value={formValues.number}
                  onChange={handleChange}
                />
                {errors.prefix && (
                  <p className="col-span-9 text-red-500 text-xs col-start-4 ">
                    {errors.prefix}
                  </p>
                )}
                {errors.number && (
                  <p className="col-span-9 text-red-500 text-xs col-start-4 ">
                    {errors.number}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="birthdate" className="text-center">
                  Birthdate
                </Label>
                <Input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  className="col-span-3"
                  value={formValues.birthDate}
                  onChange={handleChange}
                />
                {errors.birthDate && (
                  <p className="col-span-4 text-red-500 text-xs col-start-2 ">
                    {errors.birthDate}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="notes" className="text-center">
                  Notes
                </Label>
                <Input
                  type="text"
                  id="notes"
                  name="notes"
                  placeholder="The best friend"
                  className="col-span-3"
                  value={formValues.notes}
                  onChange={handleChange}
                />
                {errors.notes && (
                  <p className="col-span-4 text-red-500 text-xs col-start-2 ">
                    {errors.notes}
                  </p>
                )}
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
