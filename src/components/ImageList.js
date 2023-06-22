import ImageShow from "./ImageShow"
import "./ImageList.css"
const ImageList = ({images}) => {
    const spreadImages = () => {
        return images.map(eachImage=>{
            return (
                <div key={eachImage.id}>
                <div>
                <ImageShow props={eachImage} ></ImageShow>
                </div>
                
                </div>
                
            )
        })
    }
    return (
        <div className="image-list">
            {spreadImages()}
        </div>
    );
}
export default ImageList