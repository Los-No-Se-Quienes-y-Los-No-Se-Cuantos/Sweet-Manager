<script>
import LoginView from "./iam/components/login-view/login-view.component.vue";
import RegisterView from "./iam/components/register-view/register-view.component.vue";
import NotificationTable from "./interaction/components/notification-table.component.vue";
import {NotificationsApiService} from "./interaction/services/notifications-api.service.js";
import {Notification} from "./interaction/models/notification.entity.js";
import NotificationManagement from "./interaction/pages/notification-management.component.vue";

export default{
  name: "app",
  components: {
    NotificationManagement,
    LoginView,
    RegisterView,
    NotificationTable
  },
  data(){
    return{
      notifications: null,
      notificationsApi : new NotificationsApiService(),
      columnsDefined: []
    }
  },
  created() {
    this.initConfiguration()
  },
  methods:{
    async initConfiguration() {
      this.columnsDefined = ['id', 'title', 'message', 'date'];
      let jsonData = await this.notificationsApi.getNotifications();
      console.log(jsonData);
      this.notifications = this.buildNotificationsListFromResponse(jsonData);
      console.log(this.notifications);
    },

    buildNotificationsListFromResponse(response){
      return response.map(item => new Notification(item['id'], item['title'], item['message'], item['date']));
    }
  }
}

</script>

<template>
  <div class="w-full">
    <notification-table :columns="columnsDefined" :items="notifications"></notification-table>
  </div>
</template>