
let visibleCount = window.innerWidth < 768 ? 3 : 6; // Cap the visible cards based on screen size
const increment = window.innerWidth < 768 ? 3 : 6;
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        nav.classList.remove('open');
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
});

let activeFilter = 'all';

const loadMore = document.getElementById('load-more'); // Declaring it here, rendering cards later on

//NAVIGATION On Mobile
    // When button with hamburger class is clicked:
        // Toggle the "open" class on the nav-container
            // If open, bi-list icon changes to bi-x
            // If closed, change icon back to bi-list

    const hamburger = document.querySelector('.hamburger'); // Select hamburger button
    const nav = document.querySelector('.nav-container'); // Select the nav-container
    const icon = document.querySelector('.hamburger i'); // Select the icon inside the hamburger button
        
    hamburger.addEventListener('click', function() { // Event listener on the hamburger button
        nav.classList.toggle('open'); // Toggle open class on the nav variable 
        if (nav.classList.contains('open')) { // Check if it's open
            icon.classList.remove('bi-list'); // If open, swap to x icon
            icon.classList.add('bi-x');
        } else {
            icon.classList.remove('bi-x'); // If closed, swap to list icon
            icon.classList.add('bi-list');
        }
    });

    // When a nav link is clicked
        // Remove "open" class from nav-container
        // Change icon back to bi-list
    
        const navLinks = document.querySelectorAll('.nav-container a'); // Select the a tags inside nav-container class
        for (let i = 0; i < navLinks.length; i++) { // Loop through each one and add an event listener
            navLinks[i].addEventListener('click', function() {
                nav.classList.remove('open');
                icon.classList.remove('bi-x'); 
                icon.classList.add('bi-list');
            });
        };

    // Clicking anywhere outside the nav behavior 
        document.addEventListener('click', function(event) {
            const clickedInsideNav = nav.contains(event.target);
            const clickedHamburger = hamburger.contains(event.target);
            if (!clickedInsideNav && !clickedHamburger) {
                nav.classList.remove('open');
                icon.classList.remove('bi-x');
                icon.classList.add('bi-list');
            }
        });

// DATA ARRAY
    // Create an array called "labels"
        // Each label is an object with properties:
            // name
            // category 
            // definition
            // insight
            // sourceURL
        // Sort the array alphabetically by name before anything runs

    const labels = [
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "Non-GMO Project",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.nongmoproject.org/",
        },
        {
            name: "Non-UPF Verified",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.nonultraprocessed.org/",
        },
        {
            name: "Healthy",
            category: "Claim",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/use-healthy-claim-food-labeling",
        },
        {
            name: "Grass-Fed",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "Natural",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "Cage-Free",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "Gluten-Free",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "Pasture Raised",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Claim",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Claim",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            insight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sourceURL: "https://www.usda.gov",
        }
    ];

        labels.sort((a, b) => {
            if (a.name.toLowerCase()< b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        });

        let currentData = labels;
    
// RENDER CARDS 
    // A function called renderCards takes a data array as input
        // Clear the cards-grid
        // If data array is empty
            // Show error message: "No results found. Please submit a label below to suggest a new one."
            // Hide load more button
        // If data array has items
            // Loop through only the visible ones (up to visibleCount)
            // For each label build a card with
                // category
                // correct icon (patch-check for Certification, patch-exclamation for Claim)
                // label name
                // definition
                // insight
                // source url
        // Insert card into cards-grid
        // Update load more button text: "Load X more labels"
        // Hide load more button if all cards are showing
    // Call renderCards when page loads with full terms array

    function renderCards(data) {
        const grid = document.getElementById('cards-grid'); // Grab render card element by it's id
        grid.innerHTML = ''; // Clears what's inside the cards-grid every time the function runs
        
        if (data.length === 0) { // Check if the data array is empty by checking its length
            grid.innerHTML = '<p>No results found. Submit a label below to suggest a new one.</p>';
            loadMore.style.display = 'none';  // hide the element
        } else {
            for (let i = 0; i < Math.min(visibleCount, data.length); i++) {
                const term = data[i];
                const card = document.createElement('article');
                    card.classList.add('card');
                    card.innerHTML = `
                        <div class="card-top">
                            <span class="card-filters">${term.category}</span>
                            <div class="card-icon">
                                <i class="bi ${term.category === 'Certification' ? 'bi-patch-check' : 'bi-patch-exclamation'}"></i>
                            </div>
                        </div>
                        <h3 class="card-title">${term.name}</h3>
                        <p class="card-definition">${term.definition}</p>
                        <div class="card-insight">
                            <p class="card-insight-label">Insight</p>
                            <p>${term.insight}</p>
                        </div>
                        <div class="card-footer">
                            <a href="${term.sourceURL}" target="_blank" class="card-source">View source<i class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                `;
                grid.appendChild(card);

                const remaining = data.length - visibleCount;
                loadMore.textContent = `Load ${remaining} more labels`;

        if (visibleCount >= data.length) {
            loadMore.style.display = 'none';
        } else {
            loadMore.style.display = 'block';
        }
                }
            }
        
    }
    
    renderCards(currentData);

    
// search

//     Listen for input event on search bar:
//   - Get the search value and convert to lowercase
//   - Filter terms array where:
//       - term name includes the search value (lowercase) OR
//       - term definition includes the search value (lowercase)
//   - Store filtered results as currentData
//   - Reset visibleCount to starting number
//   - Call renderCards with filtered results

// When search is cleared:
//   - Reset currentData to full terms array
//   - Call renderCards

    const searchInput = document.getElementById('search'); // Listen for input event on search bar
    
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredLabels = labels.filter(label => {
            const matchesSearch = label.name.toLowerCase().includes(query) || label.definition.toLowerCase().includes(query);
            const matchesFilter = activeFilter === 'all' || label.category === activeFilter;
            return matchesSearch && matchesFilter;
        });
        currentData = filteredLabels;
        visibleCount = window.innerWidth < 768 ? 3 : 6;
        renderCards(currentData);
    });
        


