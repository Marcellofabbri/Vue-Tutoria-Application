new Vue({
  el: "#vue-app",
  data: {
    name: 'Marcello',
    job: 'student'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', '
    }
  }
});