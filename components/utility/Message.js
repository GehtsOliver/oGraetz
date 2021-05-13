import styled from "styled-components";

const Message = ({ className, statusMessage = "Hi" }) => {
  return (
    <div className={className}>
      <h2>{statusMessage}</h2>
    </div>
  );
};

const StyledMessage = styled(Message)`
  color: #000;
  background-color: #fff;
  width: 30rem;
  text-align: center;
  border: 1px solid #000;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  opacity: 0.8;
`;

export default StyledMessage;
