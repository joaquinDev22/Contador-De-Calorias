import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categories"
import type { Activity } from "../types"
import type { ActivityActions, ActivityState } from "../reducers/activity-reducer"

type FormProps = {
    dispatch: React.Dispatch<ActivityActions>,
    state: ActivityState
}

const initialState : Activity = {
    id: uuidv4(), 
    category: 1,
    name: '',
    calories: 0
}

export default function Form({dispatch, state} : FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)
    useEffect(() => {
        if(state.activeId){
            const selectedActivity = state.activities.filter( stateActivity => stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    }, [state.activeId])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const {name, calories} = activity
        return name.trim() != '' && calories > 0
    }

    const handleSubmit = (e : React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: "save-activity", payload : {newActivity : activity}})

        setActivity({
            ...initialState,
            id : uuidv4()
        })
    }

  return (
    <form 
    className="space-y-5 bg-white shadow-lg p-10 rounded-3xl"
    onSubmit={handleSubmit}
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className=" font-bold">Categoría:</label>
            <select 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
                id="category"
                value={activity.category}
                onChange={handleChange}
            >
                {categories.map(category => (
                    <option 
                        key={category.id} 
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className=" font-bold">{activity.category === 1 ? 'Comida:' : 'Actividad:'}</label>
            <input
            id="name"
            type="text"
            className="border border-slate-300 p-2 rounded-lg" placeholder="Ej: Comida, Jugo de Naranja, Ensalada, Gimnasio, Aeróbico"
            value={activity.name}
            onChange={handleChange}/>
        </div>        
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className=" font-bold">{activity.category === 1 ? 'Calorias consumidas:' : 'Calorias quemadas:'}</label>
            <input
            id="calories"
            type="number"
            className="border border-slate-300 p-2 rounded-lg" placeholder="Calorias: Ej. 300, 800"
            value={activity.calories}
            onChange={handleChange}/>
        </div>
        <input
        type="submit"
        className=" bg-green-400 not-disabled:hover:bg-lime-700 w-full p-2 font-bold uppercase rounded-lg text-white cursor-pointer disabled:opacity-10"
        value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
        disabled={!isValidActivity()}/>
    </form>
  )
}
