import { Fragment, ReactElement } from "react"
import styled from "styled-components";
import { ImageContainter, StyledImageGreyScale } from "../design/Images";
import { StyledTitle } from "../design/Typography/Fonts";
import { Avatar, Col, Typography } from 'antd';
const { Text } = Typography;
import { Space, Tag } from 'antd';
import {
    MailOutlined,
    LinkedinOutlined,
    PhoneOutlined
} from '@ant-design/icons';
import Title from "antd/es/typography/Title";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

const LargeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LargeLayoutChild = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Header = styled(Title)`
  font-family: 'Pacifico', cursive;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 0;
`;


export const HomePage = (): ReactElement => {
    const [copiedPhone, copyPhone] = useCopyToClipboard('0423 032 877');
    const [copiedEmail, copyEmail] = useCopyToClipboard('tunoajohnson@gmail.com');
    const [copiedLinkedIn, copyLinkedIn] = useCopyToClipboard('https://www.linkedin.com/in/tunoa-johnson-2134b51a0/');

    return (
        <>
            <LargeLayout>
                <LargeLayoutChild>
                    <ImageContainter src="src\assets\headshot.png" />
                </LargeLayoutChild>
                <LargeLayoutChild>
                    <Col style={{ display: "flex", flexDirection: 'column', alignItems: 'center', height: '100 %' }}>
                        <Header>Hi! I'm Tunoa :)</Header>
                        <Text>(Two - Gnaw)</Text>
                        <Text style={{ margin: '40px' }}>
                            I'm a software developer with a passion for creating innovative solutions that push the boundaries of what's possible. With several years of experience under my belt, I've honed my skills in a variety of programming languages and platforms, and I'm always eager to learn more. Whether you're looking for a dynamic web application or a complex backend system, I've got the expertise and dedication to deliver results that exceed your expectations. Take a look around and see some of the projects I've worked on, and don't hesitate to get in touch if you're interested in working together!
                        </Text>
                        <Space size={24} wrap>
                            <Avatar
                                size={{ xs: 24, sm: 32, md: 40, lg: 52 }}
                                icon={<PhoneOutlined />}
                                onClick={copyPhone}
                                style={{ background: "#c74734", cursor: "pointer", }}
                            />
                            <Avatar
                                size={{ xs: 24, sm: 32, md: 40, lg: 52 }}
                                icon={<MailOutlined />}
                                style={{ background: "#c74734", cursor: "pointer", }}
                                onClick={copyEmail} />
                            <Avatar
                                icon={<LinkedinOutlined />}
                                style={{ background: "#c74734", cursor: "pointer", }}
                                onClick={copyLinkedIn}
                                size={{ xs: 24, sm: 32, md: 40, lg: 52 }}
                            />

                        </Space>
                    </Col>
                </LargeLayoutChild>
            </LargeLayout>
        </>
    );
};
