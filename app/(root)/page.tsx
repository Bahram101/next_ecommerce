import * as React from "react";

const delay = <T extends number>(ms: number): Promise<T> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const Home = async () => {
  await delay(1000);

  return <div>Home page</div>;
};

export default Home;
