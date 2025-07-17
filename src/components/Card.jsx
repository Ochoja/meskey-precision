export default function Card({heading, text, name, position}){
    return (
        <div className="border-solid border-2 border-red-300">
            <h3 className="text-xl">{heading}</h3>
            <p>{text}</p>
            <p>-{name}</p>
            <p>{position}</p>
        </div>
    )
}