import useCustom from "./useCustom";
function App() {
  const [data] = useCustom("https://jsonplaceholder.typicode.com/todos/");

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div class="m-5">
              <div class="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
                <div class="col-span-11 flex flex-col px-10 text-left">
                  <p class="text-lg font-medium capitalize">{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default App;
