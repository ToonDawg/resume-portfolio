import { Timeline, Typography } from "antd";
const { Text } = Typography;
import {
  TimelineContainer,
  StyledCard,
  StyledH3,
  StyledHeader,
} from "../design/StyledComponents";

export const WorkExperience = () => {
  return (
    <TimelineContainer>
      <StyledHeader>Work Experience</StyledHeader>
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
                  development topics like Python and Web Development. Guided by
                  the principle "People don't care how much you know until they
                  know how much you care," I built strong relationships with
                  students and fostered a collaborative environment. This
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
                  During my time at MSL Solutions, I had the opportunity to work
                  on the Golf Management System (GMS). I was involved in the
                  development and maintenance of the software, which included
                  implementing new features and fixing bugs. Utilizing the
                  following technologies: ASP.NET Web Pages, C#, ASP.NET and SQL
                  Server
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
                  utilizes Azure cloud services, such as B2C, Blob storage, and
                  Web Apps, with React for the frontend and .Net core for the
                  backend. Provided full stack development consulting on the
                  implementation of the Project Management tool myProjects for
                  the Department of Jobs, Precincts, and Regions' (DJPR)
                  CarbonNet project and Queensland Department of Education.
                  Developed extra features to fulfill DJPR's specific needs and
                  ensured the myProjects instance was delivered in a timely
                  fashion for both projects
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
                  processes. I manage large-scale releases for major sites like
                  Rebel Sports, BCF, and Supercheap Auto. My focus is on
                  ensuring robust, efficient systems that drive seamless
                  customer experiences, while fostering a collaborative and open
                  team environment
                </div>
              </StyledCard>
            ),
            color: "green",
          },
        ]}
      />
    </TimelineContainer>
  );
};
