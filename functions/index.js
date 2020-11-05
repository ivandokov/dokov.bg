const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const secret = functions.config().webmention.secret;

exports.webmentions = functions.region('europe-west1').https.onRequest((request, response) => {
    if (request.method !== 'POST') {
        return response.status(500).send('Not Allowed');
    }

    if (secret !== request.body.secret) {
        return response.status(400).send("Invalid secret");
    }

    return admin.firestore()
        .collection('webmentions')
        .where('webmention_id', '==', request.body.post['wm-id'])
        .get()
        .then(querySnapshot => {
            if (querySnapshot.docs.length > 0) {
                return response.send('Already added');
            }

            let postUrl = request.body.target.split('#')[0]
            postUrl = postUrl.endsWith('/') ? postUrl.slice(0, -1) : postUrl

            return admin.firestore().collection('webmentions').add({
                type: request.body.post['wm-property'],
                webmention_id: request.body.post['wm-id'] || '',
                author_name: request.body.post.author.name,
                author_photo_url: request.body.post.author.photo,
                author_url: request.body.post.author.url,
                post_url: postUrl,
                interaction_url: request.body.source,
                text: request.body.post.content
                    ? request.body.post.content.text
                    : '',
                created_at: request.body.post.published
                    ? new Date(request.body.post.published)
                    : new Date(),
            }).then(result => {
                return response.send('Webmention added');
            }).catch(error => {
                return response.status(500).send(error);
            });
        });
});
