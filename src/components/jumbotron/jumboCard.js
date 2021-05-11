import React from "react";
import Jumbotron from ".";
import jumboData from "../../fixtures/jumbo.json";

const JumboCard = () => {
  return (
    <>
      {jumboData.map((items) => (
        <Jumbotron key={items.id} direction={items.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{items.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{items.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={items.image} alt={items.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </>
  );
};

export default JumboCard;
