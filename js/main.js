const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        y = e.clientX - rect.left,
        x = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for(const card of document.querySelectorAll(".skills__listitem")){
    card.onmousemove = e => handleOnMouseMove(e);
}







var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.10em solid #CCBBED}";
  document.body.appendChild(css);
};

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');
document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});
document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursorinner.style.left = x + 'px';
cursorinner.style.top = y + 'px';
});
document.addEventListener('mousedown', function(){
cursor.classList.add('click');
cursorinner.classList.add('cursorinnerhover')
});
document.addEventListener('mouseup', function(){
cursor.classList.remove('click')
cursorinner.classList.remove('cursorinnerhover')
});
a.forEach(item => {
item.addEventListener('mouseover', () => {
cursor.classList.add('hover');
});
item.addEventListener('mouseleave', () => {
cursor.classList.remove('hover');
});
})


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff, 1 );
camera.position.setZ(30);

renderer.render( scene, camera );

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20, 20, 20)


const ambient = new THREE.AmbientLight(0xffffff)

scene.add(pointLight, ambient)


const geometry = new THREE.TorusGeometry(10, 5, 100, 100);
const material = new THREE.MeshLambertMaterial( { color: 0x8479e7   } );

const torus = new THREE.Mesh( geometry, material );

torus.rotation.x += 3.9;
torus.rotation.y += 9.2;

torus.position.x += 40;
torus.position.y += 10;

const geometry2 = new THREE.TorusGeometry(10, 4, 100, 100);
const material2 = new THREE.MeshLambertMaterial( { color: 0x8479e7   } );

const torus2 = new THREE.Mesh( geometry2, material2 );

torus2.rotation.x += 3.5;
torus2.rotation.y += 4.3;

torus2.position.x += -30;
torus2.position.y += -2;

scene.add(torus, torus2)



let isMovingUp = true;
const maxHeight = 0.5; 

function animate() {
  requestAnimationFrame(animate);

  if (isMovingUp) {
    torus2.position.y += 0.005;
  } else {
    torus2.position.y -= 0.005; 
  }

  if (torus2.position.y >= maxHeight) {
    isMovingUp = false;
  } else if (torus2.position.y <= 0) {
    isMovingUp = true;
  }



  renderer.render(scene, camera);
}

animate();




function resizeRenderer() {
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  
    renderer.setSize(width, height);
  
    const distance = camera.position.z;
    const vFOV = (camera.fov * Math.PI) / 180;
    const heightHalf = Math.tan(vFOV / 2) * distance;
    const widthHalf = heightHalf * camera.aspect;
  
    camera.left = -widthHalf;
    camera.right = widthHalf;
    camera.top = heightHalf;
    camera.bottom = -heightHalf;
  
    const torusScaleFactor = Math.min(width, height) / 350;
    const torusPositionFactor = Math.min(width, height) / 24;
  
    torus.scale.set(torusScaleFactor, torusScaleFactor, torusScaleFactor);
    torus2.scale.set(torusScaleFactor, torusScaleFactor, torusScaleFactor);
  
    torus.position.x = torusPositionFactor;
    torus2.position.x = -torusPositionFactor;
    torus2.position.y = torusPositionFactor / 2;
  
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }
  
  window.addEventListener('resize', resizeRenderer);
  
  

  

  
  const button = document.getElementById("js--menu");
  const navigation = document.getElementById("js--nav");
  const lang = document.getElementById("js--lang");

  
  let isOpen = false;
  navigation.style.display = "none";
  lang.style.display = "none";

  
  
  button.onclick = function() {
    if(isOpen){
      navigation.style.display = "block";
      lang.style.display = "block";
      isOpen = false;
    }
    else{
      navigation.style.display = "none";
      lang.style.display = "none";
      isOpen = true;
    }
  }
  
  
