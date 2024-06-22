import { Contact } from "@/interfaces/Contact";
import { getInitials } from "@/lib/utils";
import dayjs from 'dayjs';
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ContactProps = {
  contact: Contact;
};

export default function ContactComponent({ contact }: ContactProps) {

  return (
    <div className="flex flex-col gap-4">
      <Card className="w-[350px]">
        <CardHeader className="flex flex-col gap-3 justify-center items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={""} alt={contact.name} />
            <AvatarFallback className="text-xl">
              {getInitials(contact.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-between items-center">
            <CardTitle className="mb-2">{contact.name}</CardTitle>
            <CardDescription>
              <span>Last edited: {contact.updatedAt.toDateString()}</span>
            </CardDescription>
          </div>
          <div className="w-full mt-6 flex justify-center gap-4">
            <Link href={`mailto:${contact.email}`}>
              <Badge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-1">Send a mail</span>
              </Badge>
            </Link>
            <Link href={`tel:${contact.prefix}${contact.number}`}>
              <Badge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-1">Make a call</span>
              </Badge>
            </Link>
          </div>
        </CardHeader>
        <hr />
        <CardContent className="pt-2">
          <div className="py-2 flex gap-2 text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 24 24"
              className="mt-0.5"
            >
              <path
                fill="currentColor"
                d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"
              ></path>
            </svg>
            <div className="flex-1 flex flex-col">
              <span>Phone number</span>
              <span className="text-black font-light">
                +{contact.prefix} {contact.number}
              </span>
            </div>
          </div>
          <div className="py-2 flex gap-2 text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 24 24"
              className="mt-0.5"
            >
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
              ></path>
            </svg>
            <div className="flex-1 flex flex-col">
              <span>Email address</span>
              <span className="text-black font-light">{contact.email}</span>
            </div>
          </div>
          <div className="py-2 flex gap-2 text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 24 24"
              className="mt-0.5"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="M4 16.5V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5M3 14v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1m-9-6v3m0-3c1.262 0 2-.968 2-2.625S12 2 12 2s-2 1.718-2 3.375S10.738 8 12 8"></path>
                <path d="M9 14a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0"></path>
              </g>
            </svg>
            <div className="flex-1 flex flex-col">
              <span>Birthday</span>
              <span className="text-black font-light">
                {dayjs(contact.birthDate).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
          <div className="py-2 flex gap-2 text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 24 24"
              className="mt-0.5"
            >
              <g fill="currentColor">
                <path d="M6 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"></path>
                <path
                  fillRule="evenodd"
                  d="M2 4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>

            <div className="flex-1 flex flex-col">
              <span>Notes</span>
              <span className="text-black font-light">{contact.notes}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-evenly px-4">
          <Button variant="secondary">EDIT</Button>
          <Button variant="destructive">DELETE</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
