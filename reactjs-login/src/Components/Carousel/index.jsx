import { useState } from 'react';
import './carousel.css'

const Carousel = () => {
    const sliceImg =[
        // {scr : 'Asset/Image/Capture.PNG'},
        // {scr : 'Asset/Image/Capture1.PNG'},
        // {scr : 'Asset/Image/Capture2.PNG'},
        // {scr : 'Asset/Image/Capture3.PNG'},
        // {scr : 'Asset/Image/Capture4.PNG'},
        // {scr : 'Asset/Image/Capture5.PNG'},  
        // {scr : 'Asset/Image/Capture6.PNG'}
        require('Asset/Image/Capture.PNG'),
        require('Asset/Image/Capture1.PNG'),
        require('Asset/Image/Capture2.PNG'),
        require('Asset/Image/Capture3.PNG'),
        require('Asset/Image/Capture4.PNG'),
        require('Asset/Image/Capture5.PNG'),
        require('Asset/Image/Capture6.PNG'),
    ];
    const [indexImg,setindexImg]= useState(0);

    const prePic = () => {
        if (indexImg -1 >= 0){
            setindexImg((prev) => prev - 1)
        } else {
            setindexImg(sliceImg.length -1)
        }
    };

    const nextPic = () => {
        if (indexImg + 1  < sliceImg.length) {
            setindexImg((prev) => prev + 1)
        } else {
            setindexImg(0)
        }
      }
    
    return (
            <div className="carousel-wrapper">
                <div className="carousel-slice">
                    <img className='img-fluid' src={sliceImg[indexImg]} alt="" />
                </div>
                <div className="prevSlider">
                    <i className="fa-solid fa-chevron-left" onClick={prePic}></i>
                </div>
                <div className="nextSlider">
                    <i className="fa-solid fa-chevron-right" onClick={nextPic}></i>
                </div>
            </div>
    );
}
 
export default Carousel;