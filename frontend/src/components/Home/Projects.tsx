import { Row } from "antd";
import Meta from "antd/es/card/Meta";
import { StyledHeader, WorkItemCard } from "../design/StyledComponents";

export const Projects = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <StyledHeader>Check out my Work!</StyledHeader>
      <Row justify="space-evenly">
        <a
          href="https://github.com/ToonDawg/ESP-Zone-Controller"
          target="_blank"
          rel="noopener noreferrer"
        >
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
  );
};
