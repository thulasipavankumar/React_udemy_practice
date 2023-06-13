const Card = ({title,imgUrl}) => {
    return (
    <div> 
        <h3>{title}</h3>
        <img src={imgUrl} width={50} height={50}/>
    </div>
    );
}
export default Card