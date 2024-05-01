import axios from "axios"

const http = axios.create({
  baseURL: "https://sweetmanager.ryzeon.me/"
})

export class NotificationsApiService {

  async getNotifications() {
    let response = await http.get("/notifications")
    return response.data;
  }
}