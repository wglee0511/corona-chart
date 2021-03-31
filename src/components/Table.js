import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BASEURL = "https://api.odcloud.kr/api";

const CENTERAPI =
  "/15077586/v1/centers?page=1&perPage=10&serviceKey=data-portal-test-key";

const getApi = axios.create({
  baseURL: BASEURL,
});

const Wrapper = styled.div`
  margin: 30px 0 30px 0;
`;

const Table = () => {
  const [centerInfo, setCenterInfo] = useState({});

  useEffect(() => {
    (async () => {
      await getApi
        .get(CENTERAPI)
        .then((response) => {
          const getData = response.data.data;
          const centerData = getData.map((each) => {
            return {
              address: each.address,
              centerType: each.centerType,
              centerName: each.centerName,
              facilityName: each.facilityName,
            };
          });
          setCenterInfo(centerData);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <Wrapper>
      <table className="table table-cart">
        <thead>
          <tr>
            <th width="15%">중앙 권역</th>
            <th width="20%">센터 이름</th>
            <th width="40%">주소</th>
            <th width="25%">상세 주소</th>
          </tr>
        </thead>
        <tbody>
          {centerInfo &&
            centerInfo.map((each) => {
              return (
                <tr>
                  <th>{each.centerType}</th>
                  <th>{each.centerName}</th>
                  <th>{each.address}</th>
                  <th>{each.facilityName}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;
