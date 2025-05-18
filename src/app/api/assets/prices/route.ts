import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from "@funkit/api-base";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const chainId = searchParams.get("chainId");
  const symbol = searchParams.get("symbol");

  if (!chainId || !symbol) {
    return new Response(
      JSON.stringify({ error: "Missing chainId or symbol" }),
      { status: 422, headers: { "Content-Type": "application/json" } }
    );
  }

  const apiKey = process.env.API_BASE_KEY;

  if (!apiKey) throw new Error("API Base API Key missing");

  const data = await getAssetErc20ByChainAndSymbol({
    chainId,
    symbol,
    apiKey,
  });

  const result = await getAssetPriceInfo({
    chainId,
    assetTokenAddress: data.address,
    apiKey,
  });

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
