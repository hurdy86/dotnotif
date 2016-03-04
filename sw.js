window.onload = function() {  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful, show interface
      document.getElementById('not-status').innerHTML = '<h4>mobiForge notifications</h4><input type="checkbox" name="pushStatus" id="pushStatus" value="false" /><label for="pushStatus">Receive push notifications for new content</label><div id="pushStatusMsg"></div>';

      //Check subscription state
      checkSubscription();

      //Attach listener
      document.getElementById("pushStatus").addEventListener('click', function(){
        subUnsubPush();
      });
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }
  else {
    console.log("ServiceWorker not supported :-(");
    document.getElementById('not-status').innerHTML = 'ServiceWorker not supported :-(';
  }  
};
