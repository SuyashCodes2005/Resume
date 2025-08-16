$(function () {
  // CV buttons
  $("#cv-link").on("click", function (e) {
    e.preventDefault();
    window.open(
      "https://docs.google.com/document/d/16aRhi6CToGLXMZS4cOZJ_h7MrJjWCmHWVu33RHm7SEM/edit?usp=sharing",
      "_blank"
    );
  });

  $("#cv-download").on("click", function (e) {
    e.preventDefault();
    window.open(
      "https://docs.google.com/document/d/16aRhi6CToGLXMZS4cOZJ_h7MrJjWCmHWVu33RHm7SEM/export?format=pdf",
      "_blank"
    );
  });

  // Lightbox open/close (class-based; no display/fade conflicts)
  const $lb = $("#lightbox");

  $("#profile-pic").on("click", function () {
    $lb.addClass("open");
  });

  $("#close-btn, #lightbox").on("click", function (e) {
    // close only if clicking on backdrop or X
    if (e.target.id === "lightbox" || e.target.id === "close-btn") {
      $lb.removeClass("open");
    }
  });

  // ESC key closes lightbox
  $(document).on("keyup", function (e) {
    if (e.key === "Escape") $lb.removeClass("open");
  });
});
