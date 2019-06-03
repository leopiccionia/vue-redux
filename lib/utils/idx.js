export function idx (obj, keys) {
  return keys.reduce((resolved, key) => (resolved && resolved[key]) ? resolved[key] : null, obj)
}
