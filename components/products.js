import { Product } from "./product";

export const Products = (props) => {
  const listProduct = [
    {
      id: 1,
      name: "Doctor Sleep",
      author: "Stephen King",
      image: "image/Doctor_Sleep.jpeg",
      description:
        "Doctor Sleep is a 2013 horror novel by American writer Stephen King and the sequel to his 1977 novel The Shining. The book reached the first position on The New York Times Best Seller list for print and ebook fiction (combined), hardcover fiction, and ebook fiction",
      price: "10e",
    },
    {
      id: 2,
      name: "Cockroaches",
      author: "Jo Nesbo",
      image: "image/The_Cockroaches.jpeg",
      description:
        "Cockroaches (Norwegian: Kakerlakkene, 1998) is a crime novel by Norwegian writer Jo Nesbø, the second in the Harry Hole series.",
      price: "8e",
    },
    {
      id: 3,
      name: "The Girl on the Train",
      author: "Paula Hawkins",
      image: "image/The_Girl_On_The_Train.png",
      description:
        "The Girl on the Train is a 2015 psychological thriller novel by British author Paula Hawkins that gives narratives from three different women about relationship troubles and binge drinking",
      price: "11e",
    },
    {
      id: 4,
      name: "Tell Me Your Dreams",
      author: "Sidney Sheldon",
      image: "image/Tell_Me_Your_Dreams.jpeg",
      description:
        "The main characters of the book are Ashley Patterson, an introverted workaholic, her co-workers, Toni Prescott, an outgoing singer and dancer, shy artist Alette Peters and Ashley's father, Dr. Steven Patterson.",
      price: "6e",
    },
  ];

  /*return (listProduct.map = (item) => {
    return (
      <Product
        name={item.name}
        author={item.author}
        image={item.image}
        desc={item.description}
        price={item.price}
      />
    );
  });
*/
  return (
    <div>
      {listProduct.map((item) => {
        return (
          <Product
            name={item.name}
            author={item.author}
            image={item.image}
            desc={item.description}
            price={item.price}
            key={item.id}
          />
        );
      })}
    </div>
  );
};
