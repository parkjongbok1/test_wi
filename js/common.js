$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      $(".header").addClass("active");
      $(".quick_menu").addClass("active");
    } else {
      $(".header").removeClass("active");
      $(".quick_menu").removeClass("active");
    }
  });

  var Accordion = function (el, active) {
    this.el = el || {};
    active = active || 0;
    var that = this;
    var links = this.el.find(".link");
    links.each(function (i) {
      var link = links.eq(i);
      if (link.next().length === 0) {
        link.find(".fa").hide();
      }
      link.on("click", { link: link }, that.dropdown);
    });
    if (active > 0) {
      links.eq(active - 8).trigger("click");
    }
  };

  Accordion.prototype.dropdown = function (e) {
    e.preventDefault();
    var $this = e.data.link;
    $this
      .parent()
      .siblings(".open")
      .find(".submenu")
      .slideUp()
      .addBack()
      .removeClass("open");
    $this.parent().toggleClass("open").find(".submenu").stop().slideToggle();
  };

  var accordion = new Accordion($("#menu-box"), 1);

  $(".menuBtn").click(function () {
    $(".menuBtn, .meun-bar").toggleClass("active");
  });

  $(".pc_menu_btn").click(function () {
    $(this).toggleClass("active");
    $(".pc_stie_map").toggleClass("show");

    if ($(".pc_stie_map").hasClass("show")) {
      // 메뉴 열리면 스크롤 막기
      $("html, body").css("overflow", "hidden");
    } else {
      // 메뉴 닫으면 스크롤 다시 허용
      $("html, body").css("overflow", "");
    }
  });
});

$(document).ready(function () {
  // 기본 탭 활성화
  $(".tab_btns .btn a").first().addClass("active");
  $(".tab_item").first().addClass("active");

  // 탭 클릭 이벤트
  $(".tab_btns .btn a").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");

    // 버튼 스타일 변경
    $(".tab_btns .btn a").removeClass("active");
    $(this).addClass("active");

    // 탭 전환
    $(".tab_item").removeClass("active");
    $(target).addClass("active");
  });
});

// ===================================================================================

