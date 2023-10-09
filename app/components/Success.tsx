import Lottie from "react-lottie";
import * as animationData from "@/assets/lottie/success.json";
import { useDraggable } from "react-use-draggable-scroll";
import { useState, useRef, useEffect } from "react";
import { root } from "@/styles/root.css";
import { getBlogUrl } from "@/data/util";
import { NavigateNext } from "@mui/icons-material";
import { useRouteLoaderData } from "@remix-run/react";
import {
  successSection,
  success_content_area,
  success_example_item,
  success_item_container,
  success_item_content_container,
  success_subtitle,
  success_title,
} from "@/styles/success.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: JSON.stringify(animationData),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SuccessItem = ({ onClick, selected, itemId, item }) => {
  const targetUrl = getBlogUrl(item);
  return (
    <a href={targetUrl} target="_blank">
      <button
        className={success_example_item}
        style={{
          width: 200,
          height: 300,
          background: "transparent",
          padding: 0,
          border: "none",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 120,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src={item.feature_image}
            loading="lazy"
            alt={item.title}
            width={200}
            height={120}
            style={{ opacity: 1, objectFit: "cover" }}
          />
        </div>
        <div style={{ height: 120, marginTop: 20 }}>
          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: root.color2.RED_01,
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            {item.contentObj.tag}
          </p>
          <p
            style={{
              fontWeight: 500,
              fontSize: 18,
              color: root.color2.BLACK,
              position: "relative",
              zIndex: 40,
              height: 40,
              margin: 0,
            }}
          >
            {item.contentObj.title}
          </p>
          {/* <p
            className="success_item_brief"
            // dangerouslySetInnerHTML={{ __html: item.html }}
            style={{
              marginTop: 12,
              color: "#717171",
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            {item.excerpt}
          </p> */}
        </div>
      </button>
    </a>
  );
};

const Success = () => {
  const data = useRouteLoaderData<any>("routes/_index");
  const success = data.success;

  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const imageContainerRef = useRef();
  const { events } = useDraggable(imageContainerRef);

  const handleClick = (item, index) => {
    const itemSelected = isItemSelected(index);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== index)
        : currentSelected.concat(index)
    );
  };

  return (
    <section id="success_mobile" className={successSection}>
      <div style={{ position: "absolute", right: 80, top: -16 }}>
        {/* <Lottie options={defaultOptions} height={150} width={150} /> */}
      </div>
      <div className={success_content_area}>
        <a href={`/success`}>
          <h2 className={success_title}>변호 승소 & 성공 사례</h2>
        </a>
        <h3 className={success_subtitle}>
          공정한 변호사들이
          <br />
          최적의 방법으로
          <br />
          당신만을 위해 싸운 결과입니다.
        </h3>
        <div
          className={success_item_container}
          ref={imageContainerRef}
          {...events}
        >
          <div className={success_item_content_container}>
            {success.map((item, index) => {
              return (
                <SuccessItem
                  onClick={() => {
                    handleClick(item, index);
                  }}
                  key={index}
                  itemId={index}
                  item={item}
                  selected={isItemSelected(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
