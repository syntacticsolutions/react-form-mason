export type ButtonProps = {
  type?: "primary" | "default" | "danger";
  size?: "small" | "large";
  onClick?: () => void;
  children: React.ReactNode;
};
