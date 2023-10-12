import React from "react";
import {
  mainSection,
  main_title_area,
  main_words_list_container,
  main_words_list_item,
  mail_bottom_sheet_container,
} from "@/styles/mobileStyle.css";
// import Lottie from "react-lottie";
import animationData from "@/assets/lottie/law.json";
import clickAnimationData from "@/assets/lottie/click.json";
import clickMainAnimationData from "@/assets/lottie/clickMain3.json";
import {
  LocalPolice,
  CarCrash,
  Business,
  Public,
  ReceiptLong,
  Gavel,
} from "@mui/icons-material";

import MainSvg from "@/assets/svgs/MainSvg";
import { TextField as MuiTextField, styled } from "@mui/material";
import { root } from "@/styles/root.css";
import Button from "@/components/ui/Button";

import IconKakaotalk from "@/assets/icons/IconKakaotalk";
import IconPhone from "@/assets/icons/IconPhone";
import { useState, useEffect, useRef } from "react";
import {
  Snackbar,
  SwipeableDrawer as MuiSwipeableDrawer,
  Alert,
} from "@mui/material";
import CounselModal from "./CounselModal";
// import MainText from "@/assets/svgs/mainText";
import DesktopMainText from "@/assets/svgs/DesktopMainText";
import { main_banner_button, main_banner_button_text } from "@/styles/main.css";

const drawerBleeding = 56;

