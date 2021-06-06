document.querySelector('.btn-edit').addEventListener('click', function () { // edit button
    document.querySelector('.box-edit').classList.add('active');
    document.querySelector('.box-edit-area').value = document.querySelector('.first-box').innerHTML;
    document.querySelector('.box-style').classList.remove('active');
})
document.querySelector('.btn-save').addEventListener('click', function () { // save button
    document.querySelector('.box-edit').classList.remove('active');
    document.querySelector('.first-box').innerHTML = document.querySelector('.box-edit-area').value;
})
document.querySelector('.btn-style').addEventListener('click', function () { // style block active
    document.querySelector('.box-style').classList.add('active');
    document.querySelector('.box-edit').classList.remove('active');
})

document.querySelector('.fontSize').addEventListener('click', function (event) { // font size change
    document.querySelector('.first-box').style.fontSize = event.target.value;
})

let select = document.querySelector('.selectopt');
select.addEventListener('click', function () {
    document.querySelector('.first-box').style.fontFamily = this.value;
})

// color and background change start

document.querySelector('.btn-tx-cl').addEventListener('click', function () { // color change
    document.querySelector('.box-of-colors').classList.add('active-flex');
    document.querySelector('.box-of-colors').addEventListener('click', function (event) {
        if (event.target.className == 'box_inner') {
            document.querySelector('.first-box').style.color = getComputedStyle(event.target).backgroundColor;
        }
        document.querySelector('.box-of-colors').classList.remove('active-flex');
    })

})

document.querySelector('.btn-bg-cl').addEventListener('click', function () { // background change
    document.querySelector('.box-of-colors-bg').classList.add('active-flex');
    document.querySelector('.box-of-colors-bg').addEventListener('click', function (event) {
        if (event.target.className == 'box_inner-bg') {
            document.querySelector('.first-box').style.backgroundColor = getComputedStyle(event.target).backgroundColor;
        }
        document.querySelector('.box-of-colors-bg').classList.remove('active-flex');
    })

})

// color and background change end

document.querySelector('.bold-change').addEventListener('click', function (event) { // bold change
    if (event.target.checked) {
        document.querySelector('.first-box').classList.add('bold');
    } else {
        document.querySelector('.first-box').classList.remove('bold');
    }
})

document.querySelector('.italic-change').addEventListener('click', function (event) { // italic change
    if (event.target.checked) {
        document.querySelector('.first-box').classList.add('font-style');
    } else {
        document.querySelector('.first-box').classList.remove('font-style');
    }
})

// btn add (tabble and list) start

let btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', function () {
    document.querySelector('.btn-add-hide').classList.add('none');
    document.querySelector('.create-items-div').classList.remove('none');
})

// btn add (tabble and list) end

// type of create

let listBtn = document.querySelector('.create_list');
let tableBtn = document.querySelector('.create-table');


listBtn.addEventListener('click', function () {
    if (listBtn.checked) {
        document.querySelector('.form_li').classList.remove('none');
        tableBtn.setAttribute('disabled', 'disabled');
    } else {
        document.querySelector('.form_li').classList.add('none');
        tableBtn.removeAttribute('disabled', 'disabled');
    }
})

tableBtn.addEventListener('click', function () {
    if (tableBtn.checked) {
        document.querySelector('.form_table').classList.remove('none');
        listBtn.setAttribute('disabled', 'disabled');
    } else {
        document.querySelector('.form_table').classList.add('none');
        listBtn.removeAttribute('disabled', 'disabled');
    }
})


// type of create end


let formCountLi = document.querySelector('.form_li input');
let formSelect = document.querySelector('.form_li select');
let btnCreate = document.querySelector('.btn-li-create');


btnCreate.addEventListener('click', function () { // create LI btn
    let a = formCountLi.value;
    let b = formSelect.value;
    document.querySelector('.box-edit-area').value += `<ul style="list-style-type: ${b}">`;
    for (let i = 0; i < a; i++) {
        document.querySelector('.box-edit-area').value += `<li>item ${i+1}</li>`;
    }
    document.querySelector('.box-edit-area').value += '</ul>'
    document.querySelector('.btn-add-hide').classList.remove('none');
    document.querySelector('.create-items-div').classList.add('none');
})

// create table btn

let btnTableCreate = document.querySelector('.btn-table-create'); // btn
let one = document.querySelector('.one'); // count of rows 
let two = document.querySelector('.two'); // count of cell
let three = document.querySelector('.three'); // width of cell
let four = document.querySelector('.four'); // height of cell
let widthBd = document.querySelector('.first'); // width of border
let typeBD = document.querySelector('.bd-type'); // type of border
let bdStyle = document.querySelector('.bd-col'); // color of border


btnTableCreate.addEventListener('click', function () {
    document.querySelector('.box-edit-area').value += `<table>`;
    for (let i = 0; i < one.value; i++) {
        document.querySelector('.box-edit-area').value += `<tr>`;
        for (let j = 0; j < two.value; j++) {
            document.querySelector('.box-edit-area').value += `<td style="width: ${three.value}px; height: ${four.value}px; 
            border-width: ${widthBd.value}px; border-style: ${typeBD.value}; border-color: ${bdStyle.value}"></td>`;
        }
        document.querySelector('.box-edit-area').value += `</tr>`;
    }
    document.querySelector('.box-edit-area').value += `</table>`;
    document.querySelector('.btn-add-hide').classList.remove('none');
    document.querySelector('.create-items-div').classList.add('none');
})