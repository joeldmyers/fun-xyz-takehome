export const formatDollarAmount = (originalValue: string) => {
  const valToCheck = originalValue.replace("$", "");
  if (/^\d*\.?\d{0,2}$/.test(valToCheck)) {
    return `$${valToCheck}`;
  }
  return originalValue;
};

export const calculateAmount = (
  targetPrice: number | undefined,
  dollarAmount: string
) => {
  if (typeof targetPrice === "undefined") return null;
  if (!dollarAmount?.length) return null;

  const parsedDollarAmount = parseFloat(dollarAmount.replace("$", ""));
  return (targetPrice * parsedDollarAmount).toFixed(2);
};
