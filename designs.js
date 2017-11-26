// Select color input


// Select size input

$('#sizePicker').on('submit',function(e){
    e.preventDefault();
    const grid_width = $("#input_width").val(); // no of column
    const grid_height = $("#input_height").val(); // no of row
    $("#pixel_canvas").html("");// erase grid
    makeGrid(grid_height, grid_width); // Called makeGrid function
});

$('#pixel_canvas').on('click', 'tr td', function() {
    var color = $("#colorPicker").val();
    $(this).css('background-color', color);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(m,n) { // row, column

// Your code goes here!
    var table_grid = "";
    while(m>0){
        table_grid += "<tr>";
        for(var i = 0; i < n; i++){
            table_grid += "<td></td>";
        }
        table_grid += "</tr>";
        m--;
    }
    $('#pixel_canvas').append(table_grid);
}