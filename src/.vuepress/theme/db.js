import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp({
        apiKey: 'AIzaSyBNC9Uce2qyQxd4TkXt5AqwCpDf6VO3wow',
        projectId: 'dokov-bg',
        databaseURL: 'https://dokov-bg.firebaseio.com',
    })
    .firestore();