"use server";

import { z } from "zod";
import { dbCreateAgenda } from "@/db/agenda";
import { revalidatePath } from "next/cache";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


const agendaSchema = z.object({
    name: z.string().min(3, "Name should be at least 3 characters long"),
});

export async function actionCreateAgenda(formData: FormData) {
    try {
        const name = formData.get('name')?.toString();

        agendaSchema.parse({ name });

        if (name) {
            await dbCreateAgenda(name);
            revalidatePath("/agendas");
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, message: error.errors[0].message };
        }
        if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
            return { success: false, message: "Name already in use" }
        }
        return { success: false, message: "Failed to create agenda. Please try again." };
    }
    return { success: true };
}
