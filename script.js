import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    // { duration: '30s', target: 200 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 1000 },
    { duration: '1m', target: 500 },
    // { duration: '30s', target: 200 },
  ],
};
export default function () {
  const url = 'http://localhost:3003';
  const id = Math.ceil(Math.random() * 4000000);

  http.get(`${url}/api/restaurants/${id}`);
  sleep(.25);
}