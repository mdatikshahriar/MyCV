$(document).ready(() => {
    $('#weather').hide();
    $('#hideable-experience').hide();
    $('#hideable-skills').hide();
    $('#hideable-projects').hide();
    $('#hideable-project1').hide();
    $('#hideable-project2').hide();
    $('#hideable-project3').hide();
    $('#hideable-project4').hide();
    $('#hideable-project5').hide();
    $('#hideable-problem').hide();
    $('#hideable-education').hide();
    $('#hideable-thesis').hide();
    $('#hideable-publications').hide();

    $('#show-weather').on('click', () => {
        $('#weather').toggle(500);
    });
    $('#hide-weather').on('click', () => {
        $('#weather').toggle(500);
    })

    $('#expandable-experience').on('click', () => {
        $('#expandable-experience #down').toggle(500);
        $('#expandable-experience #up').toggle(500);
        $('#hideable-experience').toggle(500);
    });

    $('#expandable-skills').on('click', () => {
        $('#expandable-skills #down').toggle(500);
        $('#expandable-skills #up').toggle(500);
        $('#hideable-skills').toggle(500);
    });

    $('#expandable-projects').on('click', () => {
        $('#expandable-projects #down').toggle(500);
        $('#expandable-projects #up').toggle(500);
        $('#hideable-projects').toggle(500);
    });
    $('#expandable-project1').on('click', () => {
        $('#expandable-project1 #down').toggle(500);
        $('#expandable-project1 #up').toggle(500);
        $('#hideable-project1').toggle(500);
    });
    $('#expandable-project2').on('click', () => {
        $('#expandable-project2 #down').toggle(500);
        $('#expandable-project2 #up').toggle(500);
        $('#hideable-project2').toggle(500);
    });
    $('#expandable-project3').on('click', () => {
        $('#expandable-project3 #down').toggle(500);
        $('#expandable-project3 #up').toggle(500);
        $('#hideable-project3').toggle(500);
    });
    $('#expandable-project4').on('click', () => {
        $('#expandable-project4 #down').toggle(500);
        $('#expandable-project4 #up').toggle(500);
        $('#hideable-project4').toggle(500);
    });
    $('#expandable-project5').on('click', () => {
        $('#expandable-project5 #down').toggle(500);
        $('#expandable-project5 #up').toggle(500);
        $('#hideable-project5').toggle(500);
    });

    $('#expandable-problem').on('click', () => {
        $('#expandable-problem #down').toggle(500);
        $('#expandable-problem #up').toggle(500);
        $('#hideable-problem').toggle(500);
    });

    $('#expandable-education').on('click', () => {
        $('#expandable-education #down').toggle(500);
        $('#expandable-education #up').toggle(500);
        $('#hideable-education').toggle(500);
    });

    $('#expandable-thesis').on('click', () => {
        $('#expandable-thesis #down').toggle(500);
        $('#expandable-thesis #up').toggle(500);
        $('#hideable-thesis').toggle(500);
    });

    $('#expandable-publications').on('click', () => {
        $('#expandable-publications #down').toggle(500);
        $('#expandable-publications #up').toggle(500);
        $('#hideable-publications').toggle(500);
    });
});