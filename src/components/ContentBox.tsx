import styled from "@emotion/styled";

const ContentBox = ({ content }: { content: string }) => {
  return (
    <Wrapper>
      <div className="content">{content}</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 600px;
  height: 100px;

  border: 1px solid white;
`;
export default ContentBox;
