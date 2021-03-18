// constant variables - data that never changes
const BASE_URL = 'https://api.spacexdata.com/v3/launches';
// state variables - data that changes
let launches;
// cached element references - parts of the dom we need to touch
const $launches = $('#launches');
// event listeners - capture and respond to events i.e. user clicks on something
$launches.on('click', '.card',handleShowModal);
// functions - code that represents actions taken/carried out
init();
function init() {
    getData();
}


function handleShowModal() {
     const flightId = parseInt(this.dataset.flightNumber);

    // console.log(this.dataset.flightNumber);

     const selectedLaunch = launches.find(function(launch) {
        return launch.flight_number === flightId;
    });
    console.log(selectedLaunch);

    //add the content to the modal
    $('#patch').attr({
        src: selectedLaunch.links.mission_patch_small,
        alt: selectedLaunch.mission_name
    });

    $('#title').text(selectedLaunch.mission_name);

    $('#year').text(`Year of Launch: ${selectedLaunch.launch_year}`);

    $('#details').text(selectedLaunch.details.slice(0, 240));

    $('.modal').modal();
}

function getData() {
    $.ajax(BASE_URL + "?limit=12")
        .then(function (data) {
            launches = data;
            render();
        }, function (error) {
            console.log(error);
        });
}
function render() {
    const html = launches.map(function(launch) {
        return `
            <article  data-flight-number="${launch.flight_number}" class="card">
                <h1>${launch.mission_name}</h1>
                <p>${launch.launch_year}</p>
            </article>
        `;
    });
    $launches.append(html);
}











