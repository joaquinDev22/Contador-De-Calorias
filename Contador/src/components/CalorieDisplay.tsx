type CalorieDisplayProps = {
    calories: number,
    text: string,
    category?: number
}
export default function CalorieDisplay({calories, text, category} : CalorieDisplayProps) {
  return (
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
        <span className={`font-black text-6xl ${category == 1 ? 'text-lime-500': category === 2 ? 'text-orange-500' : 'text-white'}`}>{calories}</span>
        {text}
        </p>
    )
}
