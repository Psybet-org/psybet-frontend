import styled from "styled-components";

const Style = styled.div`
  svg {
    transform: scale(0.5);
  }

  .svg:hover {
    s circle {
      stroke: #393232 !important;
    }
    path {
      fill: #393232 !important;
    }
  }

  .rotate {
    -webkit-animation: spin 15s linear infinite;
    -moz-animation: spin 15s linear infinite;
    animation: spin 10 linear infinite;
  }

  .scale-animation {
    -webkit-animation: scale 2s linear infinite;
    -moz-animation: scale 2s linear infinite;
    animation: scale 2s linear infinite;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Style;
