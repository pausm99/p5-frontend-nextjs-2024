"use server";

import {
  dbCreateContact,
  dbDeleteContact,
  dbUpdateContact,
} from "@/db/contact";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import dayjs from "dayjs";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, "Name should be at least 3 characters long"),
  email: z.string().email("Email format incorrect"),
  prefix: z
    .number()
    .min(1, "Minimum prefix number is 1")
    .max(998, "Maximum prefix number is 998"),
  number: z
    .string()
    .min(8, "Phone number incorrect")
    .max(15, "Phone number incorrect"),
  birthDate: z.date(),
  notes: z.string().min(1, "Note too short").max(100, "Note too long"),
});

export async function actionHandleContact(
  formData: FormData,
  agendaId: number,
  contactId?: number
) {
  const edit = !!contactId
  try {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const prefix = Number(formData.get("prefix")?.toString());
    const number = formData.get("number")?.toString();
    const birthDate = new Date(formData.get("birthdate")!.toString());
    const notes = formData.get("notes")?.toString();

    const payload = contactSchema.parse({
      name,
      email,
      prefix,
      number,
      birthDate,
      notes,
    });
    const sendPayload = {
      ...payload,
      birthDate: dayjs(birthDate).format("YYYY-MM-DD"),
      agendaId,
    };

    if (name) {
      if (edit) {
        await dbUpdateContact(contactId!, sendPayload);
        revalidatePath(`/agendas/${agendaId}/contacts${contactId}`);
      } else {
        await dbCreateContact(sendPayload);
        revalidatePath(`/agendas/${agendaId}`);
      }
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors };
    }
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        success: false,
        message: [{ path: ["name"], message: "Name already in use" }],
      };
    }
    return {
      success: false,
      message: [
        {
          path: ["form"],
          message:
            "Failed to " +
            (edit ? "edit" : "create") +
            " contact. Please try again.",
        },
      ],
    };
  }
  return { success: true };
}

export async function actionDeleteContact(id: number) {
  try {
    await dbDeleteContact(id);
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return { success: false, message: "Contact does not exist" };
    }
    return {
      success: false,
      message: "Failed to delete contact. Please try again.",
    };
  }
  return { success: true };
}
