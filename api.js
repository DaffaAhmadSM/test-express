import { Create as CreateNews, show as ShowNews, index as IndexNews } from '../controller/newsController.js';
import router from 'express';

const apirouter = router();

// * News Routes
apirouter.get('/news', IndexNews);
apirouter.get('/news/:id', ShowNews);
apirouter.post('/news', CreateNews);


export { apirouter };