export default function authHeader() {
  const user = {
    accessToken: '' // TODO
  };

  if (user) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}
