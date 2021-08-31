/**
 * Функция обрабатывает данные сервера, внося их в полученную переменную
 * @param {*} data данные о доступных машинах с сервера
 * @returns промис с объектом carCategories - категории авто, carData - массив карт
 */
export async function filterCar(data) {
  const filteredCarData = await data.data.filter((carObj) => {
    //было много авто с именем тест, картинка была битая, а самих экземпляров куча
    const nameComparasing = carObj.name !== "Теst";
    /*выявил что url начинавшиеся не с / помимо того что были длинной 
    в несколько сотен символов, были еще и битыми, так же в отсев*/
    const imgPathCheck = carObj.thumbnail.path.charAt(0) === "/";
    //ну и у авто должна быть категория для их фильтрции, те которые ее не имеют - в сброс
    return nameComparasing && carObj.categoryId && imgPathCheck;
  });
  console.log(filteredCarData);
  const categories = await filteredCarData.reduce(
    (accumulator, { categoryId }) => accumulator.add(categoryId.name),
    new Set() //Set чтоб сюда попадали только уникальные значения
  );
  console.log(categories);
  return {
    carCategories: categories,
    carData: filteredCarData,
  };
}
