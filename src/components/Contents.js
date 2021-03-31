import { useEffect, useState } from "react";
import styled from "styled-components";
import { Doughnut, Bar } from "react-chartjs-2";
import axios from "axios";
import theme from "../styles/theme";
import Loader from "./Loader";

const Wrapper = styled.div`
  padding: 20px 15% 20px 15%;
`;

const TextH1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  display: block;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const FlexDiv = styled.div`
  width: 100%;
`;

const EachDiv = styled.div`
  margin: 40px 0 40px 0;
  padding: 0 20% 0 20%;
`;

const TotalWordDiv = styled.div`
  margin: 30px 0 30px;
  font-size: 20px;
  font-weight: 800;
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
`;
const ConDiv = styled.div.attrs({
  className: "flex-box",
})`
  color: ${theme.Confirm};
`;
const RecovDiv = styled.div.attrs({
  className: "flex-box",
})`
  color: ${theme.Recover};
`;
const DeathDiv = styled.div.attrs({
  className: "flex-box",
})`
  color: ${theme.Death};
`;

const labelForChart = {
  confirmed: "2020 ~ 2021 년도 확진자 수",
};

const CORONAAPI = "https://api.covid19api.com/dayone/country/";

const NATIONCODE = {
  Korea: "/kr",
};

const getapi = axios.create({
  baseURL: CORONAAPI,
});

const Contents = (props) => {
  const [confirmed, setConfirmed] = useState({});
  const [toDay, setToday] = useState({});
  const [toDayDate, setTodayDate] = useState("");

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getapi
        .get(NATIONCODE.Korea)
        .then((response) => {
          const downData = response.data;

          const arrData = downData.map((each) => {
            const getDateData = new Date(each.Date);
            const year = getDateData.getFullYear();
            const month = getDateData.getMonth();
            const date = getDateData.getDate();
            return {
              year,
              month,
              date,
              active: each.Active,
              confirmed: each.Confirmed,
              country: each.Country,
              deaths: each.Deaths,
              recovered: each.Recovered,
            };
          });

          const confirmedData = arrData.reduce((acc, cur) => {
            const year = cur.year;
            const month = cur.month;
            const date = cur.date;
            const confirmed = cur.confirmed;

            const findItem = acc.find(
              (each) => each.year === year && each.month === month
            );

            if (!findItem) {
              acc.push({
                year,
                month,
                date,
                confirmed,
              });
            }

            if (findItem && findItem.date < date) {
              findItem.year = year;
              findItem.month = month;
              findItem.data = date;
              findItem.confirmed = confirmed;
            }

            return acc;
          }, []);

          const todayData = {
            year: arrData[arrData.length - 2].year,
            month: arrData[arrData.length - 2].month,
            date: arrData[arrData.length - 2].date,
            active:
              arrData[arrData.length - 2].active -
              arrData[arrData.length - 3].active,
            confirmed:
              arrData[arrData.length - 2].confirmed -
              arrData[arrData.length - 3].confirmed,
            deaths:
              arrData[arrData.length - 2].deaths -
              arrData[arrData.length - 3].deaths,
            recovered:
              arrData[arrData.length - 2].recovered -
              arrData[arrData.length - 3].recovered,
          };

          setConfirmed({
            labels: confirmedData.map(
              (each) => `${each.year - 2000}/${each.month + 1}`
            ),
            datasets: [
              {
                label: labelForChart.confirmed,
                data: confirmedData.map((each) => each.confirmed),
                barPercentage: 0.5,
                barThickness: 25,
                maxBarThickness: 60,
                minBarLength: 2,
                backgroundColor: theme.GraphBar,
              },
            ],
          });
          setToday({
            labels: ["확진자 수", "격리해제 환자 수", "사망자 수"],
            datasets: [
              {
                data: [
                  todayData.confirmed,
                  todayData.recovered,
                  todayData.deaths,
                ],
                barPercentage: 0.5,
                barThickness: 50,
                maxBarThickness: 60,
                minBarLength: 30,
                backgroundColor: [theme.Confirm, theme.Recover, theme.Death],
              },
            ],
          });
          setTodayDate({
            title: `${todayData.year}년 ${todayData.month + 1}월 ${
              todayData.date
            }일 확진자 현황`,
            confirmed: todayData.confirmed,
            recovered: todayData.recovered,
            deaths: todayData.deaths,
          });
          setLoading(false);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <Wrapper>
      <TextH1>{toDayDate.title}</TextH1>
      <TotalWordDiv>
        <ConDiv>
          확진자 수 <div>{toDayDate.confirmed}</div>
        </ConDiv>
        <RecovDiv>
          격리해재자 수 <div>{toDayDate.recovered}</div>
        </RecovDiv>
        <DeathDiv>
          사망자 수 <div>{toDayDate.deaths}</div>
        </DeathDiv>
      </TotalWordDiv>
      <FlexDiv>
        {isLoading && <Loader />}
        <EachDiv>
          <Doughnut data={toDay} />
        </EachDiv>
        <EachDiv>
          <Bar data={confirmed} />
        </EachDiv>
      </FlexDiv>
    </Wrapper>
  );
};

export default Contents;
