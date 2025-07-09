function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const bookCategory = document.querySelector('#book-category').value;
    
    const bookCheckboxes = document.querySelectorAll('input[name="reading-type"]:checked');
    const selectedbooks = Array.from(bookCheckboxes).map(checkbox => checkbox.value);
    
    const content = document.getElementById('content');
            
    const answerElement = document.createElement('section');
    answerElement.className = 'p-4 border rounded m-4 bg-gray-50';
    answerElement.innerHTML = `
        <h3 class="text-lg font-semibold mb-2">Survey Response</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Favorite book Category:</strong> ${bookCategory}</p>
        <p><strong>Preferred Reading Types:</strong> ${selectedbooks.length > 0 ? selectedbooks.join(', ') : 'None selected'}</p>
    `;
    
    content.parentNode.insertBefore(answerElement, content.nextSibling);
    
    document.getElementById('postForm').reset();
    return false;
}
