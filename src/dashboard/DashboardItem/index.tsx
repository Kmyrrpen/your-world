import { Meta } from "@/app/meta/store";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  meta: Meta;
};

const S = {
  Item: styled.div`
    height: 10rem;
  `,
};

const DashboardItem: React.FC<Props> = ({ meta }) => {
  return (
    <S.Item>
      <h1>{meta.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: meta.description,
        }}
      ></div>
      <Link to={`/${meta.id}`}>Go</Link>
    </S.Item>
  );
};

export default DashboardItem;
