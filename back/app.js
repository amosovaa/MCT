import express from 'express';
import routerSignup from './routers/signUp.js';
import routerSignin from './routers/signIn.js';
import routerLogout from './routers/logout.js';
import routerCitypost from './routers/addCity.js';
import routerBus from './routers/location.js'
import mongoose from 'mongoose';
import cors from 'cors'
import path from 'path'
import routerA from './routers/category.router.js'

const app = express();

mongoose.connect(
  'mongodb+srv://andrew:crosbyfabregas1@cluster0.asauj.mongodb.net/MCT?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true }
);

app.use(express.static('./public'));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api',routerA);
app.use('/signup', routerSignup);
app.use('/signin', routerSignin);
app.use('/logout', routerLogout);
app.use('/cities', routerCitypost);
app.use('/location', routerBus)

export default app;
