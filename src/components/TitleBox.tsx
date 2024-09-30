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
  height: 100px;

  border: 1px solid white;
`;

export default TitleBox;
