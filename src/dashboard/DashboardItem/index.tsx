import dispatch from "@/app/dispatch";
import { deleteMeta } from "@/app/meta/flows";
import { Meta } from "@/app/meta/store";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  meta: Meta;
};

const S = {
  Item: styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border: 1px solid #000;
    border-radius: 5px;

    .title {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .description {
      min-height: 5rem;
      padding-bottom: 1.5rem;
    }

    .buttons {
      margin-top: auto;
      display: flex;
      justify-content: flex-end;
      gap: 1.5rem;
    }
  `,
};

const DashboardItem: React.FC<Props> = ({ meta }) => {
  return (
    <S.Item>
      <h2 className="title">{meta.title}</h2>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: meta.description,
        }}
      ></div>
      <div className="buttons">
        <Button red onClick={() => dispatch(deleteMeta(meta.id))}>Delete</Button>
        <Button as={Link} to={`/${meta.id}`}>Edit</Button>
      </div>
    </S.Item>
  );
};

export default DashboardItem;
