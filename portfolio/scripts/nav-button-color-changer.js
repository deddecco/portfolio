document.addEventListener('DOMContentLoaded', () => {
    // this identifies buttons
    const buttons = document.querySelectorAll('.col-12.col-md-auto.btn .btn.w-100');

    buttons.forEach(button => {
        const originalBackgroundColor = button.style.backgroundColor;
        const originalTextColor = button.style.color;

        // when the mouse is over a button, darken only it, and change only its font color to white,
        // which has better contrast against blue than black does
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'blue';
            button.style.color = 'white';
        });

        // once the mouse is no longer over a given button, reset its styles to tehir defaults
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = originalBackgroundColor;
            button.style.color = originalTextColor;
        });
    });
});