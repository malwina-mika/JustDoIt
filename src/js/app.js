import {select, classNames} from './settings.js';

const app = {

  init: function () {
    const thisApp = this;

    thisApp.initPages();
    thisApp.initActions();

  },

  initPages: function() {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    console.log('pages', thisApp.pages);

    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    console.log('navlinks', thisApp.navLinks);

    const idFromHash = window.location.hash.replace('#/', '');
    console.log('idFromHash', idFromHash);

    let pageMatchingHash = thisApp.pages[0].id;
    console.log('pageMatchingHash', pageMatchingHash);

    for(let page of thisApp.pages){
      console.log('page', page);
      if(page.id === idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }


    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){

      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = `#/${id}`;

        document.querySelector('.navlinks').classList.remove('show');
        document.querySelector('.avatar-wrapper').classList.remove('show');
        document.querySelector('.top-side').classList.remove('display')
      });
    }

  },

  activatePage: function(pageId) {
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(classNames.nav.active, link.getAttribute('href') == `#${pageId}`);
    }

  },

  initActions() {
    /* HAMBURGER */

    function toggleMenu(visible) {
      document.querySelector('.navlinks').classList.toggle('show', visible);
      document.querySelector('.avatar-wrapper').classList.toggle('show', visible);

    }

    function toggleTopBar(visible) {
        document.querySelector('.top-side').classList.toggle('display', visible);
    }

    document.querySelector('.hamburger').addEventListener('click', function(e) {
      e.preventDefault();

      toggleMenu();

      console.log("clicked!");
    });

    document.querySelector('.hamburger').addEventListener('click', function(e) {
      e.preventDefault();

      toggleTopBar();

    });


    /* MODAL */

    function closeModal() {
      document.getElementById('overlay').classList.remove('show')
    };

    document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault()
        closeModal()
      })
    });

    document.querySelector('#overlay').addEventListener('click', function(e) {
      if(e.target === this) {
        closeModal()
      }
    });

    document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
        closeModal()
      }
    });

    function openModal(modal) {
      document.querySelectorAll('#overlay > *').forEach(function(modal) {
        modal.classList.remove('show')
      })
      document.querySelector('#overlay').classList.add('show')
      document.querySelector(modal).classList.add('show')
    };


    document.querySelector('.exit').addEventListener('click', function(e) {
      e.preventDefault();

      openModal('#myModal');
    });

    document.querySelector('.notifications').addEventListener('click', function(e) {
      e.preventDefault();

      openModal('#notificationsModal');
    });

    document.querySelector('.avatar-wrapper').addEventListener('click', function(e) {
      e.preventDefault();

      openModal('#messageModal');
    });

    document.querySelector('.login').addEventListener('click', function(e) {
      e.preventDefault();

      openModal('#loginModal');
    });


  },

};

app.init();
