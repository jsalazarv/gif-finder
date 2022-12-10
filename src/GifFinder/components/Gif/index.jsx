import './styles.css';

export const Gif = ({ title, url }) => {
  return (
    <div className="gif">
      <div className="image-container">
        <img src={url} alt={title} />
      </div>
      <a role="anchor" href={url} target="_blank">
        <small>{title}</small>
      </a>
    </div>
  );
};
