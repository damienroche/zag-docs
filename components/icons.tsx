import { SVGAttributes } from "react"

type Props = SVGAttributes<SVGSVGElement>

export function GithubIcon(props: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
  )
}

export function PlayIcon(props: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12.625 7.83444L6.53547 3.97353C5.86967 3.5514 5 4.02974 5 4.81808V20.1819C5 20.9703 5.86967 21.4486 6.53547 21.0265L12.625 17.1656L18.6641 13.3451C19.2846 12.9525 19.2846 12.0475 18.6641 11.6549L12.625 7.83444ZM12.625 7.83444L6.53547 3.97353C5.86967 3.5514 5 4.02974 5 4.81808V20.1819C5 20.9703 5.86967 21.4486 6.53547 21.0265L12.625 17.1656L18.6641 13.3451C19.2846 12.9525 19.2846 12.0475 18.6641 11.6549L12.625 7.83444ZM12.625 7.83444L6.53547 3.97353C5.86967 3.5514 5 4.02974 5 4.81808V20.1819C5 20.9703 5.86967 21.4486 6.53547 21.0265L12.625 17.1656L18.6641 13.3451C19.2846 12.9525 19.2846 12.0475 18.6641 11.6549L12.625 7.83444Z"
        fill="#212121"
      />
    </svg>
  )
}

export function ArrowRightIcon(props: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2 12H22" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
      <path
        d="M15 5L22 12L15 19"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}

