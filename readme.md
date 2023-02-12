# nanofetch

A super-lightweight tool for making basic GET and POST requests. It uses the Fetch API but is meant to be simpler and more intuitive, similar to tools like Axios. For example, HTTP errors will be returned in the catch statement.

## GET request
```js
nanofetch
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log('response:', response))
  .catch(error => console.log('error:', error))

/*
response: {
  status: 200,
  statusText: 'OK',
  ok: true,
  body: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}
*/
```

## GET request (with HTTP error)
```js
nanofetch
  .get('https://jsonplaceholder.typicode.com/willreturnhttperror')
  .then(response => console.log('response:', response))
  .catch(error => console.log('error:', error))

/*
error: { 
  status: 404, 
  statusText: 'Not Found', 
  ok: false, 
  body: {} 
}
*/
```

## POST request
```js
nanofetch
  .post('https://jsonplaceholder.typicode.com/posts', {
    title: 'This is the title',
    body: 'Body text',
    userId: 1
  })
  .then((response) => console.log('response:', response))
  .catch((error) => console.log('error:', error));

/*
response: {
  status: 201,
  statusText: 'Created',
  ok: true,
  body: { title: 'This is the title', body: 'Body text', userId: 1, id: 101 }
}
*/
```