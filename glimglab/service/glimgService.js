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
    let imgItem = {id: Math.random().toString(16).substring(2), img: img.src, width: img.width, height: img.height, filters: [], selectedFilter: -1, active: true};
    this._imgs.unshift(imgItem);
    this.notifySubs("img");
  }

  addFilter(filter) {
    this._imgs.filter(img => img.active).map(img => img.filters.push({"name": filter}));
    this.notifySubs("filterAdded");
  }

  removeFilter(index) {
    this._imgs.filter(img => img.active).map(img => {
      img.filters.splice(index,1);
      img.selectedFilter = -1;
    });
    this.notifySubs("filterRemoved");
  }

  selectFilter(index) {
    this._imgs.filter(img => img.active).map(img => img.selectedFilter = index);
    this.notifySubs("filterSelected");
  }

  updateFilter(filterConfig) {
    this._imgs.filter(img => img.active).map(img => {
      Object.keys(filterConfig).forEach(propKey => img.filters[img.selectedFilter][propKey] = JSON.parse(filterConfig[propKey]));
    });
    this.notifySubs("filterUpdated");
  }

  setActiveImg(id) {
    this._imgs.forEach(el => {
      if (el.id === id){
        el.active = true;
      }else {
        el.active = false;
      }
    })
    this.notifySubs("img");
  }

  getImgs() {
    return this._imgs;
  }

  notifySubs(event) {
    this._subscribers.forEach(sub => sub.update(event, this._imgs));
  }
}

const glimgService = new GLImgService();