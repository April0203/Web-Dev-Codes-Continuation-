// Event Bubbling

// document.querySelector('.card-action').addEventListener('click', function() {
//     console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click', function() {
//     console.log('card-content');
// });
// document.querySelector('.card').addEventListener('click', function() {
//     console.log('card');
// });

// document.querySelector('col').addEventListener('click', function() {
//     console.log('col');
// });
// Event Deligation

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // console.log(e.target);
    // if (e.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('delete item');
    // }

    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log(deleteItem);
        e.target.parentElement.parentElement.remove();
    }
}