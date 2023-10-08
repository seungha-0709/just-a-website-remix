import { root } from "@/styles/root.css";

import { useState, useEffect, useRef } from "react";
import Main from "./Main";
import Profile from "./Profile";
import Blogs from "./Blogs";
import Success from "./Success";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Place from "./Place";
import {
  Snackbar,
  Alert,
  SwipeableDrawer as MuiSwipeableDrawer,
  styled,
} from "@mui/material";
// import { addMember } from "../../../lib/admin";
import Button from "@/components/ui/Button";
import Logo from "@/assets/svgs/logo.svg";
import ShareIcon from "@mui/icons-material/Share";

import { hamburger_button, hamburger_li } from "@/styles/mobileStyle.css";
import { useRouter } from "next/router";

const SwipeableDrawer = styled(MuiSwipeableDrawer)(() => ({
  "& .MuiPaper-root": {
    width: 200,
    padding: 20,
  },
}));

const Mobile = ({
  posts,
  success,
  featuredPosts,
  isRender,
  handleKakaoClick,
  handleMailClick,
  handleMailSubmitComplete,
  handleTelClick,
  open,
  setOpen,
}) => {
  const router = useRouter();
  const shareButtonRef = useRef(null);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleLiMenuClick = (href) => () => {
    router.push(href);
    setOpen(false);
  };

  useEffect(() => {
    if (window && shareButtonRef.current) {
      shareButtonRef.current.addEventListener("click", async () => {
        try {
          if (window.navigator.share) {
            await window.navigator.share({
              title: "공지연, 정진권 변호사 - 법무법인 소울",
              text: "오직 당신만의 공정을 찾아 함께합니다.",
              url: "https://kongjeongthelaw.com",
            });
            return;
          }
          await navigator.clipboard
            .writeText("https://kongjeongthelaw.com")
            .then(() => setIsSnackbarOpen(true));
        } catch (e) {
          console.log(e);
        }
      });
    }
  }, []);

  return (
    <div>
      <header
        style={{
          height: 56,
          width: "100%",
          position: "fixed",
          top: 0,
          zIndex: 50,
          background: root.color.WHITE,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          borderBottom: `1px solid #e1e1e1`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className={hamburger_button} onClick={toggleDrawer(true)}>
            <MenuIcon style={{ color: root.color2.BLACK }} />
          </button>
          <Logo style={{ marginLeft: 8 }} />
        </div>
        <button
          ref={shareButtonRef}
          style={{ marginRight: 40 }}
          className={hamburger_button}
        >
          <ShareIcon style={{ color: root.color2.BLACK }} />
        </button>
      </header>
      <div style={{ position: "relative", top: 40 }}>
        <Main
          isRender={isRender}
          isMailOpen={isMailOpen}
          onMailClose={() => setIsMailOpen(false)}
          onMailClick={handleMailClick}
          onTelClick={handleTelClick}
          onKakaoClick={handleKakaoClick}
          onMailSubmitClick={handleMailSubmitComplete}
        />
        <Profile />
        <Success examples={success} />
        <Blogs blogPosts={posts} featuredPosts={featuredPosts} />
        <Place />
      </div>
      {open && (
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          swipeAreaWidth={56}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
            }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon style={{ color: root.color2.COLOR_04 }} />
            <ul
              style={{
                listStyle: "none",
                margin: "60px 0 20px",
                padding: 0,
                textAlign: "right",
              }}
            >
              <li
                onClick={handleLiMenuClick("/#profile_mobile")}
                className={hamburger_li}
              >
                변호사 소개
              </li>
              <li
                onClick={handleLiMenuClick("/#success_mobile")}
                className={hamburger_li}
              >
                성공 사례
              </li>
              <li
                onClick={handleLiMenuClick("/#blogs_mobile")}
                className={hamburger_li}
              >
                블로그 소개
              </li>
              <li
                onClick={handleLiMenuClick("/#place_mobile")}
                className={hamburger_li}
              >
                오시는 길
              </li>
            </ul>
          </div>
          <div
            style={{
              position: "relative",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              display: "flex",
              gap: 12,
              justifyContent: "flex-end",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Button
              id="tel_mobile"
              style={{
                display: "block",
                margin: "0px",
                width: "50%",
                height: 80,
                borderRadius: 8,
                padding: "0 16px",
                textAlign: "left",
                position: "relative",
                color: root.color.WHITE,
                background: root.color2.BLACK,
                // border: `2px solid ${root.color2.COLOR_04}`,
              }}
              onClick={handleTelClick}
            >
              <span style={{ textAlign: "left" }}>
                무료
                <br />
                전화 상담
              </span>
            </Button>
            <Button
              id="kakao_mobile"
              onClick={handleKakaoClick}
              style={{
                display: "block",
                margin: "0px",
                width: "50%",
                height: 80,
                borderRadius: 8,
                padding: "0px 16px",
                textAlign: "left",
                position: "relative",
                color: root.color.WHITE,
                background: root.color2.BLACK,
                // border: `2px solid ${root.color2.COLOR_04}`,
              }}
            >
              무료
              <br />
              카톡 상담
            </Button>
            <Button
              id="mail_mobile"
              onClick={handleMailClick}
              style={{
                display: "block",
                margin: "0px",
                width: "50%",
                height: 80,
                borderRadius: 8,
                padding: "0px 16px",
                textAlign: "left",
                position: "relative",
                color: root.color.WHITE,
                background: root.color2.BLACK,
                // border: `2px solid ${root.color2.COLOR_04}`,
              }}
            >
              무료
              <br />
              메일 상담
            </Button>
          </div>
        </SwipeableDrawer>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert severity="success" sx={{ width: "90%" }}>
          링크가 복사되었습니다.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Mobile;
