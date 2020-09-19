import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Ur4GsWojeXweupPCc2kCHknJK7pcdEvk6G0RLHNvpZM",
  },
});
