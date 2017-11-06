console.log("models are running");
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../assets/db_posts.json')

const uuid = require('uuid/v4')

function create(post){
  const id = uuid()
  const newPost = {id, post}
  const data = JSON.stringify(newPost)
  writeDB(filePath, data)
  return data
}

////ROUTER FUNCTIONS/////
function getAll() {
  return readDB(filePath)
  //return generateSnippets(data)
}
/////HELPER FUNCTIONS/////
function readDB(text){
  const post = JSON.parse(fs.readFileSync(text, 'utf-8'))
  return post.data
}

function writeDB(path, text){
  return fs.writeFileSync(path, text)
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
  getAll
}
