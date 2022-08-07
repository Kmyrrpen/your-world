import { Link } from "react-router-dom";
import { deleteMeta } from "@/app/meta/flows";
import { Meta } from "@/app/meta/store";
import dispatch from "@/app/dispatch";
import Button from "@/components/Button";
import styled from "styled-components";

type Props = {
  meta: Meta;
};

const S = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: 5px;

  .title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: inherit;
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
`;

const DashboardItem: React.FC<Props> = ({ meta }) => {
  return (
    <S>
      <Link className="title" to={`${meta.id}`}>
        <h2>{meta.title}</h2>
      </Link>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: meta.description,
        }}
      ></div>
      <div className="buttons">
        <Button red onClick={() => dispatch(deleteMeta(meta.id))}>
          Delete
        </Button>
        <Button as={Link} to={`${meta.id}?edit=true`}>
          Edit
        </Button>
      </div>
    </S>
  );
};

export default DashboardItem;
