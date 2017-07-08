var Carousel = {
  $el: $('#video-carousel'),
  pause: function() {
    this.$el.carousel('pause');
  },
  cycle: function() {
    this.$el.carousel('cycle');
  },
  bindEvents: function() {
    $('.carousel-item').on('mouseenter', this.pause.bind(this));
    $('.carousel-control').on('click', this.cycle.bind(this));
  },
  init: function() {
    this.bindEvents();
    this.$el.carousel();
  }
}
