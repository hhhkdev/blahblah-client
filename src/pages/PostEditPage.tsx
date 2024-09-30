import styled from "@emotion/styled";
import TitleInput from "../components/TitleInput";
import ContentInput from "../components/ContentInput";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import POST_API from "../apis/POSTAPI";
import { useEffect, useState } from "react";
import { Space } from "../utils";

export default function PostEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    POST_API.READ_ONE(Number(id)).then((res) => {
      setTitle(res.title);
      setContent(res.content);
    });
  }, []);

  return (
    <Wrapper>
      <TitleInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      ></TitleInput>
      <Space height={20}></Space>
      <ContentInput
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></ContentInput>
      <Space height={20}></Space>

      <div className="buttons">
        <Button onClick={() => navigate(`/articles/${id}`)}>돌아가기</Button>

        <Button
          onClick={() => {
            POST_API.UPDATE(Number(id), { title: title, content: content });
            navigate("/");
          }}
        >
          수정 완료
        </Button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  .buttons {
    display: flex;
    width: 620px;
    justify-content: space-between;
  }
`;
