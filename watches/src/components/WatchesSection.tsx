import { useState } from "react"
import Watches from "./Watches"
import { Watch } from "./FormAddingWatches"

export interface WatchesSectionProps {
    watches: Watch[];
    setWatches: React.Dispatch<React.SetStateAction<Watch[]>>;
}

export default function WatchesSection({ watches, setWatches }: WatchesSectionProps) {

    const deleteWatches = (id:string) => {
        setWatches((prevWatches) => prevWatches.filter(item => item.id !== id))
    }

    return (
        <div className="watches-section">
            {watches.map(watch => {
                console.log(watch)
                return <Watches key={watch.id} item={watch} remove={deleteWatches}/>
            })}
        </div>
    )
}