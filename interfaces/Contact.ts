export interface Contact {
  id?: number;
  name: string;
  email: string;
  prefix: number;
  number: string;
  birthDate: string;
  agendaId: number;
  notes: string;
  createdAt?: Date;
  updatedAt?: Date;
}
