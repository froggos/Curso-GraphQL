const fetchGreeting = async () => {
    const response = await fetch('http://localhost:9000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: 'query { saludos }',
        }),
    });

    const body = await response.json();
    console.log(body);
    return body.data.saludos;
}

fetchGreeting().then((saludos) => {
    document.getElementById('texto-respuesta').textContent = saludos;
});