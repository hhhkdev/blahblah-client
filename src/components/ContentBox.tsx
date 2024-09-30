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
  height: 400px;

  font-size: 20px;

  display: flex;

  padding: 17px 0 0 20px;

  border: 1px solid white;
`;
export default ContentBox;
