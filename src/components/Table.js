import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";

const BASEURL = "https://api.odcloud.kr/api";

const CENTERAPI =
  "/15077586/v1/centers?page=1&perPage=10&serviceKey=data-portal-test-key";

const getApi = axios.create({
  baseURL: BASEURL,
});

const Wrapper = styled.div`
  margin: 30px 15% 30px 15%;
`;

const LoaderDiv = styled.div.attrs({
  className: "flex-box",
})``;

const Table = () => {
  const [centerInfo, setCenterInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getApi
        .get(CENTERAPI)
        .then((response) => {
          const getData = response.data.data;
          const centerData = getData.map((each) => {
            return {
              id: each.id,
              address: each.address,
              centerType: each.centerType,
              centerName: each.centerName,
              facilityName: each.facilityName,
            };
          });
          setCenterInfo([...centerData]);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <Wrapper>
      {isLoading && (
        <LoaderDiv>
          <Loader />
        </LoaderDiv>
      )}
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
          {centerInfo.map((each) => {
            return (
              <tr key={each.id}>
                <td>{each.centerType}</td>
                <td>{each.centerName}</td>
                <td>{each.address}</td>
                <td>{each.facilityName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;
