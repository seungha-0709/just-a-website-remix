import Logo from "@/assets/svgs/logo";
import { hamburger_li, lnb_container } from "@/styles/layout.css";

const Lnb = () => {
  return (
    <div className={lnb_container}>
      <div>
        <Logo />
        <ul
          style={{
            listStyle: "none",
            margin: "60px 0 20px",
            padding: 0,
            textAlign: "left",
          }}
        >
          <a href="#profile_mobile">
            <li className={hamburger_li}>변호사 소개</li>
          </a>
          <a href="#success_mobile">
            <li className={hamburger_li}>성공 사례</li>
          </a>
          <a href="#blogs_mobile">
            <li className={hamburger_li}>블로그 소개</li>
          </a>
          <a href="#place-mobile">
            <li className={hamburger_li}>오시는 길</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Lnb;
