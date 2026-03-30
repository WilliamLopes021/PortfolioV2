import type { ContactCardProps } from "../props/ContactCardProps";

function ContactCard({icon, contact, type}: ContactCardProps) {
  return (
    <div>
      <div>
        {icon}
      </div>
      <div>
        <span>{type}</span>
        <span>{contact}</span>
      </div>
    </div>
  );
}

export default ContactCard;
