export default function useHasAnyFalsyField() {
  const hasAnyFalsyField = (object) => {
    return Object.values(object).some(val => typeof val == 'undefined' || (typeof val == 'string' && val.trim().length) == 0)
  }
  return { hasAnyFalsyField }
}