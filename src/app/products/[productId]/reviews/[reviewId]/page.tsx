export default async function ProductReview({
  params,
}: {
  params: { productId: string, reviewId:string };
}) {
  const { productId,reviewId } = await params;
  return <>First Page route : {productId} and review : {reviewId}</>;
}
