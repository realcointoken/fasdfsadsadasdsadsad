import cx from "classnames";
import "./Button.css";

function Button({ href, imgSrc, children, onClick, className, size = "lg", align = "center", ...rest }) {
  let classNames = cx("btn btn-primary", align === "left" ? "btn-left" : "btn-center", `btn-${size}`, className);
  if (typeof children === "object") {
    return (
      <a className={classNames} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a className={classNames} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {imgSrc && <img className="btn-image" src={imgSrc} alt={children} />}
        <span className="btn-label">{children}</span>
      </a>
    );
  }
  return (
    <button className={classNames} onClick={onClick} {...rest}>
      {imgSrc && <img className="btn-image" src={imgSrc} alt={children} />}
      <span className="btn-label">{children}</span>
    </button>
  );
}

export function ConnectWalletButton({ imgSrc, children, onClick, className }) {
  let classNames = " btn-sm connect-wallet";
  return (
    <button className={classNames} onClick={onClick}>
      <span className="btn-label1">{children}</span>
    </button>
  );
}

export default Button;
