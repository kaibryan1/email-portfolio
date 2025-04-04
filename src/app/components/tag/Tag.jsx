import styles from "./Tag.module.scss";

export default function Tag({
  label,
  type,
  state,
  children,
  className = "",
  ...props
}) {
  return (
    <div className="tag">
      <p
        className={`${styles.tag} ${styles[type]} ${styles[state]} ${className}`}
        {...props}
      >
        {label || children}
      </p>
    </div>
  );
}
