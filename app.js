

//  Nav hamburger menu expands and closes on mobile

    //  Grab elements: hamburger button, nav-container, hamburger icon

        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav-container'); 
        const icon = document.querySelector('.hamburger i'); 
        
    // Add event listener to hamburger button to toggle the open class on the element nav-container
    // If open, swap icon to x
    // Else swap icon to list 

        hamburger.addEventListener('click', function() { 
            nav.classList.toggle('open');  
            if (nav.classList.contains('open')) { 
                icon.classList.remove('bi-list'); 
                icon.classList.add('bi-x');
            } else {
                icon.classList.remove('bi-x'); 
                icon.classList.add('bi-list');
            }
        });

    // Listen for window resize events where if screen reaches 768px or wider, mobile nav closes and hamburger icon resets

        window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            nav.classList.remove('open');
            icon.classList.remove('bi-x');
            icon.classList.add('bi-list');
        }
    });

    // Close nav when a nav link is clicked
    // Remove "open" class from nav-container
    // Change icon back to bi-list
    
        const navLinks = document.querySelectorAll('.nav-container a'); // Select the a tags inside nav-container class
        for (let i = 0; i < navLinks.length; i++) { // Loop through each one and add an event listener
            navLinks[i].addEventListener('click', function() {
                nav.classList.remove('open');
                icon.classList.remove('bi-x'); 
                icon.classList.add('bi-list'); // resets the icon
            });
        }

    // Close nav when clicking outisde the nav 
    // Did the click happen inside the nav? 
    // Did the click happen on the hamburger button?
    // If the above two are not true, close the nav

        document.addEventListener('click', function(event) {
            const clickedInsideNav = nav.contains(event.target); 
            const clickedHamburger = hamburger.contains(event.target); 
            if (!clickedInsideNav && !clickedHamburger) {
                nav.classList.remove('open');
                icon.classList.remove('bi-x');
                icon.classList.add('bi-list');
            }
        });

// Build card data array

    // Create an array called labels each with properties:
        // name
        // category 
        // definition
        // insight
        // sourceURL

    const labels = [
        {
            name: "USDA Organic",
            category: "Certification",
            definition: "Grown without synthetic pesticides, artificial fertilizers, or genetic engineering.",
            insight: "Does not mean pesticide-free. Farmers may use approved natural substances rather than synthetic ones.",
            sourceURL: "https://www.usda.gov",
        },
        {
            name: "Non-GMO Project",
            category: "Certification",
            definition: "Verification does not mean GMO-free, but rather it adheres to a rigorous Non-GMO Project Standard for GMO avoidance.",
            insight: "North America's only third-party verification program for GMO avoidance.",
            sourceURL: "https://www.nongmoproject.org/",
        },
        {
            name: "B Corp Certified",
            category: "Certification",
            definition: "Meets high standards of social and environmental performance, accountability, and transparency.",
            insight: "Evaluates the entire company, not just a single product or department.",
            sourceURL: "https://www.bcorporation.net",
        },
        {
            name: "Fair Trade Certified",
            category: "Certification",
            definition: "Ensures safe working conditions and sustainable livelihoods for farmers and workers.",
            insight: "Primarily focused on social and economic standards for producers in developing nations.",
            sourceURL: "https://www.fairtradecertified.org",
        },
        {
            name: "BeVeg Certified",
            category: "Certification",
            definition: "Requires companies to disclose all ingredients, processes, and trade secrets to verify vegan compliance.",
            insight: "Without certification, vegan claims on packaging have no legal definition or oversight.",
            sourceURL: "https://beveg.com",
        },
        {
            name: "Healthy",
            category: "Claim",
            definition: "Dietary guidelines require a minimum amount of recommended food groups, while limiting saturated fat, sodium, and added sugars.",
            insight: "The FDA updated its definition in 2024 to include foods like avocados and nuts.",
            sourceURL: "https://www.fda.gov/food/food-labeling-nutrition",
        },
        {
            name: "Natural",
            category: "Claim",
            definition: "The FDA has no formal definition, but generally indicates no artificial colors, flavors, or synthetic substances were added.",
            insight: "Regulated by the USDA for meat and poultry. Does not mean the product is healthier, pesticide-free, or non-GMO.",
            sourceURL: "https://www.fda.gov/food/food-labeling-nutrition/use-term-natural-food-labeling",
        },
        {
            name: "Gluten-Free",
            category: "Claim",
            definition: "Regulated by the FDA, requiring less than 20 ppm (parts per million) of gluten in any food carrying this label.",
            insight: "Third-party organizations like the Gluten Intolerance Group also offer additional certification.",
            sourceURL: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/gluten-free-labeling-foods",
        },
        {
            name: "Cage-Free",
            category: "Claim",
            definition: "Indicates that egg-laying hens are not kept in cages during production, but typically in windowless sheds.",
            insight: "Hens are typically confined indoors with little or no outdoor access.",
            sourceURL: "https://humanefacts.org/labels-loopholes/",
        },
        {
            name: "Free-Range",
            category: "Claim",
            definition: "Animals have some access to the outdoors, but does not specify the quality, size, or duration.",
            insight: "Regulated by the USDA for poultry and meat only, the term has no formal definition for eggs or dairy.",
            sourceURL: "https://humanefacts.org/labels-loopholes/",
        }
    ];

    // Sort the array alphabetically by name before anything runs 
    // Ensure case insensitive

        labels.sort((a, b) => {
            if (a.name.toLowerCase()< b.name.toLowerCase()) return -1; // put a before b
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1; // put b before a
            return 0; // leave in the same order
        });


    let currentData = labels; // what gets passed to renderCards
    
