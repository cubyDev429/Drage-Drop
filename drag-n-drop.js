const dragStart = event => {
    event.currentTarget.classList.add('dragging');
};
const drag = event => {
    event.dataTransfer.setData('text/html', event.currentTarget.outerHTML);
    event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id);
};
const dragEnd = event => {
    event.currentTarget.classList.remove('dragging');
};

Array.from(document.querySelectorAll('.card')).forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);

});

const dragEnter = event => {
    event.currentTarget.classList.add('drop');
};

const dragLeave = event => {
    event.currentTarget.classList.remove('drop');
};

Array.from(document.querySelectorAll('.column')).forEach(column => {
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
});