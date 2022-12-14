// Прокрутка при клике
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick)
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
         
         
         // if (icon.classList.contains('active')) {
         //    menuList.classList.remove('active');
         //    document.body.classList.remove('_lock');
         //    icon.classList.remove('active');
         // }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         
         e.preventDefault();
      }
   }
}

// Появление при скролле

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);

   function animOnScroll () {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if (scrollY > (animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active')            
         }
         //  else {
         //    if (!animItem.classList.contains('_anim-no-hide')) {
         //       animItem.classList.remove('_active')
         //    }
         // }
      }
   }



   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll ();
   }, 300);
}