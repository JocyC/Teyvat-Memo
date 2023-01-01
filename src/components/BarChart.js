import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const BarChartComponent = ({ data }) => {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="hsla(165, 19%, 40%, 1)" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-family: var(--headingFont);
  font-size: 0.8rem;
  max-width: 80vw;
`;

export default BarChartComponent;
