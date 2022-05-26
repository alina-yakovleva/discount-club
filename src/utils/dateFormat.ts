export const dateFormat = (time: string | null): string => {
  if (!time) {
    return "-";
  }

  const date = new Date(Number(time));

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const finalMonth = month < 10 ? "0" + (month + 1) : month;

  return [day, finalMonth, year].join(".");
};
