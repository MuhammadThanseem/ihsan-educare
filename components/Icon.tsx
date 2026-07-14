import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, type IconName } from "@/lib/icons";

export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return <FontAwesomeIcon icon={icons[name]} className={className} />;
}
