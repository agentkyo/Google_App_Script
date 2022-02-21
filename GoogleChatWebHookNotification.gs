function googleChatWebHookNotification(message,webhooklink) {
  var headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  };
  var options = {
    "contentType": "application/json",
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify({"text":message})
  };
  var response = UrlFetchApp.fetch(webhooklink, options);
  console.log(response)
}
