export async function fetchCar(errorHandler) {
  const responce = await fetch("https://api-factory.simbirsoft1.com/api/db/car", {
    method: "GET",
    headers: {
      "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      Authorization: "Bearer 4cbcea96de",
    },
  }).catch((e) => errorHandler(e));
  console.log(responce);
  const reader = await responce.body.getReader();
  const readableStream = new ReadableStream({
    start(controller) {
      return pump();
      function pump() {
        return reader
          .read()
          .then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            controller.enqueue(value);
            return pump();
          })
          .catch((e) => errorHandler(e));
      }
    },
  });
  console.log(readableStream);
  const stream = new Response(readableStream);
  console.log(stream);
  const parsedStream = await stream.json().catch((e) => errorHandler(e));
  console.log(parsedStream);
  const filteredParsedStream = await parsedStream.data.filter(
    (carObj) => carObj.categoryId
  );
  console.log(filteredParsedStream);
  return filteredParsedStream;
}
