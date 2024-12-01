import { gsap } from "gsap"; // Import GSAP

// Select the h3 element and ensure it's not null
const h3Element = document.querySelector('h3');

// Check if h3Element exists before accessing its textContent
const h3Text: string | null = h3Element?.textContent || null;

// Log or use the text for GSAP animation
if (h3Element) {
  console.log("Text content of h3:", h3Text);

  // Example GSAP animation
  gsap.to(h3Element, {
    duration: 1,
    x: 100,
    
  });
}
