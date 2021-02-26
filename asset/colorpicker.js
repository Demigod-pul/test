$(document).ready(function () {
    // $('.box-area li').css({
    //     background: localStorage.getItem('color')
    // });
    $('.colorpicker').css({
        background: localStorage.getItem('color')
    });
    $(".search-box input[type='text']").css({
        'box-shadow': '1px 1px 5px ' + localStorage.getItem('colorSearch')
    });
});

function update(picker) {
    localStorage.setItem(
        'color',
        'rgba(' +
        Math.round(picker.rgb[0]) +
        ', ' +
        Math.round(picker.rgb[1]) +
        ', ' +
        Math.round(picker.rgb[2]) +
        ', 0.5)'
    );
    localStorage.setItem('colorSearch', picker.toRGBString());
    $('.box-area li').css({
        background: localStorage.getItem('color')
    });
    $('.colorpicker').css({
        background: localStorage.getItem('color')
    });
    $(".search-box input[type='text']").css({
        'box-shadow': '1px 1px 5px ' + localStorage.getItem('colorSearch')
    });
}