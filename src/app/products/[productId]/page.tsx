import { Metadata } from "next";

type props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: props): Promise<Metadata> {
  const id = (await params).productId;
  return { title: `Product ${id}` };
}


export default async function ProductDetails({
  params,
}: props) {
  const { productId } = await params;
  return <>First Page route : {productId}</>;
}
