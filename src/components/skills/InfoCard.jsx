import "./InfoCard.css";

function InfoCard(props) {
  const { img, title, description, link } = props;

  return (
    <a href={link} className="InfoCard">
      <img src={img} alt="" />
      <div className="InfoCard__text">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Click for more infomation</span>
      </div>
    </a>
  );
}

export default InfoCard;
