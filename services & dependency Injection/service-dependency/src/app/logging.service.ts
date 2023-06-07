// @Injectable not reqd becz we r not injecting anything here

export class LoggingService {
  logStatusChange(status: string) {
    console.log('server status changed, new status: ' + status);
  }
}
