function validate(object) {
    let method = object.method;
    let uri = object.uri;
    let version = object.version;
    let message = object.message;
    if (method == undefined) {
        throw new Error('Invalid request header: Invalid Method');        
    }
    if (uri == undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (version == undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (message == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }
    if (method !== 'GET' && method !== 'POST' 
    && method !== 'DELETE' && method !== 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method');
    }
    let regexUri = /^[\w.]+$/;
    if (!regexUri.test(uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (version !== 'HTTP/0.9' && version !== 'HTTP/1.0' 
    && version !== 'HTTP/1.1' && version !== 'HTTP/2.0') {
        throw new Error('Invalid request header: Invalid Version');
    }
    let regexMessage = /^[^<>\\&'"\r\n]+$/;
    if (!regexMessage.test(message) && message !== '') {
        throw new Error('Invalid request header: Invalid Message');
    }
    return object;
}

console.log(validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  ));
console.log(validate({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  ));
console.log(validate({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  ))