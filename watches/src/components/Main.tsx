import { useState } from "react"
import FormAddingWatches from "./FormAddingWatches"
import WatchesSection from "./WatchesSection"
import { Watch } from "./FormAddingWatches"

export default function MainPage() {
    const [watches, setWatches]=useState<Watch[]>([])

    return (
        <div className="main-page">
            <FormAddingWatches watches={watches} setWatches={setWatches}/>
            <WatchesSection watches={watches} setWatches={setWatches} />
        </div>
    )
}