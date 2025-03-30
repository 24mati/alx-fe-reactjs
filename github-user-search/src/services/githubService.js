export const searchUsers = async ({ username, location, minRepos }) => {
  let query = `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;
  
  const response = await instance.get(`/search/users?q=${encodeURIComponent(query)}`);
  return response.data.items;
};