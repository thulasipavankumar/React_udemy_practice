import "./ImageShow.css"
const ImageShow = ({props}) => {
    // 
    return (
        <div className="img">
           
            <img src={props.urls.small}  key={props.id} alt={props.alt_description}/>
            <div>
            
            </div>
            
        </div>
    )
}
export default ImageShow