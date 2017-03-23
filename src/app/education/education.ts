import { DateRange } from '../daterange';

export class Education{
    institution: string;
    attended: DateRange;
    degrees: Degree[];
    gpa: number;
    extras: string[];
}

export class Degree{
    level: string;
    area: string;
    gpa: number;
}