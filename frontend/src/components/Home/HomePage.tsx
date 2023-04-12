import { Fragment, ReactElement } from "react"
import styled from "styled-components";
import { ImageContainter, StyledImageGreyScale } from "../design/Images";
import { Avatar, Col, Tooltip, Typography } from 'antd';
const { Text } = Typography;
import { Space } from 'antd';
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
  font-size: 6rem;
  text-align: center;
`;

export const HomePage = (): ReactElement => {
    const [copiedPhone, copyPhone] = useCopyToClipboard('0423 032 877');
    const [copiedEmail, copyEmail] = useCopyToClipboard('tunoajohnson@gmail.com');

    return (
        <>
            <LargeLayout>
                <LargeLayoutChild style={{ margin: 'auto' }}>
                    <ImageContainter src="src\assets\headshot.png" />
                </LargeLayoutChild>
                <LargeLayoutChild>
                    <Col style={{ display: "flex", flexDirection: 'column', alignItems: 'center', height: '100 %' }}>
                        <Header style={{ fontSize: '6rem', margin: 0 }}>
                            Hi, I'm{' '}
                            <Tooltip title="For the non-Maori speakers: Two - Gnaw">
                                <span style={{ color: '#c74734', fontFamily: 'Pacifico', fontSize: '6rem', margin: 0 }}>Tunoa</span>
                            </Tooltip>{' '}
                        </Header>
                        <Text type='secondary'> React | .Net Core | Azure | SQL Server | Teaching</Text>

                        <Space size={24} style={{ margin: '2rem' }} wrap>
                            <Avatar
                                size={{ sm: 32, md: 40, lg: 52 }}
                                icon={<PhoneOutlined />}
                                onClick={copyPhone}
                                style={{ background: "#c74734", cursor: "pointer", }}
                            />
                            <Avatar
                                size={{ xs: 24, sm: 32, md: 40, lg: 52 }}
                                icon={<MailOutlined />}
                                style={{ background: "#c74734", cursor: "pointer", }}
                                onClick={copyEmail} />
                            <a href="https://www.linkedin.com/in/tunoa-johnson-2134b51a0/" target="_blank" rel="noopener noreferrer">
                                <Avatar
                                    icon={<LinkedinOutlined />}
                                    style={{ background: "#c74734", cursor: "pointer" }}
                                    size={{ xs: 24, sm: 32, md: 40, lg: 52 }}
                                />
                            </a>


                        </Space>
                    </Col>
                </LargeLayoutChild>
            </LargeLayout>
        </>
    );
};
