const Card = ({image, title, caption}) => {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-md">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-5">
                    <h2 className="card-title font-medium">{title}</h2>
                    <p>{caption}</p>
                </div>
            </div>
        </>
    )
}
export default Card