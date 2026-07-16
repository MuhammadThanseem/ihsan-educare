import { whatsappNumber } from "@/lib/data";
import Icon from "./Icon";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 lg:bottom-6 lg:right-6 lg:h-14 lg:w-14 lg:text-2xl"
    >
      <Icon name="whatsapp" />
    </a>
  );
}
