export const formatDate = (dateStr, purpose = 'display') => {
  const date = new Date(dateStr)
  const d = date.getDate()
  const m = (date.getMonth() + 1).toString().padStart(2, '0')
  const y = date.getFullYear()

  if (purpose === 'input') {
    return `${y}-${m}-${d}`
  }

  return `${d}/${m}/${y}`
}

export const urlCreator = (endpoint) => {
  return (route, id) => {
    return `${endpoint}/${route}${id ? '/' : ''}${id || ''}`
  }
}