import moment from "moment"
import { useEffect, useState } from "react"

import { Watch } from "./FormAddingWatches"

export interface WatchesProps {
    item: Watch;
    remove: any;
}

export default function Watches({item, remove}: WatchesProps) {
    const setTime = () => {
        const timezoneOffset = Number(item.timezone);
        return moment().utcOffset(timezoneOffset);
    }

    const [date, setDate] = useState(setTime());

    useEffect(() => {
        const timer = setInterval(() => setDate(setTime()), 1000)
        return () => clearInterval(timer)
    })

    return (
        <>
        <div className="Watches">
            <h2>{item.name}</h2>
            <button onClick={()=> remove(item.id)}>Х</button>
            <div>{date.format('HH:mm:ss')}</div>
        </div>
        </>
    )
}