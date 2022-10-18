import { SectionTitle } from "../../util/generalStyles";
import { schedule } from "../../util/schedule";
import Activity from "../Activity";
import { Wrapper, Row, ActivitiesContainer, Activities, Time } from "./styles";

export const Schedule = ({ schedule }) => {
  return (
    <>
      <SectionTitle id="cronograma">Cronograma do evento</SectionTitle>
      <Wrapper>
        {schedule &&
          schedule.map((current, i) => {
            return (
              <Row key={i}>
                <Time>
                  {current.init} - {current.end}
                </Time>
                <Activities>
                  {current.activities.map((activityList, i) => {
                    return (
                      <ActivitiesContainer>
                        {activityList.map((activity) => {
                          return <Activity {...activity} key={i} />;
                        })}
                      </ActivitiesContainer>
                    );
                  })}
                </Activities>
              </Row>
            );
          })}
      </Wrapper>
    </>
  );
};

Schedule.defaultProps = {
  schedule: schedule,
};
