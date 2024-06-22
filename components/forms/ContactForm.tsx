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
import { useRef, useState } from "react";

type ContactFormProps = {
  agendaId: number;
  contactId?: number;
};

const initialFormValues = {
  name: "",
  email: "",
  prefix: "",
  number: "",
  birthDate: undefined,
  notes: "",
};

export default function ContactForm({ agendaId, contactId }: ContactFormProps) {
  const edit = !!contactId;
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
    const result = await actionHandleContact(formData, edit, agendaId);

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
        <Button size="icon" onClick={handleOpen}>
          {edit ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2-2.92l9.06-9.06l.92.92L5.92 19H5zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"
              ></path>
            </svg>
          ) : (
            "+"
          )}
        </Button>
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
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-center">
                  Number
                </Label>
                <Input
                  type="text"
                  id="prefix"
                  name="prefix"
                  placeholder="+34"
                  className="col-span-1"
                  value={formValues.prefix}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="605682361"
                  className="col-span-2"
                  value={formValues.number}
                  onChange={handleChange}
                />
                {errors.prefix && (
                  <p className="col-span-4 text-red-500 text-xs col-start-2 ">
                    {errors.prefix}
                  </p>
                )}
                {errors.number && (
                  <p className="col-span-4 text-red-500 text-xs col-start-2 ">
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
