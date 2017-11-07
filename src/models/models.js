console.log("models are running");
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../assets/db_posts.json')

const uuid = require('uuid/v4')

////CRUD FUNCTIONS/////
function getAll() {
  return readDB(filePath)
}

function create(post){
  const id = uuid()
  const newPost = {id, ...post}
  const oldPosts = readDB(filePath)
  const postArray = [...oldPosts]
  postArray.push(newPost)
  writeDB(filePath, postArray)
  return JSON.stringify(newPost)
}

/////HELPER FUNCTIONS/////
function readDB(text){
  const post = JSON.parse(fs.readFileSync(text, 'utf-8'))
  return post
}

function writeDB(path, text){
  return fs.writeFileSync(path, JSON.stringify(text))
}

// function generateSnippets(data){
//   let array = data.map(item => {
//     const snippet = item.body.slice(0, 255) + '...'
//     return `<div class="post-title">${item.title}</div><div class="post-body">${snippet}</div><a class='button read-more'>Read More</a><a class="button is-text">Edit</a>`
//   })
//   return array.join(' ')
// }
///////EXPORTS////////
module.exports = {
  getAll,
  create
}
