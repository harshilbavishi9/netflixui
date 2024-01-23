import { Info, PlayArrow } from "@mui/icons-material";
import "./featured.scss";

export default function Featured() {
  return (
    <section class="ban_sec">
        <div class="ban_img">
          <img src="https://res.cloudinary.com/dp1ilgjra/image/upload/v1704798492/main/uploads/84XPpjGvxNyExjSuLQe0SzioErt.jpg.jpg" alt="banner" border="0" />
          <div class="ban_text">
            <strong>
              <span>Meeting current</span><br /> needs now
            </strong>
            <p>You can prioritize a child’s mental, emotional, <br />
              behavioral, and physical health </p>
            <a href="#">Lend a hand</a>
          </div>
        </div>
    </section>

    // <div className="featuredd">
    //   <img
    //     className="featuredimg"
    //     src="https://res.cloudinary.com/dp1ilgjra/image/upload/v1704798492/main/uploads/84XPpjGvxNyExjSuLQe0SzioErt.jpg.jpg"
    //     alt=""
    //   />
    //   <div className="info">
    //     <img
    //       src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
    //       alt=""
    //     />
    //     <span className="desc">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
    //       adipisci repellendus eum quasi illo, velit numquam, maxime tempora
    //       sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
    //       temporibus eum earum?
    //     </span>
    //     <div className="buttons">
    //       <button className="play">
    //         <PlayArrow />
    //         <span>Play</span>
    //       </button>
    //       <button className="more">
    //         <Info />
    //         <span>Info</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}