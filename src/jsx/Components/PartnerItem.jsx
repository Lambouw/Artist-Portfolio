import "../../styles/css/partneritem.css";

const PartnerItem = ({ partner }) => {
  return (
    <div className="partneritem">
      <div className="partneritem--name">{partner.name}</div>
      <a className="extern" target="blank" href={partner.url}>
        {partner.link}
      </a>
    </div>
  );
};

export default PartnerItem;
