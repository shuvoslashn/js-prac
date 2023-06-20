// solution of a
function handleClick(event) {
    const x = event.clientX;
    const y = event.clientY;
    alert(`You clicked at (${x}, ${y})`);
}
document.addEventListener('click', handleClick);

// solution of b
function handleKeydown(event) {
    const keyCode = event.keyCode;
    alert(`You pressed the key with keyCode ${String.fromCharCode(keyCode)}`);
}
document.addEventListener('keydown', handleKeydown);

// solution of c
function handleMouseover(event) {
    const image = event.target;
    image.src = `https://images.unsplash.com/photo-1687120486460-a12217b24b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`;
}

const image = document.getElementById('my-image');
image.addEventListener('mouseover', handleMouseover);
