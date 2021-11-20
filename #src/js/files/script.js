window.onload = function () {
  // прослуш клик на всём документе
  document.addEventListener("click", documentActions);

  // Actions (делегирование события click)
  function documentActions(e) {
    // нажатый объ(+ события)
    const targetElement = e.target;
    
    // кнп-стрелка откр подменю при клик для TOUCH sreen
    // для экранов > 768 И мобил(functions.js(fns.js))
    if (window.innerWidth > 768 && isMobile.any()) {
      // просеивает по кнп-стрелки
      if (targetElement.classList.contains("menu__arrow")) {
        // обращ к родителю с .menu__item и переключаем ._hover
        targetElement.closest(".menu__item").classList.toggle("_hover");
      }
      // закр подменю при клик в др месте
      // у нажатого объ нет родителя .menu__item И объ с .menu__item с ._hover
      if (
        !targetElement.closest(".menu__item") &&
        document.querySelectorAll(".menu__item._hover").length > 0
      ) {
        // удалем _hover, передав в fn(fns.js) коллекцию объ
        _removeClasses(
          document.querySelectorAll(".menu__item._hover"),
          "_hover"
        );
      }
    }

    // поиск - при клик на .search-form__icon(кнп-поиск TOUCH) переключ у .search-form ._active и убирает при клик в др месте
    if (targetElement.classList.contains("search-form__icon")) {
      document.querySelector(".search-form").classList.toggle("_active");
    } else if (
      !targetElement.closest(".search-form") &&
      document.querySelector(".search-form._active")
    ) {
      document.querySelector(".search-form").classList.remove("_active");
    }

    // if (targetElement.classList.contains("products__more")) {
    //   getProducts(targetElement);
    //   e.preventDefault();
    // }
    // if (targetElement.classList.contains("actions-product__button")) {
    //   const productId = targetElement.closest(".item-product").dataset.pid;
    //   addToCart(targetElement, productId);
    //   e.preventDefault();
    // }

  //   if (
  //     targetElement.classList.contains("cart-header__icon") ||
  //     targetElement.closest(".cart-header__icon")
  //   ) {
  //     if (document.querySelector(".cart-list").children.length > 0) {
  //       document.querySelector(".cart-header").classList.toggle("_active");
  //     }
  //     e.preventDefault();
  //   } else if (
  //     !targetElement.closest(".cart-header") &&
  //     !targetElement.classList.contains("actions-product__button")
  //   ) {
  //     document.querySelector(".cart-header").classList.remove("_active");
  //   }

  //   if (targetElement.classList.contains("cart-list__delete")) {
  //     const productId =
  //       targetElement.closest(".cart-list__item").dataset.cartPid;
  //     updateCart(targetElement, productId, false);
  //     e.preventDefault();
  //   }
  }
};
