console.log("models are running");
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../assets/db_posts.json')
let allPosts = readDB(filePath)

const uuid = require('uuid/v4')

////CRUD FUNCTIONS/////
function getAll(){
  return allPosts
}

function create(post){
  const id = uuid()
  const newPost = {id, ...post}
  allPosts.push(newPost)
  writeDB(allPosts)
  return JSON.stringify(newPost)
}

function getOne(id){
  return allPosts.find(post => {
    return post.id === id
  })
}

function destroy(id){
  const postToDelete = getOne(id)
  allPosts.splice(allPosts.indexOf(postToDelete), 1)
  writeDB(allPosts)
  return postToDelete
}

function update(id, body){
  const postToUpdate = getOne(id)
  const index = allPosts.indexOf(postToUpdate)
  allPosts[index] = {id, title: body.title, content: body.content}
  writeDB(allPosts)
  return allPosts[index]
}

/////HELPER FUNCTIONS/////
function readDB(text){
  const post = JSON.parse(fs.readFileSync(text, 'utf-8'))
  return post
}

function writeDB(text){
  return fs.writeFileSync(filePath, JSON.stringify(text))
}

///////EXPORTS////////
module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update
}
