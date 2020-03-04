new Vue({
  el: "#vue-app",
  data: {
    name: 'Marcello',
    job: 'student',
    age: 31,
    website: 'www.google.com',
    websiteTag: '<a href="www.google.com"></a>'
  },
  methods: {
    add: function(inc) {
      this.age += inc
    },
    subtract: function(dec) {
      this.age -= dec
    }
  }
});