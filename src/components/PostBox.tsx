import styled from "@emotion/styled";
import Button from "./Button";
import POST_API from "../apis/POSTAPI";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface Article {
  data: Post;
}

const PostBox = ({ data }: Article) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="box">
        <div
          className="box-title"
          onClick={() => navigate(`/articles/${data.id}`)}
        >
          {data.title}
        </div>
        <div
          className="box-content"
          onClick={() => navigate(`/articles/${data.id}`)}
        >
          {data.content}
        </div>
      </div>
      <div className="box-delete">
        <Button onClick={() => deleteHandler(data.id)}>삭제</Button>
      </div>
    </Wrapper>
  );
};

function deleteHandler(id: number) {
  POST_API.DELETE(id);
}

const Wrapper = styled.div`
  width: 80%;
  padding: 12px;
  border: 1px solid white;

  display: flex;
  justify-content: space-between;
  .box {
    display: flex;
    flex-direction: column;
    align-items: start;
    .box-title {
      font-size: 24px;
    }
    .box-content {
      font-size: 14px;
    }
  }
  .box-delete {
  }
`;

export default PostBox;
