$("#go-to-slide2").on("click", function() {
    var slideId = $(this).data("slide-id");
    var targetSlide = $("#" + slideId);
    var targetIndex = targetSlide.index();

    if (targetIndex !== -1) {
      currentSlide = targetIndex;
      slide.css("transform", `translateX(-${currentSlide * itemWidth}px)`);
    }
  });


