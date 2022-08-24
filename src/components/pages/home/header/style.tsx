import styled from 'styled-components';

const Style = styled.div`
.custom-img {
    height:  auto !important;
    max-height:  auto !important;
    min-height:  auto !important;
    width: 100% !important;
}

svg{
    transform: scale(0.5);
}

.svg:hover{
        circle{
            stroke:#393232 !important;

        }
        path{
            fill:#393232 !important;
        }
    }

`;

export default Style;