import React from 'react'
import "./ImageGrallery.css";

const ImageGrallery = ({ fetchData }) => {
  //endpointURL: https://pixabay.com/api/?key=31621166-d69c50502e9ef7b3bd158230b&q=yellow&image_type=photo&pretty=true
  return (
    <div>
      <div className="images-wrapper">
      {fetchData.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL} target="_blank">
              <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGrallery
