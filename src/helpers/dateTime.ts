import { format } from 'date-fns'

// YYYY-MM-DDThh:mm:ss±hh, -> 2017-05-20T10:31:27+00:00

export const dateTime = (date: Date) => {
    return format(date, 'yyyy-MM-ddTHH:mm:ssxxx')
}
