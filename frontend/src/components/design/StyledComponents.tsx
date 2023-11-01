import { Card, Col, Avatar, Typography } from "antd";
import styled from "styled-components";
const {Title} = Typography;
export const WorkItemCard = styled(Card)`
  max-width: 400px;
  border: 3px solid white;
  margin: 30px;
`;

export const StyledHeader = styled(Title)`
  font-family: "Pacifico", cursive;
  font-size: 6rem !important;
  text-align: center;
  margin: 0 !important;

  @media (max-width: 768px) {
    font-size: 4rem !important;
  }
`;

export const SplitLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 50px;
  height: 80vh;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100%;
  }
`;

export const HalfLayoutChild = styled.div`
  flex: 1;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  gap: 30px;
`;

export const StyledCard = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
`;


export const HighlightedName = styled.span`
  color: #c74734;
  font-family: "Pacifico", cursive;
  font-size: 6rem;
  margin: 0;
`;

export const StyledAvatar = styled(Avatar)`
  background: #c74734;
  cursor: pointer;
`;

export const StyledSkillsTime = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const StyledH3 = styled.h3`
  margin: 0;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  min-height: 80vh;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const SkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
