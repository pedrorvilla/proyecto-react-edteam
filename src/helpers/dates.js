import {format} from "date-fns";

export function formatDate(date) {
    return format(date instanceof Date ? date: new Date(date), 'dd-MM-Y');
}