import React from 'react';
import { Container, Paragraph, Icon, Image, Figure } from './style';

const Me = ({ me }) => {
  const { names, surnames, image } = me;
  return (
    <Container>
      {image ? (
        <Figure>
          <Image src={image} alt={`photo-${names}`} />
        </Figure>
      ) : (
        <Icon className="fas fa-user" />
        )}
      <Paragraph>{`${names} ${surnames}`}</Paragraph>
    </Container>
  );
};

export default Me;