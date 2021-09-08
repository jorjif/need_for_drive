/**
 * Функция обрабатывает данные сервера, возвращая объект с категориями авто и самими авто
 * @param {*} data данные о доступных машинах с сервера
 * @returns промис с объектом carCategories - категории авто, carData - массив машин
 */
export function filterCar(data) {
  const categories = data.reduce(
    (accumulator, { categoryId }) => accumulator.add(categoryId.name),
    new Set() //Set чтоб сюда попадали только уникальные значения
  );
  return {
    carCategories: categories,
    carData: data,
  };
}
