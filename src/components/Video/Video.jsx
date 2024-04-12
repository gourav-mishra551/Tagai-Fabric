import ReactPlayer from "react-player";
import "./video.css"

const Video = () => {


    return (
        <>
        <h1 className='febric-heading' style={{margin:"8vh 0"}}> Our Jharkhand Thread Work</h1>
        
        <div className="video-main">
            
            <div className="video">
                <ReactPlayer
                    url="https://youtu.be/IZJVvEhlDFo?feature=shared"
                    playing={false}
                    sound = {false}
                    width="500px"
                    height="300px"
                />
            </div>
            <div className="video">
                <ReactPlayer
                    url="https://youtu.be/iovMBpKBRII?feature=shared"
                    playing={true}
                    width="500px"
                    height="300px"
                />
            </div>
        </div>
        </>
    )
}

export default Video