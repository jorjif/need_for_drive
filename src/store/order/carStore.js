import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const databaseApi = createApi({
  reducerPath: "carList",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-factory.simbirsoft1.com/api/",
  }),
  endpoints: (builders) => ({
    getCars: builders.query({
      query: () => {
        return {
          url: "db/car",
          method: "GET",
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: "Bearer 4cbcea96de",
          },
        };
      },
      //обрабатывает респонс с сервера, кешируя только отфильтрованную информацию
      transformResponse: (response) => {
        const filteredData = response.data.filter((carObj) => {
          //было много авто с именем тест, картинка была битая, а самих экземпляров куча
          const nameComparasing = carObj.name !== "Теst";
          /*выявил что url начинавшиеся не с / помимо того что были длинной 
          в несколько сотен символов, были еще и битыми, так же в отсев*/
          const imgPathCheck = carObj.thumbnail.path.charAt(0) === "/";
          //ну и у авто должна быть категория для их фильтрции, те которые ее не имеют - в сброс
          return nameComparasing && carObj.categoryId && imgPathCheck;
        });
        return filteredData;
      },
    }),
    getTariffInfo: builders.query({
      query: () => {
        return {
          url: `db/rate`,
          method: "GET",
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: "Bearer 4cbcea96de",
          },
        };
      },
    }),
  }),
});

export const { useGetCarsQuery, useGetTariffInfoQuery } = databaseApi;
