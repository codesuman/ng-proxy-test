import { environment } from '../environments/environment';

export default [
  {
    context: [
      '/api'
    ],
    target: environment.apiUrl,
    secure: false
  }
];