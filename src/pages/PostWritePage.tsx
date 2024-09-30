import styled from "@emotion/styled";
import TitleInput from "../components/TitleInput";
import ContentInput from "../components/ContentInput";
import Button from "../components/Button";
import POST_API from "../apis/POSTAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Space } from "../utils";

export default function PostWritePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [id, setId] = useState(-1);

  return (
    <Wrapper>
      <TitleInput
        placeholder="타이틀을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.title)}
      ></TitleInput>
      <Space height={20}></Space>
      <ContentInput
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.title)}
      ></ContentInput>
      <Space height={20}></Space>

      <div className="buttons">
        <Button onClick={() => navigate("/")}>글 목록</Button>
        <Button
          onClick={() => {
            POST_API.CREATE({ title: title, content: content }).then((res) =>
              setId(res)
            );
            navigate(`/articles/${id}`);
          }}
        >
          작성 완료
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
