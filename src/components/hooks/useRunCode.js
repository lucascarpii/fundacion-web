async function runCode(input) {
  if (typeof input !== 'string') {
    throw new Error('La entrada debe ser una cadena de texto');
  }
  try {
    const response = await fetch('https://fundacion.colegionqnoeste.com/run-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: input })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error: ' + error.message);
    return [{ resp: 'error', msgError: error.message }];
  }
}


export { runCode }