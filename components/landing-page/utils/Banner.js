import Image from "next/image";
import styled from "styled-components";
import Ticker from "react-ticker";

const BannerContainer = styled("div")`
  height: 3rem;
  width: 100vw;
  margin-top: 3rem;
`;

const ImageContainer = styled.div`
  display: flex;
  column-gap: 5rem;
  padding-left: 3rem;
`;

const images = [
  {
    name: "HTML",
    category: "Frontend",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/HTML_gqml0l.svg",
  },
  {
    name: "CSS",
    category: "Frontend",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/CSS_d0peii.svg",
  },
  {
    name: "Javascript",
    category: "Frontend",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/Javascript_zmniqy.svg",
  },
  {
    name: "React",
    category: "Frontend",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774197/Public/Stack/React_gqppbn.svg",
  },
  {
    name: "Nextjs",
    category: "Frontend",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774197/Public/Stack/Nextjs_ivyuye.svg",
  },
  {
    name: "Nodejs",
    category: "Backend",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774197/Public/Stack/Nodejs_pklusa.svg",
  },
  {
    name: "Firebase",
    category: "Database",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/Firebase_lcs0da.svg",
  },
  {
    name: "Mongodb",
    category: "Database",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774196/Public/Stack/Mongodb_hx9qnm.svg",
  },
  {
    name: "Mysql",
    category: "Database",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774197/Public/Stack/Mysql_k9qhuf.svg",
  },
  {
    name: "Figma",
    category: "Design",
    url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/Figma_xzsaxj.svg",
  },
];

const Banner = () => {
  return (
    <BannerContainer>
      <Ticker speed={12}>
        {({ index }) => (
          <ImageContainer>
            {images.map((img) => {
              return (
                <Image key={img.name} src={img.url} width={200} height={200} />
              );
            })}
          </ImageContainer>
        )}
      </Ticker>
    </BannerContainer>
  );
};

export default Banner;
