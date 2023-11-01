import styled from "styled-components";

export const StyledImageGreyScale = styled.img`
  width: 100%;
  text-align: center;
  margin: auto;
  filter: grayscale(0);
  transition: all 0.3s ease-in-out;
  transform: scale(1.14);
  :hover {
    filter: grayscale(100%);
    transform: scale(1.3);
  }
`;

const StyledFigure = styled.div`
  box-sizing: border-box;
  margin: auto;
  border-radius: 50%;
  border: 1px solid #000;
  width: 400px;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    /* adjust size for screens smaller than 768px */
    width: 300px;
    height: 300px;
  }

  :hover {
    box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const ImageContainter = ({ src, ref }: { src: string, ref?: React.MutableRefObject<null> }) => (
    <StyledFigure>
        <StyledImageGreyScale src={src} ref={ref} />
    </StyledFigure>
);
