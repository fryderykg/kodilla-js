/**
 * Created by frycek on 15.02.17.
 */
// KLASA KANBAN CARD
function Card(id, name) {
    var self = this;

    this.id = id;
    this.name = name;
    this.element = createCard();

    function createCard() {
        var card = $('<li class="card"></li>');
        var cardDeleteBtn = $('<button class="btn-delete">x</button>');
        var cardDescription = $('<p class="card-description"></p>');

        cardDeleteBtn.click(function(){
            self.removeCard();
        });

        card.append(cardDeleteBtn);
        cardDescription.text(self.name);
        card.append(cardDescription);
        return card;
    }
}
Card.prototype = {
    removeCard: function() {
        var self = this;
        $.ajax({
            url: baseUrl + '/card/' + self.id,
            method: 'DELETE',
            success: function(){
                self.element.remove();
            }
        });
    }
};