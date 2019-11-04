export const fetchData = async () => {
  try {
    const jasonData = await fetch("https://randomuser.me/api");
    const data = jasonData.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
