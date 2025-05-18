/**
 *
 * If string is valid dollar format (e.g., 5, 5.00) returns that back with a dollar sign
 * at the front.
 *
 * If string is invalid, returns null to "block" this from being passed into the UI.
 */
export const formatDollarAmount = (originalValue: string): string | null => {
  const valToCheck = originalValue.replace("$", "");
  if (/^\d*\.?\d{0,2}$/.test(valToCheck)) {
    return `$${valToCheck}`;
  }

  return null;
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
