import React from 'react'
import { useForm } from '@inertiajs/react'

export default function Create(props) {
const {data,setData,post,errors} = useForm({
    title:'',
    body:''
})

function handleSubmit(e){
e.preventDefault();
post(route('post.store'))
//alert('Data send')
}
console.log(data);


    return (
    <div>
<form action=""  onSubmit={handleSubmit}  >
<h1>Post Entry</h1>
Title
<input type="text" name="title" placeholder='Enter the title'  value={data.title} onChange={(e)=>setData('title',e.target.value)} />  <span>{errors.title}</span><br />

Body
<textarea name="body" id=""  onChange={(e)=>setData('body',e.target.value)} placeholder='Enter the body'>{data.body}</textarea> <span>{errors.body}</span><br />

<button type="submit" name='submit'>Submit</button>

</form>
    </div>
  )
}

