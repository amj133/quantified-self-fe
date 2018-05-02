const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `http://localhost:3000`
  } else {
    return `https://calm-fjord-39732.herokuapp.com/api/v1/meals`
  }

}

module.exports = {
  baseURL
}
