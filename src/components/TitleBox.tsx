import styled from "@emotion/styled";

const TitleBox = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <div className="title">{title}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 600px;
  height: 80px;

  font-size: 32px;
  font-weight: bold;
  display: flex;
  align-items: center;

  padding: 0 0 0 20px;

  border: 1px solid white;
`;

export default TitleBox;
