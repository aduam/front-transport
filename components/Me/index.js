import React from 'react';
import { Container, Paragraph, Icon } from './style';

const Me = ({ me }) => {
  const { names, surnames, image } = me;
  return (
    <Container>
      {image ? (
        <figure>
          <img src={image} alt={`photo-${names}`} />
        </figure>
      ) : (
        <Icon className="fas fa-user" />
        )}
      <Paragraph>{`${names} ${surnames}`}</Paragraph>
    </Container>
  );
};

export default Me;