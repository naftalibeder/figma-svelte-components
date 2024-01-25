export type IconKind =
  | "left"
  | "right"
  | "up"
  | "down"
  | "plus"
  | "minus"
  | "check";

export type SelectMenuItem<T> = {
  id: T;
  title: string;
  subtitle?: string;
};

/**
 * To avoid classes from being detected as unused and discarded during bundling,
 * use `global`, e.g. `:global(.my-custom-class)`.
 */
export type InternalClass = string;
