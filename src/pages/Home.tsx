import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PostBox from "../components/PostBox";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-header">
        <Button onClick={() => navigate("/articles/create")}>글 작성</Button>
      </div>
      <div className="home-list">
        <PostBox data={DUMMY_DATA}></PostBox>
        <PostBox data={DUMMY_DATA}></PostBox>
      </div>
    </>
  );
}

const DUMMY_DATA = {
  id: 1,
  title: "야호",
  content: "오예",
};
