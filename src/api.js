export const getData = async () => {
  const res = await fetch(`http://starlord.hackerearth.com/recipe`)
  const data = await res.json()
  data.pop()
  return data
}
