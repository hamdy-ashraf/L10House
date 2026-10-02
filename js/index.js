let data = [];
(async function () {
  let res = await fetch("https://semicode.tech/api/v1/l10nhouse/services");
  data = await res.json();

  let i = 0;

  for (let service of data) {
    $("#Services .row").append(`
            <div class="col-md-6">
                <div class="item h-100 p-4 mx-5 text-center rounded-5">
                  <div class="image">
                    <img src="./L10_images/${service.icon}" class="img-fluid" alt="" />
                  </div>
                  <h4 class="my-4 py-2 text-black fw-bold">
                    ${service.title}
                  </h4>
                  <p class="px-3 lh-base">
                  ${replaceString(service.description.slice(0, 160))}...
                    
                    <span class="fw-bold firstColor readMore" onclick="showData(${i})">Read More</span>
                  </p>
                </div>
              </div>
            `);

    i++;
  }
})();

$(".popup .box").click(function (e) {
  e.stopPropagation();
});

$(window).scroll(function () {
  $("nav.navbar").toggleClass("scrolled", window.scrollY >= 10);
});

(async function () {
  let res = await fetch("https://semicode.tech/api/v1/l10nhouse/sectors"),
    data = await res.json();

  for (let item of data) {
    $(".sectorsPopup .part").append(
      `
        <div class="col-lg-3 px-3">
            <div class="item py-4 px-3">
            <div class="image">
                <img
                src="./L10_images/sec/${item.icon}"
                class="img-fluid"
                alt=""
                />
            </div>
            <p class="mb-0 text-center py-1">
                ${item.name}
            </p>
            </div>
        </div>
        `,
    );
  }
})();

(async function () {
  let res = await fetch("https://semicode.tech/api/v1/l10nhouse/languages"),
    data = await res.json();

  prepareSectionsInLanguages(data);
  console.log(data);
  console.log(data[0]);
})();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 5,
    loop: true,
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },

      650: {
        items: 2,
      },

      1050: {
        items: 3,
      },

      1250: {
        items: 5,
      },
    },
  });
});