// Render cards 

    // Create a function called renderCards that takes the above data array as input 
    // If data arrary is empty, show error message: "No results found. Please submit a label below to suggest a new one." and hide load more button
    // If data array has items, create a loop through the visible ones and then build card with data array properties
    // Card content lives inside id cards-grid. Grab render card element by it's id.
    // Cap number of cards visible across screens 
    // Load more button auto reflects the remaining number left

        let visibleCount = window.innerWidth < 768 ? 3 : 6; // Show 3 on mobile and 6 on tablet and desktop 

        const loadMore = document.getElementById('load-more'); 

        function renderCards(data) {
            const grid = document.getElementById('cards-grid'); 
            grid.innerHTML = ''; // Clears what's inside the cards-grid every time the function runs
            
            if (data.length === 0) { // Check if the data array is empty by checking its length
                grid.innerHTML = '<p>No results found. Submit a label below to suggest a new one.</p>';
                loadMore.style.display = 'none';  // If array is empty, hide the load more element
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
                    grid.appendChild(card); // adds the finished card inside the grid container 

                }
            
                const remaining = data.length - visibleCount;
                loadMore.textContent = `Load ${remaining} more labels`;

                if (visibleCount >= data.length) {
                    loadMore.style.display = 'none';
                } else {
                    loadMore.style.display = 'block';
                }
            }
        }
        
        renderCards(currentData);  // Call the renderCards function when page loads with full terms array

    
// Search bar

    // Listen for the input event on search bar, ensure case insensitive 
    // Filter so the name or definition matches the search and the category matches the filter tags
    // Store results as currentData
    // Reset visibleCount to starting number each time you search so you always start from the top
    // Call renderCards with filtered results

        const searchInput = document.getElementById('search');
        
        let activeFilter = 'all'; // which filter tag is currently selected, default is all
        
        searchInput.addEventListener('input', function() {
            const query = searchInput.value.toLowerCase(); // grabs what the user typed and converts to lowercase
            const filteredLabels = labels.filter(label => { // checks every label in the array and keeps only what passes as true below 
                const matchesSearch = label.name.toLowerCase().includes(query) || label.definition.toLowerCase().includes(query); // does the name or definition include the search query?
                const matchesFilter = activeFilter === 'all' || label.category === activeFilter; // does the label match the filter tag?
                return matchesSearch && matchesFilter;
            });
            currentData = filteredLabels; // show the filtered results
            visibleCount = window.innerWidth < 768 ? 3 : 6;
            renderCards(currentData);
        });
        

// Filter tags (chips) 

// Listen for click evvent on each filter button 
// When a button is clicked, remove the active class from each and add only to the selected one
// Filter array by search and selected category

    const filterChips = document.querySelectorAll('#filters .chip');

    for (let i = 0; i < filterChips.length; i++) {
        filterChips[i].addEventListener('click', function() { // outer loop that goes through each button
            
            for (let j = 0; j < filterChips.length; j++) { // inner loop that removes active class and resets
                filterChips[j].classList.remove('active');
            }
            
            this.classList.add('active'); // add the active class to the selected button
            
            const category = this.dataset.category; // value from HTML
            activeFilter = category;
            
            const query = searchInput.value.toLowerCase();
            
            if (category === 'all') { 
                currentData = labels.filter(label => { // if all is selected, filter by search only
                    return label.name.toLowerCase().includes(query) ||
                        label.definition.toLowerCase().includes(query);
                });
            } else {
                currentData = labels.filter(label => { // if certification or claim is selected, filter by search and category
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

// Load more button 

    // When clicked, visibleCount increases in increments of 3 or 6 depending on screen size 
    // renderCards above handles hiding the button and auto updating number of cards remaining

        const increment = window.innerWidth < 768 ? 3 : 6;

            loadMore.addEventListener('click', function() {
                visibleCount += increment;
                renderCards(currentData);
            });

// Vote buttons

    // When vote up or vote down button is clicked, add the voted class
    // CSS handles hiding the buttons and showing the thank you confirmation 

        let hasVoted = false; // deafults to false every session or page refresh 
        const feedbackSection = document.getElementById('feedback');

        function handleVote() {
            if (hasVoted) return;
            hasVoted = true; // cannot vote more than once per session
            feedbackSection.classList.add('voted');
        }

        document.getElementById('vote-up').addEventListener('click', handleVote);
        document.getElementById('vote-down').addEventListener('click', handleVote);

// Submit form 

    // Listen for the submit event on form 
    // Prevent default form submit behavior
    // Disable button until both fields are filled 
    // If all form fields are valid
        // submit the form to formspree
        // show thank you confirmation 
        // hide the form

        const form = document.querySelector('#submit-form form');
        const labelName = document.getElementById('label-name');
        const message = document.getElementById('message');
        const formConfirmation = document.getElementById('form-confirmation');
        const submitBtn = document.getElementById('submit-btn');



        function checkFields() {
            if (labelName.value.trim() !== '' && message.value.trim() !== '') { // a field with spacing doesn't count, need real text
                submitBtn.disabled = false;
            } else {
                submitBtn.disabled = true;
            }
        }

        labelName.addEventListener('input', checkFields);
        message.addEventListener('input', checkFields);



        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            fetch(form.action, { // send form to Formspree without reloading the page
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            })
            .then(function(response) { // runs if Formspree responds successfully and then hides the form, shows confirmation
                if (response.ok) {
                    form.style.display = 'none';
                    formConfirmation.style.display = 'block';
                }
            })
            .catch(function() { // runs if something goes wrong, resets the button
                submitBtn.textContent = 'Submit'; 
                submitBtn.disabled = false;
            });
        });