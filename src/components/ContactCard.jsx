export default function ContactCard({image, title, info}){
    return(
        <div className="flex w-12 my-4 px-4 py-2">
            <img src={image} alt={title} />
            <div className="info">
                <p>{title}</p>
                <p>{info}</p>
            </div>
        </div>
    )
}