export const getProfile = () => {
  const data = sessionStorage.getItem("site");
  if (data) return JSON.parse(data);
  return {};
};
