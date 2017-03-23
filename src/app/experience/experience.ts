import { DateRange } from '../daterange';
import { Project } from './project';

export class Experience{
    "company": string;
    "jobTitle": string;
    "dates": DateRange;
    "projects": Project[];
}

