export interface Contact {
  id: number;
  name: string;
  prefix: number;
  number: bigint;
  birthDate: Date;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}
