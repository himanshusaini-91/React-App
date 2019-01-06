const articlecontroller = require('./../controllers/articles')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {
    /**
     * get all articles
     */
    router
        .route('/articles')
        .get(articlecontroller.getAll)
    /**
     * add an article
     */

    router
        .route('/article/comment')
        .post(articlecontroller.commentArticle)
    /**
     * get a particlular article to view
     */
    router
        .route('/article/:id')
        .get(articlecontroller.getArticle)
}