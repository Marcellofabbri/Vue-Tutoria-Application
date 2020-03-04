new Vue({
  el: "#vue-app",
  data: {
    name: 'Marcello',
    job: 'student',
    website: 'www.google.com',
    websiteTag: '<a href="www.google.com"></a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name
    }
  }
});