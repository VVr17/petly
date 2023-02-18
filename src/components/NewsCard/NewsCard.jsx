import React from 'react';
import {
  Date,
  LinearGradient,
  Link,
  LinkMore,
  Text,
  Title,
  WrapperCard,
  WrapperSignature,
} from './NewsCard.styled';

const NewsCard = () => {
  return (
    <WrapperCard>
      <LinearGradient></LinearGradient>
      <Title>Обережно, кліщі! Як уберегти улюбленця </Title>
      <Text>
        Травневі прогулянки з улюбленцем не лише приємні, але й потребують
        пильності. З початком теплої пори року активізуються кліщі, і треба бути
        уважним, щоб уберегти свого песика чи котика від дуже серйозних
        неприємностей зі здоров`ям.
      </Text>
      <WrapperSignature>
        <Date>20/02/2021</Date>
        <Link to="/" end>
          Read more
        </Link>
      </WrapperSignature>
    </WrapperCard>
  );
};

export default NewsCard;
