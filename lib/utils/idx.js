export function idx (obj, keys) {
  return keys.reduce((resolved, key) => resolved && resolved[key], obj)
}
