document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.stars img'); // using query selector to get all the srars
    let currentRating = 0; // storing the current rating

    stars.forEach((star, index) => { // all the stars should jave these 3 functions using eventlisteners
      star.addEventListener('mouseover', () => fillStars(index + 1));
      star.addEventListener('mouseout', () => fillStars(currentRating)); 
      star.addEventListener('click', () => setRating(index + 1));
    });

    function fillStars(count) {
      for (let i = 1; i <= 5; i++) {
        const starElement = document.getElementById(`star${i}`);
        starElement.src = i <= count ? './images/Filled in Star.svg' : './images/Empty Star.svg'; // Replace with your star image URLs
      }
    }

    function setRating(rating) {
      // Toggle the rating state if clicking on the same star again
      currentRating = rating === currentRating ? rating - 1 : rating;
      fillStars(currentRating);
      console.log('Selected Rating:', currentRating);
    }


    const form = document.querySelector('.reviewSection form');
    const reviewsContainer = document.querySelector('.reviewsContainer');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const userName = document.getElementById('userName').value;
        const userComment = document.getElementById('userComment').value;

        // Assume you have a function to submit the review data to a server (replace with your logic)
        submitReview(userName, userComment, currentRating);

        // Update the UI to display the submitted review
        displayReview(userName, userComment, currentRating);

        // Clear the form after submission
        form.reset();
        currentRating = 0; // Reset the rating
        fillStars(currentRating); // Update star UI
    });

    function displayReview(name, comment, rating) {
        // Create a new review element
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        // Create HTML structure for the review content
        reviewElement.innerHTML = `
        <div class = "indiReview">
            <div class="reviewDetails">
                <p class="userName">${name}</p>
                <p class="userComment">${comment}</p>
            </div>
            <div class="reviewRating">${getStarRatingHTML(rating)}</div>
            
        </div>
           
        `;

        // Append the review to the reviews container
        reviewsContainer.appendChild(reviewElement);
    }

    function getStarRatingHTML(rating) {
        // Generate HTML for the star rating
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<img src="${i <= rating ? './images/Filled in Star.svg' : './images/Empty Star.svg'}">`;
        }
        return starsHTML;
    }

    function submitReview(name, comment, rating) {
        // You can implement the logic to submit the review data to your server here.
        // This is just a placeholder function.
        console.log('Submitting review:', { name, comment, rating });
        // Implement your AJAX or fetch logic to send the review data to the server.
    }


    
  });