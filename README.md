🖼️ Image-Search-Web-App
A clean, modern, and responsive image search application that lets users find high-quality images by typing a keyword (e.g., nature, space, dogs) and fetching results from the Unsplash API. The app displays images in a responsive grid layout and works smoothly across desktop and mobile devices.

📝 Objective
Allow users to:
🔍 Search for any topic
📷 View relevant images instantly
🧾 See descriptions or alt text
🧑‍🎨 Optionally view photographer credits
💾 Save or download favorite images
✅ Core Features
🔎 Search Bar

Input field to type keywords

"Search" button to fetch results

Press Enter to trigger search (optional)

🖼️ Image Display Grid

Grid of images with:

📷 Thumbnail
📝 Alt text or description
📎 Photographer credit (optional)

Responsive layout:

🖥️ Multi-column on desktop
📱 Single column on mobile
🔌 Unsplash API Integration

Fetch up to 1,000 images
Avoid duplicate images
Show loading spinner while fetching
Display message if no results found

🌟 Bonus Features
🔁 Load More / Infinite Scroll
♻️ Refresh Button – Shows new results for same search
🌓 Dark / Light Theme Toggle
❤️ Save Favorites using Local Storage
⬇️ Download Image or View on Unsplash
💡 Hover and Tap-Friendly Cards for mobile and desktop

💻 Tech Stack
HTML – Structure of the app
CSS – Responsive styling & layout
JavaScript –API calls with fetch() and async/await
DOM manipulation: Event handling for search, scroll, and interactions

🎨 UI & UX Highlights
✨ Smooth loading transitions
⏳ Loading spinner during image fetch
⚠️ "No results found" message for invalid or empty searches
🔍 Card hover effects (zoom-in, shadow)
💤 Lazy-loading for performance
🔄 Refresh or load more without page reload

🛠 Development Notes
API:
graphql
https://api.unsplash.com/search/photos?query=QUERY&client_id=YOUR_ACCESS_KEY

Modular JavaScript functions:
searchImages(query)
displayImages(data)
clearResults()
Additional Tips:
Use Set or filter to avoid duplicates
Add input validation and debounce for better performance

