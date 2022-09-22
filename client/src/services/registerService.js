import axios from "axios";

export default class RegisterService {
  async register(username, password, email) {
    const config = {
      url: process.env.API,
      data: {
        username,
        password, 
        email
      }
    }
    return await axios.post(config)
  }
}