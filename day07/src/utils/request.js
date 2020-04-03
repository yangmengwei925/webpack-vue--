let $request = {
  get(url) {
    return new Promise(((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);
      xhr.send(null);


      // xhr.setRequestHeader('Content-Type', 'application/json');
      //成功 resolve
      xhr.onload = function () {
        resolve(JSON.parse(xhr.responseText));
      };

      //失败 reject
      xhr.onerror = function () {
        resolve('失败');
      }

    }))
  },
  post() {

  }
};

export default $request;