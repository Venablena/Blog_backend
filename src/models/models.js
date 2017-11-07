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
<<<<<<< HEAD
  const newPost = {id, post}
  writeDB(filePath, newPost)
  console.log(newPost);
  return newPost
}

function show() {
}

=======
  const newPost = {id, ...post}
  //const data = JSON.stringify(newPost)
  const oldPosts = readDB(filePath)
  const postArray = [...oldPosts]
  postArray.push(newPost)
  console.log(postArray);
  writeDB(filePath, postArray)
  return JSON.stringify(newPost)
}

>>>>>>> just_in_case
/////HELPER FUNCTIONS/////
function readDB(text){
  const post = JSON.parse(fs.readFileSync(text, 'utf-8'))
  return post
}

function writeDB(path, text){
<<<<<<< HEAD
  return JSON.stringify(fs.writeFileSync(path, text))
}

function findId(id, text){
  return text.find(item => {
    return item.id === id
  })
=======
  return fs.writeFileSync(path, JSON.stringify(text))
>>>>>>> just_in_case
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
