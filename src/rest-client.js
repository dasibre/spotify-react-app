const RestClient = {
  get(url,callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('Get',url,true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          callback(null,JSON.parse(xhr.responseText));
        } else {
          callback(xhr.status);
        }
      }
    };
    xhr.send();
  }
};

export default RestClient;
