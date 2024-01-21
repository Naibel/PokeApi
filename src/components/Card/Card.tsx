import "./Card.css";

interface CardProps {
  name: string;
  index: number;
}

export const Card = ({ name, index }: CardProps) => (
  <div className="wrapper">
    <a href={`/pokemon/${index + 1}`}>
      <div className="card">
        <span>{name}</span>
      </div>
    </a>
  </div>
);
