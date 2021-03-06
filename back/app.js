import express from 'express';
import routerSignup from './routers/signUp.js';
import routerSignin from './routers/signIn.js';
import routerLogout from './routers/logout.js';
import routerCitypost from './routers/addCity.js';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://andrew:crosbyfabregas1@cluster0.asauj.mongodb.net/MCT?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/signup', routerSignup);
app.use('/signin', routerSignin);
app.use('/logout', routerLogout);
app.use('/', routerCitypost);

export default app;
            