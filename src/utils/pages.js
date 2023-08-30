// функция для получения количества страниц
export const getPageCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}
// функция для получения массива страниц
export const getPagesArray = (totalPages) => {
	const pagesArray = []
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i)
  }
  return pagesArray
}