document.addEventListener('DOMContentLoaded', function() {
  const sidenav = document.getElementById("sidenav");
  const featured = document.getElementById("featured");

     function calculateOverlapPercentage(rect1, rect2) {
        const overlapX = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
        const overlapY = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));

        const areaOfRect1 = (rect1.right - rect1.left) * (rect1.bottom - rect1.top);

        return (overlapX * overlapY) / areaOfRect1 * 100;
    }

  function checkOverlap(){
    const rect1 = sidenav.getBoundingClientRect();
    const rect2 = featured.getBoundingClientRect();

    const overlapPercentage = calculateOverlapPercentage(rect1, rect2);

    if (overlapPercentage >= 50) {
        sidenav.classList.add('touched');
    } else {
        sidenav.classList.remove('touched');
    }
  };
  checkOverlap();
  window.addEventListener('scroll', checkOverlap);
});


document.addEventListener("DOMContentLoaded", async function () {
  const sliders = document.querySelectorAll(".projects__fill");
  const image = document.getElementById("image");
  const video = document.getElementById("video");

  const images = ["ocr-preview.png", "img/ocr.png", "img/reimagine.png", "img/lang2.png"];
  let currentIndex = 0;

  function updateSlider(index) {
      const currentSlider = sliders[index];
      currentSlider.style.width = "0%";
      currentSlider.style.animation = "fill 6s linear forwards";

      return new Promise((resolve) => {
          setTimeout(() => {
              currentSlider.style.animation = "";
              resolve();
          }, 6000);
      });
  }

  while (true) {
      await updateSlider(currentIndex);
      currentIndex++;
      if (currentIndex >= sliders.length) {
          currentIndex = 0;
      }

      if (currentIndex === 0) {
          video.style.display = "block";
          image.style.display = "none";
      } else {
          video.style.display = "none";
          image.style.display = "block";
          image.src = images[currentIndex];
      }
  }
});

if (typeof toggleSidebar !== 'function') {
  function toggleSidebar() {
      const pnElement = document.querySelector('.pn');
      const ulElement = document.getElementById('sidenav');

      let isOpen = false;

      pnElement.addEventListener('click', function () {
          if (isOpen) {
              ulElement.style.marginLeft = '3rem';
              pnElement.textContent = '<';
          } else {
              ulElement.style.marginLeft = '-6.2rem';
              pnElement.textContent = '>';
          }
          isOpen = !isOpen;
      });
  }

  toggleSidebar();
}


document.addEventListener('DOMContentLoaded', function () {
  const articles = document.querySelectorAll('[data-article]');
  articles.forEach(article => {
    const modalId = article.getAttribute('data-modal');
    article.addEventListener('click', () => {
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
      document.documentElement.style.overflow = 'hidden';
    });
  });

  const modals = document.querySelectorAll('.projects__modal');
  const closeButtons = document.querySelectorAll('.projects__modal--arrow');
  modals.forEach(modal => {
    closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', (event) => {
        modal.style.display = 'none';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.overflowX = 'hidden';
      });
   
    });
  });
});



var wrappers = document.querySelectorAll(".projects__wrapper2");

wrappers.forEach(function(wrapper) {
  var wrapping = wrapper.querySelector(".projects__wrapping");
  var plus = wrapping.querySelector(".projects__plus");
  var panel = wrapper.querySelector(".projects__panel");
  var isClicked = false;

  wrapping.addEventListener("click", function() {
    panel.classList.toggle("active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    if (isClicked) {
      plus.textContent = "+";
    } else {
      plus.textContent = "-";
    }
    isClicked = !isClicked; 
  });
});

document.cookie = "CONSENT=value; SameSite=None; Secure";

let isTranslated = false;

function initializeTranslation() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'nl',
        autoDisplay: false
    }, 'google_translate_element');
    isTranslated = true;
}

function toggleTranslation() {
    if (isTranslated) {
        location.reload();
    } else {
        initializeTranslation();
    }
}

document.getElementById('translateButton').addEventListener('click', toggleTranslation);
document.getElementById('translateButton--mobile').addEventListener('click', toggleTranslation);



