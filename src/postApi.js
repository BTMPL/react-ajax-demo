/**
 * this is a (very) simple example of an Post API
 *
 */

 import axios from "axios";

export default {
  requestPost: function(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        /**
         * sadly, jsonplaceholder dosen't match our article shape
         * so we need to modify it a bit :)
         */
         return {
           title: response.data.title,
           image: "http://lorempixel.com/c/880/200/technics/",
           content: '<p>' + response.data.body + '</p>'
         };
      })
  }
}