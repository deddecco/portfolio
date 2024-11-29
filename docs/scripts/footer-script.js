// footer text generation gets current year and inserts into footer text then printed (centered) at bottom of page
const currentYear = new Date().getFullYear();
document.getElementById('footer').innerHTML = `Copyright &copy; ${currentYear} Andre da Silva. All rights reserved.`;