const WORDS_LIST = [
  {
    label: "형사",
    icon: <LocalPolice style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "상속",
    icon: <ReceiptLong style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "교통사고",
    icon: <CarCrash style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "손해배상",
    icon: <Gavel style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "스타트업",
    icon: <Business style={{ fontSize: 24, paddingTop: 3 }} />,
  },
  {
    label: "외국인 관련",
    icon: <Public style={{ fontSize: 24, paddingTop: 3 }} />,
  },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: JSON.stringify(animationData),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const clickOptions = {
  loop: true,
  autoplay: true,
  animationData: JSON.stringify(clickAnimationData),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const clickMainOptions = {
  loop: true,
  autoplay: true,
  animationData: JSON.stringify(clickMainAnimationData),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SwipeableDrawer = styled(MuiSwipeableDrawer)(() => ({
  "& .MuiPaper-root": {
    margin: "0 auto",
    maxWidth: 1000,
    borderRadius: "20px 20px 0 0",
  },
}));

const Main = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [isClicked, setIsClicked] = useState({
    kakao: 0,
    tel: 0,
    place: 0,
    mail: 0,
  });

  const shareButtonRef = useRef(null);

  const handleKakaoClick = () => {
    setOpen(false);
    setIsClicked({
      ...isClicked,
      kakao: isClicked.kakao + 1,
    });
  };

  const handleMailClick = () => {
    setIsMailOpen(true);
  };

  const handleTelClick = () => {
    setOpen(false);
    setIsClicked({
      ...isClicked,
      tel: isClicked.tel + 1,
    });
  };

  const handleMailSubmitComplete = () => {
    setIsClicked({
      ...isClicked,
      mail: isClicked.mail + 1,
    });
  };

  useEffect(() => {
    const width = window && window.innerWidth;
    if (width < 1200) {
      return;
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "mail_submit", //광고주 측에서 설정하고 싶은 값(default convType) : "mail_submit_mobile", //광고주 측에서 설정하고 싶은 값(default convType)
        convType: "etc", //etc, join, login
        click: "#mail_submit", //click으로 전환 잡을 경우 css selector 값
      });
    }
  }, [isClicked.mail]);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "kakao",
        convType: "etc",
        click: "#kakao",
      });
    }
  }, [isClicked.kakao]);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "tel",
        convType: "etc",
        click: "#tel",
      });
    }
  }, [isClicked.tel]);

  console.log(isClicked);

  const [kakaokey, setKakaokey] = useState("");

  useEffect(() => {
    if (window) {
      setKakaokey(window.ENV.KAKAO_JS_KEY);
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.CallMtm =
        window.CallMtm ||
        function () {
          (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
        };

      CallMtm({
        productName: "place",
        convType: "etc",
        click: "#place",
      });
    }
  }, [isClicked.place]);

  return (
    <section id="main" className={mainSection}>
      <div
        style={{
          height: 500,
        }}
      >
        <div className={main_title_area}>
          <MainSvg
            style={{
              position: "absolute",
              bottom: -500,
              right: 0,
              maxWidth: 520,
              zIndex: 0,
            }}
          />
          <p
            style={{
              color: root.color2.COLOR_05,
              fontWeight: 500,
              fontSize: 16,
              position: "absolute",
              left: 20,
            }}
          >
            최고의 전문가가 함께합니다
          </p>
          <div style={{ position: "absolute", left: 0, top: -9 }}>
            {/* <Lottie option={defaultOptions} height={100} width={150} /> */}
          </div>
          <div style={{ position: "absolute", left: 20, top: 48 }}>
            {/* <MainText /> */}
            <DesktopMainText />
          </div>

          <p
            style={{
              color: root.color2.GRAY_02,
              fontWeight: 500,
              fontSize: 18,
              marginTop: 28,
              lineHeight: 1.5,
              position: "relative",
              top: 180,
              left: 20,
              zIndex: 5,
            }}
          >
            <span style={{ background: root.color.WHITE }}>
              &quot;당신의 정의, 오직 당신을 위한 공정&quot;
              <br />
              최적의 방법으로 당신만을 위해 싸우겠습니다
            </span>
          </p>

          <Button
            style={{
              position: "absolute",
              left: 20,
              top: 260,
              fontSize: 14,
              fontWeight: 400,
              height: 42,
              marginTop: 30,
              width: "fit-content",
              padding: "8px 22px",
              background: root.color2.COLOR_05,
              color: root.color.WHITE,
            }}
            onClick={handleMailClick}
          >
            지금 당장 무료로 법률 상담을 받아보세요
            {/* <Lottie options={clickMainOptions} height={40} width={40} /> */}
          </Button>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          top: 0,
          height: 170,
          borderRadius: 18,
        }}
      >
        <div className={main_words_list_container}>
          {WORDS_LIST.map((word) => {
            return (
              <div className={main_words_list_item} key={word.label}>
                <div>{word.icon}</div>
                {word.label}
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "relative",
          bottom: -20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <a id="tel" href="tel:01079340883" className={main_banner_button}>
          <div onClick={handleTelClick}>
            <div style={{ position: "absolute", top: 0, right: 0 }}>
              <IconPhone />
            </div>
            <div style={{ position: "absolute", top: 80, right: 12 }}>
              {/* <Lottie options={clickOptions} height={60} width={38} /> */}
            </div>

            <p className={main_banner_button_text}>
              무료
              <br />
              전화 상담
            </p>
          </div>
        </a>

        <a
          id="kakao"
          href="https://pf.kakao.com/_TsAxdG"
          className={main_banner_button}
          target="_blank"
        >
          <div onClick={handleKakaoClick}>
            <div style={{ position: "absolute", top: 0, right: 8 }}>
              <IconKakaotalk />
            </div>
            <div style={{ position: "absolute", top: 80, right: 12 }}>
              {/* <Lottie options={clickOptions} height={60} width={38} /> */}
            </div>
            <p className={main_banner_button_text}>
              무료
              <br />
              카카오톡 상담
            </p>
          </div>
        </a>

        <div id="mail" onClick={handleMailClick} className={main_banner_button}>
          <div>
            <div style={{ position: "absolute", top: 0, right: 0 }}>
              <IconPhone />
            </div>
            <div style={{ position: "absolute", top: 80, right: 12 }}>
              {/* <Lottie options={clickOptions} height={60} width={38} /> */}
            </div>

            <p className={main_banner_button_text}>
              무료
              <br />
              메일 상담
            </p>
          </div>
        </div>
      </div>
      <SwipeableDrawer
        anchor="bottom"
        onOpen={() => setIsMailOpen(true)}
        open={isMailOpen}
        onClose={() => setIsMailOpen(false)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {isMailOpen && (
          <div className={mail_bottom_sheet_container}>
            <CounselModal
              onOpenSnackbar={() => setIsSnackbarOpen(true)}
              onClose={toggleDrawer(false)}
            />
          </div>
        )}
      </SwipeableDrawer>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={handleMailSubmitComplete}
      >
        <Alert severity="success" sx={{ width: "90%" }}>
          상담 문의 메일이 성공적으로 전송되었습니다.
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Main;
