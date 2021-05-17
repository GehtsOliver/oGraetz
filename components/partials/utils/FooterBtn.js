import styled from "styled-components";

const ContactButton = ({ icon, link, className }) => {
  return (
    <a className={className} href={link}>
      <i className={icon} />
    </a>
  );
};

const ContactBtn = styled(ContactButton)`
  border: #2e0347 1px solid;
  border-radius: 100%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;
  color: #2e0347; !important;
  :hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  > i {
    font-size: 1.5rem;
  }
`;

export default ContactBtn;