export function ReactIcon(props: Props) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2131 32.4514C10.472 33.5609 10.9533 34.2632 11.5807 34.6254C12.2081 34.9876 13.0569 35.0534 14.1472 34.7227C15.2392 34.3916 16.5003 33.6814 17.8508 32.6115C18.3208 32.2392 18.7979 31.8264 19.2784 31.3756C18.1213 30.1691 16.9691 28.7766 15.8623 27.2323C13.9633 27.0459 12.1738 26.7433 10.5443 26.3427C10.3951 26.9812 10.2767 27.5978 10.1897 28.1884C9.93844 29.8929 9.95393 31.3402 10.2131 32.4514ZM17.8391 27.3816C18.6642 28.4598 19.5053 29.4437 20.3438 30.3195C21.1824 29.4438 22.0235 28.4599 22.8487 27.3817C22.0289 27.4255 21.193 27.448 20.3448 27.448C19.496 27.448 18.6595 27.4254 17.8391 27.3816ZM20.3438 32.4328C19.8205 32.9256 19.2987 33.3782 18.7823 33.7873C17.3443 34.9264 15.9159 35.7538 14.5825 36.1582C13.2474 36.563 11.9351 36.562 10.8307 35.9244C9.72633 35.2868 9.0693 34.1508 8.75237 32.7922C8.43584 31.4352 8.43821 29.7845 8.70573 27.9696C8.80143 27.3204 8.93183 26.645 9.09606 25.9484C8.40883 25.7419 7.75714 25.5166 7.14557 25.2743C5.44009 24.5986 4.0093 23.7752 2.99243 22.8226C1.97427 21.8689 1.31897 20.7318 1.31897 19.4566C1.31897 18.1814 1.97427 17.0444 2.99243 16.0906C4.0093 15.138 5.44009 14.3147 7.14557 13.6389C7.7586 13.396 8.41196 13.1703 9.10101 12.9634C8.93501 12.2611 8.80336 11.5805 8.70694 10.9263C8.43942 9.11145 8.43704 7.46068 8.75357 6.10375C9.0705 4.74511 9.72754 3.60909 10.8319 2.97148C11.9363 2.33388 13.2486 2.33288 14.5837 2.73773C15.9171 3.14207 17.3455 3.96952 18.7835 5.10863C19.2995 5.51745 19.8209 5.96964 20.3438 6.46204C20.867 5.96933 21.3886 5.51687 21.905 5.10782C23.343 3.96871 24.7714 3.14127 26.1048 2.73693C27.4399 2.33208 28.7522 2.33308 29.8566 2.97068C30.9609 3.60828 31.618 4.7443 31.9349 6.10295C32.2514 7.45988 32.249 9.11064 31.9815 10.9255C31.8851 11.5798 31.7534 12.2606 31.5874 12.963C32.2769 13.17 32.9307 13.3959 33.5441 13.6389C35.2496 14.3147 36.6804 15.138 37.6972 16.0906C38.7154 17.0444 39.3707 18.1814 39.3707 19.4566C39.3707 20.7318 38.7154 21.8689 37.6972 22.8226C36.6804 23.7752 35.2496 24.5986 33.5441 25.2743C32.9321 25.5168 32.28 25.7422 31.5923 25.9488C31.7566 26.6456 31.887 27.321 31.9827 27.9704C32.2502 29.7853 32.2526 31.436 31.9361 32.793C31.6192 34.1516 30.9621 35.2876 29.8578 35.9252C28.7534 36.5629 27.4411 36.5639 26.106 36.159C24.7726 35.7547 23.3442 34.9272 21.9062 33.7881C21.3894 33.3787 20.8674 32.9259 20.3438 32.4328ZM30.1441 26.3431C30.2933 26.9817 30.4117 27.5985 30.4988 28.1892C30.75 29.8937 30.7345 31.341 30.4753 32.4522C30.2165 33.5617 29.7352 34.264 29.1078 34.6262C28.4804 34.9884 27.6315 35.0542 26.5413 34.7235C25.4493 34.3924 24.1882 33.6822 22.8376 32.6123C22.3673 32.2398 21.8901 31.8267 21.4093 31.3757C22.5664 30.1692 23.7186 28.7767 24.8254 27.2324C26.7247 27.0461 28.5144 26.7436 30.1441 26.3431ZM31.21 24.4974C31.8396 24.3068 32.4348 24.1004 32.9915 23.8798C34.5933 23.2451 35.839 22.5081 36.6717 21.728C37.5032 20.9491 37.8707 20.1811 37.8707 19.4566C37.8707 18.7322 37.5032 17.9642 36.6717 17.1853C35.839 16.4052 34.5933 15.6681 32.9915 15.0335C32.4332 14.8122 31.836 14.6052 31.2042 14.4142C30.7373 16.0203 30.1067 17.7152 29.3218 19.4466C30.1098 21.1846 30.7424 22.8858 31.21 24.4974ZM28.4632 21.2332C28.988 22.4943 29.422 23.7217 29.7626 24.8922C28.5785 25.1822 27.2984 25.4198 25.9438 25.5957C26.3955 24.9023 26.8367 24.1839 27.2644 23.4433C27.6901 22.7058 28.09 21.9679 28.4632 21.2332ZM27.6689 19.4467C27.1624 20.5176 26.5941 21.6042 25.9653 22.6933C25.3346 23.7856 24.6757 24.8242 23.9993 25.8008C22.8214 25.8971 21.5992 25.948 20.3448 25.948C19.0898 25.948 17.8669 25.8971 16.6885 25.8006C16.0124 24.8243 15.3536 23.7861 14.7231 22.6941C14.0942 21.6047 13.5257 20.5178 13.0192 19.4467C13.5254 18.3764 14.0935 17.2903 14.7219 16.2019C15.3484 15.1167 16.0029 14.0847 16.6745 13.1138C17.8572 13.0166 19.0848 12.9652 20.3448 12.9652C21.6042 12.9652 22.8311 13.0165 24.0133 13.1136C24.6852 14.0849 25.3398 15.1172 25.9665 16.2027C26.5948 17.2909 27.1627 18.3767 27.6689 19.4467ZM28.4631 17.6602C28.985 16.4057 29.4171 15.1845 29.7568 14.0197C28.5783 13.7313 27.3048 13.4948 25.9574 13.3193C26.4048 14.0068 26.8419 14.7188 27.2656 15.4527C27.6908 16.1892 28.0902 16.9263 28.4631 17.6602ZM24.8401 11.6823C26.7319 11.8685 28.5149 12.1701 30.1391 12.569C30.2901 11.9246 30.4098 11.3024 30.4976 10.7068C30.7488 9.00223 30.7333 7.55494 30.4741 6.44371C30.2153 5.33419 29.7339 4.63194 29.1066 4.26972C28.4792 3.9075 27.6303 3.84177 26.5401 4.17238C25.4481 4.50351 24.187 5.21374 22.8364 6.2836C22.3666 6.6558 21.8897 7.06851 21.4093 7.51908C22.5715 8.73066 23.7288 10.13 24.8401 11.6823ZM19.2783 7.51913C18.7982 7.06885 18.3216 6.6564 17.8521 6.28441C16.5015 5.21454 15.2404 4.50431 14.1484 4.17319C13.0581 3.84257 12.2093 3.9083 11.5819 4.27052C10.9545 4.63275 10.4732 5.33499 10.2144 6.44451C9.95514 7.55574 9.93964 9.00303 10.1909 10.7076C10.2787 11.3031 10.3983 11.9251 10.5492 12.5693C12.1732 12.1704 13.956 11.8688 15.8477 11.6824C16.9589 10.1301 18.1161 8.73077 19.2783 7.51913ZM9.48412 14.4146C8.85281 14.6055 8.25612 14.8124 7.69812 15.0335C6.09632 15.6681 4.85067 16.4052 4.01792 17.1853C3.18646 17.9642 2.81897 18.7322 2.81897 19.4566C2.81897 20.1811 3.18646 20.9491 4.01793 21.728C4.85067 22.5081 6.09632 23.2451 7.69812 23.8798C8.25443 24.1002 8.84919 24.3065 9.47838 24.4969C9.94593 22.8855 10.5784 21.1845 11.3662 19.4466C10.5815 17.7153 9.95098 16.0206 9.48412 14.4146ZM12.225 17.6601C11.7032 16.4057 11.2712 15.1847 10.9315 14.02C12.1099 13.7316 13.3832 13.495 14.7303 13.3196C14.2832 14.0068 13.8464 14.7184 13.4229 15.4519C12.9975 16.1887 12.598 16.926 12.225 17.6601ZM12.2249 21.2332C11.7002 22.4942 11.2663 23.7215 10.9257 24.8918C12.1096 25.1819 13.3896 25.4195 14.744 25.5954C14.2925 24.9024 13.8515 24.1844 13.4241 23.4441C12.9982 22.7064 12.5982 21.9682 12.2249 21.2332ZM20.3438 8.57518C21.1875 9.45614 22.0338 10.4465 22.8638 11.5324C22.0391 11.4881 21.1982 11.4652 20.3448 11.4652C19.4908 11.4652 18.6493 11.4881 17.824 11.5325C18.654 10.4466 19.5002 9.45618 20.3438 8.57518Z"
        fill="currentColor"
      />
      <path
        d="M20.3448 22.2151C21.8684 22.2151 23.1035 20.98 23.1035 19.4565C23.1035 17.933 21.8684 16.6979 20.3448 16.6979C18.8213 16.6979 17.5862 17.933 17.5862 19.4565C17.5862 20.98 18.8213 22.2151 20.3448 22.2151Z"
        fill="#41B883"
      />
    </svg>
  )
}

