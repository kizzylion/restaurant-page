export default function createContactTab() {
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `<h2>Contact Us</h2>
                            <p>Reach out to us for reservations and inquiries. We would love to hear from you!</p>
                            `
    // Create form for user to submit their name and email address
    const form = document.createElement('form');
    form.innerHTML = `
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                            <button type="submit">Submit</button>
                            `
    document.getElementById('content').appendChild(contactDiv);
    document.getElementById('content').appendChild(form);
};