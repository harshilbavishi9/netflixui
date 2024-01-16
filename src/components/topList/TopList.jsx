import React from 'react';
import Slider from 'react-slick';
import './toplist.scss';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';


const TopListPage = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NavigateNext />,
    prevArrow: <NavigateBefore />,
  };

  return (
    <div className="slider-container">
      <><h2 className='h2tag'>Top 10 Shows</h2>
        <div className="wrapper">
          <Slider {...settings}>
            <div className="item" style={"width: 100%;/* display: inline-block; */"}>
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" alt="Item 1" />
              <div>1</div>
            </div>
            <div className="item">
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg" alt="Item 2" />
              <div>2</div>
            </div>
            <div className="item">
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg" alt="Item 3" />
              <div>3</div>
            </div>
            <div className="item">
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/wGFUewXPeMErCe2xnCmmLEiHOGh.jpg" alt="Item 4" />
              <div>4</div>
            </div>
            <div className="item">
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" alt="Item 5" />
              <div>5</div>
            </div>
            <div className="item">
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg" alt="Item 6" />
              <div>6</div>
            </div>
            <div className="item">
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg" alt="Item 7" />
              <div>7</div>
            </div>
            <div className="item">
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/2IWouZK4gkgHhJa3oyYuSWfSqbG.jpg" alt="Item 8" />
              <div>8</div>
            </div>
            <div className="item">
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="Item 9" />
              <div>9</div>
            </div>
            <div className="item">
              <img src="//image.tmdb.org/t/p/w220_and_h330_face/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg" alt="Item 10" />
              <div>10</div>
            </div>
          </Slider>
        </div ></>
    </div>
  );
}

export default TopListPage;