export function VueIcon(props: Props) {
  return (
    <svg width="40" height="34" viewBox="0 0 40 34" fill="none" {...props}>
      <path
        d="M24.82 1.15601L19.38 9.99601L13.94 1.15601H1.36L19.38 31.756L37.4 1.15601H24.82Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.82 1.15601L19.38 9.99601L13.94 1.15601H8.16L19.38 19.516L30.6 1.15601H24.82Z"
        fill="#41B883"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SolidIcon(props: Props) {
  return (
    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" {...props}>
      <path
        d="M9.99997 13.6383C8.86858 17.0324 10.3333 18.9716 11.5 19.6383C15 20.6383 24.4 21.7383 34 18.1383M9.99997 13.6383C12 7.63835 28 12.6382 34 18.1383M9.99997 13.6383C10.8333 12.1383 12.8 8.6383 14 6.6383C22 0.238299 33 6.97163 37.5 11.1383L34 18.1383"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 21.6383L4 29.1383C19.2 40.3383 27 35.1383 29 31.1383L33 24.6383C33 22.4716 31.5 17.9383 25.5 17.1383C19.5 16.3383 11.6667 19.805 8.5 21.6383Z"
        fill="#41B883"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4.5 29.1384C13.1667 25.4717 29 20.1383 28.5 32.1383"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function StatechartIcon(props: Props) {
  return (
    <svg width="94" height="94" viewBox="0 0 94 94" fill="none" {...props}>
      <path
        d="M33.1242 23.9253H37.7237C42.0784 23.9253 45.6086 27.4555 45.6086 31.8102V61.3784C45.6086 65.7331 49.1387 69.2633 53.4934 69.2633H58.75"
        stroke="#41B883"
        strokeWidth="3.94243"
      />
      <circle
        cx="21.9539"
        cy="21.9539"
        r="10.2039"
        stroke="black"
        strokeWidth="5.875"
      />
      <circle
        cx="70.5773"
        cy="70.5772"
        r="10.2039"
        stroke="black"
        strokeWidth="5.875"
      />
      <path
        d="M56.0224 41.3348C56.1393 41.179 56.2105 40.9936 56.228 40.7996C56.2455 40.6055 56.2086 40.4104 56.1215 40.2362C56.0343 40.0619 55.9004 39.9154 55.7347 39.8129C55.5689 39.7105 55.3779 39.6562 55.1831 39.6562L36.2992 39.6562C36.1044 39.6562 35.9134 39.7105 35.7476 39.8129C35.5819 39.9154 35.448 40.0619 35.3608 40.2362C35.2737 40.4104 35.2368 40.6055 35.2543 40.7996C35.2718 40.9936 35.343 41.179 35.4599 41.3348L44.9019 53.9241C44.9996 54.0544 45.1263 54.1602 45.272 54.233C45.4176 54.3058 45.5783 54.3438 45.7411 54.3438C45.904 54.3438 46.0646 54.3058 46.2103 54.233C46.356 54.1602 46.4827 54.0544 46.5804 53.9241L56.0224 41.3348Z"
        fill="#41B883"
      />
    </svg>
  )
}

export function AccessibilityIcon(props: Props) {
  return (
    <svg width="94" height="94" viewBox="0 0 94 94" fill="none" {...props}>
      <path
        d="M47 33.3617C49.897 33.3617 52.2455 31.0132 52.2455 28.1161C52.2455 25.2191 49.897 22.8706 47 22.8706C44.103 22.8706 41.7545 25.2191 41.7545 28.1161C41.7545 31.0132 44.103 33.3617 47 33.3617Z"
        fill="black"
      />
      <path
        d="M66.933 35.4602H27.067C26.5105 35.4602 25.9768 35.6813 25.5833 36.0748C25.1898 36.4682 24.9688 37.0019 24.9688 37.5584C24.9688 38.1149 25.1898 38.6486 25.5833 39.0421C25.9768 39.4356 26.5105 39.6566 27.067 39.6566H40.7054V68.5071C40.7054 69.2027 40.9817 69.8698 41.4735 70.3617C41.9654 70.8535 42.6325 71.1298 43.3281 71.1298C44.0237 71.1298 44.6908 70.8535 45.1827 70.3617C45.6746 69.8698 45.9509 69.2027 45.9509 68.5071V53.295H48.0491V68.5071C48.0491 69.2027 48.3254 69.8698 48.8173 70.3617C49.3092 70.8535 49.9763 71.1298 50.6719 71.1298C51.3675 71.1298 52.0346 70.8535 52.5265 70.3617C53.0183 69.8698 53.2946 69.2027 53.2946 68.5071V39.6566H66.933C67.4895 39.6566 68.0232 39.4356 68.4167 39.0421C68.8102 38.6486 69.0313 38.1149 69.0313 37.5584C69.0313 37.0019 68.8102 36.4682 68.4167 36.0748C68.0232 35.6813 67.4895 35.4602 66.933 35.4602Z"
        fill="black"
      />
      <circle cx="47" cy="47" r="35.25" stroke="#41B883" strokeWidth="5.875" />
    </svg>
  )
}

export function FrameworkAgnosticIcon(props: Props) {
  return (
    <svg width="94" height="94" viewBox="0 0 94 94" fill="none" {...props}>
      <path
        d="M19.0938 19.0933L34.3154 34.3149"
        stroke="#41B883"
        strokeWidth="5.07386"
        strokeMiterlimit="10"
      />
      <path
        d="M34.3154 19.0934L19.0938 19.0933L19.0938 34.3149"
        stroke="#41B883"
        strokeWidth="5.07386"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M74.9063 19.0934L59.6847 34.3149"
        stroke="#41B883"
        strokeWidth="5.07386"
        strokeMiterlimit="10"
      />
      <path
        d="M59.6847 19.0933L74.9063 19.0934L74.9062 34.3149"
        stroke="#41B883"
        strokeWidth="5.07386"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M19.0938 74.9063L34.3154 59.6847"
        stroke="#41B883"
        strokeWidth="5.07386"
        strokeMiterlimit="10"
      />
      <path
        d="M34.3154 74.9062L19.0938 74.9063L19.0938 59.6847"
        stroke="#41B883"
        strokeWidth="5.07386"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M74.9062 74.9062L59.6847 59.6847"
        stroke="#41B883"
        strokeWidth="5.07386"
        strokeMiterlimit="10"
      />
      <path
        d="M59.6847 74.9062L74.9062 74.9062L74.9063 59.6847"
        stroke="#41B883"
        strokeWidth="5.07386"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M47 54.6105C51.2033 54.6105 54.6108 51.203 54.6108 46.9997C54.6108 42.7964 51.2033 39.3889 47 39.3889C42.7967 39.3889 39.3892 42.7964 39.3892 46.9997C39.3892 51.203 42.7967 54.6105 47 54.6105Z"
        stroke="black"
        strokeWidth="5.875"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}

export const CheckIcon = (props: Props) => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" {...props}>
    <path
      d="M27.9213 10.6667C27.2547 4.676 22.1653 0 16 0C9.83467 0 4.74533 4.676 4.07867 10.6667H0V13.3333H4.07867C4.74533 19.324 9.83467 24 16 24C22.1653 24 27.2547 19.324 27.9213 13.3333H32V10.6667H27.9213ZM14.6667 16.552L10.1147 12L12 10.1147L14.6667 12.7813L20 7.448L21.8853 9.33333L14.6667 16.552Z"
      fill="#41B883"
    />
  </svg>
)
