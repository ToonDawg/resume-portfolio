import { ReactElement, useRef } from "react";
import styled from "styled-components";
import {
  Avatar,
  Tooltip,
  Typography,
  Space,
  Col,
  Timeline,
  Card,
  Row,
} from "antd";
import {
  MailOutlined,
  LinkedinOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { ImageContainter } from "../design/Images";
const { Text, Title } = Typography;
import ReactSVGIcon from "../../assets/react.svg";
import AzureSVGIcon from "../../assets/azure.svg";
import CSharpSVGIcon from "../../assets/CSharpDark.svg";

import { CSSTransition } from "react-transition-group";
import Meta from "antd/es/card/Meta";

const calculateTime = (year: number, month: number = 0): string => {
  const dateNow = new Date();
  const currentYear = dateNow.getFullYear();
  const currentMonth = dateNow.getMonth();

  const yearDifference = currentYear - year;
  const monthDifference = (currentMonth - month) / 12;

  const totalDifference = yearDifference + monthDifference;

  return totalDifference.toFixed(1);
};

export const HomePage = (): ReactElement => {
  const [copiedPhone, copyPhone] = useCopyToClipboard("0423 032 877");
  const [copiedEmail, copyEmail] = useCopyToClipboard("tunoajohnson@gmail.com");
  const nodeRef = useRef(null);

  return (
    <Col>
      <SplitLayout>
        <HalfLayoutChild>
          <CSSTransition
            appear
            in
            timeout={300}
            classNames="fade"
            unmountOnExit
            nodeRef={nodeRef}
          >
            <ImageContainter ref={nodeRef} src="src/assets/headshot.png" />
          </CSSTransition>
        </HalfLayoutChild>
        <HalfLayoutChild>
          <StyledCol>
            <Header>
              Hi, I'm{" "}
              <Tooltip title="For the non-Maori speakers: Two - Gnaw">
                <HighlightedName>Tunoa</HighlightedName>
              </Tooltip>
            </Header>
            <Text type="secondary">
              React | .Net Core | Azure | DevOps | SQL Server | Teaching
            </Text>
            <Space size={24} wrap>
              <StyledAvatar
                size={{ sm: 32, md: 40, lg: 52 }}
                icon={<PhoneOutlined />}
                onClick={copyPhone}
              />
              <StyledAvatar
                size={{ sm: 32, md: 40, lg: 52 }}
                icon={<MailOutlined />}
                onClick={copyEmail}
              />
              <a
                href="https://www.linkedin.com/in/tunoa-johnson-2134b51a0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledAvatar
                  size={{ sm: 32, md: 40, lg: 52 }}
                  icon={<LinkedinOutlined />}
                />
              </a>
            </Space>
          </StyledCol>
          <Text style={{ margin: "30px" }}>
            I'm a software developer with a passion for creating innovative
            solutions that push the boundaries of what's possible. With several
            years of experience under my belt, I've honed my skills in a variety
            of programming languages and platforms, and I'm always eager to
            learn more. Whether you're looking for a dynamic web application or
            a complex backend system, I've got the expertise and dedication to
            deliver results that exceed your expectations. Take a look around
            and see some of the projects I've worked on, and don't hesitate to
            get in touch if you're interested in working together!
          </Text>
          <StyledSkillsTime>
            <SkillsCard>
              <img alt="svgImg" src={CSharpSVGIcon} />
              <Title level={3}>
                {calculateTime(2020)}
                <Text style={{ fontSize: 10 }}>Yrs</Text>
              </Title>
            </SkillsCard>
            <SkillsCard>
              <img alt="svgImg" src={ReactSVGIcon} />
              <Title level={3}>
                {calculateTime(2021, 6)}
                <Text style={{ fontSize: 10 }}>Yrs</Text>
              </Title>
            </SkillsCard>
            <SkillsCard>
              <img alt="svgImg" src={AzureSVGIcon} />
              <Title level={3}>
                {calculateTime(2020)}
                <Text style={{ fontSize: 10 }}>Yrs</Text>
              </Title>
            </SkillsCard>
          </StyledSkillsTime>
        </HalfLayoutChild>
      </SplitLayout>
      <TimelineContainer>
        <Header> Work Experience </Header>
        <Timeline
          mode={"left"}
          pending={true}
          pendingDot={true}
          style={{ maxWidth: 800 }}
          items={[
            {
              children: (
                <StyledCard>
                  <StyledH3>
                    Jan 2017 | Staines Memorial College | Teacher
                  </StyledH3>
                  <Text type="secondary">Python | JS | HTML | CSS</Text>
                  <div>
                    As a Senior Secondary IT Teacher, I taught software
                    development topics like Python and Web Development. Guided
                    by the principle "People don't care how much you know until
                    they know how much you care," I built strong relationships
                    with students and fostered a collaborative environment. This
                    philosophy continues to shape my approach in software
                    development, promoting teamwork and positive results.
                  </div>
                </StyledCard>
              ),
              color: "green",
            },
            {
              children: (
                <StyledCard>
                  <StyledH3>
                    Jan 2020 | MSL Solutions | Software Developer
                  </StyledH3>
                  <Text type="secondary">.Net Full Stack | SQL Server </Text>
                  <div>
                    During my time at MSL Solutions, I had the opportunity to
                    work on the Golf Management System (GMS). I was involved in
                    the development and maintenance of the software, which
                    included implementing new features and fixing bugs.
                    Utilizing the following technologies: ASP.NET Web Pages, C#,
                    ASP.NET and SQL Server
                  </div>
                </StyledCard>
              ),
              color: "green",
            },
            {
              children: (
                <StyledCard>
                  <StyledH3>Nov 2021 | RPS | Software Developer</StyledH3>
                  <Text type="secondary">
                    React | .Net Web API | SQL Server | Azure{" "}
                  </Text>
                  <div>
                    Participated in the development of myProjects which heavily
                    utilizes Azure cloud services, such as B2C, Blob storage,
                    and Web Apps, with React for the frontend and .Net core for
                    the backend. Provided full stack development consulting on
                    the implementation of the Project Management tool myProjects
                    for the Department of Jobs, Precincts, and Regions' (DJPR)
                    CarbonNet project and Queensland Department of Education.
                    Developed extra features to fulfill DJPR's specific needs
                    and ensured the myProjects instance was delivered in a
                    timely fashion for both projects
                  </div>
                </StyledCard>
              ),
              color: "green",
            },
            {
              children: (
                <StyledCard>
                  <StyledH3>May 2023 | SRG | Software Developer</StyledH3>
                  <Text type="secondary">.Net | SQL Server | Azure </Text>
                  <div>
                    At Super Retail Group, I specialize in Salesforce Commerce
                    Cloud development, site reliability and overseeing DevOps
                    processes. I manage large-scale releases for major sites
                    like Rebel Sports, BCF, and Supercheap Auto. My focus is on
                    ensuring robust, efficient systems that drive seamless
                    customer experiences, while fostering a collaborative and
                    open team environment
                  </div>
                </StyledCard>
              ),
              color: "green",
            },
          ]}
        />
      </TimelineContainer>
      <div style={{ minHeight: "80vh" }}>
        <Header>Check out my Work!</Header>
        <Row justify="space-evenly">
          <a href="https://github.com/ToonDawg/ESP-Zone-Controller" target="_blank" rel="noopener noreferrer">
            <WorkItemCard
              hoverable
              cover={<img alt="example" src="src/assets/acclimate.webp" />}
            >
              <Meta
                title="Acclimate"
                description="Air-Conditioner Zone Controller - React Native together with ESP32 IoT for enhanced and affordable Comfort Control."
              />
            </WorkItemCard>
          </a>
        </Row>
      </div>
    </Col>
  );
};

const WorkItemCard = styled(Card)`
  max-width: 400px;
  border: 3px solid white;
  margin: 30px;
`;

const SplitLayout = styled.div`
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

const HalfLayoutChild = styled.div`
  flex: 1;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  gap: 30px;
`;

const StyledCard = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
`;
const Header = styled(Title)`
  font-family: "Pacifico", cursive;
  font-size: 6rem !important;
  text-align: center;
  margin: 0 !important;

  @media (max-width: 768px) {
    font-size: 4rem !important;
  }
`;

const HighlightedName = styled.span`
  color: #c74734;
  font-family: "Pacifico", cursive;
  font-size: 6rem;
  margin: 0;
`;

const StyledAvatar = styled(Avatar)`
  background: #c74734;
  cursor: pointer;
`;

const StyledSkillsTime = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const StyledH3 = styled.h3`
  margin: 0;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  min-height: 80vh;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const SkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
