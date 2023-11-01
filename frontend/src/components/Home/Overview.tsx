import { Tooltip, Space, Typography } from "antd";
const { Text, Title } = Typography;
import { ImageContainter } from "../design/Images";
import {
  SplitLayout,
  HalfLayoutChild,
  StyledCol,
  HighlightedName,
  StyledAvatar,
  StyledSkillsTime,
  SkillsCard,
  StyledHeader,
} from "../design/StyledComponents";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import {
  MailOutlined,
  LinkedinOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import ReactSVGIcon from "../../assets/react.svg";
import AzureSVGIcon from "../../assets/azure.svg";
import CSharpSVGIcon from "../../assets/CSharpDark.svg";

const calculateTime = (year: number, month: number = 0): string => {
  const dateNow = new Date();
  const currentYear = dateNow.getFullYear();
  const currentMonth = dateNow.getMonth();

  const yearDifference = currentYear - year;
  const monthDifference = (currentMonth - month) / 12;

  const totalDifference = yearDifference + monthDifference;

  return totalDifference.toFixed(1);
};

export const Overview = () => {
  const [copiedPhone, copyPhone] = useCopyToClipboard("0423 032 877");
  const [copiedEmail, copyEmail] = useCopyToClipboard("tunoajohnson@gmail.com");
  return (
    <SplitLayout>
      <HalfLayoutChild>
        <ImageContainter src="src/assets/headshot.png" />
      </HalfLayoutChild>
      <HalfLayoutChild>
        <StyledCol>
          <StyledHeader>
            Hi, I'm{" "}
            <Tooltip title="For the non-Maori speakers: Two - Gnaw">
              <HighlightedName>Tunoa</HighlightedName>
            </Tooltip>
          </StyledHeader>
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
          of programming languages and platforms, and I'm always eager to learn
          more. Whether you're looking for a dynamic web application or a
          complex backend system, I've got the expertise and dedication to
          deliver results that exceed your expectations. Take a look around and
          see some of the projects I've worked on, and don't hesitate to get in
          touch if you're interested in working together!
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
  );
};
