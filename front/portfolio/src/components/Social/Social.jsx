import { socialMedia } from "../../utils/utils";
import "../Home/Home.css";

export default function Social() {
  return (
    <div className="home__social">
      {socialMedia.map((item, index) => (
        <a
          href={item.href}
          className="hover-style_v2 hover-style_v2--small"
          target="_blank"
          key={index}
        >
          <i className={item.iconClass}></i>
        </a>
      ))}
    </div>
  );
}