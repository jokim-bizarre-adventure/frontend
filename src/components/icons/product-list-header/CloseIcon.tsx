import React from 'react'

export default function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="a" d="M0 0h16v16H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path d="M2.25 8h11.5M8 2.25v11.5" stroke="#000" mask="url(#b)" transform="rotate(45 8 8)" />
      </g>
    </svg>
  )
}
