import * as React from "react"

const EmailComponent = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={73}
    height={74}
    fill="none"
    {...props}
  >
    <circle cx={36.419} cy={37.29} r={34.419} stroke="#fff" strokeWidth={4} />
    <path
      d="M24.696 35.894V24.622l-.105-.077h-.008l-2.374-1.75c-1.453-1.073-3.522-1.021-4.809.243a4.668 4.668 0 0 0-1.4 3.335v3.12l8.696 6.4Zm22.608-.012v.012L56 29.492v-3.12c0-1.29-.522-2.468-1.374-3.317a3.638 3.638 0 0 0-4.716-.349l-2.501 1.84-.105.076v11.26Zm-20.87 1.28 9.05 6.662a.873.873 0 0 0 1.033 0l9.048-6.662v-11.26L36 32.946l-9.565-7.044v11.26Zm20.87.885v13.087c0 .478.39.866.87.866h5.652C55.027 52 56 51.03 56 49.835v-18.19l-8.696 6.402Zm-22.608 0L16 31.645v18.19A2.17 2.17 0 0 0 18.174 52h5.652c.48 0 .87-.388.87-.866V38.047Z"
      fill="#fff"
    />
  </svg>
)

export default EmailComponent
