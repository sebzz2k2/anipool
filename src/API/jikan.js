// setting base url for axios request
import axios from "axios";
export default axios.create({
  baseURL: "https://api.jikan.moe/v3/",
});
