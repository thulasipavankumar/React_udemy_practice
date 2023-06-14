const Card = ({title,imgUrl}) => {
    return (
    <div className="card"> 
    <div className="card-image">
        <figure className="image is-1by1">
        <img src={imgUrl}  alt="logo"/>
        </figure>
    </div >
    <div className="card-content"> 
    <div className="media-content"> 
    <p className="title is-4">{title}</p>
    </div>
    </div>
        
        
    </div>
    );
}
export default Card