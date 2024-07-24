
$(document).ready( async() =>{
    const res = await fetch('http://localhost:3001'); // get data from server
    const data = await res.json();

    // Setup - add a text input to each footer cell
    $('tfoot  #tr  th').each(function (i) { // This selector loop through each th element and replace with input 
        var title = $('#tfoot  #tr  th')
            .eq($(this).index())
            .text();
        $(this).html(
            '<input id="filter-input"  type="text" placeholder="' + title + '" data-index="' + i + '" />'
        );
    });
    let table = $('#table').DataTable({
        columns: [ //titles
            {data: "name", title: "Name" },
            {data: "oscar", title: "Oscar" },
            {data: "genre", title: "Genre" },
            {data: "released_year", title: "Release" },
            {data: "duration", title: "Duration" },
            {data: "stars", title: "Stars" },
            {data: "directors", title: "Directors" },
        ],
        scrollY: '600px',
        scrollX: true,
        scrollCollapse: true,
        fixedColumns: true,
        data: data, // data
    });

    // Setup - add a text input to each footer cell
    $(table.table().container()).on('keyup', 'tfoot input', function () { // this selector search data in the column
        table
            .column($(this).data('index'))
            .search(this.value)
            .draw();
    });

    // adding year to footer

    const year = new Date().getFullYear();
    $("#year").append(year)

}
)   