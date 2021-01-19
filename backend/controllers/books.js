const fetch = require("node-fetch");

exports.getBooks = (req, res, next) => {
  const id = req.params.id;
  fetch("https://www.googleapis.com/books/v1/volumes?q=" + id, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => res.send(transforData(json)))
    .catch((err) => console.log(err.message));
};

transforData = (value) => {
  const items = [];
  value.items.forEach((element) => {
    const data = {
      id: element.id,
      title: element.volumeInfo.title,
      authors: element.volumeInfo.authors,
      description: element.volumeInfo.description,
      publisher: element.volumeInfo.publisher,
      averageRating: element.volumeInfo.averageRating,
      imageLinks: element.volumeInfo.imageLinks?.smallThumbnail,
      pageCount: element.volumeInfo.pageCount,
      language: element.volumeInfo.language,
    };
    items.push(data);
  });
  return items;
};
