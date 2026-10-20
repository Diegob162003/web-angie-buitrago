import { Link } from "react-router";

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function SmartLink({ to, children, className, onClick, ariaLabel }: Props) {
  // Enlaces externos (WhatsApp, redes sociales): se abren en otra pestaña
  if (to.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  // Teléfono y correo: abren la app de llamadas o de correo
  if (to.startsWith("tel:") || to.startsWith("mailto:")) {
    return (
      <a href={to} className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  // Todo lo demás son páginas del sitio: cambio sin recargar
  return (
    <Link to={to} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}