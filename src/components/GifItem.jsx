
export const GifItem = ({ title, url }) => {

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img className="img-fluid h-auto" src={url} alt={title} />
                <div className="card-body">
                    <p className="fs-5">{title}</p>
                </div>
            </div>
        </div>
    )
}
