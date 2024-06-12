import Link from 'next/link';
import { Card, CardContent } from './ui/card';

type AgendaProps = {
    id: number,
    name: string
}

export default function Agenda({ id, name }: AgendaProps) {
    const path = `agendas/${id}`;
    
    return (
        <Link
            key={id}
            href={path}
        >
            <Card className="text-center bg-white shadow-md rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl">
                <CardContent className="gap-4 p-6">
                    <div className="space-y-1">
                        <h2 className="text-lg font-semibold">{name}</h2>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
