import { useQuery } from "@tanstack/react-query";
import { Token } from "@/app/types";
import { GetAssetPriceInfoResponse } from "@funkit/api-base";

export const getAssetPrice = async ({
  chainId,
  symbol,
}: Token): Promise<GetAssetPriceInfoResponse> => {
  const response = await fetch(
    `/api/assets/prices?symbol=${symbol}&chainId=${chainId}`
  );

  return response.json();
};

export const useGetAssetPrice = ({ chainId, symbol }: Token) => {
  return useQuery({
    queryKey: ["sourceAssetPrice", chainId, symbol],
    queryFn: () => getAssetPrice({ chainId, symbol }),
  });
};
