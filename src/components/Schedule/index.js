import { schedule } from "../../util/schedule";
import Activity from "../Activity";
import {
  Wrapper,
  Row,
  ActivitiesContainer,
  Activities,
  Time,
  Title,
} from "./styles";

export const Schedule = ({ schedule }) => {
  return (
    <section>
      <Title id="cronograma">Cronograma do evento</Title>
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
    </section>
  );
};

Schedule.defaultProps = {
  schedule: schedule,
};
