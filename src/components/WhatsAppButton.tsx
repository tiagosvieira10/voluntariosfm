import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

type Props = {
  phone?: string;
  message?: string;
  label?: string;
  className?: string;
  size?: "default" | "lg";
};

export const WhatsAppButton = ({
  phone = siteConfig.whatsapp,
  message = siteConfig.whatsappMessage,
  label = "Fale no WhatsApp",
  className,
  size = "default",
}: Props) => {
  return (
    <a
      href={whatsappLink(phone, message)}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full bg-[hsl(142_70%_42%)] hover:bg-[hsl(142_70%_36%)] text-white font-semibold transition-bounce hover:scale-105 shadow-elegant",
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-2.5 text-sm",
        className
      )}
    >
      <MessageCircle className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} fill="currentColor" />
      {label}
    </a>
  );
};
