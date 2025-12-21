addEventListener("load", () => {

    imgs = document.images;

    images = document.getElementsByTagName('img');

    console.log(imgs);
    console.log(images);

    let dropList1 = document.getElementById('city').options;
    console.log(dropList1);

    let dropList2 = document.querySelector('#city').options;
    console.log(dropList2);

    let dropList3 = document.getElementsByTagName("select")[0].options;
    console.log(dropList3);

    let dropList4 = document.querySelectorAll("#city option");
    console.log(dropList4);

    let table = document.document.getElementsByTagName("table")[1];
    let rows = table.querySelectorAll('tr');
    console.log(rows);

    let elems = document.querySelectorAll('#fontBlue');
    console.log(elems)


})
