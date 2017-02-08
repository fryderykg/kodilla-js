// Simple multiplication table

function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function(result) {
        // var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function() {
           alert('Multiply result is: ' + result);
        });
        $('body').append(this.$element);
    }
};

for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        var btn = new Button(i.toString() + ' * ' + j.toString());
        btn.create(i * j);
    }
    $('body').append('<br>');
}
