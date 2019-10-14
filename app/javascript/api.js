import * as axios from 'axios';

export default axios.create({
  headers:  {
    Accept: 'application/json',
  }
})