// filter chips 

// Listen for click on each chip button:
//   - Remove "active" class from all chips
//   - Add "active" class to clicked chip
//   - Get the data-category value of clicked chip
//   - If category is "all":
//       - Set currentData to full terms array
//   - If category is "Certification" or "Claim":
//       - Filter terms array where category matches
//       - Set as currentData
//   - Reset visibleCount to starting number
//   - Call renderCards with currentData

// Note: search and filter should work together
//   - If a filter is active and user searches:
//       - Search only within the filtered set


    const filterChips = document.querySelectorAll('#filters .chip');

    for (let i = 0; i < filterChips.length; i++) {
        filterChips[i].addEventListener('click', function() {
            
            for (let j = 0; j < filterChips.length; j++) {
                filterChips[j].classList.remove('active');
            }
            
            this.classList.add('active');
            
            const category = this.dataset.category;
            activeFilter = category;
            
            const query = searchInput.value.toLowerCase();
            
            if (category === 'all') {
                currentData = labels.filter(label => {
                    return label.name.toLowerCase().includes(query) ||
                        label.definition.toLowerCase().includes(query);
                });
            } else {
                currentData = labels.filter(label => {
                    const matchesSearch = label.name.toLowerCase().includes(query) || 
                                        label.definition.toLowerCase().includes(query);
                    const matchesFilter = label.category === category;
                    return matchesSearch && matchesFilter;
                });
            }

            visibleCount = window.innerWidth < 768 ? 3 : 6;
            renderCards(currentData);
        });
    }


// load more
// Set visibleCount to starting number (3 on mobile, 6 on desktop)
// Set increment to 3 or 6 depending on screen size

// When load more button is clicked:
//   - Add increment to visibleCount
//   - Call renderCards with currentData
//   - Update button text to show remaining count:
//       "Load X more labels"
//   - If visibleCount is greater than or equal to total cards:
//       - Hide load more button

    loadMore.addEventListener('click', function() {
        visibleCount += increment;
        renderCards(currentData);
    });


// vote 
// Set a variable "hasVoted" to false

// When vote-up or vote-down is clicked:
//   - Check if hasVoted is true
//       - If true: do nothing (limit to one vote)
//       - If false:
//           - Set hasVoted to true
//           - Hide both vote buttons
//           - Show vote-confirmation message
//           - Save vote to localStorage so it persists if page refreshes:
//               localStorage.setItem("hasVoted", "true")

// When page loads:
//   - Check localStorage for "hasVoted"
//   - If it exists: show confirmation, hide buttons

    let hasVoted = false;

    const voteUp = document.getElementById('vote-up');
    const voteDown = document.getElementById('vote-down');
    const voteConfirmation = document.getElementById('vote-confirmation');

    function handleVote() {
        if (hasVoted) return;
        
        hasVoted = true;
        voteUp.style.display = 'none';
        voteDown.style.display = 'none';
        voteConfirmation.style.display = 'block';
    }

    voteUp.addEventListener('click', handleVote);
    voteDown.addEventListener('click', handleVote);




// form validation and confirmation 

// Listen for submit event on form:
//   - Prevent default form submission (e.preventDefault)

//   - Check label-name field:
//       - If empty: show error message below field
//       - If filled: clear error message

//   - Check message field:
//       - If empty: show error message below field
//       - If filled: clear error message

//   - If all fields are valid:
//       - Submit form data to Formspree using fetch
//       - On success:
//           - Hide the form
//           - Show form-confirmation message
//           - After 5 seconds: hide confirmation, show form again, clear fields
//       - On error:
//           - Show generic error message

    // FORM
const form = document.querySelector('#submit-form form');
const labelName = document.getElementById('label-name');
const message = document.getElementById('message');
const formConfirmation = document.getElementById('form-confirmation');
const submitBtn = document.getElementById('submit-btn');

// Disable button until both fields are filled
function checkFields() {
    if (labelName.value.trim() !== '' && message.value.trim() !== '') {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

labelName.addEventListener('input', checkFields);
message.addEventListener('input', checkFields);

// Form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
        if (response.ok) {
            form.style.display = 'none';
            formConfirmation.style.display = 'block';
        }
    })
    .catch(function() {
        submitBtn.textContent = 'Submit';
        submitBtn.disabled = false;
    });
});