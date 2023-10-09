import * as React from "react";
const SvgLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={60}
    fill="none"
    viewBox="0 0 116 50"
    {...props}
  >
    <g clipPath="url(#logo_svg__a)">
      <mask
        id="logo_svg__b"
        width={154}
        height={153}
        x={-20}
        y={-49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M133.31-49H-20v152.3h153.31V-49Z" />
      </mask>
      <g fill="#401107" mask="url(#logo_svg__b)">
        <path d="M49.31 14.42v2.41h-9.27v1.44h7.56v5.92H32.43v1.03H47.6v2.42H29.24v-5.87h15.18v-1.09H29.24v-2.41h7.57v-1.44h-9.27v-2.41h21.77ZM38.43 10.83h.25l.23-.02.25-.04.23-.06.23-.06.23-.1.23-.08.22-.11.21-.11.19-.14.19-.15.17-.15.17-.15.15-.17.13-.19.13-.19.12-.19.09-.21.08-.21.08-.21.06-.23.04-.21.02-.23.02-.23-.02-.23-.02-.21-.04-.23-.06-.23-.08-.21-.08-.21-.09-.21-.12-.19-.13-.19-.13-.19-.15-.17-.17-.15-.17-.15-.19-.15-.19-.14-.21-.11-.22-.1-.23-.1-.23-.1-.23-.06-.23-.06-.25-.04-.23-.02h-.5l-.23.02-.25.04-.23.06-.23.06-.23.1-.23.1-.21.1-.21.11-.19.14-.19.15-.17.15-.17.15-.15.17-.14.19-.13.19-.11.19-.1.21-.08.21-.08.21-.06.23-.04.23-.02.21-.02.23.02.23.02.23.04.21.06.23.08.21.08.21.1.21.11.19.13.19.14.19.15.17.17.15.17.15.19.15.19.14.21.11.21.11.23.08.23.1.23.06.23.06.25.04.23.02h.25Zm2.55-9.15.38.17.38.19.36.21.37.23.32.26.33.27.29.31.29.31.25.33.23.34.21.37.17.36.16.36.13.4.1.38.06.4.06.4v.81l-.06.4-.06.4-.1.38-.13.4-.16.36-.17.38-.21.35-.23.34-.25.32-.29.33-.29.29-.33.26-.32.27-.37.23-.36.21-.38.19-.38.17-.42.14-.4.11-.42.1-.44.08-.42.04H38l-.42-.04-.44-.08-.42-.1-.4-.11-.42-.14-.38-.17-.38-.19-.38-.21-.34-.23-.35-.27-.31-.26-.31-.29-.27-.33-.25-.32-.23-.34-.21-.35-.17-.38-.15-.36-.14-.4-.1-.38-.07-.4-.04-.4-.02-.41.02-.4.04-.4.07-.4.1-.38.14-.4.15-.36.17-.36.21-.37.23-.34.25-.33.27-.31.31-.31.31-.27.35-.26.34-.23.38-.21.38-.19.38-.17.42-.14.4-.11.42-.1.44-.06.42-.04.44-.02.44.02.42.04.44.06.42.1.4.11.42.14ZM12.61 1.42l10.62 15.91-2.51 1.45-8.11-12.13-8.05 12-2.51-1.46L12.61 1.42Z" />
        <path d="M23.17 23.42v2.41H2.03v-2.41h8.95v-7.43h3.24v7.43h8.95ZM111.72 48.08v1.43h-9.89v-5.52h1.91v4.09h7.98ZM111.72 34.54h-1.92v10.72h1.92V34.54ZM102.48 40.36l.15.07.15.07.16.05.16.05.16.04.16.03h.66l.17-.03.16-.04.16-.05.16-.05.15-.07.15-.07.14-.09.14-.09.12-.09.13-.1.11-.11.1-.12.1-.12.08-.13.08-.14.07-.15.06-.14.06-.15.03-.16.02-.15.02-.15v-.32l-.02-.15-.02-.15-.03-.16-.06-.15-.06-.14-.07-.15-.08-.14-.08-.12-.1-.12-.1-.12-.11-.11-.13-.1-.12-.09-.14-.09-.14-.09-.15-.07-.15-.07-.16-.05-.16-.05-.16-.03-.17-.03h-.66l-.16.03-.16.03-.16.05-.16.05-.15.07-.15.07-.15.09-.12.09-.14.09-.11.1-.11.11-.11.12-.09.12-.09.12-.08.14-.07.15-.06.14-.05.15-.04.16-.03.15v.15l-.02.16v.16l.02.15.03.15.04.16.05.15.06.14.07.15.08.14.09.13.09.12.11.12.11.11.11.1.14.09.12.09.15.09Zm5.43-2.29v.5l-.02.26-.05.25-.07.25-.08.24-.09.24-.11.24-.12.21-.15.22-.16.22-.17.19-.19.18-.21.18-.2.16-.23.15-.23.14-.25.11-.25.11-.25.09-.26.07-.27.06-.27.05-.27.02h-.55l-.27-.02-.27-.05-.26-.06-.26-.07-.26-.09-.25-.11-.24-.11-.24-.14-.22-.15-.21-.16-.19-.18-.19-.18-.17-.19-.16-.22-.15-.22-.12-.21-.11-.24-.1-.24-.08-.24-.06-.25-.04-.25-.04-.26v-.5l.04-.26.04-.25.06-.25.08-.24.1-.24.11-.24.12-.22.15-.23.16-.2.17-.19.19-.18.19-.18.21-.16.22-.15.24-.13.24-.13.25-.1.26-.09.26-.07.26-.06.27-.05.27-.02h.55l.27.02.27.05.27.06.26.07.25.09.25.1.25.13.23.13.23.15.2.16.21.18.19.18.17.19.16.2.15.23.12.22.11.24.09.24.08.24.07.25.05.25.02.26ZM79.95 43.47v6.03H69.7v-6.03h1.92v1.4h6.42v-1.4h1.92-.01Zm-1.92 2.81h-6.42v1.79h6.42v-1.79ZM79.95 34.54v7.8h-1.92v-4.06h-1.57v-1.43h1.57v-2.31h1.92Z" />
        <path d="M76.46 38.28v4.06h-8.2v-7.8h1.92v2.31h4.37v-2.31h1.92v3.74h-.01Zm-1.92 0h-4.37v2.63h4.37v-2.63ZM48.3 43.37v1.43h-5.29v4.66H41.1V44.8h-5.3v-1.43h12.5ZM47.63 41.53H36.47v-7h11.16v7Zm-1.92-5.58h-7.33v4.16h7.33v-4.16ZM15.56 43.47v6.03H5.31v-6.03h1.92v1.4h6.42v-1.4h1.91Zm-1.91 2.81H7.23v1.79h6.42v-1.79ZM15.56 34.54v7.8h-1.91v-4.06h-1.58v4.06h-8.2v-7.8h1.92v2.31h4.37v-2.31h1.91v2.31h1.58v-2.31h1.91Zm-5.41 3.74H5.78v2.63h4.37v-2.63ZM53.815 23.723v-10.91h2.523v.836h-1.569v9.239h1.569v.835h-2.523ZM110.772 12.814v10.909h-2.523v-.835h1.568v-9.24h-1.568v-.834h2.523ZM73.906 2.256h1.243v2.69h-1.243v-2.69Zm-.119 8.004h1.09v6.982h-1.09V10.26Zm-3.764-6.046h9.265v1.124h-9.265V4.214Zm6.523 5.927h1.124v5.858c0 .358.017.562.085.63.051.068.136.085.239.085h.374c.136 0 .239-.017.307-.068.068-.068.119-.204.17-.425.034-.29.051-.852.051-1.618.222.17.545.34.835.425-.017.75-.069 1.601-.154 1.874-.085.306-.221.51-.425.63-.17.119-.477.17-.733.17h-.715c-.29 0-.63-.085-.851-.29-.239-.22-.307-.493-.307-1.55v-5.721Zm-5.45.034h1.124v2.077c0 1.959-.323 4.07-2.81 5.62a4.745 4.745 0 0 0-.834-.817c2.282-1.362 2.52-3.202 2.52-4.82v-2.06Zm-1.124-1.942c2.044-.068 5.11-.221 8.056-.391V8.88c-2.862.204-5.842.391-7.954.527l-.102-1.175Zm2.98-3.32 1.244.408c-.664 1.243-1.482 2.691-2.163 3.645l-.954-.392c.647-.988 1.448-2.554 1.874-3.661ZM75.61 6.41l.971-.477c1.124 1.056 2.401 2.555 2.963 3.577l-1.039.562c-.528-1.005-1.754-2.555-2.895-3.662ZM64.046 3.278h5.415v1.14h-5.415v-1.14Zm.477 4.104h1.039v7.834h-1.04V7.382Zm-1.056 7.8c1.669-.443 4.274-1.21 6.744-1.942l.17 1.141c-2.333.716-4.802 1.482-6.608 2.027l-.306-1.226ZM67.4 9.085h2.657v1.158H67.4V9.085Zm1.669-5.807h.29l.255-.085.817.596c-.766 1.107-1.89 2.35-2.827 3.116a5.764 5.764 0 0 0-.732-.715c.783-.698 1.72-1.84 2.197-2.674v-.238Zm-2.333 2.588 1.14.137v8.685h-1.14V5.866ZM87.847 22.041h.41v2.386h-.41v-2.386Zm.297 1.045h.777v.341h-.777v-.341Zm-3.154.851h.347c.92 0 1.44-.03 2.04-.148l.044.331c-.614.129-1.144.159-2.084.159h-.347v-.342Zm0-1.604h1.97v.337h-1.564v1.5h-.406v-1.837Zm.446 2.337h.406v.55h2.01v-.55h.405v1.772h-2.821V24.67Zm.406.876v.56h2.01v-.56h-2.01ZM92.4 22.04h.411v2.386h-.41v-2.386Zm.297 1.045h.777v.341h-.777v-.341Zm-3.153.851h.347c.92 0 1.44-.03 2.039-.148l.045.331c-.614.129-1.144.159-2.084.159h-.347v-.342Zm0-1.604h1.97v.337H89.95v1.5h-.406v-1.837Zm.446 2.337h.406v.55h2.01v-.55h.405v1.772H89.99V24.67Zm.406.876v.56h2.01v-.56h-2.01Zm6.558-3.52h.41v2.47h-.41v-2.47Zm.238 1.075h.836v.346h-.837v-.346Zm-2.669 1.623h2.842v1h-2.426v.545h-.406v-.842h2.43v-.39h-2.44v-.313Zm.01 1.426h2.995v.317h-2.995v-.317Zm-.628-3.708h2.643v.322h-2.643v-.322Zm1.321.52c.644 0 1.07.282 1.07.738 0 .45-.426.727-1.07.727-.653 0-1.074-.277-1.074-.727 0-.456.42-.738 1.074-.738Zm0 .302c-.415 0-.683.168-.683.436 0 .262.267.43.683.43.411 0 .678-.168.678-.43 0-.268-.267-.436-.678-.436Zm-.208-1.272h.411v.673h-.41v-.673ZM103.479 24.145h.406v.688h-.406v-.688Zm.208-2.05c.985 0 1.574.273 1.574.773s-.589.777-1.574.777c-.99 0-1.574-.277-1.574-.777s.584-.772 1.574-.772Zm0 .313c-.732 0-1.153.168-1.153.46 0 .297.421.465 1.153.465.728 0 1.149-.168 1.149-.465 0-.292-.421-.46-1.149-.46Zm-2.024 1.524h4.044v.337h-4.044v-.337Zm.49.748h3.039v1.01h-2.624v.544h-.405v-.842h2.623v-.395h-2.633v-.317Zm.01 1.465h3.163v.322h-3.163v-.322ZM64.927 24.452h3.074v.332h-3.074v-.332Zm-.52 1.148h4.055v.342h-4.055V25.6Zm.52-3.178h3.025v.337h-2.609v1.797h-.416v-2.134Zm.282 1h2.649v.327h-2.649v-.327Zm5.004-1.217c.669 0 1.159.406 1.159.995 0 .584-.49.99-1.159.99-.663 0-1.153-.406-1.153-.99 0-.59.49-.995 1.153-.995Zm0 .336c-.43 0-.757.273-.757.659s.327.653.757.653c.436 0 .758-.267.758-.653s-.322-.659-.758-.659Zm2-.5h.416v2.292h-.416v-2.292Zm-2.48 2.51h2.896v1.089h-2.485v.673h-.4v-.98h2.48v-.45h-2.49v-.332Zm.01 1.579h3.035v.327h-3.035v-.327ZM76.238 25.595h4.054v.342h-4.054v-.342Zm1.801-1.084h.406v1.198h-.406v-1.198Zm-.01-2.173h.357v.347c0 .955-.916 1.693-1.817 1.88l-.173-.34c.787-.144 1.633-.803 1.633-1.54v-.347Zm.075 0h.356v.347c0 .742.852 1.396 1.639 1.54l-.179.34c-.9-.187-1.816-.925-1.816-1.88v-.347ZM87.535 3.516h4.734v.886h-4.734v-.886Zm2.043-1.311h.988v5.739h-.988v-5.74Zm11.002 1.788c.545.954 1.601 2.044 2.469 2.571-.238.17-.562.511-.749.767-.852-.664-1.873-1.959-2.418-3.014l.698-.324Zm-10.133.528c.358.255 1.618 1.209 1.907 1.499l-.664.8c-.306-.46-1.311-1.499-1.754-1.873l.51-.426Zm-.903-.58.699.324c-.596 1.21-1.618 2.606-2.623 3.304-.085-.272-.307-.698-.46-.953.886-.545 1.89-1.67 2.384-2.674Zm8.004-.425h5.126v.903h-5.126v-.903Zm-4.257-.477h3.934v.8H93.29v-.8Zm-1.107 1.703H97.6v.8h-5.416v-.8Zm7.238-2.537h.987v5.739h-.987v-5.74Zm-4.939 1.124h.97v4.07h-.97v-4.07Zm-2.997 6.25.425-.375c.307.17.716.46.92.664l-.443.409a4.485 4.485 0 0 0-.902-.698Zm.374 2.946.443-.324c.307.222.647.511.835.733l-.46.374a5.156 5.156 0 0 0-.818-.783Zm1.857-1.43.425-.341c.324.17.733.46.937.681l-.426.392a5.424 5.424 0 0 0-.936-.732Zm-4.036.034.442-.324c.307.17.682.443.869.63l-.443.392a4.103 4.103 0 0 0-.868-.698Zm3.934-1.448.647.204c-.954 1.175-2.419 2.3-3.713 3.032-.12-.12-.375-.358-.562-.46 1.329-.698 2.759-1.703 3.628-2.776Zm-3.185.681.494-.392c1.277.699 2.81 1.737 3.593 2.487l-.51.443c-.767-.733-2.283-1.823-3.577-2.538Zm-1.584-.272h.92v3.031h5.262V10.09h.97v3.848h-7.152V10.09Zm3.78-4.207h.801v1.158h3.049V5.883h.817v1.925h-4.666V5.883ZM87.74 8.25h14.612v2.776h-1.158V9.204h-12.33v1.822H87.74V8.25Zm1.107 5.944h1.039v2.265c0 .392.153.46 1.056.46h3.184c.63 0 .75-.12.818-1.073.221.153.63.272.92.323-.12 1.329-.46 1.635-1.601 1.635H90.89c-1.618 0-2.044-.238-2.044-1.328v-2.282Zm5.586.017.732.664c-1.413.562-3.678.954-5.552 1.158-.034-.221-.17-.545-.29-.75 1.806-.22 3.969-.595 5.11-1.072Zm5.33-4.666.954.408c-.954.954-2.503 1.789-3.849 2.283-.17-.239-.477-.529-.732-.733 1.294-.443 2.81-1.158 3.627-1.958Zm.716 2.094.97.375c-1.004 1.26-2.741 2.3-4.479 2.895a3.897 3.897 0 0 0-.715-.8c1.618-.511 3.321-1.448 4.224-2.47Zm.919 2.078 1.039.358c-1.107 1.839-3.253 3.082-5.875 3.797a3.618 3.618 0 0 0-.665-.902c2.453-.545 4.531-1.67 5.501-3.253Zm-2.18-9.741.682.255c-.41 1.175-1.192 2.487-2.01 3.15a4.855 4.855 0 0 0-.698-.748c.817-.511 1.618-1.635 2.026-2.657Zm-5.892-1.754.886.12c-.256.85-.63 1.668-1.26 2.366a2.766 2.766 0 0 0-.733-.494c.562-.596.903-1.345 1.107-1.992Z" />
      </g>
    </g>
    <defs>
      <clipPath id="logo_svg__a">
        <path fill="#fff" d="M0 0h116v50H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogo;
