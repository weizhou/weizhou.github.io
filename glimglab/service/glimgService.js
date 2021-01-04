class GLImgService {
  constructor() {
    if(localStorage.getItem('imgs')){
      this._imgs = JSON.parse(localStorage.getItem('imgs'));
    }else {
      this._imgs = [];
    }
    this._maxImgs = 3;
    this._subscribers = [];
  }

  subscribe(sub) {
    this._subscribers.push(sub);
  }

  addImg(img) {
    if(this._imgs.length >= this._maxImgs) {
      this._imgs.splice(-1,1);
    }
    this._imgs.forEach(el => el.active = false);
    let imgItem = {id: Math.random().toString(16).substring(2), img: img.src, width: img.width, height: img.height, filters: [], active: true};
    this._imgs.unshift(imgItem);
    this.notifySubs();
  }

  addFilter(filter) {
    this._imgs.forEach(el => {
      if (el.active) {
        el.filters.push(filter);
      }
    });
    this.notifySubs();
  }

  setActiveImg(id) {
    this._imgs.forEach(el => {
      if (el.id === id){
        el.active = true;
      }else {
        el.active = false;
      }
    })
    this.notifySubs();
  }

  getImgs() {
    return this._imgs;
  }

  notifySubs() {
    this._subscribers.forEach(sub => sub.update(this._imgs));
  }
}

const glimgService = new GLImgService();