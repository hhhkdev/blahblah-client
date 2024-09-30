import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PostBox from "../components/PostBox";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Space } from "../utils";
import POST_API from "../apis/POSTAPI";

export default function Home() {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    POST_API.READ_ALL().then((res) => setPostList(res));
  }, []);

  return (
    <Wrapper>
      <div className="home-header">
        <div></div>
        <Button onClick={() => navigate("/articles/create")}>글 작성</Button>
      </div>
      <Space height={20}></Space>
      <div className="home-list">
        <ol>
          {postList.map((datum) => (
            <li>
              <PostBox data={datum}></PostBox>
              <Space height={20}></Space>
            </li>
          ))}
        </ol>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .home-header {
    display: flex;
    justify-content: space-between;
  }
  ol {
    padding: 0;
  }
  li {
    list-style: none;
  }
`;
