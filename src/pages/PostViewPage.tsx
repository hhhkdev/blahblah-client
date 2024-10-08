import styled from "@emotion/styled";
import TitleBox from "../components/TitleBox";
import { useNavigate, useParams } from "react-router-dom";
import POST_API from "../apis/POSTAPI";
import { useEffect, useState } from "react";
import ContentBox from "../components/ContentBox";
import Button from "../components/Button";
import { Space } from "../utils";

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt?: string;
  modifiedAt?: string;
  author?: string;
}

export default function PostViewPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState(DUMMY_DATA);

  useEffect(() => {
    POST_API.READ_ONE(Number(id)).then((res) =>
      setData({
        id: res.id || -1,
        title: res.title,
        content: res.content,
        createdAt: res.createdAt,
        modifiedAt: res.createdAt,
        author: res.author,
      })
    );
  }, []);

  return (
    <Wrapper>
      <TitleBox title={data.title}></TitleBox>
      <div className="detail">
        생성 시간 | {data.createdAt} &nbsp;&nbsp;&nbsp; 수정 시간 |{" "}
        {data.modifiedAt} &nbsp;&nbsp;&nbsp; 작성자 | {data.author}
      </div>
      <Space height={20}></Space>
      <ContentBox content={data.content}></ContentBox>
      <Space height={20}></Space>
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

const DUMMY_DATA = {
  id: 1,
  title: "",
  content: "",
  createdAt: "",
  modifiedAt: "",
  author: "",
} as Post;
