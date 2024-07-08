// Sample data (you can replace this with your actual data from a database or API)
const items = [
    { 
        title: "Vintage Chair", 
        price: 50, 
        image: "item1.jpg", 
        description: "A beautiful vintage chair with intricate carvings and plush velvet upholstery." 
    },
    { 
        title: "Antique Desk", 
        price: 100, 
        image: "item2.jpg", 
        description: "An antique wooden desk with multiple drawers and brass fittings." 
    },
    { 
        title: "Handcrafted Jewelry", 
        price: 75, 
        image: "item3.jpg", 
        description: "Handmade jewelry set with semi-precious stones and sterling silver." 
    },
    { 
        title: "Artisanal Pottery", 
        price: 120, 
        image: "item4.jpg", 
        description: "Artisan-crafted pottery vase with a unique glaze finish." 
    },
    { 
        title: "Rare Books Collection", 
        price: 90, 
        image: "item5.jpg", 
        description: "A collection of rare books spanning various genres and periods." 
    },
    { 
        title: "Designer Handbag", 
        price: 60, 
        image: "item6.jpg", 
        description: "Designer handbag made from genuine leather with gold-plated hardware." 
    },
    { 
        title: "Original Paintings", 
        price: 80, 
        image: "item7.jpg", 
        description: "Original oil paintings by a local artist, framed and ready to hang." 
    },
    { 
        title: "Custom Furniture Set", 
        price: 110, 
        image: "item8.jpg", 
        description: "Custom-made furniture set including a sofa, coffee table, and side chairs." 
    },
    { 
        title: "Vintage Vinyl Records", 
        price: 70, 
        image: "item9.jpg", 
        description: "A collection of vintage vinyl records from various artists and genres." 
    },
    { 
        title: "Collectible Figurines", 
        price: 95, 
        image: "item10.jpg", 
        description: "Collectible figurines including characters from movies and comic books." 
    }
];

const itemList = document.getElementById('item-list');

// Function to send message using fetch API
function sendMessageToSeller(item, message) {
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'balzano0928@gmail.com', phone: '+4435711513', message }), // Replace with actual seller email and phone
    })
    .then(response => {
        if (response.ok) {
            alert(`Your message "${message}" has been sent to the seller.`);
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error sending message:', error);
        alert('Failed to send message.');
    });
}

// Populate items
items.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    
    // Item image (replace with actual images or placeholders)
    const imgElement = document.createElement('img');
    imgElement.src = item.image;
    itemElement.appendChild(imgElement);
    
    // Item title
    const titleElement = document.createElement('div');
    titleElement.classList.add('item-title');
    titleElement.textContent = item.title;
    itemElement.appendChild(titleElement);
    
    // Item description
    const descElement = document.createElement('div');
    descElement.textContent = item.description;
    itemElement.appendChild(descElement);
    
    // Item price
    const priceElement = document.createElement('div');
    priceElement.classList.add('item-price');
    priceElement.textContent = `$${item.price}`;
    itemElement.appendChild(priceElement);
    
    // Contact seller button
    const contactButton = document.createElement('button');
    contactButton.classList.add('offer-button');
    contactButton.textContent = 'Contact Seller';
    contactButton.addEventListener('click', () => {
        const message = prompt(`Enter your message to the seller regarding ${item.title}:`);
        if (message) {
            sendMessageToSeller(item, message);
        }
    });
    itemElement.appendChild(contactButton);
    
    itemList.appendChild(itemElement);
});