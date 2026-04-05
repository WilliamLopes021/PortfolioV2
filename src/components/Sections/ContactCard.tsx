import type { ContactCardProps } from "../../props/ContactCardProps";

function ContactCard({icon, contact, type}: ContactCardProps) {
  return (
    <div className="p-6 flex border my-3 border-border rounded-xl shadow-xl bg-bg hover:-translate-y-1 transition-all">
      <div className="bg-primary-contrast w-min p-3 rounded-xl">
        {icon}
      </div>
      <div className="flex flex-col pl-3 ">
        <span className="text-gray-400">{type}</span>
        <span className="font-bold">{contact}</span>
      </div>
    </div>
  );
}

export default ContactCard;
