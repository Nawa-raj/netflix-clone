import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
  margin: 0 0.5%;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 23px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  line-height: normal;

  &:last-child {
    padding-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Button = styled.button``;
