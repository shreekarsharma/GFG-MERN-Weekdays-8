import Card from "./Card";
import Products from "../Products";
const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Products.map((product) => (
              <Card key={product.id} productObj={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
