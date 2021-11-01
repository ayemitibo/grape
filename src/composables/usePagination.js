import { computed, unref, ref } from 'vue'
// import { searchState } from '/@src/state'

export const usePagination =(totalItems, perPage) => {
  // mock pagination
  const totalPages = computed(() => Math.ceil(unref(totalItems).length / perPage))
  const page = ref(1)

  const pageItems = computed(() => {
    const start = (page.value - 1) * perPage
    const end = start + perPage
    return unref(totalItems).slice(start, end)
  })

  // watch(searchState, () => page.value = 1)

  return [pageItems, page, totalPages]
}
