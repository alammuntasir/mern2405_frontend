import React, { useEffect, useState } from "react";
import { Container } from "../common/Container";
import Title from "../ui/Title";

const category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/category/allcategory`)
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      });
  }, []);

  return (
    <section className="mt-10">
      <Container>
        <div className="py-2 px-4 sm:px-6">
           <Title title="Top Categories"/>
          
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6 gap-4">
              {data.map((item) => (
                <div
                  key={item._id || item.id}
                  className="bg-gray-100 sm:p-4 p-3 rounded-lg overflow-hidden cursor-pointer relative"
                >
                  <div className="w-full aspect-[205/273] overflow-hidden mx-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-top rounded-lg"
                    />
                  </div>

                  <div className="sm:mt-4 mt-3 text-center">
                    <h4 className="text-slate-900 lg:text-base text-sm font-semibold">
                      {item.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default category;
