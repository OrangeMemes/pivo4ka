$(document).ready(function () {
    console.log("Hello world")

    $("#place-edit").on('click', editPlace);
    $("#add-user").on('click', openAdd);
    $("#save-user").on('click', saveAdd);

})

function editPlace() {

    let ttext = $(".place-info div").text();

    let text_edit = $("<textarea>", {
        class: "korona-edit edit-palce-info",
        text: ttext,
    });

    $(".place-info").append(text_edit);
    $(".place-info div").remove();


    $(".place-info").append(text_edit);
    let btn_ready = $("<div>", {
        class: "form-btn",
        text: "Сохранить",
        click: savePlace,
    });
    $(".place-info").append(btn_ready);
   // btn_ready.on("click", savePlace);
    $("#place-edit").css("visibility", "hidden");
    // $(".place-info").append(text_edit);

}

function savePlace() {

    let text = $(".korona-edit.edit-palce-info").val();

    let div = $("<div>", {
        class: "place-info-info",
        text: text,
    }).appendTo($(".place-info"));
    $("#place-edit").css("visibility", "visible");

    $(".edit-palce-info").remove();
    $(this).remove()

}

function openAdd() {

    $(".adding").css('display', 'inherit');
    $(".employees-list").css('display', 'none');
    $(this).css('display','none');

    // $("#tel-num").mask("+7(999) 999 99 99", {placeholder: "+7(___) ___ __ __"});

}

function saveAdd() {
    $(".adding").css('display', 'none');
    $(".employees-list").css('display', 'inherit');
    $("#add-user").css('display', 'inherit');
}