const genreSelect = document.getElementById('genre');
const ratingSelect = document.getElementById('rating');
const yearSelect = document.getElementById('year');
const submitBtn = document.getElementById('submit-btn');
const recommendationsDiv = document.getElementById('recommendations');

submitBtn.addEventListener('click', function() {
  const genreValue = genreSelect.value;
  const ratingValue = ratingSelect.value;
  const yearValue = yearSelect.value;
  
  
  recommendationsDiv.textContent = 'Your recommended movies are: Movie 1, Movie 2, Movie 3';
});
