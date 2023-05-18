

function showImage(element) {
  //element.style.display = 'none';
  const imgBox = document.createElement('div');
  imgBox.style.position = 'fixed';
  imgBox.style.top = '0';
  imgBox.style.left = '0';
  imgBox.style.width = '100%';
  imgBox.style.height = '100%';
  imgBox.style['z-index'] = '3000';
  imgBox.style['background-color'] = 'rgba(0, 0, 0, 0.9)';
  imgBox.style.cursor = 'pointer';

  const pic = document.createElement('img');
  pic.setAttribute('src', element.getAttribute('src'));
  pic.style.maxWidth = '80%';
  pic.style.maxHeight = '80%';
  pic.style.position = 'absolute';
  pic.style.top = 0;
  pic.style.left = 0;
  pic.style.bottom = 0;
  pic.style.right = 0;
  pic.style.margin = 'auto';

  imgBox.setAttribute('onclick', 'closeImage(this)');

  document.body.appendChild(imgBox);
  imgBox.appendChild(pic);
}

function closeImage(element) {
  element.remove();
}
