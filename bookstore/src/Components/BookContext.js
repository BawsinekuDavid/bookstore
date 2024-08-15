import React, { createContext, useState } from 'react';

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "Othello",
      category: "Fiction",
      price: "GHc10",
      description: "Othello is a tragedy by William Shakespeare, written around 1603. The play tells the story of Othello, a Moorish general in the Venetian army, who becomes the victim of a deceitful plan concocted by his ensign Iago. Iago manipulates Othello into believing that his wife, Desdemona, is having an affair, leading Othello to ultimately take her life.",
      image: "https://cliffnotebooks.com/wp-content/uploads/2023/11/othello-CNB-PRO-FORMA-.png",
    },
    {
      id: 2,
      name: "Things Fall Apart",
      category: "Non-Fiction",
      price: "GHc25",
      description: "Things Fall Apart (1958) by Chinua Achebe is a colonial novel about the life of Okonkwo. He is a respected member of the Umuofia clan located in modern-day Nigeria. He is fearful of appearing weak and lazy like his father, and his burning need to be the embodiment of masculinity becomes his greatest weakness.",
      image: "https://down-vn.img.susercontent.com/file/5f12d8a6b36f12bdcbf53c256c10494f",
    },
    {
      id: 3,
      name: "Better Than the Movies",
      category: "Non-Fiction",
      price: "GHc35",
      description: "'Better Than the Movies' is a romantic novel by Lynn Painter that follows the story of Emma Parker, a small-town girl with big dreams. The book's description promises a sweet and sexy tale of love, friendship, and family, set against the backdrop of a small town in Oklahoma. With its relatable characters and witty banter, the novel explores the ups and downs of relationships and the power of human connection. If you’re a fan of romantic comedies, you’ll likely enjoy the lighthearted and humorous tone of 'Better Than the Movies'.",
      image: "https://down-id.img.susercontent.com/file/edf848586ec24c9c462acc31b134650f",
    },
  ]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
