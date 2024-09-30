import styled from "@emotion/styled";
import TitleInput from "../components/TitleInput";
import ContentInput from "../components/ContentInput";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import POST_API from "../apis/POSTAPI";
import { useState } from "react";

export default function PostEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <TitleInput></TitleInput>
      <ContentInput></ContentInput>
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
const Wrapper = styled.div``;
