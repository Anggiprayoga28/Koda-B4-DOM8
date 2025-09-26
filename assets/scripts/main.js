require.config({
  baseUrl: ".", 
  paths: {
    jquery: "https://code.jquery.com/jquery-3.7.1.min",
    axios: "https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.0/axios.min",
    app: "assets/scripts/app"   
  }
});

require(["app"], function(app) {
  app.init();
});
