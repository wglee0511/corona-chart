import { useState } from "react";
import styled from "styled-components";
import { Doughnut, Bar, Line } from 'react-chartjs-2';

const Wrapper = styled.div`

`

const Contents = (props) => {
    const [confirmed, setConfirmed] = useState({});
    const [deaths, setDeaths] = useState({});
    const [recovered, setRecovered] = useState({});
    const [Active, setActive] = useState({});

 

    return (
        <Wrapper>

        <div>
            <Bar />
        </div>

        <div>
            <Line />
        </div>

        <div>
            <Doughnut />
        </div>

        </Wrapper>
    );
}

export default Contents;