import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const stickynote = document.getElementById('stickynote');

    dragStickyNote(stickynote);

    function dragStickyNote(note) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            note.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                pos3 = e.clientX;
                pos4 = e.clientY;
                
                document.onmouseup = stopDragging;
                document.onmousemove = noteDrag;
            }

            function noteDrag(e) { //e is event object (contains details abt event like mouse pos and shi)
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;

                pos3 = e.clientX;
                pos4 = e.clientY;

                note.style.top = (note.offsetTop - pos2) + "px";
                note.style.left = (note.offsetLeft - pos1) + "px";

                document.onmouseup = stopDragging;
            }

            function stopDragging() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

    document.getElementById('stickynote_closebutton').addEventListener('click', () => {
        stickynote.style.display = 'none';
    });
});