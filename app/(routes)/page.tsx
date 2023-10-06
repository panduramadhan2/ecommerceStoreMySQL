import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("a6bbcd9a-2f9e-4aab-a764-162d63afade0");
  // console.log(billboard);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"> */}
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
