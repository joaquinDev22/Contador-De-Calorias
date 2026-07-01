import type { Activity} from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import type { ActivityActions } from "../reducers/activity-reducer"

type ActivityListProps = {
    activities : Activity[]
    dispatch : React.Dispatch<ActivityActions>
}


export default function ActivityList({activities, dispatch} : ActivityListProps) {

    const categoryName = useMemo( () => (category : Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [activities])

    const isEmptyActivities = useMemo(() => activities.length === 0 ,[activities])

  return (
    <>
        <h2 className="text-4xl font-bold text-slate-600 text-center mb-10">Comida y Actividades</h2>

        { isEmptyActivities ? 
        <div className="items-center">
            <p className="text-center px-5 py-3 bg-slate-100 shadow-slate-500/10 shadow-lg rounded-3xl font-bold">No hay Actividades aún...</p>
        </div>:
        activities.map(activity => (
            <div key={activity.id} className="px-5 py-10 bg-slate-100 mt-5 flex justify-between shadow-slate-500/10 shadow-lg rounded-3xl">
                <div className="space-y-2 relative">
                    <p className={`absolute -top-10 -left-5  px-10 py-1 text-white uppercase text-xl font-bold rounded-br-lg rounded-tl-3xl ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>{categoryName(activity.category)}</p>
                    <p className="text-2xl font-bold pt-5">{activity.name}</p>
                    <p className="font-black text-4xl text-lime-500">
                        {activity.calories}
                        <span> Calorias</span>
                    </p>
                </div>
                <div className="flex gap-5 items-center">
                    <button className="rounded-xl p-1 hover:bg-slate-400 transition duration-300"
                    onClick={() => dispatch({type : "set-activeId", payload : {id : activity.id}})}>
                        <PencilSquareIcon
                            className="h-8 w-8 text-slate-600 hover:text-white hover:cursor-pointer"
                        />
                    </button>                    
                </div>
            </div>
        ))}
    </>
  )
}
