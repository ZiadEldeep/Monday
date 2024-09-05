export const Tags = [
  {
    color: "#6161FF",
    icon: (isActive:boolean)=>(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.88281 1.87549H13.1328C13.1328 1.87549 14.3828 1.87549 14.3828 3.12549V11.8755C14.3828 11.8755 14.3828 13.1255 13.1328 13.1255H1.88281C1.88281 13.1255 0.632812 13.1255 0.632812 11.8755V3.12549C0.632812 3.12549 0.632812 1.87549 1.88281 1.87549Z"
          stroke={isActive?"#6161FF":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M0.632812 5.61993H14.3828"
          stroke={isActive?"#6161FF":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M16.8823 5.61993V14.3699C16.8823 14.7015 16.7507 15.0194 16.5162 15.2538C16.2818 15.4882 15.9638 15.6199 15.6323 15.6199H4.38232"
          stroke={isActive?"#6161FF":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M19.3826 8.11621V16.8662C19.3826 17.1978 19.2509 17.5157 19.0165 17.7501C18.7821 17.9845 18.4641 18.1162 18.1326 18.1162H6.88257"
          stroke={isActive?"#6161FF":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    ),
    text: "Projects",
  },
  {
    color: "#0073EA",
    icon: (isActive:boolean)=>(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.87871 2.92523H16.2731C16.2731 2.92523 17.2265 2.92523 17.2265 3.87865V16.273C17.2265 16.273 17.2265 17.2264 16.2731 17.2264H3.87871C3.87871 17.2264 2.92529 17.2264 2.92529 16.273V3.87865C2.92529 3.87865 2.92529 2.92523 3.87871 2.92523Z"
          stroke={isActive?"#0073EA":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M8.24429 6.10449L6.41373 8.54523L5.19336 7.32487"
          stroke={isActive?"#0073EA":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M11.5059 7.68658H14.3661"
          stroke={isActive?"#0073EA":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M8.24429 11.5956L6.41373 14.0364L5.19336 12.816"
          stroke={isActive?"#0073EA":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M11.5059 13.4136H14.3661"
          stroke={isActive?"#0073EA":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    ),
    text: "Task",
  },
  {
    color: "#ff5ac4",
    icon: (isActive:boolean)=>(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.87023 11.7385H4.17756C3.42936 11.7385 2.71179 11.4412 2.18273 10.9122C1.65367 10.3831 1.35645 9.6656 1.35645 8.91737C1.35645 8.16913 1.65367 7.4516 2.18273 6.92254C2.71179 6.39348 3.42936 6.09625 4.17756 6.09625H5.87023V11.7385Z"
          stroke={isActive?"#ff5ac4":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M5.87012 11.735C9.18105 11.7353 12.418 12.7153 15.173 14.5516L16.0261 15.1204V2.70746L15.173 3.2762C12.418 5.11251 9.18105 6.09252 5.87012 6.0928V11.735Z"
          stroke={isActive?"#ff5ac4":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M18.2825 7.78906V10.046"
          stroke={isActive?"#ff5ac4":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M5.87012 11.7385C5.86964 12.4772 6.01945 13.2083 6.31045 13.8873C6.60144 14.5663 7.02753 15.179 7.56279 15.6881"
          stroke={isActive?"#ff5ac4":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    ),
    text: "Marketing",
  },
  {
    color: "#faa1f1",
    icon: (isActive:boolean)=>(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.9521 16.8926H3.92617C3.68054 16.8926 3.44496 16.795 3.27127 16.6214C3.09758 16.4477 3 16.212 3 15.9664V3.92617C3 3.68054 3.09758 3.44496 3.27127 3.27127C3.44496 3.09758 3.68054 3 3.92617 3H15.9664C16.212 3 16.4477 3.09758 16.6214 3.27127C16.795 3.44496 16.8926 3.68054 16.8926 3.92617V10.9521C16.8925 11.1976 16.795 11.433 16.6215 11.6066L11.6066 16.6215C11.433 16.795 11.1976 16.8925 10.9521 16.8926Z"
          stroke={isActive?"#faa1f1":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M11.3362 16.8124V12.2649C11.3362 12.0193 11.4337 11.7837 11.6074 11.61C11.7811 11.4363 12.0167 11.3387 12.2624 11.3387H16.8099"
          stroke={isActive?"#faa1f1":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M6.70483 6.70087H14.1142"
          stroke={isActive?"#faa1f1":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M6.70483 9.48566H9.94644"
          stroke={isActive?"#faa1f1":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    ),
    text: "Design",
  },
  {
    color: "#00D2D2",
    icon: (isActive:boolean)=>(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1518_54207)">
          <path
            d="M11.8333 12.673V15.173L14.8333 12.673H16.8333C17.0985 12.673 17.3529 12.5677 17.5404 12.3802C17.7279 12.1926 17.8333 11.9382 17.8333 11.673V3.67303C17.8333 3.40782 17.7279 3.15346 17.5404 2.96593C17.3529 2.77839 17.0985 2.67303 16.8333 2.67303H8.83325C8.56804 2.67303 8.31368 2.77839 8.12615 2.96593C7.93861 3.15346 7.83325 3.40782 7.83325 3.67303"
            stroke={isActive?"#00D2D2":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <path
            d="M1.98389 8.38837C2.80415 9.23838 3.86385 9.81838 5.02193 10.0512C6.18 10.284 7.38152 10.1586 8.46659 9.69171"
            stroke={isActive?"#00D2D2":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <path
            d="M1.49976 10.168C1.49976 11.0962 1.8685 11.9864 2.52488 12.6428C3.18126 13.2992 4.0715 13.668 4.99976 13.668C5.92802 13.668 6.81825 13.2992 7.47463 12.6428C8.13102 11.9864 8.49976 11.0962 8.49976 10.168C8.49976 9.2397 8.13102 8.34948 7.47463 7.6931C6.81825 7.03672 5.92802 6.66797 4.99976 6.66797C4.0715 6.66797 3.18126 7.03672 2.52488 7.6931C1.8685 8.34948 1.49976 9.2397 1.49976 10.168Z"
            stroke={isActive?"#00D2D2":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <path
            d="M10.1164 17.6691C9.12289 16.3927 7.68802 15.534 6.09364 15.2616C4.49926 14.9893 2.86065 15.3229 1.49976 16.1971"
            stroke={isActive?"#00D2D2":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <path
            d="M15.6667 9.99524H10.3334"
            stroke={isActive?"#00D2D2":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <path
            d="M14.9998 5.33551H12.8664V10.0022H14.9998V5.33551Z"
            stroke={isActive?"#00D2D2":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <path
            d="M12.8674 7.04608H10.7341V10.0016H12.8674V7.04608Z"
            stroke={isActive?"#00D2D2":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_1518_54207">
            <rect
              width="18"
              height="16"
              fill="white"
              transform="translate(1 2)"></rect>
          </clipPath>
        </defs>
      </svg>
    ),
    text: "CRM",
  },
  {
    color: "#00C875",
    icon: (isActive:boolean)=>(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.8139 15.8139C16.8139 16.0567 16.7175 16.2895 16.5458 16.4611C16.3742 16.6327 16.1413 16.7292 15.8986 16.7292H4.91528C4.67253 16.7292 4.43972 16.6327 4.26808 16.4611C4.09643 16.2895 4 16.0567 4 15.8139V3.91528C4 3.67253 4.09643 3.43972 4.26808 3.26808C4.43972 3.09643 4.67253 3 4.91528 3H14.0955C14.3345 3.00003 14.564 3.09354 14.735 3.26055L16.5381 5.0191C16.6255 5.10442 16.6948 5.20635 16.7422 5.3189C16.7896 5.43144 16.814 5.55233 16.8139 5.67444V15.8139Z"
          stroke={isActive?"#00C875":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8066 8.04395L14.0948 10.3321L11.8066 12.6203"
          stroke={isActive?"#00C875":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.06163 8.04395L6.77344 10.3321L9.06163 12.6203"
          stroke={isActive?"#00C875":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Product",
  },
  {
    color: "#FB275D",
    icon: (isActive:boolean)=>(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1518_54236)">
          <path
            d="M16.6401 11.9388V5.14156C16.6401 4.86422 16.53 4.59822 16.3338 4.40211C16.1377 4.206 15.8717 4.09583 15.5944 4.09583H5.13704C4.8597 4.09583 4.59371 4.206 4.3976 4.40211C4.20149 4.59822 4.09131 4.86422 4.09131 5.14156V11.9388H16.6401Z"
            stroke={isActive?"#FB275D":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.1184 15.1721C18.1891 15.3314 18.219 15.5057 18.2052 15.6794C18.1914 15.8531 18.1345 16.0206 18.0395 16.1666C17.9446 16.3128 17.8146 16.4328 17.6615 16.5158C17.5083 16.5989 17.3369 16.6424 17.1626 16.6424H3.56809C3.39385 16.6424 3.22238 16.5989 3.06924 16.5158C2.91611 16.4328 2.78615 16.3128 2.69119 16.1666C2.59623 16.0206 2.53927 15.8531 2.52549 15.6794C2.51171 15.5057 2.54155 15.3314 2.61228 15.1721L4.09095 11.9366H16.6397L18.1184 15.1721Z"
            stroke={isActive?"#FB275D":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.3208 14.5527H11.4123"
            stroke={isActive?"#FB275D":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1518_54236">
            <rect
              width="16.7317"
              height="16.7317"
              fill="white"
              transform="translate(2 2)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "IT",
  },
  {
    color: "#E21277",
    icon: (isActive:boolean)=>(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.4163 10.0533C13.4033 10.8686 13.0704 11.6461 12.4893 12.218C11.9082 12.7899 11.1255 13.1105 10.3102 13.1105C9.49483 13.1105 8.71221 12.7899 8.13111 12.218C7.55001 11.6461 7.21706 10.8686 7.2041 10.0533"
          stroke={isActive?"#E21277":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.6875 10.0393V11.207L16.3525 11.474C16.1985 12.1212 15.9404 12.7391 15.5885 13.3036L16.3494 14.4376L14.7003 16.0866L13.5672 15.3257C13.0025 15.6807 12.3833 15.9405 11.7344 16.0945L11.4706 17.4224H9.14618L8.88154 16.0945C8.23284 15.9403 7.61391 15.6806 7.0495 15.3257L5.91322 16.0835L4.26417 14.4344L5.02509 13.3005C4.67286 12.736 4.41455 12.1181 4.26024 11.4708L2.92529 11.2039V10.0393"
          stroke={isActive?"#E21277":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.4163 9.57697C13.4033 8.7617 13.0704 7.98421 12.4893 7.41231C11.9082 6.8404 11.1255 6.51986 10.3102 6.51986C9.49483 6.51986 8.71221 6.8404 8.13111 7.41231C7.55001 7.98421 7.21706 8.7617 7.2041 9.57697"
          stroke={isActive?"#E21277":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.6875 9.57697V8.40928L16.3525 8.14229C16.1985 7.49507 15.9404 6.87715 15.5885 6.31262L16.3494 5.1787L14.7003 3.52965L13.5672 4.29057C13.0025 3.93555 12.3833 3.67579 11.7344 3.5218L11.4706 2.19392H9.14618L8.88154 3.5218C8.23284 3.67594 7.61391 3.93563 7.0495 4.29057L5.91322 3.53279L4.26417 5.18184L5.02509 6.31577C4.67286 6.88029 4.41455 7.49821 4.26024 8.14543L2.92529 8.41242V9.57697"
          stroke={isActive?"#E21277":"#676879"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Operations",
  },
  {
    color: "#fdab3d",
    icon: (isActive:boolean)=>(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1518_54262)">
          <path
            d="M3.86963 6.35416C3.86963 7.13427 4.17953 7.88242 4.73115 8.43405C5.28278 8.98569 6.03095 9.29559 6.81106 9.29559C7.59118 9.29559 8.33935 8.98569 8.89096 8.43405C9.4426 7.88242 9.7525 7.13427 9.7525 6.35416C9.7525 5.57404 9.4426 4.82587 8.89096 4.27424C8.33935 3.72262 7.59118 3.41272 6.81106 3.41272C6.03095 3.41272 5.28278 3.72262 4.73115 4.27424C4.17953 4.82587 3.86963 5.57404 3.86963 6.35416Z"
            stroke={isActive?"#fdab3d":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.99756 15.1715C1.99756 13.895 2.50467 12.6707 3.40733 11.768C4.30999 10.8654 5.53426 10.3583 6.81082 10.3583C8.08737 10.3583 9.31165 10.8654 10.2143 11.768C11.1169 12.6707 11.6241 13.895 11.6241 15.1715"
            stroke={isActive?"#fdab3d":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6973 7.95424C11.6973 8.59251 11.9508 9.20462 12.4021 9.65599C12.8534 10.1073 13.4655 10.3609 14.1038 10.3609C14.7422 10.3609 15.3543 10.1073 15.8056 9.65599C16.257 9.20462 16.5105 8.59251 16.5105 7.95424C16.5105 7.31596 16.257 6.70382 15.8056 6.25249C15.3543 5.80116 14.7422 5.54761 14.1038 5.54761C13.4655 5.54761 12.8534 5.80116 12.4021 6.25249C11.9508 6.70382 11.6973 7.31596 11.6973 7.95424Z"
            stroke={isActive?"#fdab3d":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.739 11.4793C13.3345 11.2598 13.9741 11.1874 14.6036 11.2683C15.2331 11.3491 15.8337 11.5807 16.3544 11.9435C16.8751 12.3064 17.3005 12.7896 17.5943 13.3521C17.8881 13.9146 18.0418 14.5398 18.0422 15.1744"
            stroke={isActive?"#fdab3d":"#676879"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1518_54262">
            <rect
              width="17.1138"
              height="17.1138"
              fill="white"
              transform="translate(1.46265 0.731323)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "HR",
  },
];
export const AssetsPr = [
  {
    alt: "Default",
    src: "Default.avif",
    isActive: true,
  },
  {
    alt: "Projects",
    src: "projects.avif",
  },
  {
    alt: "Task",
    src: "Task.avif",
  },
  {
    alt: "Marketing",
    src: "Marketing.avif",
  },
  {
    alt: "Design",
    src: "Design.avif",
  },
  {
    alt: "CRM",
    src: "CRM.avif",
  },
  {
    alt: "Product",
    src: "Product.avif",
  },
  {
    alt: "IT",
    src: "IT.avif",
  },
  {
    alt: "Operations",
    src: "Operations.avif",
  },
  {
    alt: "HR",
    src: "HR.avif",
  },
];
