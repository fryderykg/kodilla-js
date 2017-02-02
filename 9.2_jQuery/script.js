// W podanym na kodilli przykładzie jest jedna niespójność, gdyż
// kolorując span'y za pomocą sprawdzenia (if % 2 == 0) daje nam
// inne elementy niż gdy zastosujemy (span:odd)
// wybrałem wersję z if'em i kolorowaniem po indeksach.


$(document).ready(function() {
    var span = $('span'),
        paragraph = $('p');

    span.each(function(index, element) {
        if (index % 2 === 0) {
            $(element).css('color', 'red');
        }
    });

    paragraph.each(function(index, element) {
        var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
        $(element).append(button);
    });

    $('button').click(function() {
        alert($(this).attr("data-tmp"));
    });
});