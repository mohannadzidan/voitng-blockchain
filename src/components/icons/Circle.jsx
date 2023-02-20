import * as React from "react"

const Circle = (props) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" fill="#222145" />
    <path
      d="M12 5.3c0-.143 0-.214.046-.258.046-.045.116-.042.254-.036a7 7 0 1 1-6.207 10.75c-.074-.116-.111-.175-.096-.237s.077-.098.2-.17l5.653-3.263c.073-.042.11-.063.13-.098.02-.034.02-.077.02-.161V5.3Z"
      fill="#fff"
    />
  </svg>
)

export default Circle
