import React, { useState } from "react"
import { nanoid } from 'nanoid';

export interface Watch {
    id: string;
    name: string;
    timezone: number;
}

export interface FormAddingWatchesProps {
    watches: Watch[];
    setWatches: React.Dispatch<React.SetStateAction<Watch[]>>
}

export default function FormAddingWatches({watches, setWatches}: FormAddingWatchesProps) {
    const [form, setForm] = useState({
        id: '',
        name: '',
        timezone: 0,
    });

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [id]:value,
        }))
    }

    const handlerAddWatches = (event: React.FormEvent) => {
        event.preventDefault()
        const newWatch = {
            id: nanoid(),
            name: form.name,
            timezone: form.timezone,
        };

        console.log(newWatch)

        console.log(watches)

        const index = watches.findIndex(item => item.timezone === newWatch.timezone)
        console.log(index)
        if(index != -1) {
            alert('Часы с таким часовым поясом уже существуют');
            return
        }
        else {
            setWatches((prevTrains)=>[...prevTrains, newWatch]);
        }
        setForm({
            id: '',
            name: '',
            timezone: 0,
        })
    }

    return (
        <form onSubmit={handlerAddWatches}>
            <div className="form-name">
                <label className="form-name-name">Название</label><br />
                <input type="text" id='name' value={form.name} onChange={handlerChange}/>
            </div>
            <div className="form-timezone">
                <label className="form-timezone-timezone">Временная зона</label><br />
                <input type="number" id='timezone' value={form.timezone} onChange={handlerChange}/>
            </div>
            <button className="button-add">Добавить</button>
        </form>
    )
}