export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  return <>First Page route : {productId}</>;
}
