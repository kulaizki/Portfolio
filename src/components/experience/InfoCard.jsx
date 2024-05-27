import "./InfoCard.css";

function InfoCard(props) {
  const { img, title, description, link } = props;

  return (
    <a href={link} className="InfoCard" target="_blank">
      <img src={img} alt="" />
      <div className="InfoCard__text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <span className="InfoCard__click">Click for more infomation</span>
    </a>
  );
}

export default InfoCard;
