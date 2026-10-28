function replaceString(string) {
  let regex = /L10N House/gim;
  return string.replaceAll(
    regex,
    `<span class="fw-bold firstColor">L10N</span>
     <span class="fw-bold secondColor">House</span>`,
  );
}

function openPopup(popupName) {
  $("body").css("overflow-y", "hidden");
  $(`.popup[data-popup-name=${popupName}]`).fadeIn(1000, function () {
    $(`.popup[data-popup-name=languages] .box`).css({
      transform: "translateX(0%)",
    });
  });
}

function closePopup() {
  $("body").css("overflow-y", "auto");

  $(`.popup[data-popup-name=languages] .box`).css({
    transform: "translateX(100%)",
  });

  $(`.popup`).delay(1000).fadeOut(1000);
}

function moveActive() {
  let currentActive = document.querySelectorAll(".nav-link");
}

function preparePoints(points) {
  let pointEle = ``;

  for (let point of points) {
    pointEle += `
        <li>${point}</li>
        `;
  }

  return pointEle;
}

function prepareSectionsInServices(sections) {
  let sectionEle = ``,
    i = 0;

  for (let section of sections) {
    sectionEle += `
        <section class="p-0 ${i != 0 ? "mt-5" : ""}">
            <h5 class="text-black fw-bold">
            ${section.title}
            </h5>
            <ol type="1">
            ${preparePoints(section.points)}
            </ol>
        </section>
        `;

    i++;
  }

  return sectionEle;
}

function showData(serviceindex) {
  let popupData = data[serviceindex];

  $(".popup[data-popup-name='services'] .box").html(`
        <div class="head">
            <h6 class="text-center text-black fw-bold fs-2">Services</h6>
            <hr class="text-black" />
        </div>
        <div class="body">
            <h2 class="secondColor fw-bold fs-1 mt-4 mb-5 text-center">
            ${popupData.title}
            </h2>
            <div class="content part1 mb-5">
            <div class="row">
                <div class="col-lg-6 box1">
                <div class="item">
                    <p>
                    ${popupData.description}
                    </p>
                </div>
                </div>
                <div class="col-lg-6 box2">
                <div class="item rounded-4 overflow-hidden">
                    <img src="./L10_images/${popupData.img}" class="img-fluid" alt="" />
                </div>
                </div>
            </div>
            </div>
            <div class="part2">${prepareSectionsInServices(popupData.sections)}</div>
        </div>
            <i
              class="fas fa-times position-absolute text-black"
              onclick="closePopup('services')"
            ></i>
        `);

  openPopup("services");
}

function prepareLanguages(languages) {
  let lis = ``;

  for (let language of languages) {
    lis += `<li><i class="far fa-dot-circle"></i> ${language}</li>`;
  }

  return lis;
}

function prepareSectionsInLanguages(sections) {
  for (let section of sections) {
    $(".languagesPopup .box").append(
      `
    <section>
        <h3>${section.continent}</h3>
        <ul class="list-unstyled">
            ${prepareLanguages(section.languages)}
        </ul>
    </section>
    `,
    );
  }
}

function updateNavLink(sectionId) {
  let section = document.querySelector(`#${sectionId}`),
    sectionTop = section.offsetTop,
    sectionHeight = section.clientHeight,
    sectionBottom = sectionTop + sectionHeight;

  if (window.scrollY > sectionTop - (navBar.clientHeight + 100) && window.scrollY < sectionBottom) {
    let sectionId = section.getAttribute("id"),
      currentNavLink = document.querySelector(".nav-link.active"),
      navLinkOfSection = document.querySelector(`a[href="#${sectionId}"]`);
    currentNavLink.classList.remove("active");
    navLinkOfSection.classList.add("active");
  }
}
