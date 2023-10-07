type ClassName = string | undefined;

export const classNames = (...classNames: ClassName[]): string => {
  return classNames.reduce<string>((previous, current) => {
    if (!current) return `${previous}`;
    return `${previous} ${current}`;
  }, '');
}
