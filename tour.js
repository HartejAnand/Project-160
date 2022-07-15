AFRAME.registerComponent("tour", {
    schema: {
      state: {type: "string", default: "places-list"},
    },
    init: function () {
      this.placesContainer = this.el;   
    },
    tick: function(){
      const {state} = this.el.getAttribute("tour");
      if(state==="view"){
        this.hideEl([this.placesContainer]);
        this.showView();
      }
    },
    
    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "circle",
          radius: 9,
        });
        entityEl.setAttribute("material", { src: item.url });
    
        return entityEl;
      },
      
    hideEl: function(elList) {
      elList.map(el => {
        el.setAttribute("visible", false);
      });
    },

    showView: function() {
      const {selectedCard} = this.data;
      const skyEl = document.querySelector("#main-container");
      skyEl.setAttribute("material", {
        src: 'room.jpg',
        color: "white"
      })
    },

    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
  });