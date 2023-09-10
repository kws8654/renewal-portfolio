import React from 'react';

interface PortfolioLayoutProps {
  name: string;
  image: any;
  summary: string;
}

export const PortfolioLayout = (props: PortfolioLayoutProps) => {
  const { name, image, summary } = props;

  return (
    <section>
      <h1>{name}</h1>
      <div>{image}</div>
      <p>{summary}</p>
    </section>
  );
};
