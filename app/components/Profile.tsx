import React from "react";
import { jeongJinKwon, kongJiYeon } from "@/data/profile";
import {
  profileSection,
  profile_title_text,
  flex,
  name,
  ul,
  li_strong,
  li_span,
  profile_kong,
  profile_jeong,
  profile_title_name,
} from "@/styles/profile.css";
import { root } from "@/styles/root.css";

const Profile = () => {
  return (
    <section className={profileSection}>
      <div id="profile_mobile" className={profile_kong}>
        <img
          src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_kong_solo.png"
          width={300}
          height={500}
          style={{
            objectFit: "contain",
          }}
          alt="공지연 변호사"
        />
        <div>
          <div className={profile_title_text}>
            변호사 <em className={profile_title_name}>공 지 연</em>
          </div>
          <ul className={ul}>
            <li>
              <span className={li_span}>{kongJiYeon.education.name}</span>
            </li>
            {kongJiYeon.education.content.map((item) => {
              return (
                <li key={item}>
                  <strong className={li_strong}>{item}</strong>
                </li>
              );
            })}

            <li>
              <span style={{ marginTop: 28 }} className={li_span}>
                경력
              </span>
            </li>
            {kongJiYeon.experience.content.map((item) => {
              return (
                <li key={item}>
                  <strong className={li_strong}>{item}</strong>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={profile_jeong}>
        <img
          src="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_jeong_solo.png"
          width={300}
          height={500}
          style={{
            objectFit: "contain",
          }}
          alt="정진권 변호사"
        />
        <div style={{ paddingBottom: 40 }}>
          <div className={profile_title_text}>
            변호사 <em className={name}>정 진 권</em>
          </div>
          <ul className={ul}>
            <li>
              <span className={li_span}>{jeongJinKwon.education.name}</span>
            </li>
            {jeongJinKwon.education.content.map((item) => {
              return (
                <li key={item}>
                  <strong className={li_strong}>{item}</strong>
                </li>
              );
            })}

            <li>
              <span style={{ marginTop: 28 }} className={li_span}>
                경력
              </span>
            </li>
            {jeongJinKwon.experience.content.map((item) => {
              return (
                <li key={item}>
                  <strong className={li_strong}>{item}</strong>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
