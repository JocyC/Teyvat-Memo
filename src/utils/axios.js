import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://api.genshin.dev/",
});

export default customFetch;
