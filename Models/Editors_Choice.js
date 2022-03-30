"use strict";

class Editors_Choice {
    constructor(restaurant_id, editorschoice_id) {
        
        this.editorschoice_id = editorschoice_id;
        this.restaurant_id = restaurant_id;
    }

    getEditorschoiceId() {
        return this.editorschoice_id;
    }

    getRestaurantId() {
        return this.restaurant_id;
    }
}

module.exports = Editors_Choice;