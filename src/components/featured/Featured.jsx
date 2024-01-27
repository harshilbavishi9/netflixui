import { Info, PlayArrow } from "@mui/icons-material";
import "./featured.scss";

export default function Featured() {
  return (
    <div className="Banner" style={{ backgroundImage: `url(https://res.cloudinary.com/dp1ilgjra/image/upload/v1704798492/main/uploads/84XPpjGvxNyExjSuLQe0SzioErt.jpg.jpg)` }} >
      <div className="content">
        <h1 className="name1">Breaking Bed</h1>

        <div className="dicsd">
          <p className="disc1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque non provident, exercitationem, rem debitis assumenda quidem
          </p>
          <p className="disc2">
            <span>Language</span> : English
          </p>
          <p className="disc3">
            <span>Country</span> : USA
          </p>
          <div className="btns">
            <a className="btn">PLAY</a>
            <a className="btn">MY LIST</a>
          </div>
        </div>
      </div>
    </div>

  );
}