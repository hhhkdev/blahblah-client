import styled from "@emotion/styled";
import TitleBox from "../components/TitleBox";
import { useNavigate, useParams } from "react-router-dom";
import POST_API from "../apis/POSTAPI";
import { useEffect, useState } from "react";
import ContentBox from "../components/ContentBox";
import Button from "../components/Button";

export default function PostViewPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState(DUMMY_DATA);

  // useEffect(() => {
  //   POST_API.READ_ONE(Number(id)).then((res) => setData(res));
  // }, []);

  return (
    <Wrapper>
      <TitleBox title={data.title}></TitleBox>
      <ContentBox content={data.content}></ContentBox>
      <div className="buttons">
        <Button onClick={() => navigate("/")}>글 목록</Button>
        <Button onClick={() => navigate(`/articles/update/${data.id}`)}>
          글 수정
        </Button>
        <Button
          onClick={() => {
            POST_API.DELETE(data.id);
            navigate("/");
          }}
        >
          글 삭제
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const DUMMY_DATA = {
  id: 1,
  title: "실패",
  content: "API 연결에 실패했어요.",
  createdAt: "2024-01-23",
  modifiedAt: "2024-01-23",
  auther: "나",
};
