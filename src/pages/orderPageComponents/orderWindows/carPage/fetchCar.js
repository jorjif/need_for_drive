/**
 * Функция обрабатывает данные сервера, внося их в полученную переменную
 * @param {*} data данные о доступных машинах с сервера
 * @returns промис с объектом carCategories - категории авто, carData - массив карт
 */
export async function filterCar(data) {
  const filteredCarData = await data.data.filter((carObj) => {
    const nameComparasing = carObj.name !== "Теst";
    const imgPathCheck = carObj.thumbnail.path.charAt(0) === "/";
    return nameComparasing && carObj.categoryId && imgPathCheck;
  });
  console.log(filteredCarData);
  const categories = await filteredCarData.reduce(
    (accumulator, { categoryId }) => accumulator.add(categoryId.name),
    new Set()
  );
  console.log(categories);
  return {
    carCategories: categories,
    carData: filteredCarData,
  };
}
