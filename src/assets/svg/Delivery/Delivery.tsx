import type { IconProps } from '../../../context/Interface/props'

export const GuideIcon: React.FC<IconProps> = ({
  color = 'green',
  fill = 'none',
  width = 23,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 23 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_184_16177)">
      <path
        d="M17.25 23.4999H10.9729C9.93794 23.4999 8.9221 23.0687 8.20335 22.3212L1.20752 15.0283L3.19127 13.2745C3.78544 12.7474 4.65752 12.642 5.3571 13.0158L7.66669 14.2424V5.09035C7.66669 3.76785 8.74002 2.69452 10.0625 2.69452C10.2254 2.69452 10.3884 2.71369 10.5513 2.74244C10.6375 1.4966 11.6725 0.509521 12.9375 0.509521C13.7617 0.509521 14.4804 0.921605 14.9117 1.5541C15.1896 1.4391 15.4963 1.3816 15.8125 1.3816C17.135 1.3816 18.2084 2.45494 18.2084 3.77744V4.04577C18.3617 4.01702 18.5246 3.99785 18.6875 3.99785C20.01 3.99785 21.0834 5.07119 21.0834 6.39369V19.6666C21.0834 21.7845 19.3679 23.4999 17.25 23.4999ZM3.96752 15.1433L9.58335 20.9891C9.94752 21.3629 10.4459 21.5833 10.9634 21.5833H17.25C18.3042 21.5833 19.1667 20.7208 19.1667 19.6666V6.39369C19.1667 6.12535 18.9559 5.91452 18.6875 5.91452C18.4192 5.91452 18.2084 6.12535 18.2084 6.39369V11.9999H16.2917V3.77744C16.2917 3.5091 16.0809 3.29827 15.8125 3.29827C15.5442 3.29827 15.3334 3.5091 15.3334 3.77744V11.9999H13.4167V2.90535C13.4167 2.63702 13.2059 2.42619 12.9375 2.42619C12.6692 2.42619 12.4584 2.63702 12.4584 2.90535V11.9999H10.5417V5.09035C10.5417 4.82202 10.3309 4.61119 10.0625 4.61119C9.79419 4.61119 9.58335 4.8316 9.58335 5.09035V17.4241L4.45627 14.712L3.96752 15.1433Z"
        fill={color}
        stroke={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_184_16177">
        <rect
          width={width}
          height={height}
          fill={color}
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
)

export const AssignmentIcon: React.FC<IconProps> = ({
  color = '#2D3748',
  fill = 'none',
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_184_16169)">
      <path
        d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z"
        fill={color}
        stroke={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_184_16169">
        <rect width={width} height={height} fill={color} />
      </clipPath>
    </defs>
  </svg>
)

export const ConceptIcon: React.FC<IconProps> = ({
  color = '#2D3748',
  fill = 'none',
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_184_16173)">
      <path
        d="M9 13C11.21 13 13 11.21 13 9C13 6.79 11.21 5 9 5C6.79 5 5 6.79 5 9C5 11.21 6.79 13 9 13ZM9 7C10.1 7 11 7.9 11 9C11 10.1 10.1 11 9 11C7.9 11 7 10.1 7 9C7 7.9 7.9 7 9 7ZM9 15C6.33 15 1 16.34 1 19V21H17V19C17 16.34 11.67 15 9 15ZM3 19C3.22 18.28 6.31 17 9 17C11.7 17 14.8 18.29 15 19H3ZM15.08 7.05C15.92 8.23 15.92 9.76 15.08 10.94L16.76 12.63C18.78 10.61 18.78 7.56 16.76 5.36L15.08 7.05ZM20.07 2L18.44 3.63C21.21 6.65 21.21 11.19 18.44 14.37L20.07 16C23.97 12.11 23.98 6.05 20.07 2Z"
        fill={color}
        stroke={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_184_16173">
        <rect width={width} height={height} fill={color} />
      </clipPath>
    </defs>
  </svg>
)

export const TestIcon: React.FC<IconProps> = ({
  color = '#2D3748',
  fill = 'none',
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_184_16181)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 19H4V5H20V19Z"
        fill={color}
        stroke={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.41 10.42L17.99 9L14.82 12.17L13.41 10.75L12 12.16L14.82 15L19.41 10.42Z"
        fill={color}
        stroke={fill}
      />
      <path d="M10 7H5V9H10V7Z" fill={color} stroke={fill} />
      <path d="M10 11H5V13H10V11Z" fill={color} stroke={fill} />
      <path d="M10 15H5V17H10V15Z" fill={color} stroke={fill} />
    </g>
    <defs>
      <clipPath id="clip0_184_16181">
        <rect width={width} height={height} fill={color} />
      </clipPath>
    </defs>
  </svg>
)

export const ExamIcon: React.FC<IconProps> = ({
  color = '#2D3748',
  fill = 'none',
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_184_16192)">
      <path
        d="M12.45 16H14.54L9.42996 3H7.56996L2.45996 16H4.54996L5.66996 13H11.31L12.45 16ZM6.42996 11L8.49996 5.48L10.57 11H6.42996ZM21.59 11.59L13.5 19.68L9.82996 16L8.41996 17.41L13.51 22.5L23 13L21.59 11.59Z"
        fill={color}
        stroke={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_184_16192">
        <rect width={width} height={height} fill={color} />
      </clipPath>
    </defs>
  </svg>
)

export const SeminarIcon: React.FC<IconProps> = ({
  color = '#2D3748',
  fill = 'none',
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_184_16196)">
      <path
        d="M12 5C8.13 5 5 8.13 5 12H7C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12H19C19 8.13 15.87 5 12 5ZM13 14.29C13.88 13.9 14.5 13.03 14.5 12C14.5 10.62 13.38 9.5 12 9.5C10.62 9.5 9.5 10.62 9.5 12C9.5 13.02 10.12 13.9 11 14.29V17.59L7.59 21L9 22.41L12 19.41L15 22.41L16.41 21L13 17.59V14.29ZM12 1C5.93 1 1 5.93 1 12H3C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12H23C23 5.93 18.07 1 12 1Z"
        fill={color}
        stroke={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_184_16196">
        <rect width={width} height={height} fill={color} />
      </clipPath>
    </defs>
  </svg>
)
