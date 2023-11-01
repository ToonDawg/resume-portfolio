import { ReactElement } from "react";
import styled from "styled-components";
import { Typography, Col } from "antd";
const { Title } = Typography;
import { Overview } from "./Overview";
import { WorkExperience } from "./WorkExperience";
import { Projects } from "./Projects";

export const HomePage = (): ReactElement => {
  return (
    <Col>
      <Overview />
      <WorkExperience />
      <Projects />
    </Col>
  );
};
